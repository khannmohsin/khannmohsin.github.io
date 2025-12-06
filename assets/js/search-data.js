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
  },{id: "nav-my-story",
          title: "My Story",
          description: "My academic, professional, and research journey from Kashmir to Europe.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/mystory/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "This is what I have worked on",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Publications are categorized in reversed chronological order.",
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
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Academic teaching, mentorship, and supervision roles undertaken during PhD at UiT.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
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
            },},{id: "projects-dtea-distributed-trust-enforcement-architecture",
          title: 'DTEA: Distributed Trust Enforcement Architecture',
          description: "Blockchain-based access control with dynamic enforcement for secure IoT deployments.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dtea/";
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
            },},{id: "projects-",
          title: '',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/smart_home/";
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
