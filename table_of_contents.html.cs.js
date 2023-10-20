<!DOCTYPE html>
<html lang="en">
<lang
<head>
    <title>My Table of Contents</title>
    <style>

<body>
	<header>

		<h1 class ="centered-text"> Space</h1>

        <h2 class ="left-aligned-text">Me and space</h2>
        
       <h3 class="right-aligned-indent"> On the homepage you would introduce yourself, a quick bio of yourself and the reason you are interested in your topic. This part may include text, pictures, voice and/or videos.</h4>

	<nav>
      <a href="./index.html">Home</a>
      <a href="./about.html">About</a>
      <a href="./service.html">Service</a>
      <a href="./contact.html">Contact</a>
    </nav>
            
       
	</header>
	
	<header9>
	
		<h4 class ="centered-text"> EVERYTHING SPACE AND MORE</h3>

   		<h5 class ="centered-text"> Test123</h4>
   		
	</header9>




<body>
<head>
    <title>My Table of Contents</title>
    <style>
        /* Define styles for the collapsible buttons and content */
        .collapse-button {
            background-color: #eee;
            cursor: pointer;
            padding: 10px;
            width: 100%;
            text-align: left;
            border: none;
            text-transform: uppercase;
        }
        .content {
            display: none;
            padding: 10px;
        }
    </style>
</head>
<body>
    <!-- Collapsible Section 1 -->
    <button class="collapse-button">Section 1</button>
    <div class="content">
        <ul>
            <li><a href="#subsection1">Subsection 1</a></li>
            <li><a href="#subsection2">Subsection 2</a></li>
        </ul>
    </div>

    <!-- Collapsible Section 2 -->
    <button class="collapse-button">Section 2</button>
    <div class="content">
        <ul>
            <li><a href="#subsection3">Subsection 1</a></li>
            <li><a href="#subsection4">Subsection 2</a></li>
        </ul>
    </div>

    <!-- Content Sections -->
    <h1 id="subsection1">Subsection 1</h1>
    <p>Content of Subsection 1.</p>
    <h1 id="subsection2">Subsection 2</h1>
    <p>Content of Subsection 2.</p>
    <h1 id="subsection3">Subsection 1</h1>
    <p>Content of Subsection 1.</p>
    <h1 id="subsection4">Subsection 2</h1>
    <p>Content of Subsection 2.</p>

    <script>
        // Add event listeners to collapsible buttons
        const buttons = document.querySelectorAll(".collapse-button");
        buttons.forEach(button => {
            button.addEventListener("click", function() {
                this.nextElementSibling.style.display = this.nextElementSibling.style.display === "block" ? "none" : "block";
            });
        });
    </script>
</body>
</html>
