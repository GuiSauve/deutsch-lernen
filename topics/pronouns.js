export default {
  id: 'pronouns',
  title: 'Personal pronouns',

  rulesHTML: `
    <div class="page-title">Personal pronouns</div>
    <div class="page-subtitle">ich · du · er/sie/es — declined across NOM, AKK, and DAT</div>

    <div class="card">
        <div class="card-title">📌 What changes and why</div>
        <p>Just like articles, personal pronouns change form depending on their role in the sentence. The pronoun you choose signals both <strong>who</strong> you're talking about and <strong>what role</strong> they play.</p>
        <ul class="mt-2">
            <li><span class="badge badge-nom">NOM</span> — the pronoun is the subject: <em>Ich lerne Deutsch.</em></li>
            <li><span class="badge badge-akk">AKK</span> — the pronoun is the direct object: <em>Er sieht mich.</em></li>
            <li><span class="badge badge-dat">DAT</span> — the pronoun is the indirect object: <em>Sie hilft mir.</em></li>
        </ul>
        <div class="french-note mt-3">
            <div class="fr-label">🇫🇷 Pour les francophones</div>
            Le français fait la même chose : <em>je → me/moi, tu → te/toi, il → le/lui</em>. En allemand, le système est plus régulier et s'applique à toutes les personnes de façon cohérente. La logique est identique — seules les formes changent.
        </div>
    </div>

    <div class="card">
        <div class="card-title">📋 The full pronoun table</div>

        <div class="table-wrap">
            <table>
                <thead>
                    <tr>
                        <th>Person</th>
                        <th><span class="badge badge-nom">NOM</span></th>
                        <th><span class="badge badge-akk">AKK</span></th>
                        <th><span class="badge badge-dat">DAT</span></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1st sg. <span style="color:var(--muted);font-size:0.8rem">(I)</span></td>
                        <td class="nom"><strong>ich</strong></td>
                        <td class="akk"><strong>mich</strong></td>
                        <td class="dat"><strong>mir</strong></td>
                    </tr>
                    <tr>
                        <td>2nd sg. <span style="color:var(--muted);font-size:0.8rem">(you)</span></td>
                        <td class="nom"><strong>du</strong></td>
                        <td class="akk"><strong>dich</strong></td>
                        <td class="dat"><strong>dir</strong></td>
                    </tr>
                    <tr>
                        <td>3rd sg. masc. <span style="color:var(--muted);font-size:0.8rem">(he)</span></td>
                        <td class="nom"><strong>er</strong></td>
                        <td class="akk"><strong>ihn</strong></td>
                        <td class="dat"><strong>ihm</strong></td>
                    </tr>
                    <tr>
                        <td>3rd sg. fem. <span style="color:var(--muted);font-size:0.8rem">(she)</span></td>
                        <td class="nom"><strong>sie</strong></td>
                        <td class="akk"><strong>sie</strong></td>
                        <td class="dat"><strong>ihr</strong></td>
                    </tr>
                    <tr>
                        <td>3rd sg. neut. <span style="color:var(--muted);font-size:0.8rem">(it)</span></td>
                        <td class="nom"><strong>es</strong></td>
                        <td class="akk"><strong>es</strong></td>
                        <td class="dat"><strong>ihm</strong></td>
                    </tr>
                    <tr style="border-top:2px solid var(--border)">
                        <td>1st pl. <span style="color:var(--muted);font-size:0.8rem">(we)</span></td>
                        <td class="nom"><strong>wir</strong></td>
                        <td class="akk"><strong>uns</strong></td>
                        <td class="dat"><strong>uns</strong></td>
                    </tr>
                    <tr>
                        <td>2nd pl. <span style="color:var(--muted);font-size:0.8rem">(you all)</span></td>
                        <td class="nom"><strong>ihr</strong></td>
                        <td class="akk"><strong>euch</strong></td>
                        <td class="dat"><strong>euch</strong></td>
                    </tr>
                    <tr>
                        <td>3rd pl. <span style="color:var(--muted);font-size:0.8rem">(they)</span></td>
                        <td class="nom"><strong>sie</strong></td>
                        <td class="akk"><strong>sie</strong></td>
                        <td class="dat"><strong>ihnen</strong></td>
                    </tr>
                    <tr style="border-top:2px solid var(--border)">
                        <td>Formal <span style="color:var(--muted);font-size:0.8rem">(You)</span></td>
                        <td class="nom"><strong>Sie</strong></td>
                        <td class="akk"><strong>Sie</strong></td>
                        <td class="dat"><strong>Ihnen</strong></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="french-note mt-3">
            <div class="fr-label">🇫🇷 Comparaison directe</div>
            <em>ich → mich → mir</em> = <em>je → me → me/moi</em> &nbsp;·&nbsp;
            <em>du → dich → dir</em> = <em>tu → te → te/toi</em> &nbsp;·&nbsp;
            <em>er → ihn → ihm</em> = <em>il → le → lui</em> &nbsp;·&nbsp;
            <em>sie → sie → ihr</em> = <em>elle → la → lui</em>. Le schéma est le même — les formes allemandes sont simplement différentes.
        </div>
    </div>

    <div class="card">
        <div class="card-title">⚠️ The ambiguous forms — sie, ihr, Sie</div>
        <p style="font-size:0.83rem;margin-bottom:0.75rem">Three pronouns can mean very different things depending on context and capitalization. These are the most important to get right.</p>

        <div>
            <p><strong><code>sie</code></strong> (lowercase) — <em>she</em> OR <em>they</em></p>
            <div class="mt-2">
                <div class="example-row">
                    <span class="ex-de nom">Sie kommt morgen.</span>
                    <span class="ex-en">She is coming tomorrow. (3rd sg. fem. NOM)</span>
                </div>
                <div class="example-row">
                    <span class="ex-de nom">Sie kommen morgen.</span>
                    <span class="ex-en">They are coming tomorrow. (3rd pl. NOM — note verb ending -en)</span>
                </div>
            </div>
            <p class="mt-2" style="font-size:0.82rem;color:var(--muted)">💡 The verb ending disambiguates: <em>sie kommt</em> (she, 3rd sg.) vs. <em>sie kommen</em> (they, 3rd pl.).</p>
        </div>

        <div class="divider"></div>

        <div>
            <p><strong><code>ihr</code></strong> — <em>you (plural)</em> NOM &nbsp;or&nbsp; <em>her</em> DAT</p>
            <div class="mt-2">
                <div class="example-row">
                    <span class="ex-de nom">Ihr kommt morgen.</span>
                    <span class="ex-en">You (all) are coming tomorrow. (2nd pl. NOM)</span>
                </div>
                <div class="example-row">
                    <span class="ex-de dat">Ich gebe ihr das Buch.</span>
                    <span class="ex-en">I give her the book. (3rd sg. fem. DAT)</span>
                </div>
            </div>
        </div>

        <div class="divider"></div>

        <div>
            <p><strong><code>Sie / Ihnen</code></strong> (always capitalized) — formal <em>you</em></p>
            <p class="mt-2" style="font-size:0.83rem">Used to address strangers, colleagues, or anyone you'd say <em>vous</em> to in French. Takes 3rd person plural verb forms but is capitalized to distinguish from <em>sie</em> (they).</p>
            <div class="mt-2">
                <div class="example-row">
                    <span class="ex-de nom">Sprechen Sie Deutsch?</span>
                    <span class="ex-en">Do you speak German? (formal, NOM)</span>
                </div>
                <div class="example-row">
                    <span class="ex-de dat">Ich danke Ihnen.</span>
                    <span class="ex-en">I thank you. (formal, DAT)</span>
                </div>
            </div>
        </div>
    </div>

    <div class="card">
        <div class="card-title">🔍 The Genitiv pronouns — a note</div>
        <p style="font-size:0.83rem">Genitiv personal pronouns exist (<em>meiner, deiner, seiner, ihrer…</em>) but are extremely rare in modern German. In everyday speech, possession is expressed with <strong>possessive pronouns</strong> (mein, dein, sein…) instead. You don't need to memorize Genitiv personal pronouns at this stage.</p>
    </div>
  `,

  tipsHTML: `
    <div class="page-title">Tipps &amp; Tricks</div>
    <div class="page-subtitle">Patterns to lock the pronoun table in memory</div>

    <div class="tips-grid">
        <div class="tip-card">
            <div class="tip-num">1</div>
            <h3>Learn the triplets</h3>
            <p>Memorize each pronoun as a set of three: <span class="hl">ich — mich — mir</span> &nbsp;·&nbsp; <span class="hl">du — dich — dir</span> &nbsp;·&nbsp; <span class="hl">er — ihn — ihm</span>. Drill them out loud until they're automatic.</p>
        </div>

        <div class="tip-card">
            <div class="tip-num">2</div>
            <h3>The -m pattern for DAT</h3>
            <p>DAT singular masculine and neuter end in <span class="hl">-m</span>: <em>ih<strong>m</strong>, ih<strong>m</strong></em> (er/es). This mirrors the article: <em>de<strong>m</strong></em>. If you're using DAT with he/it, the answer ends in -m.</p>
        </div>

        <div class="tip-card">
            <div class="tip-num">3</div>
            <h3>uns and euch don't change</h3>
            <p><em>wir</em> → <span class="hl">uns / uns</span> (AKK = DAT) &nbsp;·&nbsp; <em>ihr</em> → <span class="hl">euch / euch</span> (AKK = DAT). For 1st and 2nd plural, the oblique form is the same regardless of case. One less thing to memorize.</p>
        </div>

        <div class="tip-card">
            <div class="tip-num">4</div>
            <h3>sie vs. ihr disambiguation</h3>
            <p>If you see <em>ihr</em> as a pronoun: check the verb. <em>Ihr <strong>kommt</strong></em> → NOM (you all). If it follows a DAT verb or preposition: <em>Ich gebe <strong>ihr</strong></em> → DAT (to her). Position and verb tell you which one.</p>
        </div>

        <div class="tip-card">
            <div class="tip-num">5</div>
            <h3>Capital S = formal Sie</h3>
            <p><span class="hl">S</span>ie / <span class="hl">I</span>hnen are <em>always</em> capitalized, even in the middle of a sentence. Lowercase <em>sie</em> is she or they. Lowercase <em>ihr</em> is you-plural or her-DAT. Capitalization is the only written signal for formal address.</p>
        </div>

        <div class="tip-card">
            <div class="tip-num">6</div>
            <h3>Don't forget ihn</h3>
            <p>The most common beginner mistake: <em>Ich sehe er</em> ❌ → <em>Ich sehe <strong>ihn</strong></em> ✅. In AKK, <em>er</em> becomes <span class="hl">ihn</span>. This mirrors <em>der → den</em> in articles. The pattern is the same.</p>
        </div>
    </div>

    <div class="card mt-4">
        <div class="card-title">🇫🇷 Tableau de comparaison</div>
        <div class="table-wrap">
            <table>
                <thead>
                    <tr><th>Rôle</th><th>Exemple français</th><th>Exemple allemand</th><th>Pronom DE</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Sujet</td>
                        <td><em><strong>Il</strong> me voit.</em></td>
                        <td class="nom"><em><strong>Er</strong> sieht mich.</em></td>
                        <td><span class="badge badge-nom">NOM</span> er</td>
                    </tr>
                    <tr>
                        <td>Objet direct</td>
                        <td><em>Il <strong>le</strong> voit.</em></td>
                        <td class="akk"><em>Er sieht <strong>ihn</strong>.</em></td>
                        <td><span class="badge badge-akk">AKK</span> ihn</td>
                    </tr>
                    <tr>
                        <td>Objet indirect</td>
                        <td><em>Il <strong>lui</strong> parle.</em></td>
                        <td class="dat"><em>Er spricht mit <strong>ihm</strong>.</em></td>
                        <td><span class="badge badge-dat">DAT</span> ihm</td>
                    </tr>
                    <tr>
                        <td>Sujet</td>
                        <td><em><strong>Je</strong> te vois.</em></td>
                        <td class="nom"><em><strong>Ich</strong> sehe dich.</em></td>
                        <td><span class="badge badge-nom">NOM</span> ich</td>
                    </tr>
                    <tr>
                        <td>Objet direct</td>
                        <td><em>Il <strong>me</strong> voit.</em></td>
                        <td class="akk"><em>Er sieht <strong>mich</strong>.</em></td>
                        <td><span class="badge badge-akk">AKK</span> mich</td>
                    </tr>
                    <tr>
                        <td>Objet indirect</td>
                        <td><em>Il <strong>me</strong> donne le livre.</em></td>
                        <td class="dat"><em>Er gibt <strong>mir</strong> das Buch.</em></td>
                        <td><span class="badge badge-dat">DAT</span> mir</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <div class="card">
        <div class="card-title">🚫 Common Mistakes</div>
        <ul>
            <li><strong>Using NOM as object:</strong> ❌ <em>Ich sehe er</em> → ✅ <em>Ich sehe <strong>ihn</strong></em>. AKK and DAT forms exist for a reason.</li>
            <li><strong>Confusing ihr (NOM) and ihr (DAT):</strong> <em>Ihr kommt</em> = you all come · <em>Ich gebe ihr</em> = I give to her. Use verb and position to decide.</li>
            <li><strong>Lowercase sie for formal:</strong> ❌ <em>sie</em> (formal) → ✅ <em>Sie</em>. Always capitalized when addressing someone formally.</li>
            <li><strong>Using ihnen for DAT singular feminine:</strong> ❌ <em>Ich helfe ihnen</em> (DAT she) → ✅ <em>Ich helfe <strong>ihr</strong></em>. <em>ihnen</em> = DAT they / <em>Ihnen</em> = DAT formal.</li>
            <li><strong>Forgetting uns/euch for DAT:</strong> ❌ <em>Er hilft wir</em> → ✅ <em>Er hilft <strong>uns</strong></em>.</li>
        </ul>
    </div>
  `,

  exercises: {
    recognition: {
      type: 'multichoice',
      label: 'Which case is the highlighted pronoun in?',
      items: [
        { q: '<em>Ich</em> lerne jeden Tag Deutsch.', opts: ['Nominativ', 'Akkusativ', 'Dativ'], ans: 0, xp: '"Ich" is the subject — who is learning? → <strong>Nominativ</strong>.' },
        { q: '<em>Er</em> wohnt in Berlin.', opts: ['Nominativ', 'Akkusativ', 'Dativ'], ans: 0, xp: '"Er" is the subject → <strong>Nominativ</strong>.' },
        { q: '<em>Wir</em> haben keine Zeit.', opts: ['Nominativ', 'Akkusativ', 'Dativ'], ans: 0, xp: '"Wir" is the subject → <strong>Nominativ</strong>.' },
        { q: 'Kommt <em>ihr</em> heute Abend?', opts: ['Nominativ', 'Akkusativ', 'Dativ'], ans: 0, xp: '"ihr" is the subject — who is coming? → <strong>Nominativ</strong> (2nd person plural).' },
        { q: '<em>Sie</em> studiert in München.', opts: ['Nominativ', 'Akkusativ', 'Dativ'], ans: 0, xp: '"Sie" is the subject — she is studying → <strong>Nominativ</strong>. Verb ending -t confirms 3rd sg.' },
        { q: 'Siehst du <em>mich</em>?', opts: ['Nominativ', 'Akkusativ', 'Dativ'], ans: 1, xp: '"mich" is the direct object of "sehen" → <strong>Akkusativ</strong>. ich → mich in AKK.' },
        { q: 'Wir kennen <em>ihn</em> gut.', opts: ['Nominativ', 'Akkusativ', 'Dativ'], ans: 1, xp: '"ihn" is the direct object of "kennen" → <strong>Akkusativ</strong>. er → ihn in AKK.' },
        { q: 'Sie besucht <em>uns</em>.', opts: ['Nominativ', 'Akkusativ', 'Dativ'], ans: 1, xp: '"uns" is the direct object of "besuchen" → <strong>Akkusativ</strong>. wir → uns in AKK.' },
        { q: 'Ich frage <em>dich</em> etwas.', opts: ['Nominativ', 'Akkusativ', 'Dativ'], ans: 1, xp: '"dich" is the direct object of "fragen" → <strong>Akkusativ</strong>. du → dich in AKK.' },
        { q: 'Er liebt <em>sie</em>.', opts: ['Nominativ', 'Akkusativ', 'Dativ'], ans: 1, xp: '"sie" is the direct object of "lieben" → <strong>Akkusativ</strong>. (she, AKK = same form as NOM for feminine).' },
        { q: 'Ich rufe <em>euch</em> an.', opts: ['Nominativ', 'Akkusativ', 'Dativ'], ans: 1, xp: '"euch" is the direct object of "anrufen" → <strong>Akkusativ</strong>. ihr → euch in AKK.' },
        { q: 'Er hilft <em>mir</em>.', opts: ['Nominativ', 'Akkusativ', 'Dativ'], ans: 2, xp: '"helfen" always takes Dativ → <strong>Dativ</strong>. ich → mir in DAT.' },
        { q: 'Ich gebe <em>ihm</em> das Buch.', opts: ['Nominativ', 'Akkusativ', 'Dativ'], ans: 2, xp: '"ihm" is the indirect object (to whom?) → <strong>Dativ</strong>. er → ihm in DAT.' },
        { q: 'Sie schreibt <em>ihr</em> eine Nachricht.', opts: ['Nominativ', 'Akkusativ', 'Dativ'], ans: 2, xp: '"ihr" is the indirect object (to her) → <strong>Dativ</strong>. sie (she) → ihr in DAT.' },
        { q: 'Wir danken <em>Ihnen</em>.', opts: ['Nominativ', 'Akkusativ', 'Dativ'], ans: 2, xp: '"danken" takes Dativ → <strong>Dativ</strong>. Sie (formal) → Ihnen in DAT. Note the capital I.' },
        { q: 'Er folgt <em>uns</em>.', opts: ['Nominativ', 'Akkusativ', 'Dativ'], ans: 2, xp: '"folgen" always takes Dativ → <strong>Dativ</strong>. wir → uns in DAT. (uns = AKK and DAT — use the verb to decide).' },
      ],
    },

    cases: {
      items: [
        { q: 'Ich sehe _____ (du) nicht.', case: 'Akkusativ', badge: 'akk', opts: ['du', 'dich', 'dir', 'dein'], ans: 1, xp: '"sehen" takes Akkusativ. du → <strong>dich</strong> in AKK.' },
        { q: '_____ (er) kommt morgen.', case: 'Nominativ', badge: 'nom', opts: ['Er', 'Ihn', 'Ihm', 'Sein'], ans: 0, xp: 'Subject of the sentence → Nominativ. → <strong>er</strong>.' },
        { q: 'Er gibt _____ (ich) das Buch.', case: 'Dativ', badge: 'dat', opts: ['ich', 'mich', 'mir', 'mein'], ans: 2, xp: 'Indirect object (to whom?) → Dativ. ich → <strong>mir</strong> in DAT.' },
        { q: 'Kennst du _____ (wir)?', case: 'Akkusativ', badge: 'akk', opts: ['wir', 'uns', 'unser', 'ihr'], ans: 1, xp: '"kennen" takes Akkusativ. wir → <strong>uns</strong> in AKK.' },
        { q: 'Sie hilft _____ (ich).', case: 'Dativ', badge: 'dat', opts: ['ich', 'mich', 'mir', 'mein'], ans: 2, xp: '"helfen" takes Dativ. ich → <strong>mir</strong> in DAT.' },
        { q: 'Wir fragen _____ (sie — they).', case: 'Akkusativ', badge: 'akk', opts: ['sie', 'ihnen', 'ihr', 'deren'], ans: 0, xp: '"fragen" takes Akkusativ. sie (they) → <strong>sie</strong> in AKK (same form as NOM for 3rd plural).' },
        { q: '_____ (wir) lernen jeden Tag.', case: 'Nominativ', badge: 'nom', opts: ['Uns', 'Wir', 'Unser', 'Ihr'], ans: 1, xp: 'Subject → Nominativ. → <strong>wir</strong>.' },
        { q: 'Ich schreibe _____ (du) eine E-Mail.', case: 'Dativ', badge: 'dat', opts: ['du', 'dich', 'dir', 'dein'], ans: 2, xp: 'Indirect object (to whom?) → Dativ. du → <strong>dir</strong> in DAT.' },
        { q: 'Er sieht _____ (sie — she).', case: 'Akkusativ', badge: 'akk', opts: ['sie', 'ihr', 'ihnen', 'sich'], ans: 0, xp: '"sehen" takes Akkusativ. sie (she) → <strong>sie</strong> in AKK (feminine AKK = NOM).' },
        { q: '_____ (sie — she) wohnt hier.', case: 'Nominativ', badge: 'nom', opts: ['Ihr', 'Ihnen', 'Sie', 'Sich'], ans: 2, xp: 'Subject → Nominativ. sie (she) → <strong>sie</strong> in NOM.' },
        { q: 'Ich folge _____ (er).', case: 'Dativ', badge: 'dat', opts: ['er', 'ihn', 'ihm', 'sein'], ans: 2, xp: '"folgen" takes Dativ. er → <strong>ihm</strong> in DAT.' },
        { q: 'Danken Sie _____ (ich)?', case: 'Dativ', badge: 'dat', opts: ['ich', 'mich', 'mir', 'mein'], ans: 2, xp: '"danken" takes Dativ. ich → <strong>mir</strong> in DAT.' },
      ],
    },

    sentences: {
      items: [
        { q: 'Kannst du _____ (ich) helfen?', case: 'Dativ', badge: 'dat', opts: ['mich', 'mir', 'ich', 'mein'], ans: 1, xp: '"helfen" takes Dativ. ich → <strong>mir</strong> in DAT.' },
        { q: 'Sie kennt _____ (wir) gut.', case: 'Akkusativ', badge: 'akk', opts: ['wir', 'uns', 'unser', 'ihr'], ans: 1, xp: '"kennen" takes Akkusativ. wir → <strong>uns</strong> in AKK.' },
        { q: '_____ (er) ist mein Bruder.', case: 'Nominativ', badge: 'nom', opts: ['Ihm', 'Ihn', 'Er', 'Sein'], ans: 2, xp: 'Subject → Nominativ. → <strong>er</strong>.' },
        { q: 'Ich habe _____ (du) vermisst.', case: 'Akkusativ', badge: 'akk', opts: ['du', 'dir', 'dich', 'dein'], ans: 2, xp: '"vermissen" takes Akkusativ. du → <strong>dich</strong> in AKK.' },
        { q: 'Er erklärt _____ (sie — they) die Aufgabe.', case: 'Dativ', badge: 'dat', opts: ['sie', 'ihr', 'ihnen', 'deren'], ans: 2, xp: 'Indirect object (to whom?) → Dativ. sie (they) → <strong>ihnen</strong> in DAT.' },
        { q: '_____ (ich) verstehe das nicht.', case: 'Nominativ', badge: 'nom', opts: ['Mich', 'Mir', 'Ich', 'Mein'], ans: 2, xp: 'Subject → Nominativ. → <strong>ich</strong>.' },
        { q: 'Sie liebt _____ (er).', case: 'Akkusativ', badge: 'akk', opts: ['er', 'ihn', 'ihm', 'sein'], ans: 1, xp: '"lieben" takes Akkusativ. er → <strong>ihn</strong> in AKK. (The most common beginner mistake: never "sie liebt er"!)' },
        { q: 'Er dankt _____ (wir).', case: 'Dativ', badge: 'dat', opts: ['wir', 'uns', 'unser', 'euch'], ans: 1, xp: '"danken" takes Dativ. wir → <strong>uns</strong> in DAT. (uns = AKK and DAT for wir).' },
        { q: 'Ich sehe _____ (ihr — you all).', case: 'Akkusativ', badge: 'akk', opts: ['ihr', 'euch', 'ihnen', 'sich'], ans: 1, xp: '"sehen" takes Akkusativ. ihr → <strong>euch</strong> in AKK.' },
        { q: 'Glaubst du _____ (sie — she)?', case: 'Dativ', badge: 'dat', opts: ['sie', 'ihr', 'ihnen', 'sich'], ans: 1, xp: '"glauben" takes Dativ when referring to a person. sie (she) → <strong>ihr</strong> in DAT.' },
      ],
    },
  },
};
