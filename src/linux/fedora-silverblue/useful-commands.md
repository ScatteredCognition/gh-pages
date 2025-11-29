# Useful Commands for Fedora Silverblue

I have provided some commands which will hopefully make your *Fedora Silverblue* journey better.

## Basics

### Managing Packages

| Commands                               | Explanation                                                  |
| -------------------------------------- | ------------------------------------------------------------ |
| `rpm-ostree status`                    | See the status of all`rpm-ostree` deployments                |
| `rpm-ostree search <package>`          | See what packages are available in the repos                 |
| `rpm -qa <package>`                    | Check whether a package is currently installed in the system |
| `rpm-ostree install <package>`         | Overlay a package (Requires Reboot)                          |
| `rpm-ostree remove <package>`          | Removes a overlayed package (Requires Reboot)                |
| `rpm-ostree reset`                     | Removes all overlayed packages                               |
| `rpm-ostree override remove <package>` | Removes a preinstalled package (Requires Reboot)             |
| `rpm-ostree override reset`            | Resets all the package removal overrides (Requires Reboot)   |

### Managing Deployments

| Commands                           | Explanation                                                               |
| ---------------------------------- | ------------------------------------------------------------------------- |
| `rpm-ostree status`                | See the status of all`rpm-ostree` deployments                             |
| `rpm-ostree cleanup -r -p`         | Remove previous (`-r`) or pending (`-p`) deployments (except pinned ones) |
| `sudo ostree admin pin <index>`    | Pin a deployment                                                          |
| `sudo ostree admin pin -u <index>` | Unpin a deployment                                                        |

### Advanced

| Commands                                       | Explanation                                                  |
| ---------------------------------------------- | ------------------------------------------------------------ |
| `sudo ostree admin fsck`                       | Verify the integrity of your*Fedora Silverblue* installation |
| `rpm-ostree kargs --editor`                    | Edit your kernel arguments (kargs)                           |
| `compsize /sysroot /var/home /var/lib/flatpak` | Find out how much space you saved using zstd compression     |

### Deploying a previous commit

| Commands                                                          | Explanation                                                      |
| ----------------------------------------------------------------- | ---------------------------------------------------------------- |
| `ostree remote refs fedora`                                       | Find all available refs for*Fedora Atomic* spins you can use     |
| `sudo ostree pull --commit-metadata-only --depth=10 fedora:<ref>` | Pull the last 10 commits for your selected ref                   |
| `ostree log fedora:<ref>`                                         | List all the commits for your selected ref                       |
| `rpm-ostree deploy <ref_version>`                                 | Deploy that specific commit version (removes overlayed packages) |

### Rebase onto a different image

| Commands                                       | Explanation                                                         |
| ---------------------------------------------- | ------------------------------------------------------------------- |
| `ostree remote refs fedora`                    | Find all available refs for*Fedora Atomic* spins you can use        |
| `rpm-ostree rebase fedora:<ref>`               | Rebase onto a different image/spin like*Kinoite* or *Cosmic Atomic* |
