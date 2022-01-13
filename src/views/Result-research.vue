<template>
   
    <!--====== Page Banner Start ======-->

    <section class="page-banner-area bg_cover" @mouseover="loading(1000)" style="background-image: url(assets/images/page-banner-2.jpg);">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="page-banner">
                        
                        <h2 class="page-title">Résultats de recherche</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!--====== Page Banner Ends ======-->

    <!--====== Inventory Start ======-->

    <section class="inventory-area">
        <div class="container">
            <div class="row flex-row-reverse">
                <div class="col-lg-9">
                    <div class="inventory-top d-md-flex justify-content-between align-items-center">
                        
                        <div class="inventory-top-left d-sm-flex justify-content-between align-items-center">
                            <div class="inventory-select">
                                <form action="#">
                                    <select class="optgroup_test">
                                        <option value="" selected="selected">TRIER PAR: Date de dernier ajouté </option>
                                        <option value="">TRIER PAR: Date de premier ajouté </option>
                                        <option value="">TRIER PAR: Prix (ascendant) </option>
                                        <option value="">TRIER PAR: Prix (déscendant) </option>
                                    </select>
                                </form>
                            </div>
                            <div class="inventory-switcher">
                                <ul class="nav" role="tablist">
                                    <li><a class="active" data-bs-toggle="tab" href="#grid" role="tab"><i class="ion-android-apps"></i></a></li>
                                    <li><a data-bs-toggle="tab" href="#list" role="tab"><i class="ion-navicon"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="all-pagination">
                        <ul class="pagination justify-content-center">
                            <li><a class="previous" href="#"><i class="ion-ios-arrow-back"></i> <span>Précédent</span></a></li>
                            <li><a class="active" href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">...</a></li>
                            <li><a href="#">8</a></li>
                            <li><a class="next" href="#"><span>Suivant</span> <i class="ion-ios-arrow-forward"></i></a></li>
                        </ul>
                    </div>  
                    liste 
                </div>
                <div class="col-lg-3">
                    <div class="inventory-sidebar">
                        <h3 class="title">Je recherche :</h3>

                        <div class="sidebar-select">
                            <form action="#">
                                
                                <div class="single-field">
                                    <select multiple="multiple" class="optgroup_test">
                                        <option value="Tous les makes">Toutes les marques</option>
                                        <option value="Acura">Acura</option>
                                        <option value="Audi">Audi</option>
                                        <option value="BMW">BMW</option>
                                        <option value="Bentley">Bentley</option>
                                        <option value="Chevrolet">Chevrolet</option>
                                        <option value="Ford">Ford</option>
                                        <option value="Honda">Honda</option>
                                        <option value="Kia">Kia</option>
                                        <option value="Mazda">Mazda</option>
                                        <option value="Nissan">Nissan</option>
                                        <option value="Toyota">Toyota</option>                               
                                    </select>
                                </div>
                                <div class="single-field">
                                    <select multiple="multiple" class="optgroup_test">
                                        <option value="Tous les models">Tous les models</option>
                                        <option value="2 Series">2 Series</option>
                                        <option value="4Runner">4Runner</option>
                                        <option value="7 Series">7 Series</option>
                                        <option value="A3">A3</option>
                                        <option value="CR-V">CR-V</option>
                                        <option value="Camaro">Camaro</option>
                                        <option value="Camry">Camry</option>
                                        <option value="Cruze">Cruze</option>
                                        <option value="Elantra">Elantra</option>
                                        <option value="Malibu">Malibu</option>
                                        <option value="Mustang">Mustang</option>
                                        <option value="Pick Truck">Pick Truck</option>
                                        <option value="Pickup Truck">Pickup Truck</option>
                                        <option value="Q3">Q3</option>
                                        <option value="S5 Luxury">S5 Luxury</option>
                                        <option value="SQ5">SQ5</option>
                                        <option value="Scoopter">Scoopter</option>
                                        <option value="Soul">Soul</option>
                                        <option value="Sport Version">Sport Version</option>
                                        <option value="Versa">Versa</option>
                                        <option value="X1">X1</option>
                                    </select>
                                </div>
                                <div class="single-field">
                                    <select class="optgroup_test">
                                        <option value="">Tous les prix</option>
                                        <option value="3000-5000">FCFA 3,000-FCFA 5,000</option>
                                        <option value="10000-15000">FCFA 10,000-FCFA 15,000</option>
                                        <option value="20000-25000">FCFA 20,000-FCFA 25,000</option>
                                        <option value="30000-35000">FCFA 30,000-FCFA 35,000</option>
                                        <option value="40000-45000">FCFA 40,000-FCFA 45,000</option>
                                        <option value="50000-60000">FCFA 50,000-FCFA 60,000</option>
                                        <option value="80000-100000">FCFA 80,000-FCFA 100,000</option>
                                        <option value="125000-150000">FCFA 125,000-FCFA 150,000</option>                               
                                    </select>
                                </div>
                                <div class="single-field">
                                    <select multiple="multiple" class="optgroup_test">
                                        <option value="Tous les years">Toutes années</option>
                                        <option value="2012">2012</option>
                                        <option value="2013">2013</option>
                                        <option value="2014">2014</option>
                                        <option value="2015">2015</option>
                                        <option value="2016">2016</option>
                                        <option value="2017">2017</option>
                                        <option value="2018">2018</option>
                                        <option value="2019">2019</option>                           
                                    </select>
                                </div>
                                <div class="single-field">
                                    <select multiple="multiple" class="optgroup_test">
                                        <option value="Tous les body types">Tous</option>
                                        <option value="convertible">Convertible</option>
                                        <option value="couple">Couple</option>
                                        <option value="crossover">Crossover</option>
                                        <option value="hatchback">Hatchback</option>
                                        <option value="pickup-truck">Pickup Truck</option>
                                        <option value="sedan">Sedan</option>
                                        <option value="sport-cars">Sport Cars</option>
                                        <option value="suv">Suv</option>                         
                                    </select>
                                </div>
                                <div class="single-field">
                                    <select class="optgroup_test">
                                        <option value="">Kilométrage</option>
                                        <option value="10000">10,000 km ou moins</option>
                                        <option value="20000">20,000 km ou moins</option>
                                                          
                                    </select>
                                </div>
                                <div class="single-field">
                                    <select multiple="multiple" class="optgroup_test">
                                        <option value="Transmission">Transmission</option>
                                        <option value="Automatic">Automatique</option>
                                        <option value="Manual">Manuel</option>
                                                                 
                                    </select>
                                </div>
                                
                                <div class="single-field">
                                    <select class="optgroup_test">
                                        <option value="">Couleurs extérieures</option>
                                        <option value="Black">Black</option>
                                        <option value="Blue">Blue</option>
                                        <option value="Gray">Gray</option>
                                        <option value="Green">Green</option>
                                        <option value="Grey">Grey</option>
                                        <option value="Orange">Orange</option>
                                        <option value="Red">Red</option>
                                        <option value="White">White</option>
                                    </select>
                                </div>
                                
                                <div class="single-field">
                                    <button class="main-btn d-block">OK</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="sidebar-banner">
                        <a href="#">
                            <img src="assets/images/banner-1.jpg" alt="">
                        </a>
                    </div>
                </div>
            </div>          
        </div>
    </section>

    <!--====== Inventory Ends ======-->
    

   
</template>
<script>


export default {
  name: 'Result-research',
  methods: {
      loading: function timeRefresh(timeoutPeriod) {
            setTimeout("location.reload(true);", timeoutPeriod);
            this.load = true
        }
  }
}
</script>