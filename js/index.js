// ACTIVE INICIO
$(document).ready(function () {
  // Initially set the "INICIO" link as active
  $("ul.nav-menu li:first-child a").addClass("active");

  // Add click event handler to all menu items
  $("ul.nav-menu li a").click(function () {
    // Remove the "active" class from all links
    $("ul.nav-menu li a").removeClass("active");

    // Add the "active" class to the clicked link
    $(this).addClass("active");
  });
});


// MOVE DOWN
$(document).ready(function () {
  // Function to cheer up the image down
  $(".move-down").click(function () {
    $(this).animate({ top: "+=30px" }, 500); // Adjust the animation distance according to your needs
  });

  // Función para enviar hacia abajo al hacer clic
  $(".move-down").on("click", function () {
    var distancia = 800; // Change this amount at the distance you want
    $("html, body").animate({ scrollTop: distancia }, "slow");
    return false;
  });
});


// MODAL NAVBAR
$(document).ready(function () {
  // Capture click on the "Menu" link
  $("a[id='modal']").click(function () {
    // Muestra el modal
    $("#miModal").css("display", "block");
  });

  // Capture click on the modal closure button
  $(".close").click(function () {
    // Cierra el modal
    $("#miModal").css("display", "none");
  });
});


$(document).ready(function() {
  const icon = $('.fix-wsp-icon');

  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) { // Adjust the displacement threshold as necessary
      icon.addClass('show');
    } else {
      icon.removeClass('show');
    }
  });
});

// Show Menu hamburgesa Respo

$(document).ready(function () {
  const menuButton = $("#menu-toggle");
  const respoMenu = $(".respo-menu");
  const menuItems = respoMenu.find("a"); // Select all menu items inside the menu

  // Function to close the menu
  function closeMenu() {
    respoMenu.animate({ left: "-300px" }, 20);
    menuButton.html("&#9776;"); // Change button to open icon
  }

  menuButton.click(function () {
    if (respoMenu.css("left") === "-300px") {
      respoMenu.animate({ left: "0" }, 20);
      menuButton.html("&#10005;"); // Change button to close icon
    } else {
      closeMenu(); // Close the menu when clicking the menu button again
    }
  });

  // Close the menu when a menu item is clicked
  menuItems.click(function () {
    closeMenu();
  });
});