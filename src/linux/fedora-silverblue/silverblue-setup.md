# Silverblue Setup

## Commands and documentation

You should read the [Fedora Silverblue docs](https://docs.fedoraproject.org/en-US/atomic-desktops/) first.

Some basic commands for administering your system have been given below.  
For more advanced commands, see [../ostree-commands](./ostree-commands.md)

| Commands                                             | Explanation                                                                                |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| `rpm-ostree status`                                  | See the status of all`rpm-ostree` deployments                                              |
| `rpm-ostree update`                                  | Update your system                                                                         |
| `rpm-ostree search/install/remove <package>`         | Search/Install/Remove packages on your base image. (Layering)                              |
| `rpm -qa <package>`                                  | Check whether a package is currently installed in the system                               |
| `rpm-ostree reset`                                   | Removes all overlayed packages                                                             |
| `rpm-ostree override remove/replace/reset <package>` | Remove/Replace a preinstalled package or Reset overrides                                   |
| `rpm-ostree cleanup -rpmb`                           | Remove Rollback(`-r`)/Pending(`-p`) deployments and Clean Metadata(`-m`)/Cache(`-c`) files |

## Packages to layer

Although it comes down to personal preference and needs, I prefer overlaying the following packages on a fresh install of *Fedora Silverblue*:  

- `zsh`/`nu`/`fish` (Your preferred shell)
- `adw-gtk3-theme` (Themes GTK3 and some Qt apps to look like libadwaita apps)
- `distrobox` (More flexible than toolbox)
- `android-tools` (For using *ADB* and *fastboot*)
- `langpacks-bn` (For *Bangla* language pack support, replace `bn` with your language code)
- `podman-compose` (For *VSCode*/*DevPod* Devcontainers)
- `OpenBangla Keyboard` (For *Bangla* typing) [[Download]](https://github.com/OpenBangla/OpenBangla-Keyboard/releases)

Oneliner:

```bash
rpm-ostree install zsh nu fish adw-gtk3-theme distrobox android-tools langpacks-bn podman-compose https://github.com/OpenBangla/OpenBangla-Keyboard/releases/download/2.0.0/OpenBangla-Keyboard_2.0.0-fedora42.rpm
```

## Flatpak Setup

Out of the box, *Fedora Silverblue* ships and configures *Fedora's* own *Flatpak* repository, which has a limited selection of apps that sometimes have issues.  
As such, I generally like to disable the default *Fedora Flatpaks* repository and enable the *Flathub* repository.  
You can do so by opening the *GNOME Software* app and enabling Third-Party Repositories.

For a list of Flatpak apps to install and cleaning out the preinstalled Fedora flatpaks, see [../flatpak-setup](./flatpak-setup.md)

## Fixing /etc/fstab issues in Fedora Silverblue

Starting from *Fedora Silverblue 41* and onwards, `/` *(root)* is mounted using [*ComposeFS*](https://www.cncf.io/projects/composefs/).  
As such, `/` is mounted using kargs in *Fedora Silverblue* instead of *systemd* or by arguments sourced from `/etc/fstab`.  

This will result in...

1. Options specified in `/etc/fstab` (notably *btrfs compression options*) not applying for `/` *(root)*.
2. Errors related to `systemd-remount-fs.service`.  
3. `fstrim.service` not trimming `/` *(root)*.

To fix this, run the following commands:  

```bash
# Add btrfs compression option to kargs
rpm-ostree kargs --delete=rootflags=subvol=root --append=rootflags=subvol=root,compress=zstd:1

# Comment out the line for the root (/) mount in /etc/fstab
sudo sed -i.bak '/^UUID=.*[[:space:]]\/[[:space:]]/ s/^/#/' /etc/fstab

# Manually run fstrim on /sysroot periodically
sudo fstrim /sysroot
```

## Performance tuning

### Disabling mitigations

If you're a casual/home user with a threat model that doesn't involve nation-state actors, you can disable some CPU/GPU vulnerability mitigations for a beefy performance boost. (esp. on *Intel* systems)

```bash
# For all CPUs
rpm-ostree kargs --append-if-missing=mitigations=off

# If using an Intel iGPU with the i915 driver
rpm-ostree kargs --append-if-missing=i915.mitigations=off
```

### Enabling Intel Wifi powersaving

IF your system has an Intel Wifi/Bluetooth card like the AX210, you can enable powersaving and save 2~5W of power.

```bash
rpm-ostree kargs --append-if-missing=iwlwifi.power_save=Y
rpm-ostree kargs --append-if-missing=iwlwifi.power_level=5
```

## Others

- [Toolbox Setup for Fedora Silverblue](./toolbox-setup.md)
- [VSCode Setup for Fedora Silverblue](./vscode-setup.md)