// function loadContent(url) {
//     fetch(url)
//       .then(response => response.text())
//       .then(html => {
//         document.getElementById('main-content').innerHTML = html;
//       })
//       .catch(error => console.error('Error loading content:', error));
//   }

//   // Add event listeners to anchor tags to load content
//   document.addEventListener('DOMContentLoaded', function() {
//     const links = document.querySelectorAll('a');
//     links.forEach(link => {
//       link.addEventListener('click', function(event) {
//         event.preventDefault(); // Prevent default navigation behavior
//         const url = this.getAttribute('href');
//         loadContent(url); // Load content from the specified URL
//       });
//     });
//   });

function showFullBlog(element) {
    var fullBlogContainer = document.getElementById("full-blog");
    var blogTitle = element.querySelector(".blog-title").textContent;
    var blogDate = element.querySelector(".date").textContent;
    var blogComments = element.querySelector(".comment").textContent;
    
  
    var fullBlogContent = "<h2>" + blogTitle + "</h2>"; 
    fullBlogContent += "<p>Date: " + blogDate + "</p>";
    fullBlogContent += "<p>Comments: " + blogComments + "</p>";
  
    fullBlogContainer.innerHTML = fullBlogContent;
    fullBlogContainer.classList.remove("hidden");
    document.querySelector('.blog-container').style.display="none";
    document.querySelector('.blog-card-more').style.display = "none"
  }

  