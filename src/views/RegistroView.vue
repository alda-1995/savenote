<template >
    <div class="container">
        <div class="min-h-screen flex py-16">
            <div class="grid md:grid-cols-2 md:gap-4">
                <div class="flex flex-col">
                    <h1 class="text-tertiary">Comienza a guardar tus notas aquí.</h1>
                </div>
                <div class="flex flex-col">
                    <form class="w-full md:pl-24" @submit.prevent="ingresarUsuario()" novalidate>
                        <div class="p-12 bg-tertiary rounded-md">
                            <div class="flex flex-col" :class="{ error: v$.correo.$errors.length }">
                                <label for="correo" class="mb-2 text-white p">Correo electronico</label>
                                <input-main name="correo" typeInput="email" v-model="correo"
                                    placename="Correo electronico"></input-main>
                                <div class="input-errors" v-for="error of v$.correo.$errors" :key="error.$uid">
                                    <div class="text-redme p-small mb-2">{{ error.$message }}</div>
                                </div>
                            </div>
                            <div class="flex flex-col">
                                <label for="password" class="mb-2 text-white p">Contraseña</label>
                                <input-main name="password" typeInput="text" v-model="password"
                                    placename="Contraseña"></input-main>
                                <div class="input-errors" v-for="error of v$.password.$errors" :key="error.$uid">
                                    <div class="text-redme p-small mb-2">{{ error.$message }}</div>
                                </div>
                            </div>
                            <div class="flex flex-col">
                                <label for="confirmPassword" class="mb-2 text-white p">Confirmar Contraseña</label>
                                <input-main name="confirmPassword" typeInput="text" v-model="confirmPassword"
                                    placename="Introduce nuevamente tu contraseña"></input-main>
                                <div class="input-errors" v-for="error of v$.confirmPassword.$errors" :key="error.$uid">
                                    <div class="text-redme p-small mb-2">{{ error.$message }}</div>
                                </div>
                            </div>
                            <btn-main typeBtn="submit" message="Entrar"></btn-main>
                            <p class="text-redme mt-4" v-if="this.errorGeneral">{{ errorGeneral }}</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { useVuelidate } from '@vuelidate/core'
import { mapActions } from "vuex";
import { required, email, helpers, minLength, sameAs } from '@vuelidate/validators'
import InputMain from '@/components/ui-components/input-main.vue'
import BtnMain from '@/components/ui-components/btn-main.vue'
import { auth } from "@/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default {
    name: 'RegistroView',
    setup: () => ({ v$: useVuelidate() }),
    data: () => ({ correo: '', password: '', confirmPassword: '', errorGeneral: '' }),
    components: {
        InputMain,
        BtnMain
    },
    methods: {
        ...mapActions(["setUsuario"]),
        async ingresarUsuario() {
            const result = await this.v$.$validate()
            if (!result)
                return
            this.errorGeneral = "";
            try {
                const resultRegister = await createUserWithEmailAndPassword(auth, this.correo, this.password);
                this.setUsuario(resultRegister.user);
                this.$router.push('perfil');
            } catch (error) {
                this.errorGeneral = error;
            }
        }
    },
    validations() {
        return {
            correo: {
                required: helpers.withMessage('El correo es requerido', required),
                email: helpers.withMessage('El correo es incorrecto', email)
            },
            password: {
                required: helpers.withMessage('La contraseña es requerida', required),
                minLength: helpers.withMessage(
                    ({
                        $params
                    }) => `La contraseña debe tener al menos ${$params.min} caracteres`,
                    minLength(6)
                )
            },
            confirmPassword: {
                sameAsPassword: helpers.withMessage('Las contraseñas no coinciden', sameAs(this.password))
            }
        }
    }
}
</script>