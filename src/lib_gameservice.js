//
// Copyright (C) Mat Hopwood www.drmop.com
// For details of license see license.txt
//

function GameService(name)
{
    this.service = LibUtils.ResolveService(name);
    if (this.service === undefined)
    {
        if (name === "xtralife")
            this.service = new LibXtralife();
    }
    this.name = name;
    GameService.instance = this;
}

//
// INIT
//
GameService.prototype.Init = function(options)
{
    if (this.service === undefined)
        return;
    return this.service.Init(options);
}
