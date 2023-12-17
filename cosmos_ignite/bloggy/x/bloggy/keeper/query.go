package keeper

import (
	"bloggy/x/bloggy/types"
)

var _ types.QueryServer = Keeper{}
