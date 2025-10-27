## Bare Metal Clouds

Bare Metal Cloud offers the serial access to servers. We can prove the server is fully managed by a reputable cloud provider with a ceremony, where the verifier can witness the quote is indeed generated from the server running in the cloud by checking the console.

Suppose Alice is the prover, and Bob is the verifier:

1. Alice and Bob join a witness ceremony via a video conference
2. Alice shares the screen to open the serial console from the cloud provider (e.g. OVH)
3. Bob send a challenge (32 bytes nonce) to Alice
4. Alice runs a prebuilt docker container to produce an attestation (e.g. DCAP quote) with the nonce committed to attestation (the reportData field)
5. Alice downloads the quote and send it to Bob
6. Bob should verify the attestation, check the nonce matches, and extract the hardware id (PPID) from it

Once the witness ceremony is completed and signed off by Alice and Bob, the hardware id can be added to the Proof of Cloud registry.

Trust model:

- Assumption: Bare Metal Cloud is trusted
- Protected physical attack:
    - From the server owner
    - From outsiders
- Not protect physical attack:
    - From insider (i.e. malicious employee in the data center / cloud provider)

## Colocation Servers

Colocation servers don’t have the built-in console from the data center providers. However, we can combine various of the evidences to get the desired trust model:

1. Claim by server owner (e.g. Phala Cloud)
    - Similar to hyperscalers’s claim, when the server owner is trusted, the owner promises the server is hosted in a safe place, not attackable by any unauthorized parties.
    - Security model: assume the server owner won’t attack themselves.
    - Evidence: a signed claim by the server owner, optionally with compliance audit certificates like SOC2 & ISO 27001, etc.
2. Proof of data center hosting
    - Defend against unauthorized access from malicious attacker
    - Trust on Data Center operator and the server owner
    - Evidence: video witness of the data center environment, combined with data center’s email
3. Data center pledge of notification
    - Data center can pledge to send an alert to Proof of Cloud org when the server owner brings the server out of the data center, or brings in suspicious devices to perform physical attack
    - Evidence: a pledge sent from the data center admins
4. PSU heartbeat
    - Monitor the server using periodical heartbeat to IMPI / BMC. It proves that the server doesn’t leave the rack. To perform a physical attack, it’s unlikely to not disrupt the network and power supply of the server.
    - Evidence: an audit log of continuous heartbeat check
5. Proof of IP address ownership under data center’s range
    1. Check the inbound and outbound IP address of the server and if it’s in the range of the data center’s range.
    2. Evidence: video witness of outbound ip address (e.g. `curl [ipconfig.me](http://ipconfig.me)` and `mtr`); the server can be accessed via the predefined ip.
6. Hardware beacon and integrity guarantee
    1. WIP: Tamper-evident RFID + geo tagging

Trust Model:

|  | Attack from 3rd party | Attack from server owner | Attack from DC operators | Comments |
| --- | --- | --- | --- | --- |
| Claim by server owner | promised by server owner | promised by server owner | no |  |
| Proof of data center hosting | proven | no | no |  |
| Data center pledge of notification | proven | proven, remote only | no | DC may not offer sufficient monitoring. |
| Proof of IP address ownership under data center’s range | proven | proven, remote only | no | Sophisticated network attack risk |
| PSU heartbeat | proven | proven, remote only | proven, remote only | Network down time risk |
| Hardware beacon and integrity guarantee | proven | proven | proven |  |

Remote only: it only prevents the physical attacks that require the hardware leaving the rack; not in-place attacks.
