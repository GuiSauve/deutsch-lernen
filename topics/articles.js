export default {
  id: 'articles',
  title: 'Articles (der/die/das)',

  rulesHTML: `
    <div class="page-title">Articles — der, die, das</div>
    <div class="page-subtitle">Definite, indefinite, and negative articles across all four cases</div>

    <div class="card">
        <div class="card-title">📌 Three article systems</div>
        <p>German has three article systems. Each one expresses a different relationship between speaker and noun — but all three follow the <strong>same case logic</strong>.</p>

        <div class="table-wrap mt-3">
            <table>
                <thead><tr><th>System</th><th>English</th><th>Masc. NOM</th><th>Fem. NOM</th><th>Neut. NOM</th></tr></thead>
                <tbody>
                    <tr><td><strong>Definite</strong></td><td>the</td><td class="nom">der</td><td class="nom">die</td><td class="nom">das</td></tr>
                    <tr><td><strong>Indefinite</strong></td><td>a / an</td><td class="nom">ein</td><td class="nom">eine</td><td class="nom">ein</td></tr>
                    <tr><td><strong>Negative</strong></td><td>no / not a</td><td class="nom">kein</td><td class="nom">keine</td><td class="nom">kein</td></tr>
                </tbody>
            </table>
        </div>

        <div class="french-note mt-3">
            <div class="fr-label">🇫🇷 Pour les francophones</div>
            Comme en français, l'allemand distingue articles définis (<em>le/la/les</em> → <em>der/die/das</em>) et indéfinis (<em>un/une</em> → <em>ein/eine</em>). La grande différence : tous les articles <strong>changent de forme selon le cas</strong>. En français, <em>le</em> reste <em>le</em> — en allemand, <em>der</em> peut devenir <em>den, dem</em> ou <em>des</em>.
        </div>
    </div>

    <div class="card">
        <div class="card-title">📋 Definite articles — der / die / das</div>
        <p style="font-size:0.83rem;color:var(--muted);margin-bottom:0.75rem">Used for specific, known nouns: <em>the dog, the teacher…</em></p>

        <div class="table-wrap">
            <table>
                <thead>
                    <tr>
                        <th>Gender</th>
                        <th><span class="badge badge-nom">NOM</span></th>
                        <th><span class="badge badge-akk">AKK</span></th>
                        <th><span class="badge badge-dat">DAT</span></th>
                        <th><span class="badge badge-gen">GEN</span></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Masc.</strong></td>
                        <td class="nom">der</td><td class="akk">den</td><td class="dat">dem</td><td class="gen">des</td>
                    </tr>
                    <tr>
                        <td><strong>Fem.</strong></td>
                        <td class="nom">die</td><td class="akk">die</td><td class="dat">der</td><td class="gen">der</td>
                    </tr>
                    <tr>
                        <td><strong>Neut.</strong></td>
                        <td class="nom">das</td><td class="akk">das</td><td class="dat">dem</td><td class="gen">des</td>
                    </tr>
                    <tr>
                        <td><strong>Plural</strong></td>
                        <td class="nom">die</td><td class="akk">die</td><td class="dat">den</td><td class="gen">der</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p class="mt-2" style="font-size:0.82rem;color:var(--muted)">⚠️ DAT plural always adds <code>-n</code> to the noun too: <em>den Kindern, den Männern, den Hunden</em>.</p>
    </div>

    <div class="card">
        <div class="card-title">📋 Indefinite articles — ein / eine / ein</div>
        <p style="font-size:0.83rem;color:var(--muted);margin-bottom:0.75rem">Used for non-specific nouns: <em>a dog, a teacher…</em> No plural form — use the noun alone or <em>einige</em> (some).</p>

        <div class="table-wrap">
            <table>
                <thead>
                    <tr>
                        <th>Gender</th>
                        <th><span class="badge badge-nom">NOM</span></th>
                        <th><span class="badge badge-akk">AKK</span></th>
                        <th><span class="badge badge-dat">DAT</span></th>
                        <th><span class="badge badge-gen">GEN</span></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Masc.</strong></td>
                        <td class="nom">ein</td><td class="akk">einen</td><td class="dat">einem</td><td class="gen">eines</td>
                    </tr>
                    <tr>
                        <td><strong>Fem.</strong></td>
                        <td class="nom">eine</td><td class="akk">eine</td><td class="dat">einer</td><td class="gen">einer</td>
                    </tr>
                    <tr>
                        <td><strong>Neut.</strong></td>
                        <td class="nom">ein</td><td class="akk">ein</td><td class="dat">einem</td><td class="gen">eines</td>
                    </tr>
                    <tr>
                        <td><strong>Plural</strong></td>
                        <td colspan="4" style="color:var(--muted);font-size:0.83rem">— (no indefinite plural; use noun alone: <em>Kinder spielen</em>)</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="french-note mt-3">
            <div class="fr-label">🇫🇷 Astuce</div>
            Comparez les terminaisons : <em>ein<strong>en</strong></em> (masc. AKK), <em>ein<strong>em</strong></em> (DAT), <em>ein<strong>es</strong></em> (GEN) — ce sont exactement les mêmes terminaisons que l'article défini masculin. La tige change (<em>ein-</em> au lieu de <em>d-</em>), les terminaisons sont identiques.
        </div>
    </div>

    <div class="card">
        <div class="card-title">📋 Negative articles — kein / keine / kein</div>
        <p style="font-size:0.83rem;color:var(--muted);margin-bottom:0.75rem">Used to negate a noun: <em>no dog, not a teacher…</em> Exact same endings as <em>ein/eine/ein</em>, but with a plural.</p>

        <div class="table-wrap">
            <table>
                <thead>
                    <tr>
                        <th>Gender</th>
                        <th><span class="badge badge-nom">NOM</span></th>
                        <th><span class="badge badge-akk">AKK</span></th>
                        <th><span class="badge badge-dat">DAT</span></th>
                        <th><span class="badge badge-gen">GEN</span></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Masc.</strong></td>
                        <td class="nom">kein</td><td class="akk">keinen</td><td class="dat">keinem</td><td class="gen">keines</td>
                    </tr>
                    <tr>
                        <td><strong>Fem.</strong></td>
                        <td class="nom">keine</td><td class="akk">keine</td><td class="dat">keiner</td><td class="gen">keiner</td>
                    </tr>
                    <tr>
                        <td><strong>Neut.</strong></td>
                        <td class="nom">kein</td><td class="akk">kein</td><td class="dat">keinem</td><td class="gen">keines</td>
                    </tr>
                    <tr>
                        <td><strong>Plural</strong></td>
                        <td class="nom">keine</td><td class="akk">keine</td><td class="dat">keinen</td><td class="gen">keiner</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p class="mt-2" style="font-size:0.82rem;color:var(--muted)">💡 <em>kein</em> = <em>nicht + ein</em>. Once you know <em>ein</em>, you know <em>kein</em> — just add <em>k</em>.</p>
    </div>

    <div class="card">
        <div class="card-title">🔍 Noun gender — patterns worth knowing</div>
        <p style="font-size:0.83rem;color:var(--muted);margin-bottom:0.75rem">German noun gender must be memorized with each noun — but these suffixes cover a large share of the vocabulary.</p>

        <div class="table-wrap">
            <table style="font-size:0.83rem">
                <thead><tr><th>Gender</th><th>Suffix</th><th>Examples</th></tr></thead>
                <tbody>
                    <tr>
                        <td rowspan="3"><strong class="nom">Masculine</strong></td>
                        <td><code>-er</code> (agent)</td><td>der Lehrer, der Fahrer, der Bäcker</td>
                    </tr>
                    <tr>
                        <td><code>-ismus, -ist</code></td><td>der Optimismus, der Journalist</td>
                    </tr>
                    <tr>
                        <td><code>-ling</code></td><td>der Frühling, der Lehrling</td>
                    </tr>
                    <tr>
                        <td rowspan="4"><strong class="akk">Feminine</strong></td>
                        <td><code>-ung</code></td><td>die Zeitung, die Meinung, die Wohnung</td>
                    </tr>
                    <tr>
                        <td><code>-heit, -keit</code></td><td>die Freiheit, die Möglichkeit</td>
                    </tr>
                    <tr>
                        <td><code>-schaft</code></td><td>die Gesellschaft, die Freundschaft</td>
                    </tr>
                    <tr>
                        <td><code>-ion, -tion</code></td><td>die Nation, die Information</td>
                    </tr>
                    <tr>
                        <td rowspan="3"><strong class="dat">Neuter</strong></td>
                        <td><code>-chen, -lein</code></td><td>das Mädchen, das Büchlein</td>
                    </tr>
                    <tr>
                        <td><code>-ment, -um</code></td><td>das Instrument, das Museum</td>
                    </tr>
                    <tr>
                        <td><code>-nis</code></td><td>das Ergebnis, das Geheimnis</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="french-note mt-3">
            <div class="fr-label">🇫🇷 Attention aux faux amis de genre</div>
            Le genre grammatical allemand ne correspond pas toujours au français. Exemples pièges : <em>das Mädchen</em> (la fille → neutre !), <em>der Löffel</em> (la cuillère → masculin), <em>die Sonne</em> (le soleil → féminin). Ne transférez pas automatiquement le genre du français.
        </div>
    </div>
  `,

  tipsHTML: `
    <div class="page-title">Tipps &amp; Tricks</div>
    <div class="page-subtitle">How to remember articles and use them correctly</div>

    <div class="tips-grid">
        <div class="tip-card">
            <div class="tip-num">1</div>
            <h3>Learn gender with the noun</h3>
            <p>Never memorize <em>Hund</em> — always memorize <span class="hl">der Hund</span>. The article is part of the word. Treat it as a compound: article + noun = one unit to memorize.</p>
        </div>

        <div class="tip-card">
            <div class="tip-num">2</div>
            <h3>Same endings, different stem</h3>
            <p>The case endings on <em>ein-</em> and <em>kein-</em> are <span class="hl">identical to the definite article</span> (minus NOM masc/neut and AKK neut where it's zero). Learn one table, apply it to all three systems.</p>
        </div>

        <div class="tip-card">
            <div class="tip-num">3</div>
            <h3>kein = nicht + ein</h3>
            <p>To negate a noun with an indefinite article, replace <em>ein</em> with <span class="hl">kein</span>. Same endings, just add <em>k</em>. <em>Ich habe ein Auto → Ich habe <strong>kein</strong> Auto.</em></p>
        </div>

        <div class="tip-card">
            <div class="tip-num">4</div>
            <h3>Spot the suffix</h3>
            <p>Suffix rules cover a large vocabulary: <span class="hl">-ung, -heit, -keit, -schaft, -ion</span> → always feminine. <span class="hl">-chen, -lein</span> → always neuter (even <em>das Mädchen</em>). Memorize the suffix, get the gender for free.</p>
        </div>

        <div class="tip-card">
            <div class="tip-num">5</div>
            <h3>DAT plural always adds -n</h3>
            <p>In Dativ plural, the noun itself gets an extra <span class="hl">-n</span> if it doesn't already end in one: <em>die Kinder → den Kindern · die Männer → den Männern</em>. The article alone isn't enough.</p>
        </div>

        <div class="tip-card">
            <div class="tip-num">6</div>
            <h3>GEN masculine/neuter: noun gets -s</h3>
            <p>In Genitiv, masculine and neuter nouns add <span class="hl">-s or -es</span> to themselves: <em>des Mannes, des Kindes, des Autos</em>. Feminine and plural nouns don't change.</p>
        </div>
    </div>

    <div class="card mt-4">
        <div class="card-title">⚡ The ending pattern at a glance</div>
        <p style="font-size:0.83rem;margin-bottom:0.75rem">The definite, indefinite, and negative articles all share the same <strong>endings</strong>. The stem changes, not the endings.</p>

        <div class="table-wrap">
            <table style="font-size:0.83rem">
                <thead>
                    <tr>
                        <th></th>
                        <th><span class="badge badge-nom">NOM</span></th>
                        <th><span class="badge badge-akk">AKK</span></th>
                        <th><span class="badge badge-dat">DAT</span></th>
                        <th><span class="badge badge-gen">GEN</span></th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td><strong>Masc.</strong></td><td>-er / —</td><td><strong>-en</strong></td><td><strong>-em</strong></td><td><strong>-es</strong></td></tr>
                    <tr><td><strong>Fem.</strong></td><td>-e</td><td>-e</td><td><strong>-er</strong></td><td><strong>-er</strong></td></tr>
                    <tr><td><strong>Neut.</strong></td><td>-as / —</td><td>-as / —</td><td><strong>-em</strong></td><td><strong>-es</strong></td></tr>
                    <tr><td><strong>Plural</strong></td><td>-e</td><td>-e</td><td><strong>-en</strong></td><td><strong>-er</strong></td></tr>
                </tbody>
            </table>
        </div>
        <p class="mt-2" style="font-size:0.82rem;color:var(--muted)">The bolded endings are consistent across <em>der/ein/kein</em>. NOM masc and neut have irregularities (—) in <em>ein/kein</em> because there's no ending to signal gender — which is why <em>ein</em> is ambiguous there.</p>
    </div>

    <div class="card">
        <div class="card-title">🚫 Common Mistakes</div>
        <ul>
            <li><strong>Forgetting the article with the noun:</strong> Memorize <em>der Hund</em>, not just <em>Hund</em>.</li>
            <li><strong>Using <em>nicht</em> instead of <em>kein</em>:</strong> ❌ <em>Ich habe nicht ein Auto</em> → ✅ <em>Ich habe kein Auto</em>. <em>kein</em> replaces the article.</li>
            <li><strong>Applying French gender:</strong> <em>das Mädchen</em> is neuter, not feminine. <em>die Sonne</em> is feminine, not masculine. Don't transfer.</li>
            <li><strong>Forgetting -n on DAT plural nouns:</strong> ❌ <em>mit den Kinder</em> → ✅ <em>mit den Kindern</em>.</li>
            <li><strong>Skipping the noun -s in GEN:</strong> ❌ <em>des Mann</em> → ✅ <em>des Mannes</em>.</li>
        </ul>
    </div>
  `,

  exercises: {
    recognition: {
      type: 'multichoice',
      label: 'What is the gender of this noun?',
      items: [
        { q: 'Hund (dog)', opts: ['der', 'die', 'das'], ans: 0, xp: '<strong>der Hund</strong> — masculine. No suffix rule here; must be memorized. Always learn the article with the noun.' },
        { q: 'Zeitung (newspaper)', opts: ['der', 'die', 'das'], ans: 1, xp: '<strong>die Zeitung</strong> — feminine. Nouns ending in <strong>-ung</strong> are always feminine.' },
        { q: 'Mädchen (girl)', opts: ['der', 'die', 'das'], ans: 2, xp: '<strong>das Mädchen</strong> — neuter! Nouns ending in <strong>-chen</strong> are always neuter, regardless of natural gender.' },
        { q: 'Freiheit (freedom)', opts: ['der', 'die', 'das'], ans: 1, xp: '<strong>die Freiheit</strong> — feminine. Nouns ending in <strong>-heit</strong> are always feminine.' },
        { q: 'Auto (car)', opts: ['der', 'die', 'das'], ans: 2, xp: '<strong>das Auto</strong> — neuter. Many short loanwords ending in a vowel are neuter.' },
        { q: 'Lehrer (teacher, male)', opts: ['der', 'die', 'das'], ans: 0, xp: '<strong>der Lehrer</strong> — masculine. Agent nouns ending in <strong>-er</strong> are typically masculine.' },
        { q: 'Möglichkeit (possibility)', opts: ['der', 'die', 'das'], ans: 1, xp: '<strong>die Möglichkeit</strong> — feminine. Nouns ending in <strong>-keit</strong> are always feminine.' },
        { q: 'Buch (book)', opts: ['der', 'die', 'das'], ans: 2, xp: '<strong>das Buch</strong> — neuter. Must be memorized; no obvious suffix rule.' },
        { q: 'Gesellschaft (society)', opts: ['der', 'die', 'das'], ans: 1, xp: '<strong>die Gesellschaft</strong> — feminine. Nouns ending in <strong>-schaft</strong> are always feminine.' },
        { q: 'Frühling (spring)', opts: ['der', 'die', 'das'], ans: 0, xp: '<strong>der Frühling</strong> — masculine. Nouns ending in <strong>-ling</strong> are masculine.' },
        { q: 'Instrument (instrument)', opts: ['der', 'die', 'das'], ans: 2, xp: '<strong>das Instrument</strong> — neuter. Nouns ending in <strong>-ment</strong> are neuter.' },
        { q: 'Nation (nation)', opts: ['der', 'die', 'das'], ans: 1, xp: '<strong>die Nation</strong> — feminine. Nouns ending in <strong>-ion</strong> are always feminine.' },
        { q: 'Tisch (table)', opts: ['der', 'die', 'das'], ans: 0, xp: '<strong>der Tisch</strong> — masculine. Must be memorized.' },
        { q: 'Freundschaft (friendship)', opts: ['der', 'die', 'das'], ans: 1, xp: '<strong>die Freundschaft</strong> — feminine. The <strong>-schaft</strong> suffix always signals feminine.' },
        { q: 'Geheimnis (secret)', opts: ['der', 'die', 'das'], ans: 2, xp: '<strong>das Geheimnis</strong> — neuter. Nouns ending in <strong>-nis</strong> are typically neuter.' },
        { q: 'Bäcker (baker)', opts: ['der', 'die', 'das'], ans: 0, xp: '<strong>der Bäcker</strong> — masculine. Agent nouns (people who do something) ending in <strong>-er</strong> are masculine.' },
      ],
    },

    cases: {
      items: [
        { q: 'Ich sehe _____ Hund. (def., masc.)', case: 'Akkusativ', badge: 'akk', opts: ['der Hund', 'den Hund', 'dem Hund', 'des Hundes'], ans: 1, xp: 'Definite, masculine, Akkusativ: <strong>der → den</strong>.' },
        { q: '_____ Frau kommt gleich. (def., fem.)', case: 'Nominativ', badge: 'nom', opts: ['Die Frau', 'Der Frau', 'Den Frau', 'Das Frau'], ans: 0, xp: 'Definite, feminine, Nominativ: <strong>die</strong>.' },
        { q: 'Er gibt _____ Kind ein Buch. (def., neut.)', case: 'Dativ', badge: 'dat', opts: ['das Kind', 'den Kind', 'dem Kind', 'des Kindes'], ans: 2, xp: 'Definite, neuter, Dativ: <strong>das → dem</strong>.' },
        { q: 'Ich habe _____ Hund. (indef., masc.)', case: 'Akkusativ', badge: 'akk', opts: ['ein Hund', 'einen Hund', 'einem Hund', 'eines Hundes'], ans: 1, xp: 'Indefinite, masculine, Akkusativ: <strong>ein → einen</strong>.' },
        { q: '_____ Frau wartet draußen. (indef., fem.)', case: 'Nominativ', badge: 'nom', opts: ['Ein Frau', 'Eine Frau', 'Einer Frau', 'Einen Frau'], ans: 1, xp: 'Indefinite, feminine, Nominativ: <strong>eine</strong>.' },
        { q: 'Das ist das Auto _____ Mannes. (def., masc.)', case: 'Genitiv', badge: 'gen', opts: ['der Mann', 'den Mann', 'dem Mann', 'des Mannes'], ans: 3, xp: 'Definite, masculine, Genitiv: <strong>der → des</strong> + noun gets -es.' },
        { q: 'Ich helfe _____ Frau. (def., fem.)', case: 'Dativ', badge: 'dat', opts: ['die Frau', 'der Frau', 'den Frau', 'das Frau'], ans: 1, xp: 'Definite, feminine, Dativ: <strong>die → der</strong>.' },
        { q: 'Er hat _____ Auto. (indef., neut.)', case: 'Akkusativ', badge: 'akk', opts: ['ein Auto', 'einen Auto', 'einem Auto', 'eines Autos'], ans: 0, xp: 'Indefinite, neuter, Akkusativ: <strong>ein</strong> (same as NOM — neuter doesn\'t change in AKK).' },
        { q: 'Das ist die Tasche _____ Lehrerin. (def., fem.)', case: 'Genitiv', badge: 'gen', opts: ['die Lehrerin', 'der Lehrerin', 'den Lehrerin', 'dem Lehrerin'], ans: 1, xp: 'Definite, feminine, Genitiv: <strong>die → der</strong>.' },
        { q: 'Ich schreibe _____ Freund. (indef., masc.)', case: 'Dativ', badge: 'dat', opts: ['ein Freund', 'einen Freund', 'einem Freund', 'eines Freundes'], ans: 2, xp: 'Indefinite, masculine, Dativ: <strong>ein → einem</strong>.' },
        { q: '_____ Kinder spielen draußen. (def., pl.)', case: 'Nominativ', badge: 'nom', opts: ['Der Kinder', 'Den Kinder', 'Die Kinder', 'Dem Kinder'], ans: 2, xp: 'Definite, plural, Nominativ: <strong>die</strong>.' },
        { q: 'Sie hilft _____ Kind. (indef., neut.)', case: 'Dativ', badge: 'dat', opts: ['ein Kind', 'eine Kind', 'einem Kind', 'eines Kindes'], ans: 2, xp: 'Indefinite, neuter, Dativ: <strong>ein → einem</strong>.' },
      ],
    },

    sentences: {
      items: [
        { q: 'Ich habe _____ Auto, aber er hat keins.', case: 'Akkusativ', badge: 'akk', opts: ['ein', 'einen', 'einem', 'eines'], ans: 0, xp: '"haben" takes Akkusativ. Neuter AKK indefinite: <strong>ein</strong> (same as NOM — neuter doesn\'t change).' },
        { q: '_____ Hund bellt die ganze Nacht.', case: 'Nominativ', badge: 'nom', opts: ['Der', 'Den', 'Dem', 'Ein'], ans: 0, xp: 'The dog is the subject → Nominativ. Masculine NOM definite: <strong>der</strong>.' },
        { q: 'Er hat _____ Schwester, aber keine Brüder.', case: 'Akkusativ', badge: 'akk', opts: ['eine', 'einen', 'einem', 'einer'], ans: 0, xp: '"haben" takes Akkusativ. Feminine AKK indefinite: <strong>eine</strong> (same as NOM — feminine AKK stays eine).' },
        { q: 'Wir danken _____ Lehrerin für die Hilfe.', case: 'Dativ', badge: 'dat', opts: ['die', 'der', 'den', 'das'], ans: 1, xp: '"danken" takes Dativ. Feminine DAT definite: <strong>die → der</strong>.' },
        { q: 'Das ist das Büro _____ Direktors.', case: 'Genitiv', badge: 'gen', opts: ['der', 'den', 'dem', 'des'], ans: 3, xp: 'Possession → Genitiv. Masculine GEN definite: <strong>der → des</strong> + noun gets -s.' },
        { q: 'Sie kauft _____ neues Fahrrad.', case: 'Akkusativ', badge: 'akk', opts: ['ein', 'einen', 'einem', 'eine'], ans: 0, xp: '"kaufen" takes Akkusativ. Neuter AKK indefinite: <strong>ein</strong>.' },
        { q: 'Er spielt mit _____ Kindern.', case: 'Dativ', badge: 'dat', opts: ['die', 'der', 'den', 'des'], ans: 2, xp: '"mit" always takes Dativ. Plural DAT definite: <strong>die → den</strong>. Note: the noun also gets -n → Kindern.' },
        { q: 'Ich kenne _____ Mann nicht.', case: 'Akkusativ', badge: 'akk', opts: ['der', 'den', 'dem', 'des'], ans: 1, xp: '"kennen" takes Akkusativ. Masculine AKK definite: <strong>der → den</strong>.' },
        { q: 'Sie hat _____ Lösung gefunden.', case: 'Akkusativ', badge: 'akk', opts: ['ein', 'eine', 'einer', 'einem'], ans: 1, xp: '"finden" takes Akkusativ. Feminine AKK indefinite: <strong>eine</strong>.' },
        { q: 'Das Spielzeug gehört _____ Kind.', case: 'Dativ', badge: 'dat', opts: ['das', 'des', 'dem', 'die'], ans: 2, xp: '"gehören" takes Dativ. Neuter DAT definite: <strong>das → dem</strong>.' },
      ],
    },
  },
};
