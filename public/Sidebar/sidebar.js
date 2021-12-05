// Flowlist JS Sidebar File

// querySelector() is a method of the element interface. It allows you yo find the first element that matches one or more CSS selectors
window.onload = function(){
    var btn = document.querySelector("#button_sidebar");
    var sidebar = document.querySelector(".sidebar");

    btn.onclick = function(){
    // classList is a DOM property that returns class name of an element as a DOMTokenList object. This property is using the toggle method. More info here: https://www.w3schools.com/jsref/prop_element_classlist.asp
    // When you click on sidebar menu icon on the top, it will remove (not really, returns a false value) sidebar class elements, but will add returns true)(closed) sidebar class elements if you click the icon again (Expanded)
    sidebar.classList.toggle("active_sidebar");
    }
}

function inbox_button(){
    $(function(){
        $("#component_content").load("/public/Inbox/inbox.html"); 
    });

}

function later_development(){
    alert("Error:\nSorry, we're still developing this section of the page :(\nPage will be implemented in the future.")
}