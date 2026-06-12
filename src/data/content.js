export const profile = {
  name: 'Quang-Linh Tran',
  shortName: 'Linh',
  role: 'PhD Researcher · ADAPT Centre, Dublin City University',
  tagline:
    'I build intelligent systems that connect Large Language Models with multimodal data — RAG pipelines, conversational retrieval, and question answering over lifelogs.',
  openTo: 'Open to Postdoctoral Opportunities',
  emailDisplay: 'linh.tran3 [at] mail.dcu.ie',
  avatar: 'photo.jpg',
  bio: `
    <p>I am a late-stage PhD researcher at the <strong>ADAPT Centre, School of Computing, Dublin City University</strong>, supervised by Prof. Cathal Gurrin and Prof. Gareth Jones. My research focuses on leveraging Large Language Models for advanced multimedia data analytics, in particular intelligent systems for the <strong>Lifelog Question-Answering</strong> task. I have designed RAG pipelines from scratch with semantic ranking, reranking models and chain-of-thought prompting, fine-tuned and optimised LLMs of various sizes with supervised and reinforcement learning to reach performance comparable to GPT-4o, and built a conversational image retrieval system (CLIP/BLIP2, Elasticsearch/Milvus, FastAPI) that ranked <strong>3rd in the Lifelog Search Challenge 2025</strong>. I also led a team of 10 annotators to construct an open-ended lifelog QA dataset.</p>
    <p>Before my PhD, I received my BSc in Data Science from the University of Information Technology, Vietnam National University Ho Chi Minh City (2022, GPA 8.62/10), and worked as an Associate Research Engineer at ELSA Corporation (June 2021 – December 2022), where I built machine learning models for churn detection, revenue prediction and lead scoring, and an end-to-end aspect-based sentiment analysis platform for customer reviews.</p>
    <p>I actively contribute to the research community with publications at ACM Multimedia, ACM ICMR, IEEE CBMI, MMM and PACLIC, by co-organising the <a href="https://sites.google.com/view/aiqam25" target="_blank" rel="noopener noreferrer" class="text-accent hover:underline">AI-powered Question-Answering for Multimedia (AIQAM) workshop</a> at ACM MM and the CAMEO task at NTCIR-19, and through teaching at DCU.</p>
    <p><strong>I am actively seeking postdoctoral research positions</strong> in multimodal AI, Large Language Models, retrieval-augmented generation and intelligent assistants. Feel free to get in touch at <strong>linh.tran3 [at] mail.dcu.ie</strong>.</p>
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
    'Attendee, ACM ASEAN School on High-Performance Computing and Artificial Intelligence 2025',
    'Visiting Researcher on REMESH Project at Vietnam National University, Vietnam',
    'Attendee at the European Summer School on Information Retrieval (ESSIR 2026)',
  ],
}

export const teaching = {
  intro:
    'Tutor at the School of Computing, Dublin City University, delivering tutorials and lab sessions for undergraduate modules.',
  modules: [
    { code: 'CSC1008', title: 'Introduction to Programming', role: 'Tutor', semester: 'Spring 2025' },
    { code: 'CSC1021', title: 'Operating Systems', role: 'Tutor', semester: 'Spring 2025' },
    { code: 'CSC1063', title: 'Managing Enterprise Computer Systems', role: 'Tutor', semester: 'Spring 2025' },
    { code: 'CSC1026', title: 'Advanced Programming', role: 'Tutor', semester: 'Fall 2025' },
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
  '3rd at LSC 2025, 8th at LSC 2024 and 6th at LSC 2023.',
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
