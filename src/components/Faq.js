import React from "react";
import "./Faq.scss";
export default class Faq extends React.Component {
  render() {
    return (
      <div className="faq">
        <div class="container faq">
          <div class="row">
            <div class="col-lg-6">
              <h1 class="page-main-title ">FAQ</h1>

              <div class="faq-entry" id="faq-1">
                <h2>Məkanın və Zamanın sübutu nədir?</h2>
                <p>
                  Proof of Space, provayderlərin saxlama sahəsi üçün istifadə
                  edilməmiş sabit disk sahəsi ayırdıqlarını göstərdikləri bir
                  kriptoqrafik texnikadır. Bir fikir birliyi olaraq istifadə
                  etmək üçün, Proof of Space, Zaman Proofuna bağlanmalıdır. PoT,
                  blok vaxtlarının aralarındakı zamana uyğun olmasını təmin edir
                  və blokçeynin ümumi təhlükəsizliyini artırır.
                </p>
              </div>

              <div class="faq-entry" id="faq-2">
                <h2>Məkanın Kanıtı və Zamanın Kanıtı necə işləyir?</h2>
                <p>
                  Boş yerin sübutu, sabit diskinizdə bəzi saxlama yerlərini
                  istifadə etmədiyinizi sübut etməyin bir yolu olaraq düşünülə
                  bilər. Chia blokçeyninin istifadəçiləri, diskdə kriptoqrafik
                  nömrələr toplusunu saxlayan proqramlar quraraq, sabit
                  disklərində istifadə olunmayan yerləri "sahələrə"
                  bölüşdürəcəklər. Bu istifadəçilərə "fermerlər" deyilir.
                  Blokçeyn növbəti blok üçün bir problem yayımladıqda, fermerlər
                  problemə ən yaxın olan hash -ə malik olub -olmadıqlarını
                  öyrənmək üçün sahələrini skan edə bilərlər. Bir fermerin bir
                  blok qazanma ehtimalı, bir fermerin bütün şəbəkə ilə
                  müqayisədə ümumi sahəsinin faizidir.Vaxtın sübutu, bloklar
                  arasında keçmək üçün kiçik bir müddət tələb edir. Zamanın
                  sübutu, hesablanması üçün müəyyən vaxt tələb edən
                  Doğrulanabilir Gecikmə Fonksiyonu tərəfindən həyata keçirilir,
                  lakin yoxlanılması çox sürətlidir. VDF -nin əsas fikri,
                  ardıcıl hesablama tələb etmələridir və bir çox paralel
                  maşınlara heç bir fayda vermədiyi üçün elektrik tullantıları
                  minimuma endirilir. Çox güman ki, nisbətən az VDF serveri
                  ("Timelords") olacaq, çünki ən sürətli olanı həmişə birinci
                  bitirəcək və bir bloku tamamlamaq və zənciri irəli aparmaq
                  üçün şəbəkədə yalnız bir sürətli və ədalətli Timelord
                  lazımdir.
                </p>
              </div>

              <div class="faq-entry" id="faq-3">
                <h2>Chia niyə daha yaxşıdır?</h2>
                <p>
                  Chia, Proof of Work -in enerji tələblərini sistemdən
                  uzaqlaşdıran yeni bir yenilikçi Nakamoto konsensus alqoritminə
                  malikdir. Digər kriptovalyutalarla müqayisədə, Chia daha
                  mərkəzsizləşdirilmiş blok zənciri sayəsində əhəmiyyətli
                  dərəcədə daha yaxşı bir təhlükəsizliyə malikdir. Chialisp,
                  Chia'nın kriptovalyutaların vəd etdiyi təhlükəsizliyi,
                  şəffaflığı və istifadəsi asanlaşdıran güclü, yoxlanılması asan
                  və təhlükəsiz olan yeni ağıllı əməliyyat proqramlaşdırma
                  dilidir. Chia, daha zəngin ağıllı əməliyyat qabiliyyətlərini
                  təmin etmək üçün daha müasir kriptoqrafik vasitələrdən
                  istifadə edir. Chia, əvvəlcədən fermaya sahib bir ictimai,
                  kommersiya məqsədli, açıq mənbə inkişaf etdirmə şirkəti
                  vasitəsilə bir blockchainin maliyyələşdirilməsinə, qurulmasına
                  və dəstəklənməsinə yeni və üstün bir yanaşma tətbiq edir.
                  Chia, qabarcıqları və qəzaları azaltmaq və chia-nın
                  mənimsənilməsini sürətləndirmək üçün sikkənin dəyişkənliyini
                  azaltmaq üçün təsərrüfat öncəsi (Strateji Ehtiyat) istifadə
                  edəcək.
                </p>
              </div>

              <div class="faq-entry" id="faq-4">
                <h2>Bu gün Chia ala bilərəmmi?</h2>
                <p>
                  Bəli. Chia indi əməliyyatları dəstəkləyir, buna görə chia alqı
                  -satqısı canlıdır.
                </p>
              </div>

              <div class="faq-entry" id="faq-5">
                <h2>Chia necə ala bilərəm?</h2>
                <p>
                  Mainnetdə əməliyyatlar başladıqdan sonra, Chia digər chia
                  sahiblərindən əksər qlobal birjalarda alqı -satqı və ticarət
                  üçün əlçatan olacaq.
                </p>
              </div>

              <div class="faq-entry" id="faq-6">
                <h2>Chia mainnet -i nə vaxt işə salacaq?</h2>
                <p>
                  Mainnet artıq işə salınıb. Chia proqramını quraşdıra və
                  proqram inkişafını Github səhifəmizdə izləyə bilərsiniz.
                </p>
              </div>

              <div class="faq-entry" id="faq-7">
                <h2>Chia inflyasiyası nədir?</h2>
                <p>
                  Chia əkinçiliyindən sonra, Chia hər 10 dəqiqədə 64 chia
                  əkinçilik mükafatı təqdim edir. İlk 12 ildə əkinçilik
                  mükafatları hər 3 -cü ilin sonunda iki dəfə azalacaq. 13 -cü
                  ildən sonsuzluğa qədər, mükafatlar hər 10 dəqiqədə 4 chia
                  səviyyəsində sabit olaraq qalacaq və bu da inflyasiya
                  səviyyəsinin azalmasına səbəb olacaq. Chia -nın inflyasiyası,
                  mainnetin istifadəyə verilməsindən 22 il sonra 0.50%
                  səviyyəsinə enir.
                </p>
              </div>

              <div class="faq-entry" id="faq-8">
                <h2>Chia Bitcoin kodundan istifadə edirmi?</h2>
                <p>Xeyr. Chia tamamilə sıfırdan yazılmışdır.</p>
              </div>
            </div>
            <div class="col-lg-6 order-first order-lg-last">
              <div class="faq-summary-box mt-3 m-lg-5">
                <h2>Suallar</h2>

                <a href="#faq-1">Məkanın və Zamanın sübutu nədir?</a>

                <a href="#faq-2">
                  Məkanın Kanıtı və Zamanın Kanıtı necə işləyir?
                </a>

                <a href="#faq-3">Chia niyə daha yaxşıdır?</a>

                <a href="#faq-4">Bu gün Chia ala bilərəmmi?</a>

                <a href="#faq-5">Chia necə ala bilərəm?</a>

                <a href="#faq-6">Chia mainnet -i nə vaxt işə salacaq?</a>

                <a href="#faq-7">Chia inflyasiyası nədir?</a>

                <a href="#faq-8">Chia Bitcoin kodundan istifadə edirmi?</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
