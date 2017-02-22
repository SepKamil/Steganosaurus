# Dokumentacja pluginu Thunderbird „Steganosaurus”

## Opis pluginu Steganosaurus:
Steganosaurus jest to plugin do programu Thunderbird. Służy on do ukrywania wiadomości tekstowych w wiadomościach e-mail wychodzących i odczytywanie ukrytej treści w wiadomościach przychodzących. Umożliwia zapisywanie i odczytywanie ukrytej wiadomości w obrazku w załączniku. Pozwala także szyfrować wiadomości wychodzące i rozszyfrowywać wiadomości przychodzące.


## Wymagania sprzętowe:
Plugin Steganosaurus można zainstalować na każdym systemie i sprzęcie działając zgodnie z instrukcją instalacji.


## Instalacja i konfiguracja:
1. Zainstalować program Thunterbird (można pobrać tu [Thunderbird](https://www.mozilla.org/pl/thunderbird/))
2. Skonfigurować program Thunderbird by prawidłowo połączył się z kontem pocztowym, aby to zrobić należy wykonać kroki:
  > a) Klikamy E-Mail, aby to skonfigurować konto pocztowe.
  
  > ![screen](https://s21.postimg.org/pr4dgjpo7/image.png)
  
  > b) Wybieramy istniejące konto.
  
  > ![screen](https://s1.postimg.org/3pza3gcn3/image.png)
  
  > c) Zaloguj się podając swój login i hasło.
  
  > ![screen](https://s18.postimg.org/8saxuiv61/image.png)
  
  > Po zalogowaniu Thunderbird będzie mógł prawidłowo połaczyć się z Twoim kontem pocztowym, ale trzeba chwilę poczekać, aby program mógł pobrać dane z Twojego konta pocztowego.

3. Zainstalować plugin Steganosaurus, aby to zrobić należy wykonać kroki:
  > a) Pobierać plik o nazwie Steganosaurus.xpi
  
  > b) Wejść w zakładkę „Narzędzia” -> "Dodatki"
  
  > ![screen](https://s17.postimg.org/gmci69327/image.png)
  
  > c) Wybrać zakładkę "Rozszerzenia", następnie zainstalować dodatek z pliku
  
  > ![screen](https://s11.postimg.org/95na5zccj/image.png)
  
  > d) Wybrać plik Steganosaurus.xpi i zainstalować, potem uruchomić Thunderbird'a ponownie.
  
  > ![screen](https://s7.postimg.org/tcy20wfdn/image.png)


## Działanie pluginu Steganosaurus:
![screen](https://s28.postimg.org/agies0hb1/image.png)

W miejscu przeznaczonym na wiadomość ukrytą można wpisać maksymalnie 200 znaków. W tym miejscu następuje także wybór dodatkowych opcji: wiadomości z szyfrowaniem lub bez, ukrywanie wiadomości w nagłówku lub w załączniku.

1. Wysyłanie wiadomości bez szyfrowania w nagłówku:

  ![screen](https://s14.postimg.org/89zb18g9d/image.png)

  Miejsce zaznaczone na zdjęciu to miejsce na wiadomość do ukrycia (przykładowo: Steganosaurus1).

2. Odbieranie wiadomości ukrytej w nagłówku:

  ![screen](https://s17.postimg.org/mjl7aufkv/image.png)

  Plugin wykrywa, że w wiadomości ukryto informacje w nagłówku. Zakładka "Odczytaj UW" jest zapisana czarną czcionką - to znaczy, że mamy do czynienia z wiadomością ukrytą. W przeciwnym wypadku kolor czcionki byłby szary. Aby odczytać ukrytą informację należy kliknąć na zakładkę "Odczytaj UW", następnie pokaże się okno z ukrytą wiadomością.

  ![screen](https://s12.postimg.org/6mjaxjbu5/image.png)

  Okno pokazuje nam odkodowaną wiadomość.

3. Szyfrowanie ukrytej wiadomości:

  ![screen](https://s24.postimg.org/kqtf0pt79/image.png)

  Wybierając opcję zaszyfrowania, konieczne jest wpisanie klucza (w przykładzie: 12345) oraz wiadomości do ukrycia. Następnie należy wysłać wiadomość jak normalny e-mail.
  
4. Odbieranie zaszyfrowanej wiadomości:

  ![screen](https://s27.postimg.org/j8qi2k8xv/image.png)

  Po otrzymaniu wiadomości należy kliknąć na zakładkę "Odczytaj UW". Następnie pojawi się okno, gdzie trzeba podać klucz do rozszyfrowania wiadomości (klucze wiadomości wysłanej i odebranej muszą się zgadzać). Kolejne okno umożliwia przeczytanie odszyfrowanej wiadomości.

  ![screen](https://s18.postimg.org/4vn52ja3d/image.png)

#### Schemat działania

![screen](https://s3.postimg.org/87jgma0b7/Diagram.png "Diagram pluginu Steganosaurus")

## Działanie kodu:

#### Struktura plików

![screen](https://s12.postimg.org/ouihasm65/image.png)

#### Diagram klas
![screen](https://s31.postimg.org/5etxukhe3/image.png)

#### Opis funkcji:
Wykorzystane zostały gotowe klasy: Aes.js i Aes-ctr.js z biblioteki JS Cryptico.

Aes.js jest to klasa szyfrująca na podstawie algorytmu Rijandael, wymagająca podania klucza szyfrującego state.
  - cipher(input, w) - metoda generująca jeden podklucz początkowy, a następnie po kolejnym jednym podkluczu dla każdej rundy szyfrującej.
  
  ![screen](https://s4.postimg.org/uqct6yegd/image.png)
  
  - keyExpansion(key) - metoda tworząca z głównego klucza algorytmu kolejne klucze (AES wymaga osobnego klucza 128-bitowego dla każdej rundy, plus jeden dodatkowy).
    - Dodawanie nowego klucza rundy - każdy bajt macierzy stanu jest mieszany z blokiem rundy za pomocą operatora bitowego XOR. `for (let t=0; t<4; t++) w[i][t] = w[i-Nk][t] ^ temp[t]*`
    
    ![screen](https://s21.postimg.org/llie3vxw7/image.png)
    
  - subBytes(s, Nb) - metoda nieliniowej zamiany, gdzie każdy bajt jest zamieniany innym.
  
  ![screen](https://s10.postimg.org/5kye0bgtl/image.png)
  
  - shiftRows(s, Nb) - metoda transpozycji, podczas której trzy ostatnie wiersze macierzy stanu są cyklicznie zmieniane określoną ilość razy.
  
  ![screen](https://s4.postimg.org/t33rz6vul/image.png)
  
  - mixColumns(s, Nb) - Metoda mieszania kolumn macierzy. Polega na łączeniu czterech bajtów w każdej kolumnie.
  
  ![screen](https://s2.postimg.org/7tw5d53yh/image.png)
  
  - addRoundKey(state, w, rnd, Nb) - metoda dodawania klucza rundy.
  
  ![screen](https://s28.postimg.org/ngfjrgbdp/image.png)
  
  - subWord(w) - metoda przepisująca 4 ostatnie bajty aktualnego rozszerzonego klucza do tymczasowego wektora 4-bajtowego(w).
  
  ![screen](https://s17.postimg.org/xsiemumwv/image.png)
  
  - rotWord(w) - metoda wykonująca rotację bajtów w wektorze o jedną pozycję w lewo. Skrajnie lewy bajt jest przepisywany na skrajnie prawą pozycję.
  
  ![screen](https://s15.postimg.org/7kfv6sby3/image.png)
  
W finałowej rundzie pomijana jest operacja mieszania kolumn.
 
Aes-Ctr dziedziczy po Aes. Pozwala na szyfrowanie danych i deszyfrowanie,które może odbywać się z wykorzystaniem wielu wątków równocześnie.
  - encrypt(plaintext, password, nBits) - metoda szyfrująca wykorzystująca metodę cipher z klasy Aes do uzyskania klucza szyfrującego. Bity strumienia klucza tworzone są niezależnie od zawartości kolejno szyfrowanych bloków danych. W tym trybie szyfruje się kolejne wartości stale zwiększającego się licznika, zsumowane z dodatkową liczbą nazywaną nonce (nonce oznacza unikalny numer: number used once). Nonce pełni rolę wektora inicjującego. Wykorzystuje frameworki: utf8Encode(str), utf8Decode(str), base64Encode(str), base64Decode(str).
  
  ![screen](https://s28.postimg.org/bgsiggc6z/image.png)
  
  ![screen](https://s22.postimg.org/ptlwezg0x/image.png)
  
  - decrypt(ciphertext, password, nBits) - metoda deszyfrująca z wykorzystaniem klucza szyfrującego, działa w lustrzany sposób do metody encrypt.
  
  ![screen](https://s14.postimg.org/rzjqrd3cv/image.png)

Pozostałe funkcje wykorzystują komponent interfejsu Prompt.Service:
 - displayMessage() - funkcja umożliwia odczytanie wiadomości ukrytej lub odszyfrowywanie wiadomości zaszyfrowanej korzystając z AesCtr.decrypt, jest powiązana z metodą window.addEventListener('load', function (event), która sprawdza czy w wiadomości ukryto lub zaszyfrowano informacje; funkcja korzysta z komponentu deszyfrującego decodeURIComponent().

Wywołanie funkcji to: 
`$<toolbarbutton id="steganosaurus-read" label="Odczytaj UW" disabled="true" oncommand="st.displayMessage();"/>`

![screen](https://s9.postimg.org/wm1n3aodr/image.png)

  - setRemainingCharCount() - funkcja sprawdza ile zostało jeszcze do napisania znaków w miejscu przeznaczonym na wiadomość ukrytą, gdzie można wpisać maksymalnie 200 znaków (zmienna stała maxMessageLength; textbox.value.length - zmienna określająca aktualną ilość znaków, jest odejmowana od zmiennej max.MessageLenght a różnica zapisywana jest w zmiennej remaining wyświetlanej następnie na ekranie)

Wywołanie funkcji to: 
`$<textbox multiline="true" id="steganosaurus-textbox" flex="1" placeholder="Wpisz ukrytą wiadomość" name="steganosaurus.message.body" minheight="50" onkeyup="st.setRemainingCharCount()"/>`

![screen](https://s23.postimg.org/kaml1o7hn/image.png)

  - fold() - funkcja stwarzająca zawijanie tekstu po 63 znakach w jednej linii.

![screen](https://s17.postimg.org/6fckmdb33/image.png)

  - injectMessage() - funkcja wczytująca wartości z pola tekstowego, następnie wywołuje funkcję fold i zapisuje wartości w zmiennej folded. `Metoda window.addEventListener('load', function (event))` obsługuje radiobuttony zapisując ich wartości w zmiennych i wpływając na interfejs. Funkcja na podstawie tych wartości warunkuje sposób postępowania: szyfrowanie, ukrywanie w nagłówku, ukrywanie w załączniku, a także wychwytuje ewentualne błędy.

![screen](https://s4.postimg.org/bmgvmidod/image.png)

## Testy

  1) UW bez szyfrowania
  
  ![screen](https://s15.postimg.org/51155fdm3/image.png)
  
  ![screen](https://s17.postimg.org/kws89oekf/image.png)
  
  2) UW z szyfrowaniem
  
  ![screen](https://s31.postimg.org/59sh9qrwr/image.png)
  
  ![screen](https://s3.postimg.org/b5qmr1j0j/image.png)
  
  ![screen](https://s13.postimg.org/sq5q03p6v/image.png)
  
  ![screen](https://s7.postimg.org/4h7c509bf/image.png)
  
  ![screen](https://s11.postimg.org/46kulz6sz/image.png)
  
  3) UW po wysłaniu aż 120 znaków
  
  ![screen](https://s9.postimg.org/t2f3owlv3/image.png)
  
  ![screen](https://s7.postimg.org/4u27zopl7/image.png)
  
  Jak tu widać działanie funkcji fold.
 
