<template>
    <!--====== Footer Start ======-->

    <footer class="footer-area">
        <div class="footer-widget">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5 col-md-8 col-sm-4">
                        <div class="text-widget mt-50">
                            <a href="#">
                                <img src="assets/images/logo.jpg" alt="">
                            </a>
                            <div class="text-content">
                                <div class="single-text">
                                    <p>Riviera BONOUMIN LAURIER 6 VILLA N°151 – Cocody</p>
                                </div>
                                <div class="single-text">
                                    <p>
                                        <span><a href="mailto:mail@igp.com"></a></span>
                                        <span><a href="tel: +225 27 22 49 95 04"> +225 27 22 49 95 04</a></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-8 col-sm-4">
                        <div class="footer-menu mt-50">
                            <h3 class="footer-title">Liens</h3>

                            <ul class="menu-items">
                                <li><router-link :to="{name : 'About' }">A propos de nous</router-link></li>
                                <li><router-link :to="{name : 'Contact' }">Contact</router-link></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-4">
                        <div class="footer-menu mt-50">
                            <h3 class="footer-title">Centre d'aide</h3>
                            <ul class="menu-items">
                                <li><router-link :to="{name : 'Home' }">Comment cela fonctionne-t-il ?</router-link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer-text">
            <div class="container">
                <div class="footer-text-wrapper d-flex flex-wrap align-items-center justify-content-between">
                    <div class="footer-copyright">
                        <p>&copy; 2022 <span> Ivoire Goodies Performances</span> by <a href="https://lce-ci.com/">LCE-CI</a></p>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    <!--====== Footer Ends ======-->

    <!--====== BACK TOP TOP START ======-->
</template>