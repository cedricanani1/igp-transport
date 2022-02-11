<template>
    <section class="error-page">
        <div class="container">
            <div class="error-wrapper text-center">
                <div class="error-image">
                    <img src="assets/images/error.jpg" alt="">
                </div>
                <div class="error-content">
                    <p>La page que vous cherchez est introuvable</p><br>
                    <router-link :to="{name: 'Home'}">
                        <button class="main-btn">Retour à l'accueil</button>
                    </router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Error"
}
</script>