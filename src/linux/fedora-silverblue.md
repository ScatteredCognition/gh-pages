# Fedora Silverblue

[Fedora Silverblue](https://fedoraproject.org/atomic-desktops/silverblue/) is what happens when you look at a *Docker* container one day and think "Hmm... I wonder if we can build an entire OS out of this if we included a kernel and a bootloader...".  

It is an **Atomic**, **Immutable**<sup>(*mostly*)</sup> linux distro built on the foundations of *Fedora Linux*, using it's own package manager, `rpm-ostree`.  

You can install packages like you would on normal *Fedora Linux* *("Layering" as it is called)*, but don't layer too many packages. *Fedora Silverblue* ships with the *GNOME Desktop Environment*, although different spins exist like *Fedora Kinoite* (ships *KDE Plasma*), *Fedora Cosmic Atomic* and the like. But *Fedora Silverblue* remains, by far, the best experience amongst all the *Atomic* spins.

[Flatpak](https://flatpak.org/) is a new packaging format for linux that puts an emphasis on containerization and sadboxing apps. Basically, think of it as *Docker* but for desktop linux apps.  
Being centered around the ideas of containerization, immutability and atomicity, *Fedora Silverblue* prefers apps to be shipped as *Flatpaks*.  

> This section contains guides and information mostly specific to *Fedora Silverblue*.  
> I recommend reading the content at [linux/others](/linux/others.md) section for guides and information that is applicable to most linux distros.  
> Also read the [linux/basics](/linux/basics.md) section for a brief overview of how to use and navigate the CLI.
