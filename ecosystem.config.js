module.exports = {
  deploy : {
    production: {
      "user": "root",
      "host": ["ovz1.j47206473.wmekm.vps.myjino.ru"],
      "ref": "origin/master",
      "repo": "git@github.com:Katarka/mebelks.git",
      "path": "/root/apps/mebelks",
      "post-deploy": "npm install"
    }
  }
}
