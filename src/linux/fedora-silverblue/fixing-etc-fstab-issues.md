# Fixing /etc/fstab issues in Fedora Silverblue
Starting from *Fedora Silverblue 41* and onwards, `/` *(root)* is mounted using [*ComposeFS*](https://www.cncf.io/projects/composefs/).  
As such, `/` is mounted using kargs in *Fedora Silverblue* instead of *systemd* or by arguments sourced from `/etc/fstab`.  

This will result in...
1. Options specified in `/etc/fstab` (notably *btrfs compression options*) not applying for `/` *(root)*.
2. Errors related to `systemd-remount-fs.service`.  
3. `fstrim.service` not trimming `/` *(root)*.

To fix this, run the following commands:  

```bash
# Add btrfs compression option to kargs
rpm-ostree kargs --delete=rootflags=subvol=root \
--append=rootflags=subvol=root,compress=zstd:1

# Comment out the line for the root (/) mount in /etc/fstab
sudo sed -i.bak '/^UUID=.*[[:space:]]\/[[:space:]]/ s/^/#/' /etc/fstab

# Manually run fstrim on /sysroot periodically
sudo fstrim /sysroot
``