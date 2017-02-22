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

  Okno pokazuję się nam tekst: Steganosaurus1.

3. Szyfrowanie ukrytej wiadomości:

  ![screen](https://s24.postimg.org/kqtf0pt79/image.png)

  Wybierając opcję zaszyfrowania, konieczne jest wpisanie klucza (w przykładzie: 12345) oraz wiadomości do ukrycia. Następnie należy wysłać wiadomość jak normalny e-mail.
  
4. Odbieranie zaszyfrowanej wiadomości:

  ![screen](https://s27.postimg.org/j8qi2k8xv/image.png)

  Po otrzymaniu wiadomości należy kliknąć na zakładkę "Odczytaj UW". Następnie pojawi się okno, gdzie trzeba podać klucz do rozszyfrowania wiadomości (klucze wiadomości wysłanej i odebranej muszą się zgadzać). Kolejne okno umożliwia przeczytanie odszyfrowanej wiadomości.

  ![screen](https://s18.postimg.org/4vn52ja3d/image.png)

  Jak widzimy, że ukryte wiadomości z szyfrowaniem pokazuję się nam tekst: Haslohaslohaslo.

![screen](https://s3.postimg.org/87jgma0b7/Diagram.png "Diagram pluginu Steganosaurus")

## Działanie kodu:

#### Struktura plików

![screen](https://s8.postimg.org/fbxgko411/image.png)

#### Diagram klas
![screen](https://s31.postimg.org/5etxukhe3/image.png)

#### Opis funkcji:

Wykorzystane zostały gotowe funkcje: Aes.js i Aes-ctr.js z biblioteki JS Cryptico.

Aes.js - funkcja szyfrująca na podstawie algorytmu Rijandael, wymagająca podania klucza szyfrującego state 
cipher(input, w) - metoda generująca jeden podklucz początkowy, a następnie po kolejnym jednym podkluczu dla każdej rundy szyfrującej.
keyExpansion(key) - metoda tworząca z głównego klucza algorytmu kolejne klucze (AES wymaga osobnego klucza 128-bitowego dla każdej rundy, plus jeden dodatkowy).
   Dodawanie nowego klucza rundy—każdy bajt macierzy stanu jest mieszany z blokiem rundy za pomocą operatora bitowego XOR.
   for (let t=0; t<4; t++) w[i][t] = w[i-Nk][t] ^ temp[t]

subBytes(s, Nb) — metoda nieliniowej zamiany, gdzie każdy bajt jest zamieniany innym.
shiftRows(s, Nb) — metoda transpozycji, podczas której trzy ostatnie wiersze macierzy stanu są cyklicznie zmieniane określoną ilość razy.
mixColumns(s, Nb) - Metoda mieszania kolumn macierzy. Polega na łączeniu czterech bajtów w każdej kolumnie.
addRoundKey(state, w, rnd, Nb) - metoda dodawania klucza rundy
subWord(w) - metoda przepisująca 4 ostatnie bajty aktualnego rozszerzonego klucza do tymczasowego wektora 4-bajtowego(w).
rotWord(w) - metoda wykonująca rotację bajtów w wektorze o jedną pozycję w lewo. Skrajnie lewy bajt jest przepisywany na skrajnie prawą pozycję.
 W finałowej rundzie pomijana jest operacja mieszania kolumn.
 
Aes-Ctr dziedziczy po Aes. Pozwala na szyfrowanie danych i deszyfrowanie,które może odbywać się z wykorzystaniem wielu wątków równocześnie.
encrypt(plaintext, password, nBits) - metoda szyfrująca wykorzystująca metodę cipher z klasy Aes do uzyskania klucza szyfrującego. Bity strumienia klucza tworzone są niezależnie od zawartości kolejno szyfrowanych bloków danych. W tym trybie szyfruje się kolejne wartości stale zwiększającego się licznika, zsumowane z dodatkową liczbą nazywaną nonce (nonce oznacza unikalny numer: number used once). Nonce pełni rolę wektora inicjującego.Wykorzystuje frameworki: utf8Encode(str), utf8Decode(str), base64Encode(str), base64Decode(str).
decrypt(ciphertext, password, nBits) - metoda deszyfrująca z wykorzystaniem klucza szyfrującego, działa w lustrzany sposób do metody encrypt.

Pozostałe funkcje:

 - displayMessage()- funkcja wykrywająca czy w wiadomości e-mail jest ukryta lub zaszyfrowana wiadomość. Umożliwia przypadki:
                     odczytanie wiadomości ukrytej , odszyfrowywanie wiadomości zaszyfrowanej korzystając  z AesCtr.decrypt,
 
Dzięki tej funkcji, pojawi się nowy okno i umożliwia odczytywanie ukrytej/odszyfrowanej treści w wiadomościach przychodzących po kliknięciu na zakładkę "Oczytaj UW".
 
Parametry: brak

Zawracana wartość: nie zwracamy wartości, ponieważ wyświetlamy tylko okienka
  
Typowe wywołanie funkcji to:
```sh
$<toolbarbutton id="steganosaurus-read" label="Odczytaj UW" disabled="true" oncommand="st.displayMessage();"/>
```

  - setRemainingCharCount()
 
Funkcja sprawdza ile zostało jeszcze do napisania znaków w miejscu przeznaczonym na wiadomość ukrytą, którą można wpisać maksymalnie 200 znaków. Na przykład: jeśli już są 50 znaków w polu przeznaczonym na wiadomość ukrytą, a ta funkcja pokażuje się, że zostało jeszcze 150 znaków.

Parametry: brak

Zawracania wartość: nie zwracamy wartości, ponieważ wyświetlamy.

Typowe wywoływanie funkcji to:
```sh
$<textbox multiline="true" id="steganosaurus-textbox" flex="1" placeholder="Wpisz ukrytą wiadomość" name="steganosaurus.message.body" minheight="50" onkeyup="st.setRemainingCharCount()"/>
```

  - fold()
  
  
Parametry: brak

Zawracania wartość: nie zwracamy wartości, ponieważ wyświetlamy.
  
Typowe wywoływanie funkcji to: 
