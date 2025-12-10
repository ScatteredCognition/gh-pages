# Configure Syncthing
If you're on a traditional distro, install `syncthing` from your distro's package repo.  
Afterwards, enable the syncthing systemd service.  
```bash
systemctl enable --user --now syncthing.service
```

If you're on an immutable distro like *Fedora Silverblue*, install [SyncThingy](https://flathub.org/en/apps/com.github.zocker_160.SyncThingy) from *Flathub*.  