(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);


    // Fixed Navbar
    $(window).scroll(function () {
        if ($(window).width() < 992) {
            if ($(this).scrollTop() > 55) {
                $('.fixed-top').addClass('shadow');
            } else {
                $('.fixed-top').removeClass('shadow');
            }
        } else {
            if ($(this).scrollTop() > 55) {
                $('.fixed-top').addClass('shadow').css('top', -55);
            } else {
                $('.fixed-top').removeClass('shadow').css('top', 0);
            }
        } 
    });
    
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 2000,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:2
            },
            1200:{
                items:2
            }
        }
    });


    // vegetable carousel
    $(".vegetable-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });


    // // Modal Video
    // $(document).ready(function () {
    //     var $videoSrc;
    //     $('.btn-play').click(function () {
    //         $videoSrc = $(this).data("src");
    //     });
    //     console.log($videoSrc);

    //     $('#videoModal').on('shown.bs.modal', function (e) {
    //         $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    //     })

    //     $('#videoModal').on('hide.bs.modal', function (e) {
    //         $("#video").attr('src', $videoSrc);
    //     })
    // });



    // Product Quantity
    $('.quantity button').on('click', function () {
        var button = $(this);
        var oldValue = button.parent().parent().find('input').val();
        if (button.hasClass('btn-plus')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        button.parent().parent().find('input').val(newVal);
    });

})(jQuery);



























































document.addEventListener("DOMContentLoaded", function () {
    // Handling quantity increase/decrease
    const decreaseButtons = document.querySelectorAll(".btn-minus");
    const increaseButtons = document.querySelectorAll(".btn-plus");
    const quantityInputs = document.querySelectorAll("input[type='text']");
    
    // Handling the quantity
    decreaseButtons.forEach((button, index) => {
        button.addEventListener("click", function () {
            let quantityInput = quantityInputs[index];
            let currentQuantity = parseInt(quantityInput.value);
            if (currentQuantity > 1) {
                quantityInput.value = currentQuantity - 1;
                updateTotalPrice();
            }
        });
    });
    
    increaseButtons.forEach((button, index) => {
        button.addEventListener("click", function () {
            let quantityInput = quantityInputs[index];
            let currentQuantity = parseInt(quantityInput.value);
            quantityInput.value = currentQuantity + 1;
            updateTotalPrice();
        });
    });
    
    // Handling the removal of items from the cart
    const removeButtons = document.querySelectorAll(".fa-times");
    removeButtons.forEach(button => {
        button.addEventListener("click", function () {
            button.closest("tr").remove();
            updateTotalPrice();
        });
    });
    
    // Function to update the total price
    function updateTotalPrice() {
        let total = 0;
        const prices = document.querySelectorAll(".table td:nth-child(3) p");
        const quantities = document.querySelectorAll(".table input[type='text']");
        
        prices.forEach((priceElement, index) => {
            let price = parseFloat(priceElement.textContent.replace("$", ""));
            let quantity = parseInt(quantities[index].value);
            total += price * quantity;
        });
        
        // Update subtotal
        const subtotalElement = document.querySelector(".d-flex .mb-0 p");
        subtotalElement.textContent = `$${total.toFixed(2)}`;
        
        // Update total
        const totalElement = document.querySelector(".py-4.mb-4 p");
        totalElement.textContent = `$${(total + 3).toFixed(2)}`;  // Adding shipping cost
    }

    // Initial update of the total price on page load
    updateTotalPrice();
});























document.addEventListener("DOMContentLoaded", function() {
    // Ensure that the DOM is fully loaded before interacting with it
    
    // Select elements for Subtotal and Total
    const subtotalElement = document.querySelector(".d-flex .mb-0"); // Subtotal element
    const totalElement = document.querySelector(".py-4.mb-4 .mb-0"); // Total element
    
    // Ensure elements exist before modifying them
    if (subtotalElement && totalElement) {
        // Calculate your totals dynamically (this is an example, adjust as needed)
        let total = 96.00; // Example initial total
        let shippingCost = 3.00;
        let finalTotal = total + shippingCost;

        // Update the subtotal and total
        subtotalElement.textContent = `$${total.toFixed(2)}`;
        totalElement.textContent = `$${finalTotal.toFixed(2)}`;
    } else {
        console.error("Subtotal or Total element not found!");
    }
});
