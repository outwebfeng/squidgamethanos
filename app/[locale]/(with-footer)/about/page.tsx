import { unstable_setRequestLocale } from 'next-intl/server';

type Props = {
  params: { locale: string };
};

export default function AboutPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  return (
    <article className="max-w-4xl mx-auto px-4 py-16 prose prose-lg">
      <h1 className="text-4xl font-bold mb-8">Squid Game Thanos: A Fusion of Dystopian Drama and Marvel's Titan</h1>
      
      <p className="lead mb-8">
        The convergence of popular culture phenomena often leads to intriguing narratives, and the amalgamation of "Squid Game" and Thanos is a testament to this creative synthesis. "Squid Game," the South Korean dystopian series that captivated global audiences, introduces a character named Thanos in its second season. This character, distinct from Marvel's Titan, adds a new layer of complexity to the series' narrative.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Introduction to Squid Game's Thanos</h2>
      <p>
        In the second season of "Squid Game," Thanos emerges as a notable participant in the deadly games. Portrayed by Choi Seung-hyun, also known as T.O.P from the K-pop band BigBang, this character diverges from the typical desperate contestant archetype. Thanos is depicted as a flamboyant internet rapper with a penchant for chaos, bringing a unique dynamic to the series.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Characterization and Role</h2>
      <p>
        Thanos, designated as Player 230, is characterized by his purple hair and erratic behavior. Unlike other participants driven by financial desperation, Thanos appears to revel in the chaos of the games. His unpredictable nature and enjoyment of the deadly challenges set him apart as a wildcard within the narrative.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Portrayal by Choi Seung-hyun</h2>
      <p>
        Choi Seung-hyun's portrayal of Thanos has garnered significant attention. Known for his musical career as T.O.P, Choi's transition to acting, particularly in such a complex role, has been met with critical acclaim. His performance adds depth to the character, making Thanos a memorable addition to the series.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Narrative Impact</h2>
      <p>
        Thanos' presence in "Squid Game" season two introduces a new layer of tension and unpredictability. His actions and interactions with other characters contribute to the series' exploration of human nature under extreme circumstances. The character's development and eventual fate serve as pivotal elements in the season's storyline.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
      <p>
        The introduction of Thanos in "Squid Game" exemplifies the series' commitment to complex character development and engaging storytelling. This fusion of a dystopian narrative with a character reminiscent of Marvel's Titan offers viewers a unique and thought-provoking experience.
      </p>
    </article>
  );
} 