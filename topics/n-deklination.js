export default {
  id: 'n-deklination',
  title: 'N-Deklination',

  rulesHTML: `
    <div class="page-title">N-Deklination</div>
    <div class="page-subtitle">Die schwache Deklination maskuliner Substantive</div>

    <div class="card">
        <div class="card-title">📌 What is it?</div>
        <p>The <strong>N-Deklination</strong> (weak declension) is a special rule for a group of masculine nouns. Instead of the regular genitive <code>-s/-es</code>, these nouns add <strong>-n</strong> or <strong>-en</strong> to <em>every case except nominative singular</em>.</p>

        <div class="french-note mt-3">
            <div class="fr-label">🇫🇷 Pour les francophones</div>
            En français, les noms ne changent jamais de forme selon leur rôle grammatical — c'est les prépositions (<em>de, à, par</em>) qui font ce travail. En allemand, le nom lui-même change. La N-Deklination est un groupe de noms masculins qui appliquent une règle très régulière : on ajoute <strong>-en</strong> à tous les cas sauf au nominatif singulier.
        </div>

        <p class="mt-3"><strong>The core rule:</strong> identify the noun as n-declension, then add <code>-en</code> everywhere except nominative singular. One suffix, all cases.</p>
    </div>

    <div class="card">
        <div class="card-title">📊 Deklinationstabelle</div>
        <p style="font-size:0.82rem; color:var(--muted)">Example: <strong>der Mensch</strong> (human being) &nbsp;·&nbsp; <strong>der Student</strong></p>

        <div class="table-wrap">
            <table>
                <thead>
                    <tr><th>Fall</th><th>Singular</th><th>Plural</th><th>Endung (sg)</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td><span class="badge badge-nom">NOM</span></td>
                        <td class="nom">der Mensch &nbsp;/&nbsp; der Student</td>
                        <td class="nom">die Menschen &nbsp;/&nbsp; die Studenten</td>
                        <td>—</td>
                    </tr>
                    <tr>
                        <td><span class="badge badge-akk">AKK</span></td>
                        <td class="akk">den Menschen &nbsp;/&nbsp; den Studenten</td>
                        <td class="akk">die Menschen &nbsp;/&nbsp; die Studenten</td>
                        <td><strong>-en</strong></td>
                    </tr>
                    <tr>
                        <td><span class="badge badge-dat">DAT</span></td>
                        <td class="dat">dem Menschen &nbsp;/&nbsp; dem Studenten</td>
                        <td class="dat">den Menschen &nbsp;/&nbsp; den Studenten</td>
                        <td><strong>-en</strong></td>
                    </tr>
                    <tr>
                        <td><span class="badge badge-gen">GEN</span></td>
                        <td class="gen">des Menschen &nbsp;/&nbsp; des Studenten</td>
                        <td class="gen">der Menschen &nbsp;/&nbsp; der Studenten</td>
                        <td><strong>-en</strong></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p class="mt-2" style="font-size:0.82rem; color:var(--muted)">⚠️ No <code>-s</code> in the genitive! Regular masculine: <em>des Hund<strong>es</strong></em> — n-declension: <em>des Menschen</em>.</p>
    </div>

    <div class="card">
        <div class="card-title">🔍 Which nouns? (3 groups)</div>

        <div>
            <p><strong><span class="tag tag-a">Gruppe A</span> Masculine nouns ending in <code>-e</code></strong></p>
            <p class="mt-2" style="font-size:0.83rem">The easiest group to spot. Nearly every masculine noun ending in <code>-e</code> is n-declension.</p>
            <div class="mt-2">
                <div class="example-row"><span class="ex-de">der Junge</span><span class="ex-en">boy</span></div>
                <div class="example-row"><span class="ex-de">der Löwe</span><span class="ex-en">lion</span></div>
                <div class="example-row"><span class="ex-de">der Kollege</span><span class="ex-en">colleague</span></div>
                <div class="example-row"><span class="ex-de">der Zeuge</span><span class="ex-en">witness</span></div>
                <div class="example-row"><span class="ex-de">der Affe</span><span class="ex-en">monkey / ape</span></div>
                <div class="example-row"><span class="ex-de">der Riese</span><span class="ex-en">giant</span></div>
                <div class="example-row"><span class="ex-de">der Neffe</span><span class="ex-en">nephew</span></div>
            </div>
        </div>

        <div class="divider"></div>

        <div>
            <p><strong><span class="tag tag-b">Gruppe B</span> International masculine nouns with Latin/Greek suffixes</strong></p>
            <p class="mt-2" style="font-size:0.83rem">If a masculine noun ends in one of these suffixes, it is n-declension. No need to memorize each noun — just the suffix.</p>

            <div class="table-wrap mt-2">
                <table style="font-size:0.83rem">
                    <thead><tr><th>Suffix</th><th>Examples</th></tr></thead>
                    <tbody>
                        <tr><td><code>-ent</code></td><td>Student, Präsident, Patient, Assistent</td></tr>
                        <tr><td><code>-ist</code></td><td>Polizist, Journalist, Optimist, Terrorist</td></tr>
                        <tr><td><code>-ant</code></td><td>Elefant, Demonstrant, Praktikant, Lieferant</td></tr>
                        <tr><td><code>-at</code></td><td>Soldat, Kandidat, Demokrat, Bürokrat</td></tr>
                        <tr><td><code>-oge/-loge</code></td><td>Biologe, Psychologe, Soziologe</td></tr>
                        <tr><td><code>-and</code></td><td>Doktorand, Diplomand</td></tr>
                        <tr><td><code>-nom</code></td><td>Astronom, Ökonom</td></tr>
                        <tr><td><code>-soph</code></td><td>Philosoph</td></tr>
                    </tbody>
                </table>
            </div>

            <div class="french-note mt-3">
                <div class="fr-label">🇫🇷 Astuce franco-allemande</div>
                Ces mots ressemblent à leurs équivalents français ! <em>Student → étudiant · Polizist → policier · Biologe → biologiste · Philosoph → philosophe</em>. Si le mot français se termine en <strong>-iste, -ent, -ant</strong> et que le mot allemand est masculin → c'est probablement une N-Deklination.
            </div>
        </div>

        <div class="divider"></div>

        <div>
            <p><strong><span class="tag tag-c">Gruppe C</span> Other masculines — must be memorized</strong></p>
            <p class="mt-2" style="font-size:0.83rem">No suffix pattern; just learn them.</p>
            <div class="mt-2">
                <div class="example-row"><span class="ex-de">der Mensch</span><span class="ex-en">human being</span></div>
                <div class="example-row"><span class="ex-de">der Nachbar</span><span class="ex-en">neighbour</span></div>
                <div class="example-row"><span class="ex-de">der Bauer</span><span class="ex-en">farmer</span></div>
                <div class="example-row"><span class="ex-de">der Held</span><span class="ex-en">hero</span></div>
                <div class="example-row"><span class="ex-de">der Fürst</span><span class="ex-en">prince</span></div>
                <div class="example-row"><span class="ex-de">der Graf</span><span class="ex-en">count</span></div>
                <div class="example-row"><span class="ex-de">der Herr</span><span class="ex-en">sir / Mr. — special case below!</span></div>
            </div>
        </div>
    </div>

    <div class="card">
        <div class="card-title">⚠️ Sonderfälle (Special Cases)</div>

        <p><strong><span class="tag tag-sp">Sonderfall 1</span> der Herr</strong></p>
        <p class="mt-2" style="font-size:0.83rem">Uses <code>-n</code> (not <code>-en</code>) in singular, and <code>-en</code> in plural.</p>
        <div class="table-wrap mt-2">
            <table style="font-size:0.83rem">
                <thead><tr><th>Fall</th><th>Singular</th><th>Plural</th></tr></thead>
                <tbody>
                    <tr><td><span class="badge badge-nom">NOM</span></td><td class="nom">der Herr</td><td class="nom">die Herren</td></tr>
                    <tr><td><span class="badge badge-akk">AKK</span></td><td class="akk">den Herr<strong>n</strong></td><td class="akk">die Herren</td></tr>
                    <tr><td><span class="badge badge-dat">DAT</span></td><td class="dat">dem Herr<strong>n</strong></td><td class="dat">den Herren</td></tr>
                    <tr><td><span class="badge badge-gen">GEN</span></td><td class="gen">des Herr<strong>n</strong></td><td class="gen">der Herren</td></tr>
                </tbody>
            </table>
        </div>

        <div class="divider"></div>

        <p><strong><span class="tag tag-sp">Sonderfall 2</span> Gemischte Deklination</strong></p>
        <p class="mt-2" style="font-size:0.83rem">A handful of nouns behave like n-declension in AKK and DAT, but add <code>-ns</code> in the genitive (not <code>-en</code>). These are mostly abstract nouns.</p>
        <div class="table-wrap mt-2">
            <table style="font-size:0.83rem">
                <thead><tr><th>NOM</th><th>AKK</th><th>DAT</th><th>GEN</th></tr></thead>
                <tbody>
                    <tr>
                        <td class="nom">der Name</td>
                        <td class="akk">den Namen</td>
                        <td class="dat">dem Namen</td>
                        <td class="gen">des Namen<strong>s</strong></td>
                    </tr>
                    <tr>
                        <td class="nom">der Gedanke</td>
                        <td class="akk">den Gedanken</td>
                        <td class="dat">dem Gedanken</td>
                        <td class="gen">des Gedanken<strong>s</strong></td>
                    </tr>
                    <tr>
                        <td class="nom">der Glaube</td>
                        <td class="akk">den Glauben</td>
                        <td class="dat">dem Glauben</td>
                        <td class="gen">des Glauben<strong>s</strong></td>
                    </tr>
                    <tr>
                        <td class="nom">der Wille</td>
                        <td class="akk">den Willen</td>
                        <td class="dat">dem Willen</td>
                        <td class="gen">des Willen<strong>s</strong></td>
                    </tr>
                    <tr>
                        <td class="nom">der Friede</td>
                        <td class="akk">den Frieden</td>
                        <td class="dat">dem Frieden</td>
                        <td class="gen">des Frieden<strong>s</strong></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  `,

  tipsHTML: `
    <div class="page-title">Tipps &amp; Tricks</div>
    <div class="page-subtitle">Shortcuts to identify and use n-declension confidently</div>

    <div class="tips-grid">
        <div class="tip-card">
            <div class="tip-num">1</div>
            <h3>The <code>-e</code> radar</h3>
            <p>If a masculine noun ends in <span class="hl">-e</span>, it is almost certainly n-declension. Scan for <code>-e</code> first — it covers a huge portion of the group: <em>Junge, Löwe, Kollege, Zeuge…</em></p>
        </div>

        <div class="tip-card">
            <div class="tip-num">2</div>
            <h3>Spot the Latin suffixes</h3>
            <p>Memorize the suffixes, not the words: <span class="hl">-ent, -ist, -ant, -at, -oge, -and</span>. Any masculine noun ending in one of these is n-declension. You get hundreds of words for the price of six patterns.</p>
        </div>

        <div class="tip-card">
            <div class="tip-num">3</div>
            <h3>"Add -en everywhere"</h3>
            <p>Once you know the noun is n-declension, the rule is beautifully simple: <span class="hl">add -en to every case except nominative singular</span>. No case-by-case variation — just always -en.</p>
        </div>

        <div class="tip-card">
            <div class="tip-num">4</div>
            <h3>No genitive <code>-s</code></h3>
            <p>Regular nouns: <em>des Hund<strong>es</strong></em>. N-declension: <em>des Menschen</em>. The missing <span class="hl">-s</span> in the genitive is an instant giveaway. Use the genitive as your quick test.</p>
        </div>

        <div class="tip-card">
            <div class="tip-num">5</div>
            <h3>Gender check first</h3>
            <p>N-declension is <span class="hl">masculine only</span>. Feminine and neuter nouns are never affected. Before applying the rule, confirm it's <em>der</em> — not <em>die</em> or <em>das</em>.</p>
        </div>

        <div class="tip-card">
            <div class="tip-num">6</div>
            <h3>Watch the traps</h3>
            <p><em>der Mann, der Vater, der Bruder</em> — they refer to people but are <span class="hl">NOT</span> n-declension. Don't assume every "human noun" is weak. Only the ones in the three groups qualify.</p>
        </div>
    </div>

    <div class="card mt-4">
        <div class="card-title">🇫🇷 Comparaison français — allemand</div>

        <div class="french-note">
            <div class="fr-label">Concept clé</div>
            Le français exprime les fonctions grammaticales avec des prépositions (<em>de, à</em>) ; l'allemand les exprime en changeant la forme du nom et de l'article. La N-Deklination est le groupe de noms masculins qui marquent ces fonctions avec un simple <strong>-en</strong>.
        </div>

        <div class="table-wrap mt-3">
            <table>
                <thead>
                    <tr><th>Fonction</th><th>Français</th><th>Allemand</th><th>Cas</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Sujet</td>
                        <td>L'<strong>étudiant</strong> travaille.</td>
                        <td class="nom">Der <strong>Student</strong> arbeitet.</td>
                        <td><span class="badge badge-nom">NOM</span></td>
                    </tr>
                    <tr>
                        <td>Objet direct</td>
                        <td>Je vois l'<strong>étudiant</strong>.</td>
                        <td class="akk">Ich sehe den <strong>Studenten</strong>.</td>
                        <td><span class="badge badge-akk">AKK</span></td>
                    </tr>
                    <tr>
                        <td>Objet indirect</td>
                        <td>Je parle <strong>à l'</strong>étudiant.</td>
                        <td class="dat">Ich spreche dem <strong>Studenten</strong>.</td>
                        <td><span class="badge badge-dat">DAT</span></td>
                    </tr>
                    <tr>
                        <td>Possession</td>
                        <td>Le livre <strong>de l'</strong>étudiant.</td>
                        <td class="gen">Das Buch des <strong>Studenten</strong>.</td>
                        <td><span class="badge badge-gen">GEN</span></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <p class="mt-3" style="font-size:0.83rem; color:var(--muted)">💡 Both the article (<em>der → den/dem/des</em>) AND the noun ending change in German — you get two signals for the case at the same time.</p>
    </div>

    <div class="card">
        <div class="card-title">🚫 Common Mistakes</div>
        <ul>
            <li><strong>Genitive with -s:</strong> ❌ <em>des Studentes</em> → ✅ <em>des Studenten</em></li>
            <li><strong>Applying it to feminine nouns:</strong> <em>die Katze, die Straße</em> are feminine — completely different pattern.</li>
            <li><strong>Forgetting it in AKK:</strong> Accusative changes too — ❌ <em>ich sehe den Student</em> → ✅ <em>den Studenten</em>.</li>
            <li><strong>der Herr confusion:</strong> It takes <code>-n</code>, not <code>-en</code> in singular (den Herrn, not den Herren).</li>
            <li><strong>Mixed declension genitive:</strong> <em>der Name → des Namen<strong>s</strong></em>, not <em>des Namen</em>.</li>
            <li><strong>der Mann / der Vater:</strong> Both refer to men but are NOT n-declension — they are regular.</li>
        </ul>
    </div>
  `,

  exercises: {
    recognition: {
      label: 'N-Deklination or not?',
      questionTemplate: 'Is <em>{noun}</em> an n-declension noun?',
      yesLabel: '✅ Ja — n-declension',
      noLabel: '❌ Nein — regular',
      items: [
        { noun:'der Student',    isN:true,  xp:'Ends in <strong>-ent</strong> (Latin suffix) → n-declension. → den Studenten, dem Studenten, des Studenten.' },
        { noun:'der Hund',       isN:false, xp:'"der Hund" (dog) is a regular masculine noun. Genitive: des Hund<strong>es</strong>, not -en.' },
        { noun:'der Junge',      isN:true,  xp:'Ends in <strong>-e</strong> and is masculine → n-declension. → den Jung<strong>en</strong>.' },
        { noun:'der Tisch',      isN:false, xp:'"der Tisch" (table) is regular. Genitive: des Tisch<strong>es</strong>.' },
        { noun:'der Elefant',    isN:true,  xp:'Ends in <strong>-ant</strong> → n-declension. → den Elefant<strong>en</strong>.' },
        { noun:'der Vater',      isN:false, xp:'"der Vater" (father) refers to a person but is NOT n-declension — it is regular. Genitive: des Vaters.' },
        { noun:'der Polizist',   isN:true,  xp:'Ends in <strong>-ist</strong> → n-declension. → den Polizist<strong>en</strong>.' },
        { noun:'der Baum',       isN:false, xp:'"der Baum" (tree) is regular. Genitive: des Baum<strong>es</strong>.' },
        { noun:'der Kollege',    isN:true,  xp:'Ends in <strong>-e</strong> and is masculine → n-declension. → den Kolleg<strong>en</strong>.' },
        { noun:'der Name',       isN:true,  xp:'"der Name" follows the mixed n-declension: den Namen, dem Namen, but des Namen<strong>s</strong> in genitive.' },
        { noun:'der Mann',       isN:false, xp:'"der Mann" (man) is regular despite meaning "man". Genitive: des Mann<strong>es</strong>.' },
        { noun:'der Präsident',  isN:true,  xp:'Ends in <strong>-ent</strong> → n-declension. → den Präsident<strong>en</strong>.' },
        { noun:'der Mensch',     isN:true,  xp:'"der Mensch" is a Gruppe C n-declension noun (must be memorized). → den Menschen.' },
        { noun:'der Bruder',     isN:false, xp:'"der Bruder" (brother) is regular. Genitive: des Bruder<strong>s</strong>.' },
        { noun:'der Löwe',       isN:true,  xp:'Ends in <strong>-e</strong> and is masculine → n-declension. → den Löw<strong>en</strong>.' },
        { noun:'der Kandidat',   isN:true,  xp:'Ends in <strong>-at</strong> → n-declension. → den Kandidat<strong>en</strong>.' },
        { noun:'der Zeuge',      isN:true,  xp:'Ends in <strong>-e</strong> and is masculine → n-declension. → den Zeug<strong>en</strong>.' },
        { noun:'der Vogel',      isN:false, xp:'"der Vogel" (bird) is regular. Genitive: des Vogels.' },
      ],
    },

    cases: {
      items: [
        {
          q: 'Ich sehe _____ (der Junge) auf der Straße.',
          case: 'Akkusativ', badge: 'akk',
          opts: ['der Junge', 'den Jungen', 'dem Jungen', 'des Jungen'],
          ans: 1,
          xp: '"sehen" takes Akkusativ. "der Junge" is n-declension → den Jung<strong>en</strong>.'
        },
        {
          q: 'Das Buch gehört _____ (der Student).',
          case: 'Dativ', badge: 'dat',
          opts: ['der Student', 'den Studenten', 'dem Studenten', 'des Studenten'],
          ans: 2,
          xp: '"gehören" (to belong to) takes Dativ. → dem Student<strong>en</strong>.'
        },
        {
          q: 'Das ist das Auto _____ (der Präsident).',
          case: 'Genitiv', badge: 'gen',
          opts: ['der Präsident', 'den Präsidenten', 'dem Präsidenten', 'des Präsidenten'],
          ans: 3,
          xp: 'Possession → Genitiv. No -s in n-declension genitive: des Präsident<strong>en</strong> (not des Präsidentes!).'
        },
        {
          q: '_____ (der Mensch) lebt in Gesellschaft.',
          case: 'Nominativ', badge: 'nom',
          opts: ['Der Mensch', 'Den Menschen', 'Dem Menschen', 'Des Menschen'],
          ans: 0,
          xp: 'Subject of the sentence → Nominativ. N-declension nouns do NOT add -en in nominative singular.'
        },
        {
          q: 'Ich helfe _____ (der Kollege) bei der Arbeit.',
          case: 'Dativ', badge: 'dat',
          opts: ['der Kollege', 'den Kollegen', 'dem Kollegen', 'des Kollegen'],
          ans: 2,
          xp: '"helfen" always takes Dativ. → dem Kolleg<strong>en</strong>.'
        },
        {
          q: 'Wir kennen _____ (der Biologe) schon lange.',
          case: 'Akkusativ', badge: 'akk',
          opts: ['der Biologe', 'den Biologen', 'dem Biologen', 'des Biologen'],
          ans: 1,
          xp: '"kennen" takes Akkusativ. → den Biolog<strong>en</strong>.'
        },
        {
          q: 'Die Meinung _____ (der Zeuge) ist wichtig.',
          case: 'Genitiv', badge: 'gen',
          opts: ['der Zeuge', 'den Zeugen', 'dem Zeugen', 'des Zeugen'],
          ans: 3,
          xp: 'Possession → Genitiv. → des Zeug<strong>en</strong>.'
        },
        {
          q: 'Sie schreibt _____ (der Journalist) eine E-Mail.',
          case: 'Dativ', badge: 'dat',
          opts: ['der Journalist', 'den Journalisten', 'dem Journalisten', 'des Journalisten'],
          ans: 2,
          xp: 'Indirect object (to whom?) → Dativ. → dem Journalist<strong>en</strong>.'
        },
        {
          q: '_____ (der Elefant) ist das größte Landtier.',
          case: 'Nominativ', badge: 'nom',
          opts: ['Der Elefant', 'Den Elefanten', 'Dem Elefanten', 'Des Elefanten'],
          ans: 0,
          xp: 'Subject → Nominativ. No -en added in nominative singular.'
        },
        {
          q: 'Das Kind folgt _____ (der Held) überall hin.',
          case: 'Dativ', badge: 'dat',
          opts: ['der Held', 'den Helden', 'dem Helden', 'des Helden'],
          ans: 2,
          xp: '"folgen" takes Dativ. → dem Held<strong>en</strong>.'
        },
        {
          q: 'Er fragt _____ (der Polizist) nach dem Weg.',
          case: 'Akkusativ', badge: 'akk',
          opts: ['der Polizist', 'den Polizisten', 'dem Polizisten', 'des Polizisten'],
          ans: 1,
          xp: '"fragen" takes Akkusativ. → den Polizist<strong>en</strong>.'
        },
        {
          q: 'Das Haus _____ (der Nachbar) steht leer.',
          case: 'Genitiv', badge: 'gen',
          opts: ['der Nachbar', 'den Nachbarn', 'dem Nachbarn', 'des Nachbarn'],
          ans: 3,
          xp: 'Possession → Genitiv. "der Nachbar" takes -n (like Herr): des Nachbar<strong>n</strong>.'
        },
      ],
    },

    sentences: {
      items: [
        {
          q: 'Kennen Sie _____ (der Polizist)?',
          case: 'Akkusativ', badge: 'akk',
          opts: ['der Polizist', 'den Polizisten', 'dem Polizisten', 'des Polizisten'],
          ans: 1,
          xp: '"kennen" takes Akkusativ. The suffix -ist signals n-declension → den Polizist<strong>en</strong>.'
        },
        {
          q: 'Das Fahrrad gehört _____ (der Nachbar).',
          case: 'Dativ', badge: 'dat',
          opts: ['der Nachbar', 'den Nachbarn', 'dem Nachbarn', 'des Nachbarn'],
          ans: 2,
          xp: '"gehören" takes Dativ. "der Nachbar" is n-declension with -n (not -en): dem Nachbar<strong>n</strong>.'
        },
        {
          q: '_____ (der Zeuge) beschreibt den Täter.',
          case: 'Nominativ', badge: 'nom',
          opts: ['Der Zeuge', 'Den Zeugen', 'Dem Zeugen', 'Des Zeugen'],
          ans: 0,
          xp: 'Subject → Nominativ. No -en in nominative singular: der Zeuge (unchanged).'
        },
        {
          q: 'Wir vertrauen _____ (der Präsident).',
          case: 'Dativ', badge: 'dat',
          opts: ['der Präsident', 'den Präsidenten', 'dem Präsidenten', 'des Präsidenten'],
          ans: 2,
          xp: '"vertrauen" (to trust) takes Dativ. → dem Präsident<strong>en</strong>.'
        },
        {
          q: 'Hast du _____ (der Student) gesehen?',
          case: 'Akkusativ', badge: 'akk',
          opts: ['der Student', 'den Studenten', 'dem Studenten', 'des Studenten'],
          ans: 1,
          xp: '"sehen" takes Akkusativ. → den Student<strong>en</strong>.'
        },
        {
          q: 'Die Aussage _____ (der Zeuge) war glaubwürdig.',
          case: 'Genitiv', badge: 'gen',
          opts: ['der Zeuge', 'den Zeugen', 'dem Zeugen', 'des Zeugen'],
          ans: 3,
          xp: 'Possession → Genitiv: des Zeug<strong>en</strong>.'
        },
        {
          q: 'Er dankt _____ (der Held) für seine Hilfe.',
          case: 'Dativ', badge: 'dat',
          opts: ['der Held', 'den Helden', 'dem Helden', 'des Helden'],
          ans: 2,
          xp: '"danken" takes Dativ. → dem Held<strong>en</strong>.'
        },
        {
          q: 'Ich bewundere _____ (der Löwe) im Zoo.',
          case: 'Akkusativ', badge: 'akk',
          opts: ['der Löwe', 'den Löwen', 'dem Löwen', 'des Löwen'],
          ans: 1,
          xp: '"bewundern" takes Akkusativ. Ends in -e → n-declension → den Löw<strong>en</strong>.'
        },
        {
          q: 'Das Büro _____ (der Journalist) liegt im dritten Stock.',
          case: 'Genitiv', badge: 'gen',
          opts: ['der Journalist', 'den Journalisten', 'dem Journalisten', 'des Journalisten'],
          ans: 3,
          xp: 'Possession → Genitiv. -ist suffix → n-declension: des Journalist<strong>en</strong>.'
        },
        {
          q: 'Die Kinder glauben _____ (der Held) alles.',
          case: 'Dativ', badge: 'dat',
          opts: ['der Held', 'den Helden', 'dem Helden', 'des Helden'],
          ans: 2,
          xp: '"glauben" takes Dativ when used with a person. → dem Held<strong>en</strong>.'
        },
      ],
    },
  },
};
