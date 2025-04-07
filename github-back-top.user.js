// ==UserScript==
// @name         GitHub Back to Top
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  为GitHub添加平滑返回顶部按钮
// @author       sept
// @match        https://github.com/*
// @grant        none
// @license      MIT
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAAAXNSR0IArs4c6QAAElZJREFUeF7tnQu2I7cNROWVTbKyiVeWzMqcoUe0+8n68AOAVUDpnHzNZpMF1CXIbun9dtNHCkiBsgr8VnbmmrgUkAI3AUBJIAUKKyAAFA6+pi4FBADlgBQorIAAUDj4mroUEACUA1KgsAICQOHga+pSQABQDkiBwgoIAIWDr6lLAQFAOSAFCisgABQOvqYuBQQA5YAUKKyAAFA4+Jq6FBAAlANSoLACAkDh4GvqUkAAUA5IgcIKCACFg6+pSwEBQDkgBQorIADkCv6/7tPp/3md3bcnU+3t/vfwz368kKW3e2yfS8VCsxEA+IJ9NXk39TPDR8ysgaDDov13gSFCdcN7CACGYjp01Y39/c3K7nDb7S6vYPjPdm/qwE0BAcBN2qWOr4Y/taovDXzgot/vbQSEAbGimggAUUo/vw/rCm+hmoBgoeJmHwLApoALlzfTt3+1/Xu2VX5Bjj8v6VsGVQerCi5eJwAsCrdwWTN728vL9O/FU2WwkFyrlwgAq8qNXSfTj+n0qlWDgZ4u7Gn49moBwF5cmd5e09Zjg4G2CMbaCgB2gsr4dlq+60kgMNRZANgXU8bf13ClB20PVlR7uEYAWBdRxl/XzvJKHRpuqCkAzIsn489rFnGFQLCgsgAwLpqMP67VyZYCwYT6AsBnsWT8zxohttBh4UBUBID3IrXHTv2LOANyqgmgAgLBm6AIAM/Faav+fwGTWUNaU0CvGr/QTQD4KozK/TWDsVylakCPAV/mqsp9Fhvvj1MguGuoCuDXl3NU7u+biq2Hti34N9ugrcdbHQBa9a0ziq+/0tVAZQC0VV9fzeUzrMeIy0KgIgBU8ntYiL/PkluCagBQyc9vVO8ZlKoGKgFAJb+3dfL0XwYCFQCgkj+PMSNnUmJLkB0AKvkjLZPzXu1RYdo/eJIZADJ/TkOemFVaCGQFgMx/wia575nyXCAjAGT+3EY8Obt0EMgGAJn/pD1q3DsVBDIBQI/5ahgQYZZpIJAFADI/gi1qjSEFBDIAQOavZTyk2dJDgB0AMj+SHWqOhRoCzADQgV9NwyHOmhYCrACQ+RFtUHtMlBBgBIDMX9toyLOne2OQDQAyP3L6a2xNASoIMAFA5pfBWBSggQALAGR+ltTXOLsCFN6iGOTPv87zh/JKCpApQPF7AgwA0OpPlvka7l8KwD8ZQAeAzC83sSsAfR6ADACZnz31NX748wBkAGjfLwNlUQD2PAAVAKdX/1a2vfqjId/0B0XgffnqN/xO/iEYyPMARACcNv9ooFoy9YT6Dm+JvAPsf/q7m/7dD3ierirhzgPQAHDa/DtvcrWxt49g4A+bZvIG6tlf60X49iiU56AGA/K830ITBJD52zD2Dqumv44S4W9EQJ0HWCS7VRogmGa0/B+ds6qCUaVet7Mw/rX309uAnSpzX82HHlAAgGD+Jo01ALrcAsF86nrFAmEb0NSA8B7EIG63W5WgoIBu3o5xV1iv+I8jR9gGeC42U5FCAACKKSL3ZihznkoW58bexu/DRwEAxFYAAQAIe7JTRPYAwfVk/McT0747OX/3nLy9/9A+1s/So4yPdg7QxhO56Dzl92kAeBhgdaHy2nN+Gs+sBt3Azdwjz74/3X/nn1/fhVh5QeqU5ihbzlMLz18xPwmA2cTfSdSRa0+/pPFMj27wZpS+YozM5XSbT2A4sepfNUHLvWM+PHZjoIO/nhgntehj6E8LmkFmX3I5bfpP9+9za5VCg+3JD9I5wNGtwKmkRyNwC8IpLU4aoeq90QDQ4nCkAj2V9CgHf1cDnNKiqglPzhsRAEcOBE8kPeLqf0T8kw7QvSF/Zi68CjgBAMTVXwCoRwTl4YF9L+Lqf/QQpp7vYGaMCIDws4DoCgBVdFUAML4MG4hyMbgCQF39VQGEeQ7qRqgACK0CIisAZMFVAUB5M2QwysfACgB59VcFEOI3uJsgAyCsCoiqAJDevX6ViVFawDmh4IAQ3wN4DENIVRqR9Oirfxc+QouCXoOcMgMAmnDuOel+g5+zYAFA+EsYkNaoMSjl5D3OEQBA32v1lBcAapi/zZIFAO7bAG8AsAitg8A65mcCgPthoADwd+K707aWx6Bny1KVNhFdfzTFGwBMQoccukDbosbgWA4AezRcFyZPADCV/zoHqGF+tvLfPS89AcC2+uscoAYEGBcmtyrACwBsZVZPfdf9Vg1/wc+S4aW0ZyK6eNWlU6LHLI9Ce+kB74piA2SsTl0eU3slPKPAWv3rUICxQnXZBngAgFFcmb+O+ftMGc8CzP1q3iFh+e9C1np+opwx23mA+TZAAAj4wgWlNWoMmq1aNa9UPQDAtP83F7SGb1LNkgkC5tWqNQCYxJT5U/l4azJMWwFTz5p2Rrb/t577Vgbq4qMKMC1cpucA1iZgIalW/6N+g7x5ydy1BgDL/t963pAZrUFNKcBSBZieA1gagUVArf5TvijVmKUKMPOtWUdE+38BoJSnpybLsoiZnQNYAoCBnjL/lB9KNi6Vx5YAYNj/CwAlPT01aYYqwOwcoBIAzESbSic1ZlQAvQowy2UrADBQU6s/oxXPjJnhi0Im3jXphOQA0Ozg5ExO6q6BCjAsaCb5XAkAVnMNzEPd6qAC6GdaAsBEcpjtmSbuqabcCqCfA5hsaa1WxRJiceezRj+pAPo2wGRRswJAiXJpMoHUnFsBAWAifugAsALdhCRqmkAB9Mp2O6+3O7jdbuikNNkrJUhmTWFeAQFgQDP0Z6YCwEAQ1eSpAuiL2/aTAIsKQACQe7IqIAAMRBYdANuUHNBATXIqIAAMxFUAGBBJTSgVEAAGwoYOAIttzoAMapJUAeQnXNvnWxbmSH9SmjSxNa0xBQSADzoJAGOJpFacCggAAgBn5mrUJgogL3DaAnwIscn70iZppE5YFRAAPkQOuUQSAFhthzNuZABs57fFIaAAgJOsGom9AgKAKgD7rFKPNAoIAAIATbJqoPYKCADEAGhDt9jm2KeVemRRQAAQAFhyVeN0UCD1GZfF6ohMSFUADo4o1iUyAPQewEAy6tuAAyKpyUsFBIAPyYFeAQgAcveqAujfBlQFMBBZAWBAJDV5qgD6N10FgIHE3X5bauAeapJTAQFgIK7oWwABYCCIavJUAfTchqgA0CmpJwFy96oCyAeAbU4CwGBkdQ4wKJSafVEAHQDbeW3xHgD6SWmL6LZQMkY5BUpUtlUAoHOAcv7dnrAAMCEheqmkc4CJYKrpnwqUyGmLCoBFLG0D5OxRBRi2tSZVrRUA0B+XtMCbCDaaQWpHrQBD+b/9BMCyLGYAgOV8qbNbg/+oAEP5LwB8DOM/G2gbsCBasUsYVn+TdwAsV0SGPZO2AcWcvDhdFgCYLGZWZwAsANA7AYuuKHQZQ/lvtnhbAYDlSYCqgEJOXpgqy+pvdqBtCQCWg0BVAQvOKHIJy+pvcgBoVkbck4MJAGYELWKMCtNkWf3NDgCtAcB0DqAqoIKl5+bIsvqb5q7lFoANAKoC5gySuTXT6m+6cFsCgOkgsCezyaOUzM4oMDc285suXNYAYDoH6LltrUEBz6SaIlPpb7r/Ny0lCA8CexabEjWVNfJPhm31hwcA2zlAT3Gzxyr5PZNmhozmN1+0PcpftpJK5wFpPD08EdaFyrxa9QAA4zmAzgOGvZOiIWuOmleqHgBgpWvLbHPCprBLrkmwlv7m5b9Lhz9NxAwAQSCX2R9nw2x+F796VABtoKwllg4F8wKA3fzm5b8LUYgfBz6mvovgef0FPTN285s//vM+9GLfBnR9dCYA7euhwWUwv9ti7bUFyLANuEKgVQMNBvpwKcC+FXXfknoCIEsV4B4ELk9RjLbl3vf7gTTFgD8M0u07K54AaHNifSnoVTx0LoBvpywl/1VpN5+6dZzoMPAx5dtWQFsCTBBkKfmv6rouOt4AyLYNCAsMpr9gR5U5z1w96tr5PV2ybQMeXeBKaFjLYQws214/PLciAJCxLAsPFIbfoEahvDIIRwQAvMuz/njux0WPb4dOgFUNGCTlhy4yHvK9mrK7P91v4HgYOHIY15KlfdojochPPyTUuwM2qmcv9Z+pFLKYRAHAugqYFaeB4ERV0MbZPh1ENnao00tF4/fohngz5CYOVcDqK7ony0dVBWPgaqZv/zoB7LER+reaXeCWRxQJAOsqYPXtqJMQaIFq8GrnFe0/tUX4lbotN/pWrf/35aROcGGYL8Nu5FAFtC5XSWkNo52cq7pN6OX9FQA7Oma5djWnl+YfDQAP460K5jGWpSBcLurVQcZzA5X2Y9kR6snQmzlVAb2sXnk9l+GQifXsQCv8mOGvrVYXs/k73a84AQDPlXdFQM/xLAfmcuHKnCzua9FHhZd1LHTqfYT7MfyGjlVAF3HFMKgQWJmLZULu9oWq6+68PK4/EutTAIhIjNmnBKefDjwm1eqjTo/k3OkzItY740O59ogXj9w0oAroQWWGwOzYURL52TjQ4Iqm1ZHVv4lwEgBRK8OskRD2rccSwtEZCLo6Tm+r62M+PHbju1xRK8PMPKPA9CpjMpq/zzX7V8NXKHA03jPGWJncyDURSTG7n44C0zN9EGIyEreVNid1XRmv9zVHzX96C9DFjUoKhq3A8YTwzvgEfzTGUqLj8UZZbSL2h7NVQAt0xLiuCYUSD8skf+zr9BbLc24zfR83P0oF0MYRlRSzVUDUuJoGEAkxk8EbbaPBujFUl0tXFiOXgSCtOBFbgRXhoyAwCyeXhAjqNErToOlM3wYm1kgAiCi5VwDQxhUBJ7RYTGf1xAWVAQBV6aElXURi7NDXCwRQSTFh5J2mFbcBqwvQjs5vr0UDQMRquxsEDwjsQMktOZw7rggAuDgjAiBiK2Axb6sfHN0FkrNP3bqPqPbcBr/QMWSVZ2GEBS2GLvFcIayD0X/sok2s/ZZd+1x/2ur601/958Bam+o/CeYZ46EkC2pknW9mw0YGgPcKgTx3swCDd1QFALC5Bjuwe+J67Le7J2CpDG5ay+FVAADcvv8aQHQAeB8KQgfH0mmgfXkCHmHK8IsMAwA8DwWrHsAhmKOfk7QqIOMH3vxNdBYAeJ4HUAQqo0MCXwGPlo9mYWEBgPdqIQhEW+TvJyUZKwAaX9EM9PJozSthBIF4CHhWdvGz+XVHqnMlNgB4HwoKArG2yQYAKvMznQE8pqXn6bEgEAeBTACgMz8zALwrgda/QOAPgiwAoM0Vxi3ANS09KwFBQAAYUYDW/OwVQA+ONwQ6CHrVMZIUajOmAHsFQG3+LACI2A5c07kFXTAYM/inVswAoDd/JgBEQ6An9vXPebf/r/3vT9/wu35LsF/zyShZ/zkrAFKYPxsATkFg15zs5zA782cEQBrzZwQAIwQEgB2ExF5L+ajvnURZky/iYNAq9bLGYEQfpgognfmzVgA98VggIACMoOJcm3am08r+T2c750a4cefsyddWmO8PP8+1IZfLpdlj8E409AqA5lt9q5lZJfmQq4EqMXiWo8gASHXY9woQlZIPFQKVYvCYh6gAKGH+7GcAz6CHCAEBYLV+tb8u9X7/mVwVkw9t1akYg56LSLFIv98XAL4qgFINCAD2K/lsj2VK/kdhKicfyktDlWNwugIoV/ILAM/XhpPVgAAwu17btC+76l/lq5x8j2l0CgKVY3CiAii/6gsA71eQaBAIADYr+kgvWvUfVKqcfO8SpkGg/ZHPx6/ujiTZbJvKMYiqALTqv8jKysk3YtSIaqByDLwBION/yPLKyTcCgN7GEwSVY+AJAJX7AxleOfkG5PnSpCVr/3LR7LXv2leOgQcASr7Qs5qQlZNvVbNWDbRP+5ahxadyDCwBoHJ/IRsrJ9+CXC4VQeUYWABAxt/I5MrJtyHbPy7dOSOoHIMdAGiPb5DBlZPPQD4TEFSPwR8Tgei/wty3YROXqukzBaonn1dWzJwTVI9B+2vPn963UJnvlKnVk89J1i/dvtseqIy93V7pI9MHZKcAECDy/Ra9KmhvGLbPj5//plL2lxbXNy9l/LicvAkAgWLrVlIATQEBAC0iGo8UCFRAAAgUW7eSAmgKCABoEdF4pECgAgJAoNi6lRRAU0AAQIuIxiMFAhUQAALF1q2kAJoCAgBaRDQeKRCogAAQKLZuJQXQFBAA0CKi8UiBQAUEgECxdSspgKaAAIAWEY1HCgQqIAAEiq1bSQE0BQQAtIhoPFIgUAEBIFBs3UoKoCkgAKBFROORAoEKCACBYutWUgBNAQEALSIajxQIVEAACBRbt5ICaAr8HwzPMy6jdfALAAAAAElFTkSuQmCC
// @downloadURL https://update.greasyfork.org/scripts/532058/GitHub%20Back%20to%20Top.user.js
// @updateURL https://update.greasyfork.org/scripts/532058/GitHub%20Back%20to%20Top.meta.js
// ==/UserScript==

(function() {
    'use strict';

    // 创建按钮元素
    const backToTopBtn = document.createElement('div');
    backToTopBtn.innerHTML = '↑';
    backToTopBtn.style.position = 'fixed';
    backToTopBtn.style.right = '20px';
    backToTopBtn.style.bottom = '20px';
    backToTopBtn.style.width = '40px';
    backToTopBtn.style.height = '40px';
    backToTopBtn.style.borderRadius = '50%';
    backToTopBtn.style.backgroundColor = '#238636';
    backToTopBtn.style.color = 'white';
    backToTopBtn.style.display = 'flex';
    backToTopBtn.style.justifyContent = 'center';
    backToTopBtn.style.alignItems = 'center';
    backToTopBtn.style.cursor = 'pointer';
    backToTopBtn.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
    backToTopBtn.style.opacity = '0';
    backToTopBtn.style.transition = 'opacity 0.3s';
    backToTopBtn.style.zIndex = '9999';

    // 添加按钮到页面
    document.body.appendChild(backToTopBtn);

    // 滚动事件监听
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.style.opacity = '1';
        } else {
            backToTopBtn.style.opacity = '0';
        }
    });

    // 点击事件 - 平滑滚动
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
})();
