# Configure LUKS auto-unlocking with TPM2 in Arch Linux/CachyOS

To configure LUKS auto-unlocking with TPM2 in Arch Linux/CachyOS, do the following steps:

- Make a copy of your `/etc/crypttab` for initramfs  

  ```bash
  sudo cp /etc/crypttab /etc/crypttab.initramfs
  ```

- Make a backup of your `/etc/mkinitcpio.conf`  

  ```bash
  sudo cp /etc/mkinitcpio.conf /etc/mkinitcpio.conf.bak
  ```

- Include the necessary systemd stuff in your initramfs by replacing the following in your `/etc/mkinitcpio.conf` file:  
  - `udev` > `systemd`
  - `keymap` and `consolefont` > `sd-vconsole`
  - `encrypt` > `sd-encrypt`
  - Example:
    - Original:

      ```bash
      HOOKS=(base udev plymouth autodetect microcode modconf kms block keyboard keymap consolefont  encrypt filesystems fsck)
      ```

    - Modified:

      ```bash
      HOOKS=(base systemd plymouth autodetect microcode modconf kms block keyboard sd-vconsole sd-encrypt filesystems fsck)
      ```

- Regenerate your initramfs

  ```bash
  sudo mkinitcpio -P
  ```

- Continue onwards with [linux/others/Configure LUKS Auto-unlocking with TPM2](/linux/others/configure-luks-autounlocking-with-tpm2.md)
