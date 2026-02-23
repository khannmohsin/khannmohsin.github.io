// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "Projects",
          description: "Selected research, industry, and cybersecurity projects organized for fast technical review.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-my-story",
          title: "My Story",
          description: "Timeline across systems thinking, cybersecurity research, and industry execution.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/story/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Peer-reviewed output across IoT/OT security, distributed trust, lightweight cryptography, and applied system defense. Search by title, author, venue, year, or keyword.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "A collection of my open-source projects, research code, and collaborative development work hosted on GitHub.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Academic and industry-focused experience, research, and credentials in system security and cybersecurity.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Applied cybersecurity teaching and supervision across networking, computer security, distributed systems, and privacy-preserving computing.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "Technical writing across system security, cybersecurity research, and implementation-oriented lessons from projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-login",
          title: "Login",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/job-tracker/";
          },
        },{id: "post-colpali-vs-bm25-two-retrieval-philosophies-that-fail-in-different-ways",
        
          title: 'ColPali vs BM25: Two Retrieval Philosophies That Fail in Different Ways <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "BM25 is engineered for lexical certainty. ColPali is engineered for visual-semantic understanding. Your choice changes not just relevance — but the entire risk surface.",
        section: "Posts",
        handler: () => {
          
            window.open("https://generativeai.pub/colpali-vs-bm25-two-retrieval-philosophies-that-fail-in-different-ways-10bb33228b9c", "_blank");
          
        },
      },{id: "post-securing-retrieval-augmented-generation-rag-in-production-systems",
        
          title: 'Securing Retrieval-Augmented Generation (RAG) in Production Systems <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "From prototype convenience to security-critical infrastructure",
        section: "Posts",
        handler: () => {
          
            window.open("https://cybersecuritywriteups.com/securing-retrieval-augmented-generation-in-production-systems-330d72ca5260", "_blank");
          
        },
      },{id: "post-why-security-breaches-hurt-more-in-healthcare",
        
          title: 'Why Security Breaches Hurt More in Healthcare <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Cybersecurity breaches are a problem for most industries, but in healthcare, they hit far harder than most people realize. In most sectors, a breach means stolen files or lost credentials. In healthcare, breaches can dis…",
        section: "Posts",
        handler: () => {
          
            window.open("https://cybersecuritywriteups.com/why-security-breaches-hurt-more-in-healthcare-677eafdb0ce3", "_blank");
          
        },
      },{id: "post-what-actually-drives-norges-bank-investment-management-s-fund-growth",
        
          title: 'What Actually Drives Norges Bank Investment Management’s Fund Growth? <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Recently, I became interested in Norges Bank Investment Management and started looking into cybersecurity roles there. While learning more about NBIM and how it operates, I kept asking myself one simple question:",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.datadriveninvestor.com/what-actually-drives-nbims-fund-growth-59f182c4ca6d", "_blank");
          
        },
      },{id: "post-how-security-teams-can-use-shodan-io-to-see-what-attackers-see",
        
          title: 'How Security Teams Can Use Shodan.io to See What Attackers See <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Most security teams assume reconnaissance begins when an attacker actively scans their systems.",
        section: "Posts",
        handler: () => {
          
            window.open("https://cybersecuritywriteups.com/how-security-teams-can-use-shodan-io-to-see-what-attackers-see-8f06d5b5d424", "_blank");
          
        },
      },{id: "post-rethinking-policies-and-permissions-in-iot-security-with-blockchain",
        
          title: 'Rethinking Policies and Permissions in IoT Security with Blockchain <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Today’s IoT systems are everywhere: in factories, homes, hospitals, and cities. They are complex networks of sensors and devices talking to each other and to bigger systems. Yet most security still assumes a central cont…",
        section: "Posts",
        handler: () => {
          
            window.open("https://cybersecuritywriteups.com/what-happens-when-iot-meets-blockchain-for-security-4ca1fd83b58c", "_blank");
          
        },
      },{id: "post-the-hidden-world-of-lightweight-cryptography-securing-the-smallest-devices-on-earth",
        
          title: 'The Hidden World of Lightweight Cryptography: Securing the Smallest Devices on Earth <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Modern security often focuses on large systems: cloud servers, enterprise networks, high-performance machines. But beneath that surface lies an entire universe of tiny devices that quietly power our lives – sensors in he…",
        section: "Posts",
        handler: () => {
          
            window.open("https://cybersecuritywriteups.com/the-hidden-world-of-lightweight-cryptography-securing-the-smallest-devices-on-earth-fb14b9a0358c", "_blank");
          
        },
      },{id: "post-post-quantum-cryptography-for-iot-are-we-ready",
        
          title: "Post-Quantum Cryptography for IoT: Are We Ready?",
        
        description: "A critical look at the intersection of quantum threats and lightweight cryptography for resource-constrained IoT devices.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/post-quantum-cryptography-for-iot/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-cav-and-vanet-enabled-traffic-congestion-reduction-and-accident-circumvention",
          title: 'CAV- and VANET-Enabled Traffic Congestion Reduction and Accident Circumvention',
          description: "Integrating Connected Autonomous Vehicles and VANETs for safe-distance maintenance, overtaking, and lane-shifting to reduce congestion and accidents.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/CAV_VANET/";
            },},{id: "projects-impact-of-management-information-system-mis-on-banking-efficiency-a-study-of-j-amp-k-bank",
          title: 'Impact of Management Information System (MIS) on Banking Efficiency – A Study of...',
          description: "An empirical study on how MIS implementation influences operational efficiency, decision-making, and service quality in the banking sector, with a focus on J&amp;K Bank.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/MIS_JK_bank/";
            },},{id: "projects-assemble-a-soc-team-and-perform-security-monitoring-tasks",
          title: 'Assemble a SOC Team and Perform Security Monitoring Tasks',
          description: "Capstone project focused on SOC role assignment, security operations models, and hands-on network reconnaissance.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/SOC/";
            },},{id: "projects-tryhackme-soc-level-1-learning-path",
          title: 'TryHackMe — SOC Level 1 Learning Path',
          description: "Hands-on SOC training covering SIEM/EDR/SOAR concepts, phishing analysis, traffic analysis with Wireshark, and detection frameworks (MITRE, Kill Chain, Pyramid of Pain).",
          section: "Projects",handler: () => {
              window.location.href = "/projects/THM_SOC/";
            },},{id: "projects-tryhackme-jr-penetration-tester-learning-path-pt1",
          title: 'TryHackMe — Jr Penetration Tester Learning Path (PT1)',
          description: "Completed offensive security pathway covering web hacking, Burp Suite, network recon, Metasploit, vulnerability research, and privilege escalation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/THM_pentest/";
            },},{id: "projects-performance-benchmarking-of-lightweight-hash-functions-for-embedded-iot",
          title: 'Performance Benchmarking of Lightweight Hash Functions for Embedded IoT',
          description: "Systematic evaluation of NIST-submitted, ISO-standardized, and other lightweight hash functions on AVR ATxmega128 microcontrollers using ChipWhisperer.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/benchmarking_lwhf_chipwhisperer/";
            },},{id: "projects-arm-based-benchmarking-of-lightweight-cryptographic-ciphers-for-iot",
          title: 'ARM-Based Benchmarking of Lightweight Cryptographic Ciphers for IoT',
          description: "Unified benchmarking framework for evaluating lightweight block and stream ciphers on ARM IoT devices with performance, energy, and resource metrics.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/benchmarking_rp_Arduino/";
            },},{id: "projects-blockchain-implementation-amp-consensus-mechanisms",
          title: 'Blockchain Implementation &amp;amp; Consensus Mechanisms',
          description: "Implementation of blockchain in Python with Merkle Tree, Proof of Work mining, and comparative analysis of PoW, PoS, BFT, and PoStorage.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/blockchain_mining/";
            },},{id: "projects-cloud-security-architecture-amp-migration-risk-analysis",
          title: 'Cloud Security Architecture &amp;amp; Migration Risk Analysis',
          description: "Security-focused evaluation of cloud migration strategies and protection mechanisms for organizational infrastructure.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cloud_sec/";
            },},{id: "projects-blockcap-blockchain-based-capability-authorization-for-iot",
          title: 'BlockCap: Blockchain-Based Capability Authorization for IoT',
          description: "A blockchain-backed capability-based authorization system for enforcing fine-grained, auditable access control in resource-constrained IoT environments.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dtea/";
            },},{id: "projects-aig-shields-up-cybersecurity-job-simulation",
          title: 'AIG Shields Up: Cybersecurity Job Simulation',
          description: "Zero-day advisory writing (Log4Shell), stakeholder communication, and a Python-based ZIP ransomware decryption brute-forcer using a wordlist.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/forage_aig/";
            },},{id: "projects-commonwealth-bank-introduction-to-cybersecurity-job-simulation",
          title: 'Commonwealth Bank Introduction to Cybersecurity Job Simulation',
          description: "Fraud analytics in Splunk, incident response handling, security awareness design, and entry-level web pentesting in a banking context.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/forage_commonwealth/";
            },},{id: "projects-commonwealth-bank-tech-explorer-job-simulation-forage",
          title: 'Commonwealth Bank Tech Explorer Job Simulation (Forage)',
          description: "Cross-functional simulation covering iOS widget design, requirements gathering (BDD user stories), IAM permissions modelling, and data-driven demographic targeting for a new savings feature.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/forage_commonwealth2/";
            },},{id: "projects-datacom-cyber-security-operations-job-simulation-forage",
          title: 'Datacom Cyber Security Operations Job Simulation (Forage)',
          description: "Cybersecurity operations simulation involving ransomware investigation, breach impact analysis, and enterprise risk assessment using real-world scenarios.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/forage_datacom/";
            },},{id: "projects-deloitte-australia-cyber-job-simulation",
          title: 'Deloitte Australia Cyber Job Simulation',
          description: "Hands-on cyber incident analysis and detection exercises based on real-world consulting scenarios.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/forage_deloitte/";
            },},{id: "projects-mastercard-cybersecurity-virtual-experience-program",
          title: 'Mastercard Cybersecurity Virtual Experience Program',
          description: "Security awareness, phishing simulation design, and risk-based training analysis in a global enterprise context.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/forage_mastercard/";
            },},{id: "projects-tata-cybersecurity-iam-developer-job-simulation-forage",
          title: 'Tata Cybersecurity – IAM Developer Job Simulation (Forage)',
          description: "IAM consulting simulation covering IAM fundamentals, enterprise readiness assessment, solution design, and IAM platform implementation planning for a global organization.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/forage_tata/";
            },},{id: "projects-telstra-cybersecurity-job-simulation",
          title: 'Telstra Cybersecurity Job Simulation',
          description: "End-to-end incident response to a malware attack, including SOC triage, network analysis, mitigation, and post-incident review.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/forage_telstra/";
            },},{id: "projects-healthcare-data-security-amp-hipaa-risk-assessment",
          title: 'Healthcare Data Security &amp;amp; HIPAA Risk Assessment',
          description: "Practical evaluation of a healthcare provider’s data security posture with respect to HIPAA requirements, risks, and control gaps.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/healthcare_HIPAA/";
            },},{id: "projects-investigate-an-incident-through-digital-forensics",
          title: 'Investigate an Incident Through Digital Forensics',
          description: "Capstone project applying incident response frameworks and practical digital forensics tasks, including USB imaging and evidence analysis.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/incident_response/";
            },},{id: "projects-secure-network-architecture-amp-system-hardening",
          title: 'Secure Network Architecture &amp;amp; System Hardening',
          description: "Design of a secure network and system architecture emphasizing defense-in-depth and secure configuration.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/network_arch/";
            },},{id: "projects-paxos-consensus-algorithm-implementation",
          title: 'PAXOS Consensus Algorithm Implementation',
          description: "Python-based simulation of the PAXOS consensus protocol with fault tolerance testing and performance evaluation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/paxos/";
            },},{id: "projects-prime-multiprocessor",
          title: 'Prime Multiprocessor',
          description: "Parallel prime number calculation with forward/reverse execution and automatic archiving.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/prime_multiprocessor/";
            },},{id: "projects-iot-based-automation-and-security",
          title: 'IoT-Based Automation and Security',
          description: "An IoT-enabled home automation and security system integrating Arduino Mega &amp; UNO, RFID access, multiple sensors, and Cayenne Cloud for real-time monitoring and remote control.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/smart_home/";
            },},{id: "projects-vulnerability-impact-analysis-amp-threat-mitigation",
          title: 'Vulnerability Impact Analysis &amp;amp; Threat Mitigation',
          description: "Identification, classification, and mitigation of organizational vulnerabilities using structured impact analysis.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/vulnerability_impact/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6B%68%61%6E%6E.%6D%6F%68%73%69%6E@%69%63%6C%6F%75%64.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/khannmohsin", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/khannmohsin", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0003-1815-8642", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=GyjgNdIAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
