// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="about.html">About</a></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded "><div>Hobbylist</div><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="hobbylist/anime.html">Anime</a></li><li class="chapter-item "><a href="hobbylist/movies-and-series.html">Movies &amp; Series</a></li><li class="chapter-item "><a href="hobbylist/videogames.html">Videogames</a></li><li class="chapter-item "><a href="hobbylist/books.html">Books</a></li><li class="chapter-item "><a href="hobbylist/other-sources.html">Other Sources</a></li></ol></li><li class="chapter-item expanded "><li class="spacer"></li><li class="chapter-item expanded "><div>Linux</div><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="linux/basics.html">Basics</a></li><li class="chapter-item "><a href="linux/fedora-silverblue.html">Fedora Silverblue</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="linux/fedora-silverblue/useful-commands.html">Useful Commands</a></li><li class="chapter-item "><a href="linux/fedora-silverblue/packages-to-layer.html">Packages to layer</a></li><li class="chapter-item "><a href="linux/fedora-silverblue/flatpak-setup.html">Flatpak Setup</a></li><li class="chapter-item "><a href="linux/fedora-silverblue/toolbox-setup.html">Toolbox Setup</a></li><li class="chapter-item "><a href="linux/fedora-silverblue/vscode-setup.html">VSCode Setup</a></li><li class="chapter-item "><a href="linux/fedora-silverblue/fixing-etc-fstab-issues.html">Fixing /etc/fstab issues</a></li></ol></li><li class="chapter-item "><a href="linux/cachyos.html">Arch Linux/CachyOS</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="linux/cachyos/configure-luks-autounlocking-with-tpm2.html">Configure LUKS auto-unlocking with TPM2 in CachyOS</a></li><li class="chapter-item "><a href="linux/cachyos/creating-a-vm-using-virt-manager.html">Creating a VM using virt-manager</a></li></ol></li><li class="chapter-item "><a href="linux/others.html">Others</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="linux/others/configure-syncthing.html">Configure Syncthing</a></li><li class="chapter-item "><a href="linux/others/using-podman-quadlets.html">Using Podman Quadlets</a></li><li class="chapter-item "><a href="linux/others/manage-environment-variables.html">Manage Environment Variables</a></li><li class="chapter-item "><a href="linux/others/configure-luks-autounlocking-with-tpm2.html">Configure LUKS auto-unlocking with TPM2</a></li><li class="chapter-item "><a href="linux/others/fixes-for-electron-and-chromium-apps.html">Fixes for Electron and Chromium apps</a></li><li class="chapter-item "><a href="linux/others/fedora-setup-guide.html">Fedora Setup Guide</a></li></ol></li></ol></li><li class="chapter-item expanded "><li class="spacer"></li><li class="chapter-item expanded "><div>Blog</div><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="blog/reflections-on-life.html">Reflections on Life</a></li><li class="chapter-item "><a href="blog/a-new-beginning.html">A New Beginning</a></li></ol></li><li class="chapter-item expanded "><li class="spacer"></li><li class="chapter-item expanded "><div>Random</div></li><li class="chapter-item expanded affix "><li class="spacer"></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
