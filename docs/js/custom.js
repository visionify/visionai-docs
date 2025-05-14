document.querySelectorAll(".use-termynal").forEach(node => {
    node.style.display = "block";
    new Termynal(node, {
        lineDelay: 500
    });
});
const progressLiteralStart = "---> 100%";
const promptLiteralStart = "$ ";
const customPromptLiteralStart = "# ";
const termynalActivateClass = "termy";
let termynals = [];

function createTermynals() {
    document
        .querySelectorAll(`.${termynalActivateClass} .highlight`)
        .forEach(node => {
            const text = node.textContent;
            const lines = text.split("\n");
            const useLines = [];
            let buffer = [];
            function saveBuffer() {
                if (buffer.length) {
                    let isBlankSpace = true;
                    buffer.forEach(line => {
                        if (line) {
                            isBlankSpace = false;
                        }
                    });
                    dataValue = {};
                    if (isBlankSpace) {
                        dataValue["delay"] = 0;
                    }
                    if (buffer[buffer.length - 1] === "") {
                        // A last single <br> won't have effect
                        // so put an additional one
                        buffer.push("");
                    }
                    const bufferValue = buffer.join("<br>");
                    dataValue["value"] = bufferValue;
                    useLines.push(dataValue);
                    buffer = [];
                }
            }
            for (let line of lines) {
                if (line === progressLiteralStart) {
                    saveBuffer();
                    useLines.push({
                        type: "progress"
                    });
                } else if (line.startsWith(promptLiteralStart)) {
                    saveBuffer();
                    const value = line.replace(promptLiteralStart, "").trimEnd();
                    useLines.push({
                        type: "input",
                        value: value
                    });
                } else if (line.startsWith("// ")) {
                    saveBuffer();
                    const value = "💬 " + line.replace("// ", "").trimEnd();
                    useLines.push({
                        value: value,
                        class: "termynal-comment",
                        delay: 0
                    });
                } else if (line.startsWith(customPromptLiteralStart)) {
                    saveBuffer();
                    const promptStart = line.indexOf(promptLiteralStart);
                    if (promptStart === -1) {
                        console.error("Custom prompt found but no end delimiter", line)
                    }
                    const prompt = line.slice(0, promptStart).replace(customPromptLiteralStart, "")
                    let value = line.slice(promptStart + promptLiteralStart.length);
                    useLines.push({
                        type: "input",
                        value: value,
                        prompt: prompt
                    });
                } else {
                    buffer.push(line);
                }
            }
            saveBuffer();
            const div = document.createElement("div");
            node.replaceWith(div);
            const termynal = new Termynal(div, {
                lineData: useLines,
                noInit: true,
                lineDelay: 500
            });
            termynals.push(termynal);
        });
}

function loadVisibleTermynals() {
    termynals = termynals.filter(termynal => {
        if (termynal.container.getBoundingClientRect().top - innerHeight <= 0) {
            termynal.init();
            return false;
        }
        return true;
    });
}
window.addEventListener("scroll", loadVisibleTermynals);
createTermynals();
loadVisibleTermynals();

document.addEventListener('DOMContentLoaded', function() {
    // Back to top button functionality
    const backToTopButton = document.querySelector('.back-to-top-button');
    if (backToTopButton) {
        backToTopButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Show/hide button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.style.display = 'flex';
            } else {
                backToTopButton.style.display = 'none';
            }
        });
    }

    // Show the first tab content by default
    var firstTab = document.querySelector('.tabcontent');
    if (firstTab) {
        firstTab.style.display = 'block';
        firstTab.classList.add('active');
    }
    
    // Add click event listeners to all tabs
    var tabs = document.querySelectorAll('.tab');
    tabs.forEach(function(tab) {
        tab.addEventListener('click', function() {
            var tabId = this.getAttribute('data-tab');
            
            // Hide all tab content
            document.querySelectorAll('.tabcontent').forEach(function(content) {
                content.style.display = 'none';
                content.classList.remove('active');
            });
            
            // Remove active class from all tabs
            document.querySelectorAll('.tab').forEach(function(t) {
                t.classList.remove('active');
            });
            
            // Show the selected tab content
            var selectedContent = document.getElementById(tabId);
            if (selectedContent) {
                selectedContent.style.display = 'block';
                selectedContent.classList.add('active');
            }
            
            // Add active class to the clicked tab
            this.classList.add('active');
        });
    });
});
