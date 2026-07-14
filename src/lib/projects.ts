export interface Project {
  slug: string
  title: string
  client: string
  category: string
  year: string
  tags: string[]
  description: string
  /** Second intro paragraph — per project, so detail pages don't share boilerplate. */
  approach: string
  /** Process section paragraph — per project. */
  process: string
  role: string
  software: string
  /** One-line "what I did" under the title — sharpens the craft read. */
  contribution?: string
  /** Short pull-quote (lifted from approach) shown between gallery and process. */
  pullQuote?: string
  /** Optional technical breakdown images (wireframe, clay, lighting, AOV, …).
   *  Rendered in the Process section; the block hides when empty. */
  breakdowns?: string[]
  /** Vimeo video id for the detail-page hero background embed. */
  vimeoId: string
  /** Seconds into the clip to start playback, so the action is already going. Default 0. */
  videoStart?: number
  /** Drop assets at /public/images/work/<slug>/hero.jpg and update this path. */
  heroImage?: string
  images: string[]
  featured: boolean
  featuredOrder?: number
}

export const projects: Project[] = [
  {
    slug: 'bugatti-chiron',
    title: 'Bugatti Chiron',
    client: 'Personal Work',
    category: 'Real-Time Rendering · Unreal Engine 5.8',
    year: '2026',
    tags: ['3D Rendering', 'Unreal Engine Viz'],
    description:
      'A real-time study of the Bugatti Chiron, built entirely in Unreal Engine 5.8 — a deliberate stress test of both the hardware and Lumen’s global illumination, rendered at home on an RTX 2080 and scored to Lacrimosa to match the car’s intensity.',
    approach:
      'Real-time global illumination and reflections pushed to the edge of Lumen · Physically based Chiron paint, carbon fiber, and interior shaders · DaVinci Resolve edit and grade · Scored to Lacrimosa',
    process:
      'Lit and captured entirely inside the UE5.8 viewport on a single RTX 2080 — no offline renderer, no compositing shortcuts. Eight months into refining this real-time pipeline, the project was built specifically to find where the hardware and Lumen start to break, then push past it.',
    role: '3D Rendering · Real-Time',
    software: 'Unreal Engine 5.8 · Lumen',
    contribution: 'Personal project — lighting, look development, and real-time capture in Unreal Engine 5.8, edited in DaVinci Resolve.',
    pullQuote: 'Eight months into this journey, still chasing the next layer of photorealism. This is just the first chapter.',
    vimeoId: '1209641857',
    heroImage: '/images/work/bugatti-chiron/bugatti-chiron-08.png',
    images: [
      '/images/work/bugatti-chiron/bugatti-chiron-01.png',
      '/images/work/bugatti-chiron/bugatti-chiron-02.png',
      '/images/work/bugatti-chiron/bugatti-chiron-03.png',
      '/images/work/bugatti-chiron/bugatti-chiron-04.png',
      '/images/work/bugatti-chiron/bugatti-chiron-05.png',
      '/images/work/bugatti-chiron/bugatti-chiron-06.png',
      '/images/work/bugatti-chiron/bugatti-chiron-07.png',
      '/images/work/bugatti-chiron/bugatti-chiron-09.png',
      '/images/work/bugatti-chiron/bugatti-chiron-10.png',
      '/images/work/bugatti-chiron/bugatti-chiron-11.png',
      '/images/work/bugatti-chiron/bugatti-chiron-12.png',
    ],
    featured: true,
    featuredOrder: 1,
  },
  {
    slug: 'lamborghini-reventon',
    title: 'Lamborghini Reventón',
    client: 'Personal Work',
    category: 'Real-Time Rendering · Unreal Engine 5',
    year: '2025',
    tags: ['3D Rendering', 'Unreal Engine Viz'],
    description:
      'Introduction piece for a Lamborghini Reventón real-time concept developed entirely in Unreal Engine — rendered at home on an RTX 2080. A first chapter setting the tone for a larger ongoing project.',
    approach:
      'Balancing performance, image quality, lighting, and mood in a real-time workflow · Unreal Engine 5.7 · DaVinci Resolve',
    process:
      'Material and lighting were tuned live in the viewport — no offline bake, no overnight render. What you see is the engine output, graded but not faked.',
    role: '3D Rendering · Real-Time',
    software: 'Unreal Engine 5',
    contribution: 'Personal project — lighting, look development, and real-time capture in Unreal Engine 5.',
    pullQuote: 'This is the first chapter of an ongoing project — the foundation for what is still to come.',
    vimeoId: '1203181805',
    heroImage: '/images/work/lamborghini-reventon/lamborghini-12.jpg',
    images: [
      '/images/work/lamborghini-reventon/lamborghini-01.jpg',
      '/images/work/lamborghini-reventon/lamborghini-02.jpg',
      '/images/work/lamborghini-reventon/lamborghini-03.jpg',
      '/images/work/lamborghini-reventon/lamborghini-04.jpg',
      '/images/work/lamborghini-reventon/lamborghini-05.jpg',
      '/images/work/lamborghini-reventon/lamborghini-06.jpg',
      '/images/work/lamborghini-reventon/lamborghini-07.jpg',
      '/images/work/lamborghini-reventon/lamborghini-08.jpg',
      '/images/work/lamborghini-reventon/lamborghini-09.jpg',
      '/images/work/lamborghini-reventon/lamborghini-10.jpg',
      '/images/work/lamborghini-reventon/lamborghini-11.jpg',
      '/images/work/lamborghini-reventon/lamborghini-12.jpg',
    ],
    featured: true,
    featuredOrder: 2,
  },
  {
    slug: 'mclaren-570s',
    title: 'McLaren 570s',
    client: 'Personal Work',
    category: 'Real-Time Rendering · Unreal Engine 5.7',
    year: '2025',
    tags: ['3D Rendering', 'Unreal Engine Viz'],
    description:
      'A digital twin of the McLaren 570s rendered entirely in Unreal Engine 5.7 — not AI-imagined, but hand-crafted. Every shadow and highlight sculpted to prove that real-time craftsmanship is the future of automotive cinema.',
    approach:
      'Hand-sculpted studio lighting rig via Lumen · Surgical suppression of reflection artifacts for absolute visual purity · Strict ACEScg color science workflow · DaVinci Resolve final grade',
    process:
      'Lit and captured at real-time frame rates in UE 5.7, leaning on the engine’s latest reflection and lighting passes without ever leaving real time.',
    role: '3D Rendering · Real-Time',
    software: 'Unreal Engine 5.7',
    contribution: 'Personal project — environment build, reflection setup, and real-time capture in UE 5.7.',
    pullQuote: 'In a world of one-click AI renders, I prefer the path of the technical artist.',
    vimeoId: '1169656946',
    videoStart: 10,
    heroImage: '/images/work/mclaren-570s/mclaren-06.png',
    images: [
      '/images/work/mclaren-570s/mclaren-01.png',
      '/images/work/mclaren-570s/mclaren-04.png',
      '/images/work/mclaren-570s/mclaren-03.png',
      '/images/work/mclaren-570s/mclaren-02.png',
      '/images/work/mclaren-570s/mclaren-05.png',
    ],
    featured: true,
    featuredOrder: 3,
  },
  {
    slug: 'porsche-bugatti',
    title: 'Porsche × Bugatti',
    client: 'Personal Work',
    category: 'Cinematic · Unreal Engine 5',
    year: '2025',
    tags: ['3D Rendering', 'Cinematic Stills'],
    description:
      'A high-speed automotive cinematic built entirely inside Unreal Engine 5.7 — my first complete in-engine film and the milestone that completed my transition from 3ds Max and V-Ray to real-time production.',
    approach:
      'Real-time global illumination via Lumen · In-engine kinematics and camera choreography in Sequencer · Procedural forest environment with PCG Framework and Quixel Megascans · HDRI + custom Directional Light fully integrated with Lumen · 2.39:1 cinematic aspect ratio · Color grading in DaVinci Resolve',
    process:
      'Composed as a short cinematic sequence in UE5 — camera moves, depth of field, and a grade built to hold both silhouettes in the same darkness.',
    role: 'Automotive CGI · Cinematic',
    software: 'Unreal Engine 5',
    contribution: 'Personal project — dual-subject lighting, cinematic camera, and grade in Unreal Engine 5.',
    pullQuote: 'Every light bounce, every tree, every camera move — built and rendered in real time, inside the engine.',
    vimeoId: '1152381136',
    videoStart: 10,
    heroImage: '/images/work/porsche-bugatti/porsche-bugatti-06.png',
    images: [
      '/images/work/porsche-bugatti/porsche-bugatti-01.png',
      '/images/work/porsche-bugatti/porsche-bugatti-02.png',
      '/images/work/porsche-bugatti/porsche-bugatti-03.png',
      '/images/work/porsche-bugatti/porsche-bugatti-04.png',
      '/images/work/porsche-bugatti/porsche-bugatti-05.png',
    ],
    featured: true,
    featuredOrder: 4,
  },
  {
    slug: 'mercedes-amg',
    title: 'AMG Mercedes-Benz',
    client: 'Mercedes-Benz',
    category: 'Interior Visualization · V-Ray · 3ds Max',
    year: '2025',
    tags: ['3D Rendering', 'Cinematic Stills'],
    description:
      'High-end interior visualization for Mercedes-Benz, produced as part of my ongoing work at Three Deers. This project highlights my focus on achieving automotive photorealism through advanced V-Ray workflows and meticulous attention to detail.',
    approach:
      'Lighting Design: Multi-layered studio environment to accentuate premium surfaces. Shader Development: High-fidelity perforated leather, carbon fiber, and anisotropic metallic accents. MBUX Integration: Emissive light-wrap from digital displays interacting naturally with surrounding textures. Cinematography: Camera placement and focal lengths for a premium filmic look.',
    process:
      'Built in 3ds Max and rendered with V-Ray — every surface authored as a physically based shader, lit across layered studio passes, then composited with display emission and a filmic grade. Optimized to hold its detail at full resolution.',
    role: 'Lighting · LookDev · Cinematography · Render',
    software: '3ds Max · V-Ray',
    contribution: 'Technical execution and visual fidelity — lighting, LookDev, MBUX display integration, cinematography, and render optimization.',
    pullQuote: 'Every surface was built to hold up at full resolution. No shortcuts in the shader stack.',
    vimeoId: '',
    heroImage: '/images/work/mercedes-amg/mercedes-amg-01.jpg',
    images: [
      '/images/work/mercedes-amg/mercedes-amg-01.jpg',
      '/images/work/mercedes-amg/mercedes-amg-02.jpg',
      '/images/work/mercedes-amg/mercedes-amg-03.jpg',
      '/images/work/mercedes-amg/mercedes-amg-04.jpg',
    ],
    featured: true,
    featuredOrder: 5,
  },
]

export const featuredProjects = projects
  .filter((p) => p.featured)
  .sort((a, b) => (a.featuredOrder ?? 99) - (b.featuredOrder ?? 99))

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
