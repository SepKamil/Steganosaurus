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
Taki plugin można zainstalować na każdej platformie.

#### Windows Operating Systems
  - Windows XP SP3
  - Windows Server 2003 SP1
  - Windows Vista*
  - Windows 7*
  - Windows 8
  - Windows 10
  
**Please note that while the 32-bit and 64-bit versions of Windows Vista and Windows 7 can be used to run Thunderbird, only 32-bit builds of Thunderbird are supported at this time.*

#### Windows Recommended Hardware
  - Pentium 4 or newer processor that supports SSE2
  - 1GB RAM
  - 200 MB hard drive space
  
  

## Działanie pluginu Steganosaurus:
![screen](https://s28.postimg.org/agies0hb1/image.png)

Tam, gdzie jest zaznaczone to jest nasz plugin Steganosaurus. Do ukrywania wiadomości mamy tylko 200 znaków, posiadamy jeszcze opcję do szyfrowania albo bez szyfrowania, jak i rownież opcję - gdzie mamy ukrywać wiadomości: w nagłówku albo w załączniku (tj. w obrazku). Pokażę Wam jak to działa plugin.

![screen](https://s24.postimg.org/kqtf0pt79/image.png)

Wybierając opcję zaszyfrowania, plugin każe nam wpisać klucza do zaszyfowania, więc wpiszemy klucza dla przykładu 12345. A do ukrywania wiadomości napisałem Hasłohasłohasło. Po wysłaniu takiej wiadomości, teraz sprawdzamy jak to odbierać ukryte wiadomości.

![screen](https://s10.postimg.org/rt85r8djt/image.png)

Po otrzymaniu takiej wiadomości, jak widzimy, że plugin wykrył nam, że w tych wiadomościach istnieje jeszcze ukryte wiadomości. Tam, gdzie jest zaznaczone "Odczytaj UW" wygląda na czarno (gdyby na szaro to oznacznałoby się, że nic nie ma ukrytych wiadomości).

![screen](https://s27.postimg.org/j8qi2k8xv/image.png)

Żeby otworzyć ukrytą wiadomość, wymaga klucza do rozszyfrowania. Po wpisaniu klucza 12345, pojawi się kolejny okno, oto wynik:

![screen](https://s18.postimg.org/4vn52ja3d/image.png)

Jak widzimy, że ukryte wiadomości pokazuję się nam teksty: Haslohaslohaslo.





![screen](https://s3.postimg.org/87jgma0b7/Diagram.png "Diagram pluginu Steganosaurus")

Plugin Steganosaurus działa dokładnie tak jak w diagramie.
