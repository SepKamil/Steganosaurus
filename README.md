# Dokumentacja pluginu Thunderbird „Steganosaurus”

## Opis pluginu Steganosaurus:
Steganosaurus jest to plugin do programu Thunderbird. Służy on do ukrywania wiadomości tekstowych w  wiadomościach e-mail wychodzących i odczytywanie ukrytej treści w wiadomościach przychodzących. Umożliwia zapisywanie i odczytywanie ukrytej wiadomości w obrazku w załączniku. Pozwala także szyfrować wiadomości wychodzące i rozszyfrowywać wiadomości przychodzące.


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


## Wymagania sprzętowe:
Plugin Steganosaurus można zainstalować na każdym systemie i sprzęcie działając zgodnie z instrukcją instalacji.


## Działanie pluginu Steganosaurus:
![screen](https://s28.postimg.org/agies0hb1/image.png)

Tam, gdzie jest zaznaczone to jest nasz plugin Steganosaurus. Do ukrywania wiadomości mamy tylko 200 znaków, posiadamy jeszcze opcję do szyfrowania albo bez szyfrowania, jak i rownież opcję - gdzie mamy ukrywać wiadomości: w nagłówku albo w załączniku (tj. w obrazku). Pokażę Wam jak to działa plugin, zaczynając najpierw od wysłania ukrytych wiadomosci bez szyfrowania w nagłówku.

![screen](https://s14.postimg.org/89zb18g9d/image.png)

W miejscu zaznaczonym na zdjęciu wpisujemy wiadomość do ukrycia, dla przykładu napisałem Steganosaurus1

![screen](https://s17.postimg.org/mjl7aufkv/image.png)

Po otrzymaniu takiej wiadomości, jak widzimy, że plugin wykrył nam, że w tych wiadomościach istnieje jeszcze ukryte wiadomości. Tam, gdzie jest zaznaczone "Odczytaj UW" wygląda na czarno (gdyby na szaro to oznacznałoby się, że nic nie ma ukrytych wiadomości). Po klikaniu "Odczytaj UW" pojawi się okno z ukrytą wiadomością.

![screen](https://s12.postimg.org/6mjaxjbu5/image.png)

Okno pokazuję się nam tekst: Steganosaurus1. Teraz pokażę Wam jak zaszyfrować ukrytą wiadomości.

![screen](https://s24.postimg.org/kqtf0pt79/image.png)

Wybierając opcję zaszyfrowania, plugin każe nam wpisać klucza do zaszyfowania, więc wpiszemy klucza dla przykładu 12345. A do ukrywania wiadomości napisałem Hasłohasłohasło. Po wysłaniu takiej wiadomości, teraz sprawdzamy jak to odbierać ukryte wiadomości. Po otrzymaniu wiadomości klikamy znowu "Odczytaj UW".

![screen](https://s27.postimg.org/j8qi2k8xv/image.png)

Żeby otworzyć ukrytą wiadomość, wymaga klucza do rozszyfrowania. Po wpisaniu klucza 12345, pojawi się kolejny okno, oto wynik:

![screen](https://s18.postimg.org/4vn52ja3d/image.png)

Jak widzimy, że ukryte wiadomości z szyfrowaniem pokazuję się nam tekst: Haslohaslohaslo.


## Działanie kodu:

![screen](https://s3.postimg.org/87jgma0b7/Diagram.png "Diagram pluginu Steganosaurus")

Plugin Steganosaurus działa dokładnie tak jak w diagramie.
