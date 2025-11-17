import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const wines = [
  {
    id: 1,
    name: "Тутовое вино Премиум",
    year: "2020",
    price: "3 500 ₽",
    description: "Элегантное вино из отборных тутовых ягод, выдержанное в дубовых бочках.",
    volume: "750 мл",
    strength: "12%",
    image: "https://cdn.poehali.dev/projects/a83d32df-ed5a-4ac2-a9ae-2eecda296ccd/files/fdf78e73-e9ea-464e-baf0-a587819c4a7c.jpg"
  },
  {
    id: 2,
    name: "Тутовое вино Классик",
    year: "2021",
    price: "2 800 ₽",
    description: "Традиционный рецепт армянского тутового вина с богатым вкусом.",
    volume: "750 мл",
    strength: "11%",
    image: "https://cdn.poehali.dev/projects/a83d32df-ed5a-4ac2-a9ae-2eecda296ccd/files/fdf78e73-e9ea-464e-baf0-a587819c4a7c.jpg"
  },
  {
    id: 3,
    name: "Тутовое вино Резерв",
    year: "2019",
    price: "4 200 ₽",
    description: "Коллекционное вино многолетней выдержки для истинных ценителей.",
    volume: "750 мл",
    strength: "13%",
    image: "https://cdn.poehali.dev/projects/a83d32df-ed5a-4ac2-a9ae-2eecda296ccd/files/fdf78e73-e9ea-464e-baf0-a587819c4a7c.jpg"
  }
];

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-bold text-primary">Армянское Тутовое Вино</h1>
            <div className="hidden md:flex gap-6">
              {["home", "catalog", "history", "delivery", "contacts"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`story-link text-sm uppercase tracking-wider ${
                    activeSection === section ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {section === "home" && "Главная"}
                  {section === "catalog" && "Каталог"}
                  {section === "history" && "История"}
                  {section === "delivery" && "Доставка"}
                  {section === "contacts" && "Контакты"}
                </button>
              ))}
            </div>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://cdn.poehali.dev/projects/a83d32df-ed5a-4ac2-a9ae-2eecda296ccd/files/3b3167c0-04aa-4919-9dbc-4621e18d36f7.jpg')`
          }}
        />
        <div className="relative z-10 text-center text-white animate-fade-in px-4">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">Вкус традиций Армении</h2>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-light">
            Премиальное тутовое вино из сердца армянских гор
          </p>
          <Button
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
            onClick={() => scrollToSection("catalog")}
          >
            Смотреть каталог
          </Button>
        </div>
      </section>

      <section id="catalog" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Каталог вин</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Каждая бутылка — это результат многовековых традиций и современного мастерства
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {wines.map((wine, index) => (
              <Card
                key={wine.id}
                className="overflow-hidden hover-scale animate-fade-in border-border"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={wine.image}
                    alt={wine.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-1">{wine.name}</CardTitle>
                      <CardDescription>Урожай {wine.year}</CardDescription>
                    </div>
                    <span className="text-2xl font-bold text-primary">{wine.price}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{wine.description}</p>
                  <div className="flex gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Icon name="Wine" size={16} className="text-primary" />
                      <span>{wine.volume}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Percent" size={16} className="text-primary" />
                      <span>{wine.strength}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <Icon name="ShoppingCart" size={18} className="mr-2" />
                    В корзину
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="history" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">История производства</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                Производство тутового вина в Армении насчитывает более 2000 лет истории. Еще древние
                армянские мастера обнаружили уникальные свойства тутовой ягоды и создали рецепты,
                передающиеся из поколения в поколение.
              </p>
              <p className="text-lg leading-relaxed">
                Тутовое дерево считалось священным в армянской культуре. Его плоды использовались не
                только для производства вина, но и в лечебных целях. Традиционные методы ферментации и
                выдержки сохранились до наших дней.
              </p>
              <p className="text-lg leading-relaxed">
                Наша винодельня продолжает эти древние традиции, используя только органические ягоды с
                собственных плантаций в горных районах Армении. Каждая бутылка — это частица истории и
                культуры нашего народа.
              </p>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://cdn.poehali.dev/projects/a83d32df-ed5a-4ac2-a9ae-2eecda296ccd/files/fdf78e73-e9ea-464e-baf0-a587819c4a7c.jpg"
                alt="Традиции виноделия"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-primary mb-2">2000+</div>
              <p className="text-muted-foreground">лет традиций</p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-primary mb-2">100%</div>
              <p className="text-muted-foreground">органические ягоды</p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-primary mb-2">5</div>
              <p className="text-muted-foreground">поколений мастеров</p>
            </div>
          </div>
        </div>
      </section>

      <section id="delivery" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Доставка и оплата</h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="delivery" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                <div className="flex items-center gap-3">
                  <Icon name="Truck" size={24} className="text-primary" />
                  Способы доставки
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-3 pt-2">
                <p>
                  <strong>По Москве:</strong> курьерская доставка 1-2 дня, стоимость 500 ₽. При заказе
                  от 5000 ₽ — бесплатно.
                </p>
                <p>
                  <strong>По России:</strong> доставка транспортной компанией 3-7 дней, стоимость
                  рассчитывается индивидуально.
                </p>
                <p>
                  <strong>Самовывоз:</strong> бесплатно из нашего винного бутика в центре Москвы.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="payment" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                <div className="flex items-center gap-3">
                  <Icon name="CreditCard" size={24} className="text-primary" />
                  Способы оплаты
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-3 pt-2">
                <p>• Банковские карты (Visa, MasterCard, МИР)</p>
                <p>• Электронные кошельки (ЮMoney, QIWI)</p>
                <p>• Наличными при получении (только для Москвы)</p>
                <p>• Безналичный расчет для юридических лиц</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="return" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                <div className="flex items-center gap-3">
                  <Icon name="Shield" size={24} className="text-primary" />
                  Гарантии качества
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-3 pt-2">
                <p>
                  Все наши вина проходят строгий контроль качества. Мы гарантируем подлинность и
                  соблюдение условий хранения.
                </p>
                <p>
                  В случае обнаружения брака или повреждения при транспортировке — полный возврат
                  средств или замена товара.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Контакты</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="MapPin" className="text-primary" />
                  Адрес винодельни
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>Армения, Арагацотнская область</p>
                <p className="text-muted-foreground">село Оганаван, ул. Виноградная, 12</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Store" className="text-primary" />
                  Винный бутик в Москве
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>г. Москва, ул. Арбат, 25</p>
                <p className="text-muted-foreground">Ежедневно с 10:00 до 22:00</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Phone" className="text-primary" />
                  Телефон
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>+7 (495) 123-45-67</p>
                <p className="text-muted-foreground">Пн-Вс: 9:00 - 21:00</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Mail" className="text-primary" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>info@armenianwine.ru</p>
                <p className="text-muted-foreground">Ответим в течение 24 часов</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">О нас</h3>
              <p className="text-sm opacity-90">
                Премиальное армянское тутовое вино с 2000-летней историей традиций
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Навигация</h3>
              <div className="space-y-2 text-sm">
                <p className="cursor-pointer opacity-90 hover:opacity-100" onClick={() => scrollToSection("catalog")}>
                  Каталог
                </p>
                <p className="cursor-pointer opacity-90 hover:opacity-100" onClick={() => scrollToSection("history")}>
                  История
                </p>
                <p className="cursor-pointer opacity-90 hover:opacity-100" onClick={() => scrollToSection("delivery")}>
                  Доставка
                </p>
                <p className="cursor-pointer opacity-90 hover:opacity-100" onClick={() => scrollToSection("contacts")}>
                  Контакты
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Социальные сети</h3>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/20">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/20">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/20">
                  <Icon name="Youtube" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="text-center text-sm opacity-75 pt-8 border-t border-primary-foreground/20">
            © 2024 Армянское Тутовое Вино. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;