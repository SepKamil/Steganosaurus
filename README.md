# Dokumentacja pluginu Thunderbird „Steganosaurus”

## Opis pluginu Steganosaurus:
Steganosaurus jest to plugin do programu Thunderbird. Służy on do ukrywania wiadomości tekstowych w  wiadomościach e-mail wychodzących i odczytywanie ukrytej treści w wiadomościach przychodzących. Umożliwia zapisywanie i odczytywanie ukrytej wiadomości w obrazku w załączniku. Pozwala także szyfrować wiadomości wychodzące i rozszyfrowywać wiadomości przychodzące.


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

