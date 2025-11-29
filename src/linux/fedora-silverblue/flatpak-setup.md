# Flatpak Setup for Fedora Silverblue
[Flatpak](https://flatpak.org/) is a new packaging format for linux that puts an emphasis on containerization and sadboxing apps. Basically, think of it as *Docker* but for desktop linux apps.  

Being centered around the ideas of containerization, immutability and atomicity, *Fedora Silverblue* prefers apps to be shipped as *Flatpaks*.  

Out of the box, *Fedora Silverblue* ships and configures *Fedora's* own *Flatpak* repository, which has a limited selection of apps that sometimes have issues.  
As such, I generally like to remove the default *Fedora Flatpaks* repository and install the *Flathub* repository.  

## Configuring Flatpak repos
The commands to remove the default *Fedora Flatpaks* repo and install the *Flathub* repo has been given below.

```bash
# Remove Fedora Flatpak repos
flatpak remote-delete fedora
flatpak remote-delete fedora-testing

# Install Flathub repo
flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo
```

## Flatpak apps I use
Here is a list of the Flatpak apps I use on my *Fedora Silverblue* install.

### GNOME Apps
#### GNOME Core Stuff

| App Name            | App ID                                                                                       | Description                                                                                                  |
| ------------------- | -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Audio Player        | [org.gnome.Decibels](https://flathub.org/en/apps/org.gnome.Decibels)                         | A very simple audio player, gets the job done. Install RhythmBox if you want something more powerful.        |
| Video Player        | [org.gnome.Showtime](https://flathub.org/en/apps/org.gnome.Showtime)                         | A very simple video player, gets the job done. Install VLC if you want something more powerful.              |
| Image Viewer        | [org.gnome.Loupe](https://flathub.org/en/apps/org.gnome.Loupe)                               | A basic image viewer with limited image editing capabilities.                                                |
| Document Viewer     | [org.gnome.Papers](https://flathub.org/en/apps/org.gnome.Papers)                             | A basic PDF viewer. Also has a presentation function.                                                        |
| Sound Recorder      | [org.gnome.SoundRecorder](https://flathub.org/en/apps/org.gnome.SoundRecorder)               | A very simple sound recorder app.                                                                            |
| Text Editor         | [org.gnome.TextEditor](https://flathub.org/en/apps/org.gnome.TextEditor)                     | A basic text editor. Has support for tabs and some basic customization options.                              |
| Calculator          | [org.gnome.Calculator](https://flathub.org/en/apps/org.gnome.Calculator)                     | A relatively powerful calculator app.                                                                        |
| Calendar            | [org.gnome.Calendar](https://flathub.org/en/apps/org.gnome.Calendar)                         | A basic calendar app with support for account syncing.                                                       |
| Clocks              | [org.gnome.clocks](https://flathub.org/en/apps/org.gnome.clocks)                             | A basic clock app.                                                                                           |
| Camera              | [org.gnome.Snapshot](https://flathub.org/en/apps/org.gnome.Snapshot)                         | A basic camera app.                                                                                          |
| Contacts            | [org.gnome.Contacts](https://flathub.org/en/apps/org.gnome.Contacts)                         | A basic contacts app with support for account syncing.                                                       |
| Maps                | [org.gnome.Maps](https://flathub.org/en/apps/org.gnome.Maps)                                 | A very simple maps application, has issues determining your location sometimes.                              |
| Weather             | [org.gnome.Weather](https://flathub.org/en/appsd/org.gnome.Weather)                          | A very simple weather application.                                                                           |
| Web                 | [org.gnome.Epiphany](https://flathub.org/en/apps/org.gnome.Epiphany)                         | A very simple web browser. lacks extension support and has very weak adblocking.                             |
| Connections         | [org.gnome.Connections](https://flathub.org/en/apps/org.gnome.Connections)                   | Simple remote desktop client application supporting the RDP, VNC and SPICE protocols.                        |
| Firmware            | [org.gnome.Firmware](https://flathub.org/en/apps/org.gnome.Firmware)                         | A very simple application for displaying and updating the firmware of your devices.                          |
| Fonts               | [org.gnome.font-viewer](https://flathub.org/en/apps/org.gnome.font-viewer)                   | A very simple font viewer application. Can install fonts.                                                    |
| Document Scanner    | [org.gnome.SimpleScan](https://flathub.org/en/apps/org.gnome.SimpleScan)                     | A very simple document scanner application. Install NAPS2 if you want something more powerful.               |
| Disk Usage Analyzer | [org.gnome.baobab](https://flathub.org/en/apps/org.gnome.baobab)                             | A very simple disk usage analyzer tool. Can only analyze your home folder.                                   |
| Logs                | [org.gnome.Logs](https://flathub.org/en/apps/org.gnome.Logs)                                 | A very handy log viewer application to find out issues with your system.                                     |
| Passwords and Keys  | [org.gnome.seahorse.Application](https://flathub.org/en/apps/org.gnome.seahorse.Application) | A basic key management application for creating and managing your GPG, SSH and gnome-keyring/libsecret keys. |

#### GNOME Extra Stuff

| App Name          | App ID                                                                                           | Description                                                                                                                                                                     |
| ----------------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Refine            | [page.tesk.Refine](https://flathub.org/en/apps/page.tesk.Refine)                                 | A successor to the GNOME Tweaks application. Lets you tweak and configure various aspects of the GNOME DE.                                                                      |
| Extension Manager | [com.mattjakeman.ExtensionManager](https://flathub.org/en/apps/com.mattjakeman.ExtensionManager) | An GNOME Shell extension manager application. Lets you directly install and manage your GNOME extensions and check whether they are compatible with your current GNOME version. |
| Flatseal          | [com.github.tchx84.Flatseal](https://flathub.org/en/apps/com.github.tchx84.Flatseal)             | A very powerful application for configuring the permissions and other aspects of your Flatpak apps                                                                              |
| Ignition          | [io.github.flattool.Ignition](https://flathub.org/en/apps/io.github.flattool.Ignition)           | A basic startup application manager.                                                                                                                                            |
| Resources         | [net.nokyan.Resources](https://flathub.org/en/apps/net.nokyan.Resources)                         | A beautiful, stunning and powerful system monitor utility.                                                                                                                      |
| Gear Lever        | [it.mijorus.gearlever](https://flathub.org/en/apps/it.mijorus.gearlever)                         | An application for integrating appimages into your system.                                                                                                                      |
| Pika Backup       | [org.gnome.World.PikaBackup](https://flathub.org/en/apps/org.gnome.World.PikaBackup)             | A very powerful and flexible backup utility.                                                                                                                                    |
| Foliate           | [com.github.johnfactotum.Foliate](https://flathub.org/en/apps/com.github.johnfactotum.Foliate)   | A beautiful ebook reader.                                                                                                                                                       |
| Fractal           | [org.gnome.Fractal](https://flathub.org/en/apps/org.gnome.Fractal)                               | A Matrix client. Supports multi-account.                                                                                                                                        |
| DistroShelf       | [com.ranfdev.DistroShelf](https://flathub.org/en/apps/com.ranfdev.DistroShelf)                   | An application for managing distrobox containers, should you need one.                                                                                                          |
| Keypunch          | [dev.bragefuglseth.Keypunch](https://flathub.org/en/apps/dev.bragefuglseth.Keypunch)             | A simple, minimal typing practice app with support for a wide variety of languages.                                                                                             |
| Bottles           | [com.usebottles.bottles](https://flathub.org/en/apps/com.usebottles.bottles)                     | An extremely feature-rich wine and wine-prefix manager app. I prefer it over Lutris and all other wine managers.                                                                |
| Authenticator     | [com.belmoussaoui.Authenticator](https://flathub.org/en/apps/com.belmoussaoui.Authenticator)     | A basic but really useful app for managing your 2FA codes. Supports Aegis and tons of other 2FA OTP providers.                                                                  |

### Other Utilities

| App Name                   | App ID                                                                                               | Description                                                                                                                       |
| -------------------------- | ---------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Firefox                    | [org.mozilla.firefox](https://flathub.org/en/apps/org.mozilla.firefox)                               | Has better integration for linux than most other browsers. Supports HW-Accelerated Video Transcoding OOTB for Intel and AMD GPUs. |
| Tor Browser Launcher       | [org.torproject.torbrowser-launcher](https://flathub.org/en/apps/org.torproject.torbrowser-launcher) | uhh                                                                                                                               |
| qBittorrent                | [org.qbittorrent.qBittorrent](https://flathub.org/en/apps/org.qbittorrent.qBittorrent)               | Postmodern Marxist-Leninism.                                                                                                      |
| Vesktop                    | [dev.vencord.Vesktop](https://flathub.org/en/apps/dev.vencord.Vesktop)                               | A better Discord client with support for proper, functional screen sharing on Wayland with audio.                                 |
| Slack                      | [com.slack.Slack](https://flathub.org/en/apps/com.slack.Slack)                                       | Discord for BBA grads.                                                                                                            |
| Telegram Desktop           | [org.telegram.desktop](https://flathub.org/en/apps/org.telegram.desktop)                             | Atp having this installed is more questionable than having the Tor Browser installed.                                             |
| OnlyOffice Desktop Editors | [org.onlyoffice.desktopeditors](https://flathub.org/en/apps/org.onlyoffice.desktopeditors)           | Best replacement for MS Office with good linux support.                                                                           |
| Obsidian                   | [md.obsidian.Obsidian](https://flathub.org/en/apps/md.obsidian.Obsidian)                             | Best notetaking app in existence.                                                                                                 |
| OBS Studio                 | [com.obsproject.Studio](https://flathub.org/en/apps/com.obsproject.Studio)                           | works ig                                                                                                                          |
| LocalSend                  | [org.localsend.localsend_app](https://flathub.org/en/apps/org.localsend.localsend_app)               | Fantastic app for quickly and easily sharing files between devices. A decent Airdrop/Quick Share/Shareit replacement.             |
| RetroArch                  | [org.libretro.RetroArch](https://flathub.org/en/apps/org.libretro.RetroArch)                         | Jack of emulating all retro games, master of none.                                                                                |
| GIMP                       | [org.gimp.GIMP](https://flathub.org/en/apps/org.gimp.GIMP)                                           | Image editor, I hate it.                                                                                                          |
| Krita                      | [org.kde.krita](https://flathub.org/en/apps/org.kde.krita)                                           | Image editor, I love it.                                                                                                          |
| Kdenlive                   | [org.kde.kdenlive](https://flathub.org/en/apps/org.kde.kdenlive)                                     | Very basic video editor, I am neutral. Get DaVinci Resolve Studio + DavinciBox if you need something good.                        |
| Fedora Media Writer        | [org.fedoraproject.MediaWriter](https://flathub.org/en/apps/org.fedoraproject.MediaWriter)           | Best ISO flasher utility for linux.                                                                                               |
| Virtual Machine Manager    | [org.virt_manager.virt-manager](https://flathub.org/en/apps/org.virt_manager.virt-manager)           | A very powerful app for creating and managing VMs, also grab the QEMU addon.                                                      |

## Apps to add later
- Gradia
- Desktop Plus (GIT UI)
- gitg
- Collision
- Inspector
- Pods
- File Roller
- Secrets
- Polari
- Pinta
- Inkscape
- Tuba