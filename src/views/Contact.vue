<template>
   
    <!--====== Contact Start ======-->

    <section class="contact-area">
        <div class="container">
            <div class="contact-info">
                <h3 class="contact-title">Contactez-nous pour toute autre question, pour d'éventuels projets et <br>partenariats commerciaux.</h3>

                <div class="contact-info-wrapper">
                    <div class="row gx-5">
                        <div class="col-lg-4">
                            <div class="single-contact-info">
                                <h4 class="info-title">Contact direct <i class="ion-android-mail"></i></h4>

                                <p><a href="mailto:hotline@lce-ci.com">info@igp.ci</a></p>
                                <p><a href="tel:+225  27 22 49 95 04">(+225) 27 22 49 95 04</a></p>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="single-contact-info">
                                <h4 class="info-title">Visitez notre bureau <i class="ion-android-pin"></i></h4>

                                <p>Riviera BONOUMIN LAURIER 6 VILLA N°151 – Cocody</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="contact-form">
                <h2 class="form-title">Prendre contact</h2>

                <form action="mailto:hotline@lce-ci.com?subject=subject&body=message" enctype="text/plain">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="single-form">
                                <input type="text" name="name" placeholder="Votre nom" required>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="single-form">
                                <input type="email" name="email" placeholder="Votre e-mail" required>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="single-form">
                                <input type="text" name="subject" placeholder="Sujet" required>
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="single-form">
                                <textarea name="message" placeholder="Ecrivez votre message ici..." required></textarea>
                            </div>
                        </div>
                        <p class="form-message"></p>
                        <div class="col-lg-12">
                            <div class="single-form">
                                <button class="main-btn">Envoyer un message</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>

    <!--====== Contact Ends ======-->

    <!--====== Footer Start ======-->
  
    <!--====== Footer End ======-->
</template>
<script>

export default {
  name: 'Contact',
  data() {
      return{
          
      }
  }
}
</script>