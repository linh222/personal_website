export const profile = {
  name: 'Quang-Linh Tran',
  shortName: 'Linh',
  role: 'Lecturer, University of Information Technology, VNU-HCM',
  tagline:
    'I teach and research intelligent systems that connect Large Language Models with multimodal data — RAG pipelines, conversational retrieval, and question answering over lifelogs. I welcome students interested in AI, IR and NLP research.',
  openTo: 'Welcoming Students for Research Collaboration',
  emailDisplay: 'linhtq [at] uit.edu.vn',
  avatar: 'photo.jpg',
  bio: `
    <p>I am a Lecturer at the <strong><a href="https://en.uit.edu.vn/" target="_blank" rel="noopener noreferrer" class="text-accent hover:underline">University of Information Technology (UIT), Vietnam National University Ho Chi Minh City</a></strong>, where I teach and supervise students in artificial intelligence and information retrieval. I hold a PhD in Computer Applications from the <strong><a href="https://www.adaptcentre.ie/" target="_blank" rel="noopener noreferrer" class="text-accent hover:underline">ADAPT Centre</a>, <a href="https://www.computing.dcu.ie/" target="_blank" rel="noopener noreferrer" class="text-accent hover:underline">School of Computing</a>, <a href="https://www.dcu.ie/" target="_blank" rel="noopener noreferrer" class="text-accent hover:underline">Dublin City University</a></strong>, supervised by <a href="https://www.computing.dcu.ie/~cgurrin/" target="_blank" rel="noopener noreferrer" class="text-accent hover:underline">Prof. Cathal Gurrin</a> and <a href="https://www.computing.dcu.ie/~gjones/" target="_blank" rel="noopener noreferrer" class="text-accent hover:underline">Prof. Gareth Jones</a>. My research focuses on leveraging Large Language Models for advanced multimedia data analytics, in particular intelligent systems for the <strong>Lifelog Question-Answering</strong> task.</p>
    <p>Before my PhD, I received my BSc in Data Science from the <a href="https://en.uit.edu.vn/" target="_blank" rel="noopener noreferrer" class="text-accent hover:underline">University of Information Technology, Vietnam National University Ho Chi Minh City</a> (2022), and worked as an Associate Research Engineer at ELSA Corporation (June 2021 – December 2022), where I built machine learning models for churn detection, revenue prediction and lead scoring, and an end-to-end aspect-based sentiment analysis platform for customer reviews.</p>
    <p>I actively contribute to the research community with publications at ACM Multimedia, ACM ICMR, IEEE CBMI, MMM and PACLIC, by co-organising the <a href="https://sites.google.com/view/aiqam25" target="_blank" rel="noopener noreferrer" class="text-accent hover:underline">AI-powered Question-Answering for Multimedia (AIQAM) workshop</a> at ACM MM and the CAMEO task at NTCIR-19, and through teaching at DCU and UIT.</p>
    <p><strong>I am looking for motivated students</strong> interested in research on multimodal AI, Large Language Models, retrieval-augmented generation and intelligent assistants. If you'd like to work with me, feel free to get in touch at <strong>linhtq [at] uit.edu.vn</strong>.</p>
  `,
  links: [
    { label: 'Google Scholar', url: 'https://scholar.google.com/citations?user=YdMKU6sAAAAJ' },
    { label: 'ORCID', url: 'https://orcid.org/0000-0002-5409-0916' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/tranquanglinh222/' },
  ],
  services: [
    'Co-organizer of the <a href="https://sites.google.com/view/aiqam25" target="_blank" rel="noopener noreferrer" class="text-accent hover:underline">AIQAM workshop</a> (AI-powered Question-Answering for Multimedia) at ACM MM 2025',
    'Co-organiser of the <a href="https://cameo-task.com/" target="_blank" rel="noopener noreferrer" class="text-accent hover:underline">CAMEO task</a> at NTCIR-19',
    'Publicity Co-chair and Reviewer at ACM MM 2025',
    'TPC Member at LSC 2023, 2024, 2025',
    'Reviewer at MMM 2026',
    'Reviewer at ICMR 2025, 2026',
    'Reviewer at VBS 2025, 2026',
    'Reviewer at CBMI 2023–2026',
    'Reviewer at AICS 2025',
    'Reviewer at IEEE ICME 2024',
  ],
  academic: [
    {
      date: 'September 2026',
      text: 'Joined the University of Information Technology, VNU-HCM as a Lecturer (2026)',
    },
    {
      date: 'August 2026',
      text: 'Graduated with a PhD in Computer Applications from the ADAPT Centre, Dublin City University (2026)',
    },
    {
      date: 'July 2026',
      text: 'Attendee at the European Summer School on Information Retrieval (ESSIR 2026)',
    },
    {
      date: 'March 2025',
      text: 'Attendee, ACM ASEAN School on High-Performance Computing and Artificial Intelligence 2025',
    },
    {
      date: 'December 2023',
      text: 'Visiting Researcher on REMESH Project at Vietnam National University, Vietnam',
    },
  ],
}

export const teaching = {
  intro:
    'Lecturer at the University of Information Technology, VNU-HCM, teaching and supervising students in AI and information retrieval. Previously a tutor at the School of Computing, Dublin City University, delivering tutorials and lab sessions for undergraduate modules.',
  modules: [
    { code: '', title: 'Information Retrieval', role: 'Lecturer', semester: 'Fall 2026', institution: 'UIT, VNU-HCM' },
    { code: 'CSC1008', title: 'Introduction to Programming', role: 'Tutor', semester: 'Spring 2025', institution: 'DCU' },
    { code: 'CSC1021', title: 'Operating Systems', role: 'Tutor', semester: 'Spring 2025', institution: 'DCU' },
    { code: 'CSC1063', title: 'Managing Enterprise Computer Systems', role: 'Tutor', semester: 'Spring 2025', institution: 'DCU' },
    { code: 'CSC1026', title: 'Advanced Programming', role: 'Tutor', semester: 'Fall 2025', institution: 'DCU' },
  ],
}

export const publications = [
  {
    title: 'Multi-modal Context Reranking for Lifelog Question Answering',
    venue: 'IEEE CBMI, 2025',
    link: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=11339309',
  },
  {
    title: 'The CASTLE 2024 Dataset: Advancing the Art of Multimodal Understanding',
    venue: 'ACM Multimedia, 2025',
    link: 'https://doi.org/10.1145/3746027.3758199',
  },
  {
    title: "MemoriEase 3.0: A RAG-Enhanced Conversational Lifelog Retrieval System at LSC'25",
    venue: 'ACM LSC, 2025',
    link: 'https://doi.org/10.1145/3729459.3748689',
  },
  {
    title: 'A RAG Approach for Multi-Modal Open-ended Lifelog Question-Answering',
    venue: 'ACM ICMR, 2025',
    link: 'https://dl.acm.org/doi/10.1145/3731715.3733263',
  },
  {
    title: 'VideoEase at VBS2025: An Interactive Video Retrieval System',
    venue: 'MMM, 2025',
    link: 'https://doras.dcu.ie/30858/1/MMM_VBS25_Linh.pdf',
  },
  {
    title: "MemoriEase 2.0: A Conversational Lifelog Retrieve System for LSC'24",
    venue: 'ACM LSC, 2024',
    link: 'https://dl.acm.org/doi/pdf/10.1145/3643489.3661114',
  },
  {
    title: 'MemoriQA: A Question-Answering Lifelog Dataset',
    venue: 'ACM ICMR, 2024',
    link: 'https://dl.acm.org/doi/pdf/10.1145/3643479.3662050',
  },
  {
    title: 'MemoriLens: a Low-cost Lifelog Camera Using Raspberry Pi Zero',
    venue: 'ACM ICMR, 2024',
    link: 'https://dl.acm.org/doi/pdf/10.1145/3652583.3657592',
  },
  {
    title: "MemoriEase: An Interactive Lifelog Retrieval System for LSC'23",
    venue: 'ACM LSC, 2023',
    link: 'https://dl.acm.org/doi/pdf/10.1145/3592573.3593101',
  },
  {
    title: 'Viecomrec: A dataset for recommendation in Vietnamese e-commerce',
    venue: 'CSoNet, 2023',
    link: 'https://doras.dcu.ie/29693/1/viecomrec.pdf',
  },
  {
    title: 'Aspect-based Sentiment Analysis for Vietnamese Reviews about Beauty Product on E-commerce Websites',
    venue: 'PACLIC36, 2022',
    link: 'https://aclanthology.org/2022.paclic-1.84.pdf',
  },
  {
    title: 'Sentiment classification for beauty-fashion reviews',
    venue: 'KSE, 2022',
    link: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9953782',
  },
  {
    title: 'A comparison of several approaches for image recognition used in a food recommendation system',
    venue: 'IEEE COMNETSAT, 2021',
    link: 'https://ieeexplore.ieee.org/document/9530793',
  },
  {
    title: "Machine learning-based empirical investigation for credit scoring in Vietnam banking",
    venue: 'IEA/AIE, 2021',
    link: "https://www.researchgate.net/profile/Tran-Khanh-8/publication/353329117_Machine_Learning-Based_Empirical_Investigation_for_Credit_Scoring_in_Vietnam's_Banking/links/60f6c23cfb568a7098c05e2d/Machine-Learning-Based-Empirical-Investigation-for-Credit-Scoring-in-Vietnams-Banking.pdf",
  },
]

export const projects = [
  {
    title: 'OpenLifelogQA: A benchmark for Lifelog QA',
    description:
      'I led a team of 10 annotators to construct a high-quality open-ended lifelog QA dataset of 14K QA pairs, and fine-tuned LLMs of various sizes with supervised and reinforcement learning to achieve performance comparable to GPT-4o.',
    link: null,
  },
  {
    title: 'MemoriEase: Conversational Lifelog Retrieval',
    description:
      'I built a SOTA lifelog retrieval system based on BLIP2/CLIP, Elasticsearch/Milvus, the OpenAI API, FastAPI and React, and enhanced it with conversational retrieval and RAG for QA. It ranked 3rd overall in LSC\'25 and 2nd on the QA task.',
    link: 'https://github.com/linh222/memoriease',
  },
  {
    title: 'Lifelog Camera',
    description:
      'I built a lifelog camera from a Raspberry Pi Zero. It captures high-quality images and syncs to cloud storage.',
    link: 'https://github.com/linh222/raspberry_lifelog_camera',
  },
  {
    title: 'Lead Scoring Prediction',
    description:
      'I use several ensemble models and feature engineering techniques to improve the performance of the lead scoring model.',
    link: null,
  },
  {
    title: 'Aspect-based Customer Review Analysis',
    description:
      'I construct a transformer model for multi-label aspect-based sentiment classification for customer reviews. I build an end-to-end pipeline to analyze review data and visualize on Tableau for reporting.',
    link: 'https://github.com/linh222/Aspect-based-Sentiment-Analysis-for-Vietnamese-Reviews-about-Beauty-Product-on-E-commerce-Websites',
  },
]

export const awards = [
  '3rd at LSC 2026 and 2025, 8th at LSC 2024 and 6th at LSC 2023.',
  'Student Travel Grant for the European Summer School on Information Retrieval, ESSIR 2026.',
  'The Postgraduate Accommodation Scholarship from the Faculty of Engineering and Computing, DCU (2024).',
  'SIGMM Student Travel Grant for ICMR 2024.',
  'Fully-funded scholarship for the PhD in Computer Applications at DCU (2022).',
  'The 1st and 3rd in two tracks of the 3rd annual International Data Science & AI Competition (2022).',
  'The Saigon Hi-Tech Park Business Association (SBA) scholarship for outstanding academic achievements and social activities (2022).',
  '6th at Kalapa Credit Scoring Challenge (2021).',
  'Certificate of Merit for Outstanding Student in Phu Yen Province (2021).',
  'UIT Global Scholarship for IELTS 7.5 Certificate (2021).',
]
