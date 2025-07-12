"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Shield,
  CheckCircle,
  Users,
  Award,
} from "lucide-react";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function Component() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">OS</span>
              </div>
              <h1 className="text-xl font-bold text-gray-900">OPAŁ-STASIAK</h1>
            </div>
            <nav className="hidden md:flex space-x-1">
              <Button
                variant={activeTab === "about" ? "default" : "ghost"}
                onClick={() => setActiveTab("about")}
                className="px-4 py-2"
              >
                About
              </Button>
              <Button
                variant={activeTab === "ofert" ? "default" : "ghost"}
                onClick={() => setActiveTab("ofert")}
                className="px-4 py-2"
              >
                Ofert
              </Button>
              <Button
                variant={activeTab === "contact" ? "default" : "ghost"}
                onClick={() => setActiveTab("contact")}
                className="px-4 py-2"
              >
                Contact
              </Button>
              <Button
                variant={activeTab === "rodo" ? "default" : "ghost"}
                onClick={() => setActiveTab("rodo")}
                className="px-4 py-2"
              >
                RODO
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          {/* Mobile Tab Navigation */}
          <TabsList className="grid w-full grid-cols-4 md:hidden mb-8">
            <TabsTrigger value="about">O Firmie</TabsTrigger>
            <TabsTrigger value="ofert">Oferta</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
            <TabsTrigger value="rodo">RODO</TabsTrigger>
          </TabsList>

          {/* About Tab */}
          <TabsContent value="about" className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">O firmie</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Symbol jakości i zadowolenia klienta od 1992 roku
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Nasza Historia
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  <span className="font-semibold">
                    "Transport Towarowy Handel Opałem MIROSŁAW STASIAK"
                  </span>{" "}
                  działa na rynku sprzedaży węgla od 1992 roku. Podstawą
                  działalności jest sprzedaż węgla energetycznego asortymentów
                  grubych i średnich oferowanych przez kopalnie Tauron Wydobycie
                  S.A., PG Silesia Sp. Z o.o.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Naszymi klientami są zakłady przemysłowe, ciepłownie osiedlowe
                  i przemysłowe, szkoły, składy węglowe oraz indywidualni
                  odbiorcy. Dzięki wieloletniemu doświadczeniu prowadzimy
                  również obsługę odbiorców w ramach zamówień publicznych.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Zdolności transportowe naszej firmy pozwalają na dostawę
                  zakupionego produktu do każdego wskazanego miejsca kraju.
                  Nowoczesny tabor i dynamiczni kierowcy są w stałej łączności
                  telefonicznej z firmą i klientami.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Świadczymy również usługi rozładunkowe materiałów sypkich
                  (węgiel, kruszywo, żwir, piasek itp.) na bocznicy kolejowej
                  posiadając wysokiej klasy specjalistyczny sprzęt do rozładunku
                  wagonów marki Liebherr.
                </p>
              </div>
              <div className="flex flex-col space-y-4 items-center">
                <img
                  src="https://images.unsplash.com/photo-1578575737417-7f4ca1df16cb?q=80&w=500&h=300&fit=crop"
                  alt="Coal mining facility"
                  className="rounded-lg shadow-md h-full w-80 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1578575737417-7f4ca1df16cb?q=80&w=500&h=300&fit=crop"
                  alt="Transport trucks"
                  className="rounded-lg shadow-md h-full w-80 object-cover"
                />

                <img
                  src="https://images.unsplash.com/photo-1578575737417-7f4ca1df16cb?q=80&w=500&h=300&fit=crop"
                  alt="Coal storage"
                  className="rounded-lg shadow-md h-full w-80 object-cover"
                />
              </div>
            </div>
          </TabsContent>

          {/* Ofert Tab */}
          <TabsContent value="ofert" className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">Nasza Oferta</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Oferujemy państwu węgiel z polskich kopalń oraz importowany
                węgiel.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                    </div>
                    <span>Rodzaje Węgla</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Węgiel gruby kostka</li>
                    <li>• Orzech</li>
                    <li>• Groszek</li>
                    <li>• Eko-groszek</li>
                    <li>• Miał węglowy wysokokaloryczny</li>
                    <li>• Miał węglowy średniokaloryczny</li>
                    <li>• Pieklorz</li>
                    <li>• Węgiel workowany</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <Users className="w-4 h-4 text-green-600" />
                    </div>
                    <span>Usługi Dodatkowe</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Usługi rozładunkowe materiałów sypkich</li>
                    <li>• Rozładunek węgla</li>
                    <li>• Rozładunek kruszywa</li>
                    <li>• Rozładunek żwiru</li>
                    <li>• Rozładunek piasku</li>
                    <li>• Sprzęt Liebherr do rozładunku wagonów</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Award className="w-4 h-4 text-purple-600" />
                    </div>
                    <span>Lokalizacje i Transport</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Place składowe w Gomunicach</li>
                    <li>• Place składowe w Tuszynie</li>
                    <li>• Odbiór bezpośrednio z kopalń</li>
                    <li>• Transport samochodowy</li>
                    <li>• Atrakcyjne ceny hurtowe</li>
                    <li>• Transport do uzgodnienia</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <div className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Cennik</CardTitle>
                  <CardDescription>Aktualne ceny węgla</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="min-w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-2">Kopalnia</th>
                          <th className="text-left p-2">Sortyment</th>
                          <th className="text-left p-2">
                            Wartość opałowa [MJ/kg]
                          </th>
                          <th className="text-left p-2">Uziarnienie [mm]</th>
                          <th className="text-right p-2">Cena brutto [zł/t]</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="p-2">ZG Janina</td>
                          <td className="p-2">Kostka</td>
                          <td className="p-2">22-24</td>
                          <td className="p-2">63-200</td>
                          <td className="text-right p-2">1,500.00</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">ZG Janina</td>
                          <td className="p-2">Orzech</td>
                          <td className="p-2">22-24</td>
                          <td className="p-2">25-80</td>
                          <td className="text-right p-2">1,400.00</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">ZG Janina</td>
                          <td className="p-2">Groszek II Jaret</td>
                          <td className="p-2">22-24</td>
                          <td className="p-2">5-25</td>
                          <td className="text-right p-2">1,200.00</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">-</td>
                          <td className="p-2">Groszek Plus</td>
                          <td className="p-2">24-26</td>
                          <td className="p-2">5-25</td>
                          <td className="text-right p-2">1,400.00</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">-</td>
                          <td className="p-2">Groszek Plus wor.</td>
                          <td className="p-2">24-26</td>
                          <td className="p-2">5-25</td>
                          <td className="text-right p-2">1,600.00</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">-</td>
                          <td className="p-2">Groszek</td>
                          <td className="p-2">Min. 25</td>
                          <td className="p-2">5-40</td>
                          <td className="text-right p-2">1,100.00</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">-</td>
                          <td className="p-2">Miał Plus</td>
                          <td className="p-2">Min. 24</td>
                          <td className="p-2">3-31,50</td>
                          <td className="text-right p-2">600.00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-4 text-sm text-gray-600">
                    <p>
                      Oferta obowiązuje do odwołania lub wyczerpania zapasów.
                    </p>
                    <p>
                      W sprawie dostępności i warunków realizacji prosimy o
                      kontakt z biurem handlowym.
                    </p>
                    <p>
                      Publikowany cennik detaliczny stanowi ofertę w rozumieniu
                      Kodeksu Cywilnego.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Contact Tab */}
          <TabsContent value="contact" className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">Kontakt</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Zapraszamy do kontaktu z nami
              </p>
            </div>

            <div className="flex justify-around">
              <Card className="w-full max-w-sm">
                <CardHeader>
                  <CardTitle>Siedziba w Tuszynie</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="font-medium">Adres</div>
                      <div className="text-gray-600">
                        ul. Piotrkowska 6
                        <br />
                        95-080 Tuszyn
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="font-medium">Telefon</div>
                      <div className="text-gray-600">(042) 232 16 41</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="font-medium">Telefon komórkowy</div>
                      <div className="text-gray-600">663 888 126</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="w-full max-w-sm">
                <CardHeader>
                  <CardTitle>Siedziba w Gomunicach</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="font-medium">Adres</div>
                      <div className="text-gray-600">
                        Kletnia, ul. Dworcowa 2
                        <br />
                        97-545 Gomunice
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="font-medium">Telefon</div>
                      <div className="text-gray-600">(44) 684-24-84</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="font-medium">Telefon komórkowy</div>
                      <div className="text-gray-600">663 888 410</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-gray-600">
                        tthostasiak@cyberia.pl
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* RODO Tab */}
          <TabsContent value="rodo" className="space-y-8">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center space-x-2">
                <Shield className="w-8 h-8 text-blue-600" />
                <h2 className="text-4xl font-bold text-gray-900">RODO</h2>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Informacja o przetwarzaniu danych osobowych
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Administrator danych</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Transport Towarowy Handel Opałem Mirosław Stasiak z siedzibą
                    przy ul. Dworcowej 2 w Kletni, gmina Gomunice
                    <br />
                    Tel.: 44 6842484
                    <br />
                    Email: tthostasiak@cyberia.pl
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Cele przetwarzania danych</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>
                      Realizacja umowy sprzedaży, weryfikacja zdolności
                      płatniczej
                    </li>
                    <li>Prowadzenie dokumentacji księgowej</li>
                    <li>Prowadzenie ewidencji elektronicznej kontrahentów</li>
                    <li>Prowadzenie analiz wewnętrznych</li>
                    <li>Prowadzenie korespondencji elektronicznej</li>
                    <li>Dochodzenie zaległych roszczeń</li>
                    <li>Monitorowanie obiektu</li>
                    <li>Obsługa reklamacji i Biura Obsługi Klienta</li>
                    <li>
                      Realizacja zobowiązań z umów z dostawcami/producentami
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Prawa osoby, której dane dotyczą</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Prawo dostępu do treści danych</li>
                    <li>Prawo do sprostowania danych</li>
                    <li>Prawo do usunięcia lub ograniczenia przetwarzania</li>
                    <li>Prawo sprzeciwu</li>
                    <li>Prawo do przenoszenia danych</li>
                    <li>Prawo do cofnięcia zgody</li>
                    <li>Prawo do wniesienia skargi do Prezesa UODO</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Dodatkowe informacje</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-gray-600">
                  <p>
                    • Podanie danych jest dobrowolne, lecz niezbędne do
                    realizacji wskazanych celów
                  </p>
                  <p>
                    • Dane nie będą udostępniane podmiotom trzecim poza
                    instytucjami upoważnionymi z mocy prawa
                  </p>
                  <p>• Dane nie podlegają profilowaniu</p>
                  <p>
                    • Administrator nie przekazuje danych do państw trzecich
                  </p>
                  <p>
                    • Dane przechowywane są przez okres 5 lat lub dłużej w
                    uzasadnionych przypadkach
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
