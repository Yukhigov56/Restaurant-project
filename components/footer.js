export function createFooter() {
  const footer = document.createElement('footer');

  const footerList = document.createElement('ul');
  const footerLinks = [
    { text: 'instagram', href: 'https://www.instagram.com/' },
    { text: 'twitter', href: 'https://x.com/' },
    { text: 'facebook', href: 'https://www.facebook.com/' },
    { text: 'youtube', href: 'https://m.youtube.com/?hl=ru' },
    { text: 'twitch', href: 'https://www.twitch.tv/' },
    { text: 'hive', href: 'https://hivebootcamp.ru/' }
  ];

  footerLinks.forEach(link => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = link.href;
    a.textContent = link.text;
    li.appendChild(a);
    footerList.appendChild(li);
  });

  footer.appendChild(footerList);
  return footer;
}
