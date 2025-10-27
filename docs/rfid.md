# Tamper-evident RFID Verification

In a server rack, we place three components: an RFID reader, two tamper-evident RFID tags

- RFID Tag1: seal across the server body and lid
- RFID Tag2: attached to a unmovable place, like the rack itself
- RFID reader: anywhere in the rack, connected to the internet

### Tamper-evident RFID

A tamper-evident RFID acts as a “seal”. Once a part of it is broken, the full RFID functionality will break instantly. It’s extremely hard to recover it, and almost impossible to do so in a short period of time.

![image.png](attachment:61a92e55-be63-4321-acfe-3c9226aff3d6:image.png)

![image.png](attachment:1bcf3d8d-c409-4fb1-859c-ff7616bea11d:image.png)

The tags can be reached by a reader. Upon a request, a tag responds the reader with a cryptographically signed message (usually with a timestamp). We can expose the reader to a 3rd party verifier to automatically and continuously request heartbeats from the tags. The reader doesn’t need to be trusted.

For server integrity verification, Tag1 is used to seal the server. It proves the integrity of the server. Tag2 is attached to the rack. When the two tags presents together, it proves the server doesn’t leave the the rack.

TBD: how to prove Tag1 & Tag2 are adjacent?

### Initial Setup

Attach the RFID tags as described above. Then we can start a setup ceremony similar to a L1 data center verification:

1. Read the tags and record the identity of the tag
2. Connect to the server via VGA console, and produce a remote attestation to extract hardware id.
3. Record the entire setup session, or invite someone to witness it in a live video session

### Continuous Monitoring

A verifier can set up a remote server to periodically ping the RFID tags, and save the heartbeats to a transparency log. The interval should be short enough (e.g. 10s) to prevent advanced physical attack to the RFID.

For authorized server maintenance, the server owner should record the full operation session, and only remove the RFID tag during the session. After the maintenance, we can put a new RFID tag, and redo the initial setup process. This prevents server owner to perform in-place attack during the maintenance.

TBD: how to mitigate network outage risk?