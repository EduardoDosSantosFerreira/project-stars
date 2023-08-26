        function imgSlider(anything) {
            document.querySelector('.starbucks').src = anything;
        }
        function changeCircleColor(color) {
            const circle = document.querySelector('.circle');
            circle.style.background = color;
        }

        function toggleMenu() {
            const menuToggle = document.querySelector('.toggle');
            const navigation = document.querySelector('.navigation')
            menuToggle.classList.toggle('active')
            navigation.classList.toggle('active')
        }

        let currentIndex = 0;
        const products = ["img/bucks1.png", "img/bucks2.png", "img/bucks3.png"];

        function imgSlider(anything) {
          document.querySelector(".starbucks").src = anything;
        }

        function changeCircleColor(color) {
          const circle = document.querySelector(".circle");
          circle.style.background = color;
        }

        function toggleMenu() {
          const menuToggle = document.querySelector(".toggle");
          const navigation = document.querySelector(".navigation");
          menuToggle.classList.toggle("active");
          navigation.classList.toggle("active");
        }

        function autoSlider() {
          currentIndex = (currentIndex + 1) % products.length;
          const nextImage = products[currentIndex];
          imgSlider(nextImage);

          const colors = ["#017143", "#eb7495", "#d752b1"];
          const nextColor = colors[currentIndex];
          changeCircleColor(nextColor);
        }

        setInterval(autoSlider, 3000);

        function applyThumbTransformAnimation(item) {
          item.classList.add("thumb-animation");
          setTimeout(() => {
            item.classList.remove("thumb-animation");
          }, 500);
        }
        function imgSlider(anything) {
            const imgBox = document.querySelector('.imgBox');
            imgBox.classList.add('fade-out'); // Add fade-out class
            setTimeout(() => {
                document.querySelector('.starbucks').src = anything;
                imgBox.classList.remove('fade-out'); // Remove fade-out class after the fade effect is complete
            }, 500); // Match the transition duration in CSS
        }
        

        

