// JavaScript pour faire remonter l'élément avec la classe .reversecolumn lors du scroll

$(document).ready(function () {
    // Sélectionnez l'élément avec la classe .reversecolumn
    const $reverseColumn = $(".reversecolumn");
  
    if ($reverseColumn.length) {
      $(window).on("scroll", function () {
        const scrollTop = $(this).scrollTop();
        const offset = scrollTop * 0.4; // Ajustez cette valeur pour contrôler la vitesse du mouvement vers le haut
  
        // Appliquer une translation verticale à l'élément pour le faire remonter lors du défilement
        $reverseColumn.css("transform", `translateY(-${offset}px)`);
      });
    }
  });
  