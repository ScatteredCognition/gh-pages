# Filesystem Layout

A basic overview of the modern linux filesystem is given below.  

## System-specific hierarchy

- `/boot` or `/efi` is where the bootloader is stored.
- `/home/<username>/` <small>(aliased to `~`)</small> is your user's home directory. <small>(equivalent to `C:\Users\<username>\`)</small>
- `/etc` is where the system-wide configuration files are stored.
- `/usr` is where most of the OS files are stored. <small>(equivalent to `C:\Windows\`)</small>  
  <small>Note: Everything here (except `/usr/local/`) is managed by your package manager.</small>
  - `/usr/bin/` - Contains executable files or symlinks to executables.
  - `/usr/sbin/` - Usually either symlinked to `/usr/bin/` or contains extra executables.
  - `/usr/lib*/` - Contains library files `.so` (equivalent to `.dll`)
  - `/usr/share/` - Contains non-executable resources for apps (pictures, config files etc)
    - `/usr/share/applications/` - Contains `.desktop` desktop entry files for applications installed using your package manager.
    - `/usr/share/icons/` - Contains icons for applications to use.
  - `/usr/local/` - A directory for users to install their own apps not managed by the package manager. <small>(system-wide)</small>
- On modern distros, `/bin`, `/sbin`, and `/lib*` directories are usually symlinks which point to their equivalents inside `/usr`, this is called the [/usr merge](https://systemd.io/THE_CASE_FOR_THE_USR_MERGE/).
- `/opt` is where third-party apps like *Google Chrome*, *Brave Software* or *DaVinci Resolve* usually install their files.

## User-specific hierarchy

A basic overview of some crucial files and directories inside an user's home directory.  

- `~/.local/` is where apps store their user-specific data.
- `~/.config/` is where apps store their config files.
- `~/.cache/` is where apps store their cache files.
- `~/.var/app/` is where *Flatpak* apps store their user-specific data.

> NOTE: Most information in this section only applied to applications abiding by the [XDG Base Directory Specification](https://specifications.freedesktop.org/basedir/latest/).  
> Some applications, like *bash*, *zsh*, *Visual Studio Code*, *Google Chrome* and *DaVinci Resolve* either don't fully abide by the specification or don't follow the specification at all.
