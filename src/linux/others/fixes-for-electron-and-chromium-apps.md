# Fixes for Electron and Chromium apps
## Launch arguments and flags for Electron apps
Various launch arguments and flags for 
Electron apps.

### Launch arguments :
**You need to copy the app's `.desktop` file to `~/.local/share/applications/` and append it after `Exec=` in all entry fields.** <br>
**NOTE: Arch-based distros usually have .conf files to easily handle commandline args**


- `--ozone-platform-hint=auto` <br>
Runs the app with Wayland support.
- `--enable-wayland-ime` <br>
Enables iBus/Fcitx support.
- `--enable-features=TouchpadOverscrollHistoryNavigation` <br>
(Use for browsers. e.g. Brave)
Enables navigation via touchpad gestures.

### Flags (set with `chrome://flags`) (mainly for browsers)

- `#ozone-platform-hint` - **Auto** <br>
Enables Wayland support.
- `#wayland-ui-scaling` - **Enabled** <br>
Enables Fractional Scaling support under Wayland.
- `#wayland-per-window-scaling` - **Enabled** <br>
Enables per-window scaling support.
- `#wayland-text-input-v3` - **Enabled** <br>
Used to enable proper ibus support on older GNOME versions without text-input-v1 support.
- `#middle-button-autoscroll` - **Enabled** <br>
Enables middle-click autoscroll.
- `#web-app-universal-install` - **Enabled** <br>
Enables installation of normal websites as webapps.


# Guide on setting up any Chromium browser inside a (Fedora) distrobox
## Setup the Distrobox
1. `distrobox create -n appbox-fedora --init --additional-packages "systemd" --pre-init-hooks ""`
2. `distrobox enter appbox-fedora -- sh -c db-fedora-essential.sh`
3. echo "max_parallel_downloads = 20" >> /etc/dnf/dnf.conf
4. sudo dnf update
5. sudo dnf install https://mirrors.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm https://mirrors.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm
6. sudo dnf config-manager setopt fedora-cisco-openh264.enabled=1
7. sudo dnf install rpmfusion-{free,nonfree}-release-tainted
8. sudo dnf swap ffmpeg-free ffmpeg --allowerasing
9, sudo dnf install libdvdcss intel-media-driver libva-intel-driver gnome-keyring libsecret pipewire xdg-desktop-portal-{gtk,gnome} flatpak, xdg-user-dirs{,-gtk} xdg-utils
## Chromium commands (as of Nov 13 2025)
`vivaldi --enable-features=AcceleratedVideoDecodeLinuxGL,AcceleratedVideoDecodeLinuxZeroCopyGL,AcceleratedVideoEncoder,TouchpadOverscrollHistoryNavigation,WaylandPerSurfaceScale,WaylandUiScale,MiddleClickAutoscroll --gtk-version=4`