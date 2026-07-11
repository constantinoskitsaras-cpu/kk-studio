import type { Locale } from './dictionary'
import type { Project } from '@/lib/projects'

type ProjectFields = Pick<
  Project,
  'title' | 'client' | 'category' | 'tags' | 'description' | 'approach' | 'process' | 'role' | 'software' | 'contribution' | 'pullQuote'
>

// Greek translations keyed by project slug. Only the translatable copy
// fields are overridden — technical/data fields (images, vimeoId, year,
// featured, …) always come from the English source in projects.ts.
export const projectTranslationsEl: Record<string, Partial<ProjectFields>> = {
  'lamborghini-reventon': {
    client: 'Προσωπική Δουλειά',
    category: 'Real-Time Rendering · Unreal Engine 5',
    tags: ['3D Rendering', 'Unreal Engine Viz'],
    description:
      'Εισαγωγικό κομμάτι για ένα real-time concept της Lamborghini Reventón, φτιαγμένο εξ ολοκλήρου σε Unreal Engine — αποδοσμένο στο σπίτι σε μια RTX 2080. Πρώτο κεφάλαιο που θέτει τον τόνο για ένα μεγαλύτερο, συνεχιζόμενο project.',
    approach:
      'Ισορροπία μεταξύ απόδοσης, ποιότητας εικόνας, φωτισμού και διάθεσης σε real-time workflow · Unreal Engine 5.7 · DaVinci Resolve',
    process:
      'Το υλικό και ο φωτισμός δουλεύτηκαν ζωντανά μέσα στο viewport — χωρίς offline bake, χωρίς overnight render. Αυτό που βλέπεις είναι το output του engine, με grade αλλά χωρίς κόλπα.',
    role: '3D Rendering · Real-Time',
    software: 'Unreal Engine 5',
    contribution: 'Προσωπικό project — lighting, look development και real-time capture σε Unreal Engine 5.',
    pullQuote: 'Αυτό είναι το πρώτο κεφάλαιο ενός συνεχιζόμενου project — η βάση για ό,τι έρχεται.',
  },
  'mclaren-570s': {
    client: 'Προσωπική Δουλειά',
    category: 'Real-Time Rendering · Unreal Engine 5.7',
    tags: ['3D Rendering', 'Unreal Engine Viz'],
    description:
      'Ένα ψηφιακό δίδυμο της McLaren 570s, αποδοσμένο εξ ολοκλήρου σε Unreal Engine 5.7 — όχι φαντασία AI, αλλά χειροποίητη δουλειά. Κάθε σκιά και highlight δουλεμένα για να αποδείξουν ότι η real-time τεχνική είναι το μέλλον του automotive cinema.',
    approach:
      'Χειροποίητο studio lighting rig μέσω Lumen · Χειρουργική καταστολή artifacts στις αντανακλάσεις για απόλυτη οπτική καθαρότητα · Αυστηρό ACEScg color science workflow · Τελικό grade σε DaVinci Resolve',
    process:
      'Φωτισμένο και αποδοσμένο σε real-time frame rates στην UE 5.7, αξιοποιώντας τα πιο πρόσφατα reflection και lighting passes του engine, χωρίς ποτέ να φύγει από το real time.',
    role: '3D Rendering · Real-Time',
    software: 'Unreal Engine 5.7',
    contribution: 'Προσωπικό project — δημιουργία περιβάλλοντος, ρύθμιση αντανακλάσεων και real-time capture σε UE 5.7.',
    pullQuote: 'Σε έναν κόσμο με one-click AI renders, προτιμώ τον δρόμο του technical artist.',
  },
  'porsche-bugatti': {
    client: 'Προσωπική Δουλειά',
    category: 'Cinematic · Unreal Engine 5',
    tags: ['3D Rendering', 'Cinematic Stills'],
    description:
      'Ένα high-speed automotive cinematic φτιαγμένο εξ ολοκλήρου μέσα στη Unreal Engine 5.7 — η πρώτη μου ολοκληρωμένη ταινία in-engine και το ορόσημο που ολοκλήρωσε τη μετάβασή μου από 3ds Max και V-Ray σε real-time production.',
    approach:
      'Real-time global illumination μέσω Lumen · In-engine κινηματική και σκηνοθεσία κάμερας σε Sequencer · Procedural δασικό περιβάλλον με PCG Framework και Quixel Megascans · HDRI + custom Directional Light πλήρως ενσωματωμένα με Lumen · Κινηματογραφική αναλογία 2.39:1 · Color grading σε DaVinci Resolve',
    process:
      'Συντεθειμένο ως μια σύντομη κινηματογραφική σκηνή στην UE5 — κινήσεις κάμερας, βάθος πεδίου, και ένα grade φτιαγμένο να κρατάει και τις δύο σιλουέτες στο ίδιο σκοτάδι.',
    role: 'Automotive CGI · Cinematic',
    software: 'Unreal Engine 5',
    contribution: 'Προσωπικό project — φωτισμός δύο θεμάτων, κινηματογραφική κάμερα και grade σε Unreal Engine 5.',
    pullQuote: 'Κάθε αναπήδηση φωτός, κάθε δέντρο, κάθε κίνηση κάμερας — χτισμένα και αποδοσμένα σε πραγματικό χρόνο, μέσα στο engine.',
  },
  'mercedes-amg': {
    client: 'Mercedes-Benz',
    category: 'Interior Visualization · V-Ray · 3ds Max',
    tags: ['3D Rendering', 'Cinematic Stills'],
    description:
      'High-end interior visualization για τη Mercedes-Benz, παραγμένο ως μέρος της συνεχιζόμενης δουλειάς μου στην Three Deers. Αυτό το project αναδεικνύει την εστίασή μου στην επίτευξη automotive φωτορεαλισμού μέσα από προηγμένα V-Ray workflows και σχολαστική προσοχή στη λεπτομέρεια.',
    approach:
      'Σχεδιασμός Φωτισμού: Πολυστρωματικό studio περιβάλλον για ανάδειξη premium επιφανειών. Ανάπτυξη Shader: Υψηλής πιστότητας perforated δέρμα, carbon fiber και anisotropic μεταλλικές λεπτομέρειες. Ενσωμάτωση MBUX: Emissive light-wrap από ψηφιακές οθόνες που αλληλεπιδρά φυσικά με τις γύρω υφές. Κινηματογράφηση: Τοποθέτηση κάμερας και εστιακές αποστάσεις για premium filmic αισθητική.',
    process:
      'Χτισμένο σε 3ds Max και αποδοσμένο με V-Ray — κάθε επιφάνεια φτιαγμένη ως physically based shader, φωτισμένη σε πολλαπλά στρωματοποιημένα studio passes, και μετά composited με emission οθόνης και filmic grade. Βελτιστοποιημένο ώστε να κρατάει τη λεπτομέρειά του σε πλήρη ανάλυση.',
    role: 'Lighting · LookDev · Κινηματογράφηση · Render',
    software: '3ds Max · V-Ray',
    contribution: 'Τεχνική εκτέλεση και οπτική πιστότητα — lighting, LookDev, ενσωμάτωση οθόνης MBUX, κινηματογράφηση και βελτιστοποίηση render.',
    pullQuote: 'Κάθε επιφάνεια χτίστηκε να αντέχει σε πλήρη ανάλυση. Καμία συντόμευση στο shader stack.',
  },
}

export function localizeProject(project: Project, locale: Locale): Project {
  if (locale === 'en') return project
  const translation = projectTranslationsEl[project.slug]
  if (!translation) return project
  return { ...project, ...translation }
}
