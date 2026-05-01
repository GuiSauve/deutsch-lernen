export default {
  id: 'cases',
  title: 'Cases overview',

  rulesHTML: `
    <div class="page-title">Cases overview</div>
    <div class="page-subtitle">NOM · AKK · DAT · GEN — what they are and when to use them</div>

    <div class="card">
        <div class="card-title">📌 What is a case?</div>
        <p>In German, the <strong>grammatical role</strong> of a noun in a sentence is encoded directly in the form of its article (and sometimes the noun itself). This system is called <strong>cases</strong> (<em>Fälle</em>).</p>
        <p class="mt-3">There are four cases. Each one answers a specific question about the noun's role:</p>
        <ul class="mt-2">
            <li><strong>Who</strong> is doing the action? → Nominativ</li>
            <li><strong>What / whom</strong> does the action affect directly? → Akkusativ</li>
            <li><strong>To / for whom</strong> does something happen? → Dativ</li>
            <li><strong>Whose</strong> is it? → Genitiv</li>
        </ul>

        <div class="french-note mt-3">
            <div class="fr-label">🇫🇷 Pour les francophones</div>
            En français, l'ordre des mots et des prépositions (<em>de, à, par, pour…</em>) expriment ces rôles grammaticaux — le nom <em>lui-même</em> ne change pas. En allemand, c'est l'article qui change de forme selon le rôle. Résultat : l'ordre des mots est plus libre en allemand, mais les articles sont plus complexes.
        </div>
    </div>

    <div class="card">
        <div class="card-title">📊 The four cases at a glance</div>

        <div class="table-wrap">
            <table>
                <thead>
                    <tr><th>Case</th><th>Role</th><th>Question word</th><th>Example</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td><span class="badge badge-nom">NOM</span></td>
                        <td>Subject — who or what does it</td>
                        <td><strong>Wer?</strong> / Was?</td>
                        <td class="nom"><em>Der Hund</em> schläft.</td>
                    </tr>
                    <tr>
                        <td><span class="badge badge-akk">AKK</span></td>
                        <td>Direct object — directly affected</td>
                        <td><strong>Wen?</strong> / Was?</td>
                        <td class="akk">Ich sehe <em>den Hund</em>.</td>
                    </tr>
                    <tr>
                        <td><span class="badge badge-dat">DAT</span></td>
                        <td>Indirect object — to / for whom</td>
                        <td><strong>Wem?</strong></td>
                        <td class="dat">Ich gebe <em>dem Hund</em> Futter.</td>
                    </tr>
                    <tr>
                        <td><span class="badge badge-gen">GEN</span></td>
                        <td>Possession — belonging to</td>
                        <td><strong>Wessen?</strong></td>
                        <td class="gen">Das Haus <em>des Hundes</em>.</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p class="mt-2" style="font-size:0.82rem; color:var(--muted)">💡 The same noun — <em>der Hund</em> — appears in all four cases above. Notice how the article changes each time.</p>
    </div>

    <div class="card">
        <div class="card-title">📋 Article changes — definite article (der/die/das)</div>
        <p style="font-size:0.83rem; color:var(--muted); margin-bottom:0.75rem">This is the core table to internalize. Everything else in German grammar builds on it.</p>

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
                        <td><strong>Masculine</strong> <span style="font-size:0.78rem;color:var(--muted)">(der)</span></td>
                        <td class="nom">der</td>
                        <td class="akk">den</td>
                        <td class="dat">dem</td>
                        <td class="gen">des</td>
                    </tr>
                    <tr>
                        <td><strong>Feminine</strong> <span style="font-size:0.78rem;color:var(--muted)">(die)</span></td>
                        <td class="nom">die</td>
                        <td class="akk">die</td>
                        <td class="dat">der</td>
                        <td class="gen">der</td>
                    </tr>
                    <tr>
                        <td><strong>Neuter</strong> <span style="font-size:0.78rem;color:var(--muted)">(das)</span></td>
                        <td class="nom">das</td>
                        <td class="akk">das</td>
                        <td class="dat">dem</td>
                        <td class="gen">des</td>
                    </tr>
                    <tr>
                        <td><strong>Plural</strong></td>
                        <td class="nom">die</td>
                        <td class="akk">die</td>
                        <td class="dat">den</td>
                        <td class="gen">der</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="french-note mt-3">
            <div class="fr-label">🇫🇷 Ce qu'il faut retenir</div>
            En français, <em>le/la/les</em> ne changent jamais selon le rôle grammatical. En allemand, <em>der/die/das</em> changent. Le masculin est le plus riche en variations (der → den → dem → des). Le féminin a deux formes : <em>die</em> au NOM/AKK et <em>der</em> au DAT/GEN.
        </div>

        <p class="mt-3" style="font-size:0.82rem; color:var(--muted)">⚠️ Note: feminine NOM and AKK look identical (<em>die</em>), as do neuter NOM and AKK (<em>das</em>). The case is determined by the sentence context, not the article form alone.</p>
    </div>

    <div class="card">
        <div class="card-title">🔍 Each case in depth</div>

        <!-- NOM -->
        <div>
            <p><strong><span class="badge badge-nom">NOM</span> Nominativ — the subject</strong></p>
            <p class="mt-2" style="font-size:0.83rem">The Nominativ marks the <strong>subject</strong>: the noun that performs the action (or simply exists). Ask: <em>Wer? Was?</em> (Who? What?)</p>
            <div class="mt-2">
                <div class="example-row"><span class="ex-de nom">Der Lehrer</span><span class="ex-en">erklärt die Aufgabe. — The teacher explains the task.</span></div>
                <div class="example-row"><span class="ex-de nom">Die Kinder</span><span class="ex-en">lachen. — The children laugh.</span></div>
                <div class="example-row"><span class="ex-de nom">Das Auto</span><span class="ex-en">ist rot. — The car is red.</span></div>
            </div>
            <div class="french-note mt-2">
                <div class="fr-label">🇫🇷 Note</div>
                C'est le sujet, comme en français. <em>Der Lehrer</em> = <em>Le professeur</em>. Aucun changement d'article par rapport au dictionnaire.
            </div>
        </div>

        <div class="divider"></div>

        <!-- AKK -->
        <div>
            <p><strong><span class="badge badge-akk">AKK</span> Akkusativ — the direct object</strong></p>
            <p class="mt-2" style="font-size:0.83rem">The Akkusativ marks the <strong>direct object</strong>: what the action directly affects. Ask: <em>Wen? Was?</em> (Whom? What?)</p>
            <div class="mt-2">
                <div class="example-row"><span class="ex-de akk">den Lehrer</span><span class="ex-en">Ich sehe den Lehrer. — I see the teacher.</span></div>
                <div class="example-row"><span class="ex-de akk">die Aufgabe</span><span class="ex-en">Er macht die Aufgabe. — He does the task.</span></div>
                <div class="example-row"><span class="ex-de akk">das Auto</span><span class="ex-en">Sie kauft das Auto. — She buys the car.</span></div>
            </div>
            <p class="mt-2" style="font-size:0.82rem; color:var(--muted)">⚠️ Only the <strong>masculine</strong> article changes in AKK: <em>der → den</em>. Feminine and neuter stay the same as NOM.</p>
            <div class="french-note mt-2">
                <div class="fr-label">🇫🇷 Note</div>
                C'est l'objet direct, comme en français. <em>Je vois le professeur</em> → <em>Ich sehe den Lehrer</em>. En français, <em>le</em> ne change pas ; en allemand, <em>der → den</em>.
            </div>
        </div>

        <div class="divider"></div>

        <!-- DAT -->
        <div>
            <p><strong><span class="badge badge-dat">DAT</span> Dativ — the indirect object</strong></p>
            <p class="mt-2" style="font-size:0.83rem">The Dativ marks the <strong>indirect object</strong>: who benefits from or receives the action. Ask: <em>Wem?</em> (To whom? For whom?)</p>
            <div class="mt-2">
                <div class="example-row"><span class="ex-de dat">dem Lehrer</span><span class="ex-en">Ich gebe dem Lehrer das Buch. — I give the book to the teacher.</span></div>
                <div class="example-row"><span class="ex-de dat">der Mutter</span><span class="ex-en">Er hilft der Mutter. — He helps the mother.</span></div>
                <div class="example-row"><span class="ex-de dat">dem Kind</span><span class="ex-en">Sie schreibt dem Kind. — She writes to the child.</span></div>
            </div>
            <p class="mt-2" style="font-size:0.82rem; color:var(--muted)">Common Dativ verbs: <em>helfen, geben, schreiben, danken, folgen, gehören, glauben, zeigen…</em></p>
            <div class="french-note mt-2">
                <div class="fr-label">🇫🇷 Note</div>
                Équivaut à <em>à + nom</em> en français : <em>Je donne le livre <strong>au professeur</strong></em> → <em>Ich gebe <strong>dem Lehrer</strong> das Buch</em>. La préposition <em>à</em> disparaît — le Dativ fait ce travail.
            </div>
        </div>

        <div class="divider"></div>

        <!-- GEN -->
        <div>
            <p><strong><span class="badge badge-gen">GEN</span> Genitiv — possession</strong></p>
            <p class="mt-2" style="font-size:0.83rem">The Genitiv marks <strong>possession</strong> or belonging. Ask: <em>Wessen?</em> (Whose?)</p>
            <div class="mt-2">
                <div class="example-row"><span class="ex-de gen">des Lehrers</span><span class="ex-en">Das Buch des Lehrers. — The teacher's book.</span></div>
                <div class="example-row"><span class="ex-de gen">der Frau</span><span class="ex-en">Die Tasche der Frau. — The woman's bag.</span></div>
                <div class="example-row"><span class="ex-de gen">des Kindes</span><span class="ex-en">Das Spielzeug des Kindes. — The child's toy.</span></div>
            </div>
            <p class="mt-2" style="font-size:0.82rem; color:var(--muted)">⚠️ Masculine and neuter nouns also add <code>-s</code> or <code>-es</code> to the noun itself in GEN singular.</p>
            <div class="french-note mt-2">
                <div class="fr-label">🇫🇷 Note</div>
                Équivaut à <em>de + nom</em> en français : <em>Le livre <strong>du professeur</strong></em> → <em>Das Buch <strong>des Lehrers</strong></em>. Deux signaux en allemand : l'article change (<em>der → des</em>) ET le nom prend un <em>-s</em>.
            </div>
        </div>
    </div>
  `,

  tipsHTML: `
    <div class="page-title">Tipps &amp; Tricks</div>
    <div class="page-subtitle">How to identify and apply the right case every time</div>

    <div class="tips-grid">
        <div class="tip-card">
            <div class="tip-num">1</div>
            <h3>Use the question word</h3>
            <p>Ask the question out loud: <span class="hl">Wer/Was?</span> → NOM &nbsp; <span class="hl">Wen/Was?</span> → AKK &nbsp; <span class="hl">Wem?</span> → DAT &nbsp; <span class="hl">Wessen?</span> → GEN. This works for every sentence, every time.</p>
        </div>

        <div class="tip-card">
            <div class="tip-num">2</div>
            <h3>AKK only changes masculine</h3>
            <p>The only visible change from NOM to AKK is masculine: <span class="hl">der → den</span>. Feminine (<em>die</em>) and neuter (<em>das</em>) look identical in NOM and AKK — use context to tell them apart.</p>
        </div>

        <div class="tip-card">
            <div class="tip-num">3</div>
            <h3>Spot the DAT verbs</h3>
            <p>Some verbs <em>always</em> take Dativ: <span class="hl">helfen, danken, folgen, gehören, glauben, zeigen, geben</span> (indirect object). Memorize these verbs and the Dativ clicks automatically.</p>
        </div>

        <div class="tip-card">
            <div class="tip-num">4</div>
            <h3>GEN = "of" / possession</h3>
            <p>If you can rephrase in English as "<span class="hl">of the …</span>" or add <em>'s</em>, it's likely Genitiv: <em>das Buch <strong>des Lehrers</strong></em> = <em>the teacher's book</em> = <em>the book of the teacher</em>.</p>
        </div>

        <div class="tip-card">
            <div class="tip-num">5</div>
            <h3>NOM = dictionary form</h3>
            <p>Nominativ is the base form — exactly how the noun appears in the dictionary. If the noun is the subject and nothing looks different, you're in <span class="hl">Nominativ</span>. It's the default.</p>
        </div>

        <div class="tip-card">
            <div class="tip-num">6</div>
            <h3>Two signals at once</h3>
            <p>German often gives you <span class="hl">two clues</span> for the case simultaneously: the article changes AND the noun may get an ending (GEN: <em>des Lehrers</em>, DAT plural: <em>den Kindern</em>). Use both.</p>
        </div>
    </div>

    <div class="card mt-4">
        <div class="card-title">🇫🇷 Comparaison français — allemand</div>

        <div class="french-note">
            <div class="fr-label">Le principe clé</div>
            Le français utilise l'<strong>ordre des mots</strong> et des <strong>prépositions</strong> pour exprimer les rôles grammaticaux. L'allemand utilise des <strong>changements d'article</strong>. Les deux systèmes transmettent exactement la même information — différemment.
        </div>

        <div class="table-wrap mt-3">
            <table>
                <thead>
                    <tr><th>Rôle</th><th>Français</th><th>Allemand</th><th>Cas</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Sujet</td>
                        <td><strong>Le professeur</strong> explique.</td>
                        <td class="nom"><strong>Der Lehrer</strong> erklärt.</td>
                        <td><span class="badge badge-nom">NOM</span></td>
                    </tr>
                    <tr>
                        <td>Objet direct</td>
                        <td>Je vois <strong>le professeur</strong>.</td>
                        <td class="akk">Ich sehe <strong>den Lehrer</strong>.</td>
                        <td><span class="badge badge-akk">AKK</span></td>
                    </tr>
                    <tr>
                        <td>Objet indirect</td>
                        <td>Je parle <strong>au professeur</strong>.</td>
                        <td class="dat">Ich spreche <strong>dem Lehrer</strong>.</td>
                        <td><span class="badge badge-dat">DAT</span></td>
                    </tr>
                    <tr>
                        <td>Possession</td>
                        <td>Le livre <strong>du professeur</strong>.</td>
                        <td class="gen">Das Buch <strong>des Lehrers</strong>.</td>
                        <td><span class="badge badge-gen">GEN</span></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <p class="mt-3" style="font-size:0.83rem; color:var(--muted)">💡 Notice: <em>le professeur</em> never changes form in French. In German, <em>der Lehrer</em> becomes <em>den / dem / des Lehrers</em> — the article carries all the grammatical information.</p>
    </div>

    <div class="card">
        <div class="card-title">🚫 Common Mistakes</div>
        <ul>
            <li><strong>Forgetting AKK changes masculine:</strong> ❌ <em>Ich sehe der Mann</em> → ✅ <em>Ich sehe den Mann</em>.</li>
            <li><strong>Confusing DAT and AKK:</strong> "to/for" → DAT. "directly receives the action" → AKK. When in doubt, use the question words: Wen? vs. Wem?</li>
            <li><strong>Forgetting the -s on GEN nouns:</strong> ❌ <em>des Lehrer</em> → ✅ <em>des Lehrers</em> (masculine/neuter add -s or -es).</li>
            <li><strong>Adding a preposition on top of a case:</strong> ❌ <em>Ich gebe <u>zu</u> dem Lehrer das Buch</em> → ✅ <em>Ich gebe dem Lehrer das Buch</em>. The Dativ replaces the preposition.</li>
            <li><strong>Applying cases to all genders:</strong> Remember feminine NOM and AKK are both <em>die</em> — the article alone won't tell you which it is.</li>
        </ul>
    </div>
  `,

  exercises: {
    recognition: {
      type: 'multichoice',
      label: 'Which case is the highlighted word in?',
      items: [
        { q: '<em>Der Arzt</em> kommt gleich.', opts: ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'], ans: 0, xp: '"Der Arzt" is the subject — who is coming? → <strong>Nominativ</strong>. The article stays in its dictionary form: der.' },
        { q: '<em>Die Kinder</em> spielen im Park.', opts: ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'], ans: 0, xp: '"Die Kinder" is the subject — who is playing? → <strong>Nominativ</strong>.' },
        { q: '<em>Das Wetter</em> ist heute schön.', opts: ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'], ans: 0, xp: '"Das Wetter" is the subject — what is beautiful? → <strong>Nominativ</strong>.' },
        { q: '<em>Ein Mann</em> wartet an der Tür.', opts: ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'], ans: 0, xp: '"Ein Mann" is the subject — who is waiting? → <strong>Nominativ</strong>.' },
        { q: 'Ich kenne <em>den Mann</em> nicht.', opts: ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'], ans: 1, xp: '"den Mann" is the direct object — whom do I know? → <strong>Akkusativ</strong>. der → den (masculine AKK).' },
        { q: 'Er trinkt <em>einen Kaffee</em>.', opts: ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'], ans: 1, xp: '"einen Kaffee" is the direct object of "trinken" → <strong>Akkusativ</strong>. ein → einen (masculine AKK).' },
        { q: 'Wir besuchen <em>die Lehrerin</em>.', opts: ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'], ans: 1, xp: '"die Lehrerin" is the direct object of "besuchen" → <strong>Akkusativ</strong>. Feminine AKK: <em>die</em> (same form as NOM — context tells you it\'s the object here).' },
        { q: 'Sie kauft <em>das Buch</em>.', opts: ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'], ans: 1, xp: '"das Buch" is the direct object of "kaufen" → <strong>Akkusativ</strong>. Neuter AKK: <em>das</em> (same form as NOM).' },
        { q: 'Ich helfe <em>dem Kind</em>.', opts: ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'], ans: 2, xp: '"helfen" always takes Dativ → <strong>Dativ</strong>. das → dem (neuter DAT).' },
        { q: 'Er schreibt <em>der Mutter</em> einen Brief.', opts: ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'], ans: 2, xp: '"der Mutter" is the indirect object (to whom?) of "schreiben" → <strong>Dativ</strong>. die → der (feminine DAT).' },
        { q: 'Wir danken <em>dem Lehrer</em>.', opts: ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'], ans: 2, xp: '"danken" always takes Dativ → <strong>Dativ</strong>. der → dem (masculine DAT).' },
        { q: 'Das Buch gehört <em>einem Freund</em>.', opts: ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'], ans: 2, xp: '"gehören" (to belong to) always takes Dativ → <strong>Dativ</strong>. ein → einem (masculine DAT).' },
        { q: 'Das Auto <em>des Mannes</em> ist neu.', opts: ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'], ans: 3, xp: '"des Mannes" shows possession — whose car? → <strong>Genitiv</strong>. der → des, and the noun gets -es.' },
        { q: 'Die Tasche <em>der Frau</em> ist schwer.', opts: ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'], ans: 3, xp: '"der Frau" shows possession — whose bag? → <strong>Genitiv</strong>. die → der (feminine GEN).' },
        { q: 'Das Zimmer <em>des Kindes</em> ist klein.', opts: ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'], ans: 3, xp: '"des Kindes" shows possession → <strong>Genitiv</strong>. das → des, noun gets -es.' },
        { q: 'Der Name <em>der Stadt</em> ist bekannt.', opts: ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'], ans: 3, xp: '"der Stadt" shows possession — whose name? → <strong>Genitiv</strong>. die → der (feminine GEN).' },
      ],
    },

    cases: {
      items: [
        { q: 'Ich sehe _____ (der Mann).', case: 'Akkusativ', badge: 'akk', opts: ['der Mann', 'den Mann', 'dem Mann', 'des Mannes'], ans: 1, xp: '"sehen" takes Akkusativ — direct object. Masculine AKK: <strong>der → den</strong>.' },
        { q: '_____ (der Hund) schläft auf dem Sofa.', case: 'Nominativ', badge: 'nom', opts: ['Der Hund', 'Den Hund', 'Dem Hund', 'Des Hundes'], ans: 0, xp: 'Subject of the sentence → Nominativ. Masculine NOM: <strong>der</strong> — the base form.' },
        { q: 'Ich helfe _____ (der Arzt).', case: 'Dativ', badge: 'dat', opts: ['der Arzt', 'den Arzt', 'dem Arzt', 'des Arztes'], ans: 2, xp: '"helfen" always takes Dativ. Masculine DAT: <strong>der → dem</strong>.' },
        { q: 'Das ist das Büro _____ (der Chef).', case: 'Genitiv', badge: 'gen', opts: ['der Chef', 'den Chef', 'dem Chef', 'des Chefs'], ans: 3, xp: 'Possession → Genitiv. Masculine GEN: <strong>der → des</strong>, noun gets -s.' },
        { q: 'Wir kennen _____ (der Lehrer).', case: 'Akkusativ', badge: 'akk', opts: ['der Lehrer', 'den Lehrer', 'dem Lehrer', 'des Lehrers'], ans: 1, xp: '"kennen" takes Akkusativ. Masculine AKK: <strong>der → den</strong>.' },
        { q: '_____ (der Student) lernt für die Prüfung.', case: 'Nominativ', badge: 'nom', opts: ['Der Student', 'Den Studenten', 'Dem Studenten', 'Des Studenten'], ans: 0, xp: 'Subject → Nominativ. No change in nominative — the noun stays in its base form.' },
        { q: 'Er schreibt _____ (der Freund) eine Nachricht.', case: 'Dativ', badge: 'dat', opts: ['der Freund', 'den Freund', 'dem Freund', 'des Freundes'], ans: 2, xp: 'Indirect object — to whom is he writing? → Dativ. Masculine DAT: <strong>der → dem</strong>.' },
        { q: 'Die Meinung _____ (der Experte) ist wichtig.', case: 'Genitiv', badge: 'gen', opts: ['der Experte', 'den Experten', 'dem Experten', 'des Experten'], ans: 3, xp: 'Possession → Genitiv. "der Experte" is n-declension → <strong>des Experten</strong> (no extra -s on the noun).' },
        { q: 'Er fragt _____ (der Polizist) nach dem Weg.', case: 'Akkusativ', badge: 'akk', opts: ['der Polizist', 'den Polizisten', 'dem Polizisten', 'des Polizisten'], ans: 1, xp: '"fragen" takes Akkusativ. Masculine AKK: <strong>der → den</strong>. (-ist = n-declension → den Polizisten).' },
        { q: '_____ (der Vater) kocht das Abendessen.', case: 'Nominativ', badge: 'nom', opts: ['Der Vater', 'Den Vater', 'Dem Vater', 'Des Vaters'], ans: 0, xp: 'Subject → Nominativ. Masculine NOM: <strong>der</strong>.' },
        { q: 'Das Kind folgt _____ (der Hund).', case: 'Dativ', badge: 'dat', opts: ['der Hund', 'den Hund', 'dem Hund', 'des Hundes'], ans: 2, xp: '"folgen" always takes Dativ. Masculine DAT: <strong>der → dem</strong>.' },
        { q: 'Das Haus _____ (der Nachbar) ist verkauft.', case: 'Genitiv', badge: 'gen', opts: ['der Nachbar', 'den Nachbarn', 'dem Nachbarn', 'des Nachbarn'], ans: 3, xp: 'Possession → Genitiv. "der Nachbar" is n-declension → <strong>des Nachbarn</strong>.' },
      ],
    },

    sentences: {
      items: [
        { q: '_____ Hund bellt die ganze Nacht. (masc.)', case: 'Nominativ', badge: 'nom', opts: ['Der', 'Den', 'Dem', 'Des'], ans: 0, xp: 'The dog is the subject — who barks? → Nominativ. Masculine NOM: <strong>der</strong>.' },
        { q: 'Ich sehe _____ Frau jeden Tag. (fem.)', case: 'Akkusativ', badge: 'akk', opts: ['die', 'der', 'den', 'dem'], ans: 0, xp: '"sehen" takes Akkusativ. Feminine AKK: <strong>die</strong> (same form as NOM — context confirms it\'s the object).' },
        { q: 'Er dankt _____ Ärztin für die Hilfe. (fem.)', case: 'Dativ', badge: 'dat', opts: ['die', 'der', 'den', 'dem'], ans: 1, xp: '"danken" takes Dativ. Feminine DAT: <strong>die → der</strong>.' },
        { q: 'Das ist die Tasche _____ Studentin. (fem.)', case: 'Genitiv', badge: 'gen', opts: ['die', 'der', 'den', 'dem'], ans: 1, xp: 'Possession → Genitiv. Feminine GEN: <strong>die → der</strong>.' },
        { q: 'Wir kaufen _____ Auto. (neut.)', case: 'Akkusativ', badge: 'akk', opts: ['das', 'des', 'dem', 'die'], ans: 0, xp: '"kaufen" takes Akkusativ. Neuter AKK: <strong>das</strong> (same form as NOM).' },
        { q: '_____ Kinder lachen laut. (pl.)', case: 'Nominativ', badge: 'nom', opts: ['Die', 'Den', 'Dem', 'Der'], ans: 0, xp: 'The children are the subject → Nominativ. Plural NOM: <strong>die</strong>.' },
        { q: 'Sie gibt _____ Hund Futter. (masc.)', case: 'Dativ', badge: 'dat', opts: ['der', 'den', 'dem', 'des'], ans: 2, xp: '"geben" — the dog is the indirect object (given to). Masculine DAT: <strong>der → dem</strong>.' },
        { q: 'Das Spielzeug _____ Kindes liegt hier. (neut.)', case: 'Genitiv', badge: 'gen', opts: ['das', 'des', 'dem', 'die'], ans: 1, xp: 'Possession → Genitiv. Neuter GEN: <strong>das → des</strong>, noun gets -es.' },
        { q: 'Kennst du _____ neuen Lehrer? (masc.)', case: 'Akkusativ', badge: 'akk', opts: ['der', 'den', 'dem', 'des'], ans: 1, xp: '"kennen" takes Akkusativ. Masculine AKK: <strong>der → den</strong>.' },
        { q: 'Sie folgt _____ Mann durch die Stadt. (masc.)', case: 'Dativ', badge: 'dat', opts: ['der', 'den', 'dem', 'des'], ans: 2, xp: '"folgen" always takes Dativ. Masculine DAT: <strong>der → dem</strong>.' },
      ],
    },
  },
};
