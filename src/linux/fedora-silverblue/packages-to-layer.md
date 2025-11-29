# Packages to layer on Fedora Silverblue
Although it comes down to personal preference and needs, I prefer overlaying the following packages on a fresh install of *Fedora Silverblue*:  

<!-- 
- `distrobox` 
-->
- `android-tools` (For using *ADB* and *fastboot*)
- `langpacks-bn` (For *Bangla* language pack support, replace `bn` with your language code)
- `podman-compose` (For *VSCode*/*DevPod* Devcontainers)
- `syncthing` (If you use it for file sync)
- `OpenBangla Keyboard` (For *Bangla* typing) [[Download]](https://github.com/OpenBangla/OpenBangla-Keyboard/releases)

> Run `systemctl enable --user --now syncthing.service` if you want to use `syncthing`.