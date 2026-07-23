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
  'aston-martin-db11': {
    client: 'Προσωπική Δουλειά',
    category: 'Real-Time Rendering · Unreal Engine 5',
    tags: ['3D Rendering', 'Unreal Engine Viz'],
    description:
      'Όλη η σκηνή χτίστηκε διαδικαστικά (procedurally) — από το terrain στο Gaea μέχρι το περιβάλλον που δημιουργήθηκε με το Unreal Engine PCG. Αποδοσμένο εξ ολοκλήρου σε real time με Unreal Engine 5, Lumen και Substrate Materials, σπρώχνοντας το engine στα όριά του για τον μέγιστο δυνατό φωτορεαλισμό.',
    approach:
      'Διαδικαστική δημιουργία terrain στο Gaea · Διαδικαστικό scattering περιβάλλοντος με Unreal Engine PCG · Real-time global illumination και materials μέσω Lumen και Substrate · Τελικό grade σε DaVinci Resolve με ACES workflow',
    process:
      'Το terrain και το περιβάλλον χτίστηκαν διαδικαστικά αντί να τοποθετηθούν με το χέρι — Gaea για το τοπίο, PCG για το scattering και το ντύσιμο της σκηνής μέσα στο Unreal Engine. Κάθε υλικό και αντίδραση φωτός υπολογίστηκε ζωντανά μέσω Lumen και Substrate, με τελικό grade σε DaVinci Resolve πάνω σε ACES pipeline.',
    role: '3D Rendering · Real-Time',
    software: 'Unreal Engine 5 · Gaea',
    contribution: 'Προσωπικό project — διαδικαστικό περιβάλλον, lighting, look development και real-time capture σε Unreal Engine 5.',
    pullQuote: 'Τίποτα τοποθετημένο με το χέρι — το terrain, το scatter, το φως, όλα φτιαγμένα να παράγονται μόνα τους, σπρωγμένα μετά για τον μέγιστο φωτορεαλισμό.',
  },
  'bugatti-chiron': {
    client: 'Προσωπική Δουλειά',
    category: 'Real-Time Rendering · Unreal Engine 5.8',
    tags: ['3D Rendering', 'Unreal Engine Viz'],
    description:
      'Μια real-time μελέτη της Bugatti Chiron, φτιαγμένη εξ ολοκλήρου σε Unreal Engine 5.8 — ένα σκόπιμο stress test τόσο για το hardware όσο και για το global illumination του Lumen, αποδοσμένο στο σπίτι σε μια RTX 2080 και μελοποιημένο με το Lacrimosa για να ταιριάξει με την ένταση του αυτοκινήτου.',
    approach:
      'Real-time global illumination και αντανακλάσεις πιεσμένες στα όρια του Lumen · Physically based shaders για το χρώμα της Chiron, το carbon fiber και το εσωτερικό · Μοντάζ και grade σε DaVinci Resolve · Μουσική επένδυση: Lacrimosa',
    process:
      'Φωτισμένο και αποδοσμένο εξ ολοκλήρου μέσα στο viewport της UE5.8, σε μία μόνο RTX 2080 — χωρίς offline renderer, χωρίς κόλπα σε compositing. Οκτώ μήνες μέσα στη βελτίωση αυτού του real-time pipeline, το project φτιάχτηκε συγκεκριμένα για να βρει πού σπάει το hardware και το Lumen, και μετά να το ξεπεράσει.',
    role: '3D Rendering · Real-Time',
    software: 'Unreal Engine 5.8 · Lumen',
    contribution: 'Προσωπικό project — lighting, look development και real-time capture σε Unreal Engine 5.8, με μοντάζ σε DaVinci Resolve.',
    pullQuote: 'Οκτώ μήνες μέσα σε αυτό το ταξίδι, ακόμα κυνηγώντας το επόμενο επίπεδο φωτορεαλισμού. Αυτό είναι μόνο το πρώτο κεφάλαιο.',
  },
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
