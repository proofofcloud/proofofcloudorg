package bloggy

import (
	autocliv1 "cosmossdk.io/api/cosmos/autocli/v1"

	modulev1 "bloggy/api/bloggy/bloggy"
)

// AutoCLIOptions implements the autocli.HasAutoCLIConfig interface.
func (am AppModule) AutoCLIOptions() *autocliv1.ModuleOptions {
	return &autocliv1.ModuleOptions{
		Query: &autocliv1.ServiceCommandDescriptor{
			Service: modulev1.Query_ServiceDesc.ServiceName,
			RpcCommandOptions: []*autocliv1.RpcCommandOptions{
				{
					RpcMethod: "Params",
					Use:       "params",
					Short:     "Shows the parameters of the module",
				},
				{
					RpcMethod: "PostAll",
					Use:       "list-post",
					Short:     "List all post",
				},
				{
					RpcMethod:      "Post",
					Use:            "show-post [id]",
					Short:          "Shows a post by id",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "id"}},
				},
				{
					RpcMethod: "PostyAll",
					Use:       "list-posty",
					Short:     "List all posty",
				},
				{
					RpcMethod:      "Posty",
					Use:            "show-posty [id]",
					Short:          "Shows a posty by id",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "id"}},
				},
				// this line is used by ignite scaffolding # autocli/query
			},
		},
		Tx: &autocliv1.ServiceCommandDescriptor{
			Service:              modulev1.Msg_ServiceDesc.ServiceName,
			EnhanceCustomCommand: true, // only required if you want to use the custom command
			RpcCommandOptions: []*autocliv1.RpcCommandOptions{
				{
					RpcMethod: "UpdateParams",
					Skip:      true, // skipped because authority gated
				},
				{
					RpcMethod:      "CreatePost",
					Use:            "create-post",
					Short:          "Create post",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{},
				},
				{
					RpcMethod:      "UpdatePost",
					Use:            "update-post",
					Short:          "Update post",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{},
				},
				{
					RpcMethod: "DeletePost",
					Use:       "delete-post",
					Short:     "Delete post",
				},
				{
					RpcMethod:      "CreatePosty",
					Use:            "create-posty",
					Short:          "Create posty",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "title"}, {ProtoField: "body"}, {ProtoField: "price"}},
				},
				{
					RpcMethod:      "UpdatePosty",
					Use:            "update-posty",
					Short:          "Update posty",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "title"}, {ProtoField: "body"}, {ProtoField: "price"}},
				},
				{
					RpcMethod: "DeletePosty",
					Use:       "delete-posty",
					Short:     "Delete posty",
				},
				// this line is used by ignite scaffolding # autocli/tx
			},
		},
	}
}
