/**
 * @version 1.0.0.0
 * @copyright Copyright ©  2017
 * @compiler Bridge.NET 16.3.5
 */
Bridge.assembly("Codex.View.Web", function ($asm, globals) {
    "use strict";

    Bridge.define("Codex.AdapterTypeAttribute", {
        inherits: [System.Attribute]
    });

    /** @namespace Codex */

    /**
     * Indicates an attached property which is not intrinsic to the parent object and should be
     excluded when computing the {@link }
     *
     * @public
     * @class Codex.AttachedAttribute
     * @augments System.Attribute
     */
    Bridge.define("Codex.AttachedAttribute", {
        inherits: [System.Attribute]
    });

    Bridge.define("Codex.CodeReviewerStatus", {
        $kind: "enum",
        statics: {
            fields: {
                NotStarted: 0,
                Waiting: 1,
                ApprovedWithSuggestions: 2,
                Approved: 3,
                Declined: 4
            }
        }
    });

    Bridge.define("Codex.CodeReviewStatus", {
        $kind: "enum"
    });

    Bridge.define("Codex.CoerceGetAttribute", {
        inherits: [System.Attribute],
        fields: {
            CoercedSourceType: null
        },
        ctors: {
            ctor: function (coercedSourceType) {
                if (coercedSourceType === void 0) { coercedSourceType = null; }

                this.$initialize();
                System.Attribute.ctor.call(this);
                this.CoercedSourceType = coercedSourceType;
            }
        }
    });

    Bridge.define("Codex.CommentImportance", {
        $kind: "enum",
        statics: {
            fields: {
                /**
                 * Indicates that the author can decide to take the change or not
                 *
                 * @static
                 * @public
                 * @memberof Codex.CommentImportance
                 * @constant
                 * @default 0
                 * @type Codex.CommentImportance
                 */
                AuthorDecides: 0,
                /**
                 * Default importance
                 *
                 * @static
                 * @public
                 * @memberof Codex.CommentImportance
                 * @constant
                 * @default 1
                 * @type Codex.CommentImportance
                 */
                Info: 1,
                /**
                 * Reviewer would like further discussion on this comment
                 *
                 * @static
                 * @public
                 * @memberof Codex.CommentImportance
                 * @constant
                 * @default 2
                 * @type Codex.CommentImportance
                 */
                Discuss: 2,
                /**
                 * Waiting on this comment to be addressed in order to approve
                 *
                 * @static
                 * @public
                 * @memberof Codex.CommentImportance
                 * @constant
                 * @default 3
                 * @type Codex.CommentImportance
                 */
                Blocker: 3
            }
        }
    });

    Bridge.define("Codex.CommentStatus", {
        $kind: "enum",
        statics: {
            fields: {
                Unpublished: 0,
                Active: 1,
                Resolved: 2,
                WontFix: 3,
                Pending: 4,
                Closed: 5
            }
        }
    });

    Bridge.define("Codex.DataInclusionAttribute", {
        inherits: [System.Attribute],
        fields: {
            DataInclusion: 0
        },
        ctors: {
            ctor: function (dataInclusion) {
                this.$initialize();
                System.Attribute.ctor.call(this);
                this.DataInclusion = dataInclusion;
            }
        }
    });

    Bridge.define("Codex.DataInclusionOptions", {
        $kind: "enum",
        statics: {
            fields: {
                /**
                 * Data should always be included
                 *
                 * @static
                 * @public
                 * @memberof Codex.DataInclusionOptions
                 * @constant
                 * @default 0
                 * @type Codex.DataInclusionOptions
                 */
                None: 0,
                Definitions: 1,
                References: 2,
                Classifications: 4,
                SearchDefinitions: 8,
                SearchReferences: 16,
                Content: 32,
                All: 63,
                Default: 62
            }
        }
    });

    Bridge.define("Codex.ISerializableEntity", {
        $kind: "interface"
    });

    Bridge.define("Codex.EntityIdAttribute", {
        inherits: [System.Attribute]
    });

    Bridge.define("Codex.EntityUtilities", {
        statics: {
            methods: {
                NullOrCopy: function (T, TTarget, obj, copy) {
                    if (obj == null) {
                        return null;
                    }
                    return copy(obj);
                }
            }
        }
    });

    /**
     * Describes change kinds for files
     *
     * @public
     * @class Codex.FileChangeKind
     */
    Bridge.define("Codex.FileChangeKind", {
        $kind: "enum",
        statics: {
            fields: {
                Add: 0,
                Edit: 1,
                Rename: 2,
                Delete: 3
            }
        }
    });

    Bridge.define("Codex.Framework.Types.IStore", {
        $kind: "interface"
    });

    /** @namespace Codex.Framework.Types */

    /**
     * High level storage operations
     *
     * @abstract
     * @public
     * @class Codex.Framework.Types.IStore$1
     */
    Bridge.definei("Codex.Framework.Types.IStore$1", function (T) { return {
        $kind: "interface"
    }; });

    Bridge.define("Codex.GeneratedClassNameAttribute", {
        inherits: [System.Attribute],
        fields: {
            Name: null
        },
        ctors: {
            ctor: function (name) {
                this.$initialize();
                System.Attribute.ctor.call(this);
                this.Name = name;
            }
        }
    });

    Bridge.define("Codex.IRepoScopeEntity", {
        $kind: "interface"
    });

    /**
     * Marker interface for searchable entities
     TODO: Consider moving {@link } out if its not needed by all searchable entities
     *
     * @abstract
     * @public
     * @class Codex.ISearchEntity
     */
    Bridge.define("Codex.ISearchEntity", {
        $kind: "interface"
    });

    /**
     * Describes a branch in a repository
     *
     * @abstract
     * @public
     * @class Codex.IBranch
     */
    Bridge.define("Codex.IBranch", {
        $kind: "interface"
    });

    Bridge.define("Codex.IClassificationList", {
        $kind: "interface"
    });

    Bridge.define("Codex.ISpan", {
        $kind: "interface"
    });

    /**
     * Describes styling for a given classification
     *
     * @abstract
     * @public
     * @class Codex.IClassificationStyle
     */
    Bridge.define("Codex.IClassificationStyle", {
        $kind: "interface"
    });

    Bridge.define("Codex.ICodeReview", {
        $kind: "interface"
    });

    Bridge.define("Codex.ICodeReviewComment", {
        $kind: "interface"
    });

    Bridge.define("Codex.ICodeReviewCommentThread", {
        $kind: "interface"
    });

    Bridge.define("Codex.ICodeReviewerInfo", {
        $kind: "interface"
    });

    Bridge.define("Codex.ICodeReviewFile", {
        $kind: "interface"
    });

    Bridge.define("Codex.ICodeReviewIteration", {
        $kind: "interface"
    });

    Bridge.define("Codex.ICodeSymbol", {
        $kind: "interface"
    });

    /**
     * Represents a version of a repository file for a commit
     *
     * @abstract
     * @public
     * @class Codex.ICommitFileLink
     */
    Bridge.define("Codex.ICommitFileLink", {
        $kind: "interface"
    });

    /**
     * Defines documentation about a symbol
     *
     * @abstract
     * @public
     * @class Codex.IDocumentationInfo
     */
    Bridge.define("Codex.IDocumentationInfo", {
        $kind: "interface"
    });

    /**
     * Describes encoding so that file may be reconstituted in a byte-identical form
     *
     * @abstract
     * @public
     * @class Codex.IEncodingDescription
     */
    Bridge.define("Codex.IEncodingDescription", {
        $kind: "interface"
    });

    Bridge.define("Codex.IFileStatistics", {
        $kind: "interface"
    });

    Bridge.define("Codex.ILanguageInfo", {
        $kind: "interface"
    });

    Bridge.definei("Codex.IMutable$2", function (TMutable, TImmutable) { return {
        $kind: "interface"
    }; });

    /**
     * Indicates stages for which the given property should be included
     *
     * @public
     * @class Codex.IncludeAttribute
     * @augments System.Attribute
     */
    Bridge.define("Codex.IncludeAttribute", {
        inherits: [System.Attribute],
        fields: {
            AllowedStages: 0
        },
        ctors: {
            ctor: function (stages) {
                this.$initialize();
                System.Attribute.ctor.call(this);
                this.AllowedStages = stages;
            }
        }
    });

    Bridge.define("Codex.IOutliningRegion", {
        $kind: "interface"
    });

    /**
     * Documentation for a method parameter
     *
     * @abstract
     * @public
     * @class Codex.IParameterDocumentation
     */
    Bridge.define("Codex.IParameterDocumentation", {
        $kind: "interface"
    });

    Bridge.define("Codex.IPropertyMap", {
        $kind: "interface"
    });

    Bridge.define("Codex.IReferencedProject", {
        $kind: "interface"
    });

    Bridge.define("Codex.IReferenceList", {
        $kind: "interface"
    });

    Bridge.define("Codex.IRepository", {
        $kind: "interface"
    });

    Bridge.define("Codex.IRepositoryReference", {
        $kind: "interface"
    });

    /**
     * Information for creating an ICodexRepositoryStore
     *
     * @abstract
     * @public
     * @class Codex.IRepositoryStoreInfo
     */
    Bridge.define("Codex.IRepositoryStoreInfo", {
        $kind: "interface"
    });

    /**
     * Information about a source file as defined by the source control provider
     *
     * @abstract
     * @public
     * @class Codex.ISourceControlFileInfo
     */
    Bridge.define("Codex.ISourceControlFileInfo", {
        $kind: "interface"
    });

    /**
     * Defines text contents of a file and associated data
     *
     * @abstract
     * @public
     * @class Codex.ISourceFile
     */
    Bridge.define("Codex.ISourceFile", {
        $kind: "interface"
    });

    Bridge.define("Codex.IStoredBoundSourceFile", {
        $kind: "interface"
    });

    Bridge.define("Codex.ISymbolLineSpanList", {
        $kind: "interface"
    });

    Bridge.define("Codex.MutableExtensions");

    Bridge.define("Codex.ObjectModel.CodexTypeUtilities", {
        statics: {
            fields: {
                s_typeMappings: null
            },
            ctors: {
                init: function () {
                    this.s_typeMappings = Codex.ObjectModel.CodexTypeUtilities.CreateTypeMapping();
                }
            },
            methods: {
                CreateTypeMapping: function () {
                    var typeMapping = new (System.Collections.Generic.Dictionary$2(Function,Function))();
                    typeMapping.add(Codex.ICommit, Codex.ObjectModel.Commit);
                    typeMapping.add(Codex.ObjectModel.Commit, Codex.ICommit);
                    typeMapping.add(Codex.ICommitChangedFile, Codex.ObjectModel.CommitChangedFile);
                    typeMapping.add(Codex.ObjectModel.CommitChangedFile, Codex.ICommitChangedFile);
                    typeMapping.add(Codex.ICommitFileLink, Codex.ObjectModel.CommitFileLink);
                    typeMapping.add(Codex.ObjectModel.CommitFileLink, Codex.ICommitFileLink);
                    typeMapping.add(Codex.IBranch, Codex.ObjectModel.Branch);
                    typeMapping.add(Codex.ObjectModel.Branch, Codex.IBranch);
                    typeMapping.add(Codex.IBoundSourceFile, Codex.ObjectModel.BoundSourceFile);
                    typeMapping.add(Codex.ObjectModel.BoundSourceFile, Codex.IBoundSourceFile);
                    typeMapping.add(Codex.IBoundSourceInfo, Codex.ObjectModel.BoundSourceInfo);
                    typeMapping.add(Codex.ObjectModel.BoundSourceInfo, Codex.IBoundSourceInfo);
                    typeMapping.add(Codex.ISourceControlFileInfo, Codex.ObjectModel.SourceControlFileInfo);
                    typeMapping.add(Codex.ObjectModel.SourceControlFileInfo, Codex.ISourceControlFileInfo);
                    typeMapping.add(Codex.ISourceFileInfo, Codex.ObjectModel.SourceFileInfo);
                    typeMapping.add(Codex.ObjectModel.SourceFileInfo, Codex.ISourceFileInfo);
                    typeMapping.add(Codex.IEncodingDescription, Codex.ObjectModel.EncodingDescription);
                    typeMapping.add(Codex.ObjectModel.EncodingDescription, Codex.IEncodingDescription);
                    typeMapping.add(Codex.ISourceFile, Codex.ObjectModel.SourceFile);
                    typeMapping.add(Codex.ObjectModel.SourceFile, Codex.ISourceFile);
                    typeMapping.add(Codex.IOutliningRegion, Codex.ObjectModel.OutliningRegion);
                    typeMapping.add(Codex.ObjectModel.OutliningRegion, Codex.IOutliningRegion);
                    typeMapping.add(Codex.IDefinitionSpan, Codex.ObjectModel.DefinitionSpan);
                    typeMapping.add(Codex.ObjectModel.DefinitionSpan, Codex.IDefinitionSpan);
                    typeMapping.add(Codex.IParameterDefinitionSpan, Codex.ObjectModel.ParameterDefinitionSpan);
                    typeMapping.add(Codex.ObjectModel.ParameterDefinitionSpan, Codex.IParameterDefinitionSpan);
                    typeMapping.add(Codex.IReferenceSpan, Codex.ObjectModel.ReferenceSpan);
                    typeMapping.add(Codex.ObjectModel.ReferenceSpan, Codex.IReferenceSpan);
                    typeMapping.add(Codex.IParameterReferenceSpan, Codex.ObjectModel.ParameterReferenceSpan);
                    typeMapping.add(Codex.ObjectModel.ParameterReferenceSpan, Codex.IParameterReferenceSpan);
                    typeMapping.add(Codex.IClassificationSpan, Codex.ObjectModel.ClassificationSpan);
                    typeMapping.add(Codex.ObjectModel.ClassificationSpan, Codex.IClassificationSpan);
                    typeMapping.add(Codex.ISymbolSpan, Codex.ObjectModel.SymbolSpan);
                    typeMapping.add(Codex.ObjectModel.SymbolSpan, Codex.ISymbolSpan);
                    typeMapping.add(Codex.ITextLineSpan, Codex.ObjectModel.TextLineSpan);
                    typeMapping.add(Codex.ObjectModel.TextLineSpan, Codex.ITextLineSpan);
                    typeMapping.add(Codex.ILineSpan, Codex.ObjectModel.LineSpan);
                    typeMapping.add(Codex.ObjectModel.LineSpan, Codex.ILineSpan);
                    typeMapping.add(Codex.ISpan, Codex.ObjectModel.Span);
                    typeMapping.add(Codex.ObjectModel.Span, Codex.ISpan);
                    typeMapping.add(Codex.ICodeReview, Codex.ObjectModel.CodeReview);
                    typeMapping.add(Codex.ObjectModel.CodeReview, Codex.ICodeReview);
                    typeMapping.add(Codex.ICodeReviewIteration, Codex.ObjectModel.CodeReviewIteration);
                    typeMapping.add(Codex.ObjectModel.CodeReviewIteration, Codex.ICodeReviewIteration);
                    typeMapping.add(Codex.ICodeReviewerInfo, Codex.ObjectModel.CodeReviewerInfo);
                    typeMapping.add(Codex.ObjectModel.CodeReviewerInfo, Codex.ICodeReviewerInfo);
                    typeMapping.add(Codex.ICodeReviewFile, Codex.ObjectModel.CodeReviewFile);
                    typeMapping.add(Codex.ObjectModel.CodeReviewFile, Codex.ICodeReviewFile);
                    typeMapping.add(Codex.ICodeReviewCommentThread, Codex.ObjectModel.CodeReviewCommentThread);
                    typeMapping.add(Codex.ObjectModel.CodeReviewCommentThread, Codex.ICodeReviewCommentThread);
                    typeMapping.add(Codex.ICodeReviewComment, Codex.ObjectModel.CodeReviewComment);
                    typeMapping.add(Codex.ObjectModel.CodeReviewComment, Codex.ICodeReviewComment);
                    typeMapping.add(Codex.ILanguageInfo, Codex.ObjectModel.LanguageInfo);
                    typeMapping.add(Codex.ObjectModel.LanguageInfo, Codex.ILanguageInfo);
                    typeMapping.add(Codex.IClassificationStyle, Codex.ObjectModel.ClassificationStyle);
                    typeMapping.add(Codex.ObjectModel.ClassificationStyle, Codex.IClassificationStyle);
                    typeMapping.add(Codex.IProject, Codex.ObjectModel.AnalyzedProject);
                    typeMapping.add(Codex.ObjectModel.AnalyzedProject, Codex.IProject);
                    typeMapping.add(Codex.IReferencedProject, Codex.ObjectModel.ReferencedProject);
                    typeMapping.add(Codex.ObjectModel.ReferencedProject, Codex.IReferencedProject);
                    typeMapping.add(Codex.IProjectFileLink, Codex.ObjectModel.ProjectFileLink);
                    typeMapping.add(Codex.ObjectModel.ProjectFileLink, Codex.IProjectFileLink);
                    typeMapping.add(Codex.IDocumentationInfo, Codex.ObjectModel.DocumentationInfo);
                    typeMapping.add(Codex.ObjectModel.DocumentationInfo, Codex.IDocumentationInfo);
                    typeMapping.add(Codex.IParameterDocumentation, Codex.ObjectModel.ParameterDocumentation);
                    typeMapping.add(Codex.ObjectModel.ParameterDocumentation, Codex.IParameterDocumentation);
                    typeMapping.add(Codex.ITypedParameterDocumentation, Codex.ObjectModel.TypedParameterDocumentation);
                    typeMapping.add(Codex.ObjectModel.TypedParameterDocumentation, Codex.ITypedParameterDocumentation);
                    typeMapping.add(Codex.IDocumentationReferenceSymbol, Codex.ObjectModel.DocumentationReferenceSymbol);
                    typeMapping.add(Codex.ObjectModel.DocumentationReferenceSymbol, Codex.IDocumentationReferenceSymbol);
                    typeMapping.add(Codex.IPropertySearchModel, Codex.ObjectModel.PropertySearchModel);
                    typeMapping.add(Codex.ObjectModel.PropertySearchModel, Codex.IPropertySearchModel);
                    typeMapping.add(Codex.IPropertyMap, Codex.ObjectModel.PropertyMap);
                    typeMapping.add(Codex.ObjectModel.PropertyMap, Codex.IPropertyMap);
                    typeMapping.add(Codex.IRepository, Codex.ObjectModel.Repository);
                    typeMapping.add(Codex.ObjectModel.Repository, Codex.IRepository);
                    typeMapping.add(Codex.IRepositoryReference, Codex.ObjectModel.RepositoryReference);
                    typeMapping.add(Codex.ObjectModel.RepositoryReference, Codex.IRepositoryReference);
                    typeMapping.add(Codex.ISearchEntity, Codex.ObjectModel.SearchEntity);
                    typeMapping.add(Codex.ObjectModel.SearchEntity, Codex.ISearchEntity);
                    typeMapping.add(Codex.IRepoScopeEntity, Codex.ObjectModel.RepoScopeEntity);
                    typeMapping.add(Codex.ObjectModel.RepoScopeEntity, Codex.IRepoScopeEntity);
                    typeMapping.add(Codex.ICommitScopeEntity, Codex.ObjectModel.CommitScopeEntity);
                    typeMapping.add(Codex.ObjectModel.CommitScopeEntity, Codex.ICommitScopeEntity);
                    typeMapping.add(Codex.IProjectScopeEntity, Codex.ObjectModel.ProjectScopeEntity);
                    typeMapping.add(Codex.ObjectModel.ProjectScopeEntity, Codex.IProjectScopeEntity);
                    typeMapping.add(Codex.IRepoFileScopeEntity, Codex.ObjectModel.RepoFileScopeEntity);
                    typeMapping.add(Codex.ObjectModel.RepoFileScopeEntity, Codex.IRepoFileScopeEntity);
                    typeMapping.add(Codex.IProjectFileScopeEntity, Codex.ObjectModel.ProjectFileScopeEntity);
                    typeMapping.add(Codex.ObjectModel.ProjectFileScopeEntity, Codex.IProjectFileScopeEntity);
                    typeMapping.add(Codex.IRegisteredEntity, Codex.ObjectModel.RegisteredEntity);
                    typeMapping.add(Codex.ObjectModel.RegisteredEntity, Codex.IRegisteredEntity);
                    typeMapping.add(Codex.IStoredFilter, Codex.ObjectModel.StoredFilter);
                    typeMapping.add(Codex.ObjectModel.StoredFilter, Codex.IStoredFilter);
                    typeMapping.add(Codex.IDefinitionSearchModel, Codex.ObjectModel.DefinitionSearchModel);
                    typeMapping.add(Codex.ObjectModel.DefinitionSearchModel, Codex.IDefinitionSearchModel);
                    typeMapping.add(Codex.ILanguageSearchModel, Codex.ObjectModel.LanguageSearchModel);
                    typeMapping.add(Codex.ObjectModel.LanguageSearchModel, Codex.ILanguageSearchModel);
                    typeMapping.add(Codex.IReferenceSearchModel, Codex.ObjectModel.ReferenceSearchModel);
                    typeMapping.add(Codex.ObjectModel.ReferenceSearchModel, Codex.IReferenceSearchModel);
                    typeMapping.add(Codex.ISourceSearchModelBase, Codex.ObjectModel.SourceSearchModelBase);
                    typeMapping.add(Codex.ObjectModel.SourceSearchModelBase, Codex.ISourceSearchModelBase);
                    typeMapping.add(Codex.IBoundSourceSearchModel, Codex.ObjectModel.BoundSourceSearchModel);
                    typeMapping.add(Codex.ObjectModel.BoundSourceSearchModel, Codex.IBoundSourceSearchModel);
                    typeMapping.add(Codex.ITextSourceSearchModel, Codex.ObjectModel.TextSourceSearchModel);
                    typeMapping.add(Codex.ObjectModel.TextSourceSearchModel, Codex.ITextSourceSearchModel);
                    typeMapping.add(Codex.IRepositorySearchModel, Codex.ObjectModel.RepositorySearchModel);
                    typeMapping.add(Codex.ObjectModel.RepositorySearchModel, Codex.IRepositorySearchModel);
                    typeMapping.add(Codex.IProjectSearchModel, Codex.ObjectModel.ProjectSearchModel);
                    typeMapping.add(Codex.ObjectModel.ProjectSearchModel, Codex.IProjectSearchModel);
                    typeMapping.add(Codex.IProjectReferenceSearchModel, Codex.ObjectModel.ProjectReferenceSearchModel);
                    typeMapping.add(Codex.ObjectModel.ProjectReferenceSearchModel, Codex.IProjectReferenceSearchModel);
                    typeMapping.add(Codex.ICommitSearchModel, Codex.ObjectModel.CommitSearchModel);
                    typeMapping.add(Codex.ObjectModel.CommitSearchModel, Codex.ICommitSearchModel);
                    typeMapping.add(Codex.ICommitFilesSearchModel, Codex.ObjectModel.CommitFilesSearchModel);
                    typeMapping.add(Codex.ObjectModel.CommitFilesSearchModel, Codex.ICommitFilesSearchModel);
                    typeMapping.add(Codex.IFileStatistics, Codex.ObjectModel.FileStatistics);
                    typeMapping.add(Codex.ObjectModel.FileStatistics, Codex.IFileStatistics);
                    typeMapping.add(Codex.IRepositoryStoreInfo, Codex.ObjectModel.RepositoryStoreInfo);
                    typeMapping.add(Codex.ObjectModel.RepositoryStoreInfo, Codex.IRepositoryStoreInfo);
                    typeMapping.add(Codex.ICommitFilesDirectory, Codex.ObjectModel.CommitFilesDirectory);
                    typeMapping.add(Codex.ObjectModel.CommitFilesDirectory, Codex.ICommitFilesDirectory);
                    typeMapping.add(Codex.IStoredBoundSourceFile, Codex.ObjectModel.StoredBoundSourceFile);
                    typeMapping.add(Codex.ObjectModel.StoredBoundSourceFile, Codex.IStoredBoundSourceFile);
                    typeMapping.add(Codex.IDefinitionSymbol, Codex.ObjectModel.DefinitionSymbol);
                    typeMapping.add(Codex.ObjectModel.DefinitionSymbol, Codex.IDefinitionSymbol);
                    typeMapping.add(Codex.IReferenceSymbol, Codex.ObjectModel.ReferenceSymbol);
                    typeMapping.add(Codex.ObjectModel.ReferenceSymbol, Codex.IReferenceSymbol);
                    typeMapping.add(Codex.ICodeSymbol, Codex.ObjectModel.Symbol);
                    typeMapping.add(Codex.ObjectModel.Symbol, Codex.ICodeSymbol);
                    typeMapping.add(Codex.Sdk.Search.ITextLineSpanResult, Codex.ObjectModel.TextLineSpanResult);
                    typeMapping.add(Codex.ObjectModel.TextLineSpanResult, Codex.Sdk.Search.ITextLineSpanResult);
                    typeMapping.add(Codex.Sdk.Search.ISearchResult, Codex.ObjectModel.SearchResult);
                    typeMapping.add(Codex.ObjectModel.SearchResult, Codex.Sdk.Search.ISearchResult);
                    typeMapping.add(Codex.Sdk.Search.IIndex, Codex.ObjectModel.Index);
                    typeMapping.add(Codex.ObjectModel.Index, Codex.Sdk.Search.IIndex);
                    return typeMapping;
                }
            }
        }
    });

    /** @namespace Codex.ObjectModel */

    /**
     * Allows defining extension data during analysis
     *
     * @public
     * @class Codex.ObjectModel.ExtensionData
     */
    Bridge.define("Codex.ObjectModel.ExtensionData");

    /**
     * Defines Codex glyphs
     *
     * @public
     * @class Codex.ObjectModel.Glyph
     */
    Bridge.define("Codex.ObjectModel.Glyph", {
        $kind: "enum",
        statics: {
            fields: {
                Unknown: -1,
                Assembly: 0,
                BasicFile: 1,
                BasicProject: 2,
                ClassPublic: 3,
                ClassProtected: 4,
                ClassPrivate: 5,
                ClassInternal: 6,
                CSharpFile: 7,
                CSharpProject: 8,
                ConstantPublic: 9,
                ConstantProtected: 10,
                ConstantPrivate: 11,
                ConstantInternal: 12,
                DelegatePublic: 13,
                DelegateProtected: 14,
                DelegatePrivate: 15,
                DelegateInternal: 16,
                EnumPublic: 17,
                EnumProtected: 18,
                EnumPrivate: 19,
                EnumInternal: 20,
                EnumMember: 21,
                Error: 22,
                EventPublic: 23,
                EventProtected: 24,
                EventPrivate: 25,
                EventInternal: 26,
                ExtensionMethodPublic: 27,
                ExtensionMethodProtected: 28,
                ExtensionMethodPrivate: 29,
                ExtensionMethodInternal: 30,
                FieldPublic: 31,
                FieldProtected: 32,
                FieldPrivate: 33,
                FieldInternal: 34,
                InterfacePublic: 35,
                InterfaceProtected: 36,
                InterfacePrivate: 37,
                InterfaceInternal: 38,
                Intrinsic: 39,
                Keyword: 40,
                Label: 41,
                Local: 42,
                Namespace: 43,
                MethodPublic: 44,
                MethodProtected: 45,
                MethodPrivate: 46,
                MethodInternal: 47,
                ModulePublic: 48,
                ModuleProtected: 49,
                ModulePrivate: 50,
                ModuleInternal: 51,
                OpenFolder: 52,
                Operator: 53,
                Parameter: 54,
                PropertyPublic: 55,
                PropertyProtected: 56,
                PropertyPrivate: 57,
                PropertyInternal: 58,
                RangeVariable: 59,
                Reference: 60,
                StructurePublic: 61,
                StructureProtected: 62,
                StructurePrivate: 63,
                StructureInternal: 64,
                TypeParameter: 65,
                Up: 66,
                Down: 67,
                Left: 68,
                Right: 69,
                Dot: 70,
                Snippet: 71
            }
        }
    });

    Bridge.define("Codex.ObjectModel.GlyphUtilities", {
        statics: {
            methods: {
                GetGlyphNumber: function (glyph) {
                    var result = (((((Codex.ObjectModel.GlyphUtilities.GetStandardGlyphGroup(glyph)) & 65535) + ((Codex.ObjectModel.GlyphUtilities.GetStandardGlyphItem(glyph)) & 65535)) | 0)) & 65535;
                    return result;
                },
                GetStandardGlyphGroup: function (glyph) {
                    switch (glyph) {
                        case Codex.ObjectModel.Glyph.Assembly: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphAssembly;
                        case Codex.ObjectModel.Glyph.ClassPublic: 
                        case Codex.ObjectModel.Glyph.ClassProtected: 
                        case Codex.ObjectModel.Glyph.ClassPrivate: 
                        case Codex.ObjectModel.Glyph.ClassInternal: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupClass;
                        case Codex.ObjectModel.Glyph.ConstantPublic: 
                        case Codex.ObjectModel.Glyph.ConstantProtected: 
                        case Codex.ObjectModel.Glyph.ConstantPrivate: 
                        case Codex.ObjectModel.Glyph.ConstantInternal: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupConstant;
                        case Codex.ObjectModel.Glyph.CSharpFile: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphCSharpFile;
                        case Codex.ObjectModel.Glyph.DelegatePublic: 
                        case Codex.ObjectModel.Glyph.DelegateProtected: 
                        case Codex.ObjectModel.Glyph.DelegatePrivate: 
                        case Codex.ObjectModel.Glyph.DelegateInternal: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupDelegate;
                        case Codex.ObjectModel.Glyph.EnumPublic: 
                        case Codex.ObjectModel.Glyph.EnumProtected: 
                        case Codex.ObjectModel.Glyph.EnumPrivate: 
                        case Codex.ObjectModel.Glyph.EnumInternal: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupEnum;
                        case Codex.ObjectModel.Glyph.EnumMember: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupEnumMember;
                        case Codex.ObjectModel.Glyph.Error: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupError;
                        case Codex.ObjectModel.Glyph.ExtensionMethodPublic: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphExtensionMethod;
                        case Codex.ObjectModel.Glyph.ExtensionMethodProtected: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphExtensionMethodProtected;
                        case Codex.ObjectModel.Glyph.ExtensionMethodPrivate: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphExtensionMethodPrivate;
                        case Codex.ObjectModel.Glyph.ExtensionMethodInternal: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphExtensionMethodInternal;
                        case Codex.ObjectModel.Glyph.EventPublic: 
                        case Codex.ObjectModel.Glyph.EventProtected: 
                        case Codex.ObjectModel.Glyph.EventPrivate: 
                        case Codex.ObjectModel.Glyph.EventInternal: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupEvent;
                        case Codex.ObjectModel.Glyph.FieldPublic: 
                        case Codex.ObjectModel.Glyph.FieldProtected: 
                        case Codex.ObjectModel.Glyph.FieldPrivate: 
                        case Codex.ObjectModel.Glyph.FieldInternal: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupField;
                        case Codex.ObjectModel.Glyph.InterfacePublic: 
                        case Codex.ObjectModel.Glyph.InterfaceProtected: 
                        case Codex.ObjectModel.Glyph.InterfacePrivate: 
                        case Codex.ObjectModel.Glyph.InterfaceInternal: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupInterface;
                        case Codex.ObjectModel.Glyph.Intrinsic: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupIntrinsic;
                        case Codex.ObjectModel.Glyph.Keyword: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphKeyword;
                        case Codex.ObjectModel.Glyph.Label: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupIntrinsic;
                        case Codex.ObjectModel.Glyph.Local: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupVariable;
                        case Codex.ObjectModel.Glyph.Namespace: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupNamespace;
                        case Codex.ObjectModel.Glyph.MethodPublic: 
                        case Codex.ObjectModel.Glyph.MethodProtected: 
                        case Codex.ObjectModel.Glyph.MethodPrivate: 
                        case Codex.ObjectModel.Glyph.MethodInternal: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupMethod;
                        case Codex.ObjectModel.Glyph.ModulePublic: 
                        case Codex.ObjectModel.Glyph.ModuleProtected: 
                        case Codex.ObjectModel.Glyph.ModulePrivate: 
                        case Codex.ObjectModel.Glyph.ModuleInternal: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupModule;
                        case Codex.ObjectModel.Glyph.OpenFolder: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphOpenFolder;
                        case Codex.ObjectModel.Glyph.Operator: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupOperator;
                        case Codex.ObjectModel.Glyph.Parameter: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupVariable;
                        case Codex.ObjectModel.Glyph.PropertyPublic: 
                        case Codex.ObjectModel.Glyph.PropertyProtected: 
                        case Codex.ObjectModel.Glyph.PropertyPrivate: 
                        case Codex.ObjectModel.Glyph.PropertyInternal: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupProperty;
                        case Codex.ObjectModel.Glyph.RangeVariable: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupVariable;
                        case Codex.ObjectModel.Glyph.Reference: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphReference;
                        case Codex.ObjectModel.Glyph.StructurePublic: 
                        case Codex.ObjectModel.Glyph.StructureProtected: 
                        case Codex.ObjectModel.Glyph.StructurePrivate: 
                        case Codex.ObjectModel.Glyph.StructureInternal: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupStruct;
                        case Codex.ObjectModel.Glyph.TypeParameter: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupType;
                        case Codex.ObjectModel.Glyph.Up: 
                        case Codex.ObjectModel.Glyph.Down: 
                        case Codex.ObjectModel.Glyph.Left: 
                        case Codex.ObjectModel.Glyph.Right: 
                        case Codex.ObjectModel.Glyph.Dot: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphArrow;
                        default: 
                            throw new System.ArgumentException("glyph");
                    }
                },
                GetStandardGlyphItem: function (icon) {
                    switch (icon) {
                        case Codex.ObjectModel.Glyph.ClassProtected: 
                        case Codex.ObjectModel.Glyph.ConstantProtected: 
                        case Codex.ObjectModel.Glyph.DelegateProtected: 
                        case Codex.ObjectModel.Glyph.EnumProtected: 
                        case Codex.ObjectModel.Glyph.EventProtected: 
                        case Codex.ObjectModel.Glyph.FieldProtected: 
                        case Codex.ObjectModel.Glyph.InterfaceProtected: 
                        case Codex.ObjectModel.Glyph.MethodProtected: 
                        case Codex.ObjectModel.Glyph.ModuleProtected: 
                        case Codex.ObjectModel.Glyph.PropertyProtected: 
                        case Codex.ObjectModel.Glyph.StructureProtected: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphItem.GlyphItemProtected;
                        case Codex.ObjectModel.Glyph.ClassPrivate: 
                        case Codex.ObjectModel.Glyph.ConstantPrivate: 
                        case Codex.ObjectModel.Glyph.DelegatePrivate: 
                        case Codex.ObjectModel.Glyph.EnumPrivate: 
                        case Codex.ObjectModel.Glyph.EventPrivate: 
                        case Codex.ObjectModel.Glyph.FieldPrivate: 
                        case Codex.ObjectModel.Glyph.InterfacePrivate: 
                        case Codex.ObjectModel.Glyph.MethodPrivate: 
                        case Codex.ObjectModel.Glyph.ModulePrivate: 
                        case Codex.ObjectModel.Glyph.PropertyPrivate: 
                        case Codex.ObjectModel.Glyph.StructurePrivate: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphItem.GlyphItemPrivate;
                        case Codex.ObjectModel.Glyph.ClassInternal: 
                        case Codex.ObjectModel.Glyph.ConstantInternal: 
                        case Codex.ObjectModel.Glyph.DelegateInternal: 
                        case Codex.ObjectModel.Glyph.EnumInternal: 
                        case Codex.ObjectModel.Glyph.EventInternal: 
                        case Codex.ObjectModel.Glyph.FieldInternal: 
                        case Codex.ObjectModel.Glyph.InterfaceInternal: 
                        case Codex.ObjectModel.Glyph.MethodInternal: 
                        case Codex.ObjectModel.Glyph.ModuleInternal: 
                        case Codex.ObjectModel.Glyph.PropertyInternal: 
                        case Codex.ObjectModel.Glyph.StructureInternal: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphItem.GlyphItemFriend;
                        default: 
                            // We don't want any overlays
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphItem.GlyphItemPublic;
                    }
                }
            }
        }
    });

    Bridge.define("Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup", {
        $kind: "enum",
        statics: {
            fields: {
                GlyphGroupClass: 0,
                GlyphGroupConstant: 6,
                GlyphGroupDelegate: 12,
                GlyphGroupEnum: 18,
                GlyphGroupEnumMember: 24,
                GlyphGroupEvent: 30,
                GlyphGroupException: 36,
                GlyphGroupField: 42,
                GlyphGroupInterface: 48,
                GlyphGroupMacro: 54,
                GlyphGroupMap: 60,
                GlyphGroupMapItem: 66,
                GlyphGroupMethod: 72,
                GlyphGroupOverload: 78,
                GlyphGroupModule: 84,
                GlyphGroupNamespace: 90,
                GlyphGroupOperator: 96,
                GlyphGroupProperty: 102,
                GlyphGroupStruct: 108,
                GlyphGroupTemplate: 114,
                GlyphGroupTypedef: 120,
                GlyphGroupType: 126,
                GlyphGroupUnion: 132,
                GlyphGroupVariable: 138,
                GlyphGroupValueType: 144,
                GlyphGroupIntrinsic: 150,
                GlyphGroupJSharpMethod: 156,
                GlyphGroupJSharpField: 162,
                GlyphGroupJSharpClass: 168,
                GlyphGroupJSharpNamespace: 174,
                GlyphGroupJSharpInterface: 180,
                GlyphGroupError: 186,
                GlyphBscFile: 191,
                GlyphAssembly: 192,
                GlyphLibrary: 193,
                GlyphVBProject: 194,
                GlyphCoolProject: 196,
                GlyphCppProject: 199,
                GlyphDialogId: 200,
                GlyphOpenFolder: 201,
                GlyphClosedFolder: 202,
                GlyphArrow: 203,
                GlyphCSharpFile: 204,
                GlyphCSharpExpansion: 205,
                GlyphKeyword: 206,
                GlyphInformation: 207,
                GlyphReference: 208,
                GlyphRecursion: 209,
                GlyphXmlItem: 210,
                GlyphJSharpProject: 211,
                GlyphJSharpDocument: 212,
                GlyphForwardType: 213,
                GlyphCallersGraph: 214,
                GlyphCallGraph: 215,
                GlyphWarning: 216,
                GlyphMaybeReference: 217,
                GlyphMaybeCaller: 218,
                GlyphMaybeCall: 219,
                GlyphExtensionMethod: 220,
                GlyphExtensionMethodInternal: 221,
                GlyphExtensionMethodFriend: 222,
                GlyphExtensionMethodProtected: 223,
                GlyphExtensionMethodPrivate: 224,
                GlyphExtensionMethodShortcut: 225,
                GlyphXmlAttribute: 226,
                GlyphXmlChild: 227,
                GlyphXmlDescendant: 228,
                GlyphXmlNamespace: 229,
                GlyphXmlAttributeQuestion: 230,
                GlyphXmlAttributeCheck: 231,
                GlyphXmlChildQuestion: 232,
                GlyphXmlChildCheck: 233,
                GlyphXmlDescendantQuestion: 234,
                GlyphXmlDescendantCheck: 235,
                GlyphCompletionWarning: 236,
                GlyphGroupUnknown: 237
            }
        }
    });

    Bridge.define("Codex.ObjectModel.GlyphUtilities.StandardGlyphItem", {
        $kind: "enum",
        statics: {
            fields: {
                GlyphItemPublic: 0,
                GlyphItemInternal: 1,
                GlyphItemFriend: 2,
                GlyphItemProtected: 3,
                GlyphItemPrivate: 4,
                GlyphItemShortcut: 5,
                TotalGlyphItems: 6
            }
        }
    });

    Bridge.define("Codex.Sdk.Search.IIndex", {
        $kind: "interface"
    });

    /**
     * Defines standard set of project kinds
     *
     * @public
     * @class Codex.ObjectModel.ProjectKind
     */
    Bridge.define("Codex.ObjectModel.ProjectKind", {
        $kind: "enum",
        statics: {
            fields: {
                Source: 0,
                MetadataAsSource: 1,
                Decompilation: 2
            }
        }
    });

    /**
     * Defines standard set of reference kinds
     *
     * @public
     * @class Codex.ObjectModel.ReferenceKind
     */
    Bridge.define("Codex.ObjectModel.ReferenceKind", {
        $kind: "enum",
        statics: {
            fields: {
                Definition: 0,
                /**
                 * This represents a constructor declaration for the given type. This is different than
                 instantiation which actually represents a call to the constructor
                 *
                 * @static
                 * @public
                 * @memberof Codex.ObjectModel.ReferenceKind
                 * @constant
                 * @default 1
                 * @type Codex.ObjectModel.ReferenceKind
                 */
                Constructor: 1,
                /**
                 * A call to the constructor of the type referenced by the symbol. This is different than
                 constructor which is the actual declaration for a constructor for the type symbol.
                 *
                 * @static
                 * @public
                 * @memberof Codex.ObjectModel.ReferenceKind
                 * @constant
                 * @default 2
                 * @type Codex.ObjectModel.ReferenceKind
                 */
                Instantiation: 2,
                DerivedType: 3,
                InterfaceInheritance: 4,
                InterfaceImplementation: 5,
                Override: 6,
                InterfaceMemberImplementation: 7,
                Write: 8,
                Read: 9,
                GuidUsage: 10,
                UsingDispose: 11,
                /**
                 * The symbol is the return type of a method or property getter
                 *
                 * @static
                 * @public
                 * @memberof Codex.ObjectModel.ReferenceKind
                 * @constant
                 * @default 12
                 * @type Codex.ObjectModel.ReferenceKind
                 */
                ReturnType: 12,
                EmptyArrayAllocation: 13,
                MSBuildPropertyAssignment: 14,
                MSBuildPropertyUsage: 15,
                MSBuildItemAssignment: 16,
                MSBuildItemUsage: 17,
                MSBuildTargetDeclaration: 18,
                MSBuildTargetUsage: 19,
                MSBuildTaskDeclaration: 20,
                MSBuildTaskUsage: 21,
                Text: 22,
                ProjectLevelReference: 23,
                /**
                 * Catch-all reference comes after more specific reference kinds
                 *
                 * @static
                 * @public
                 * @memberof Codex.ObjectModel.ReferenceKind
                 * @constant
                 * @default 24
                 * @type Codex.ObjectModel.ReferenceKind
                 */
                Reference: 24
            }
        }
    });

    Bridge.define("Codex.Sdk.Search.ISearchResult", {
        $kind: "interface"
    });

    Bridge.define("Codex.ObjectModel.SymbolId", {
        inherits: function () { return [System.IEquatable$1(Codex.ObjectModel.SymbolId)]; },
        $kind: "struct",
        statics: {
            methods: {
                UnsafeCreateWithValue: function (value) {
                    return new Codex.ObjectModel.SymbolId.$ctor2(value, true);
                },
                getDefaultValue: function () { return new Codex.ObjectModel.SymbolId(); }
            }
        },
        fields: {
            Value: null
        },
        alias: ["equalsT", "System$IEquatable$1$Codex$ObjectModel$SymbolId$equalsT"],
        ctors: {
            $ctor1: function (value) {
                this.$initialize();
                this.Value = value;
            },
            $ctor2: function (value, ignored) {
                this.$initialize();
                this.Value = value;
            },
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            equalsT: function (other) {
                return Bridge.referenceEquals(this.Value, other.Value);
            },
            toString: function () {
                return this.Value;
            },
            getHashCode: function () {
                var h = Bridge.addHash([3333875138, this.Value]);
                return h;
            },
            $clone: function (to) {
                var s = to || new Codex.ObjectModel.SymbolId();
                s.Value = this.Value;
                return s;
            }
        }
    });

    Bridge.define("Codex.ObjectStage", {
        $kind: "enum",
        statics: {
            fields: {
                None: 0,
                Analysis: 1,
                Index: 2,
                Search: 4,
                All: 7
            }
        }
    });

    Bridge.define("Codex.PlaceholderAttribute", {
        inherits: [System.Attribute]
    });

    Bridge.define("Codex.QueryAttribute", {
        inherits: [System.Attribute]
    });

    Bridge.define("Codex.ReadOnlyListAttribute", {
        inherits: [System.Attribute]
    });

    Bridge.define("Codex.RequiredForAttribute", {
        inherits: [System.Attribute],
        fields: {
            Stages: 0
        },
        ctors: {
            ctor: function (stages) {
                this.$initialize();
                System.Attribute.ctor.call(this);
                this.Stages = stages;
            }
        }
    });

    Bridge.define("Codex.Sdk.Search.IndexFilter$1", function (T) { return {
        statics: {
            methods: {
                op_BitwiseAnd: function (left, right) {
                    return new (Codex.Sdk.Search.BinaryFilter$1(T))(Codex.Sdk.Search.BinaryOperator.And, left, right);
                },
                op_BitwiseOr: function (left, right) {
                    return new (Codex.Sdk.Search.BinaryFilter$1(T))(Codex.Sdk.Search.BinaryOperator.Or, left, right);
                }
            }
        }
    }; });

    Bridge.define("Codex.Sdk.Search.BinaryOperator", {
        $kind: "enum",
        statics: {
            fields: {
                And: 0,
                Or: 1
            }
        }
    });

    Bridge.define("Codex.Sdk.Search.CodexArgumentsBase", {
        fields: {
            /**
             * The maximum number of results to return
             *
             * @instance
             * @public
             * @memberof Codex.Sdk.Search.CodexArgumentsBase
             * @default 100
             * @type number
             */
            MaxResults: 0
        },
        ctors: {
            init: function () {
                this.MaxResults = 100;
            }
        }
    });

    Bridge.define("Codex.Sdk.Search.CodexServiceMethod", {
        $kind: "enum",
        statics: {
            fields: {
                Search: 0,
                FindAllRefs: 1,
                FindDef: 2,
                FindDefLocation: 3,
                GetSource: 4
            }
        }
    });

    Bridge.define("Codex.Sdk.Search.TermIndexProperty$1", function (T) { return {

    }; });

    /** @namespace Codex.Sdk.Search */

    /**
     * High level operations for codex
     *
     * @abstract
     * @public
     * @class Codex.Sdk.Search.ICodex
     */
    Bridge.define("Codex.Sdk.Search.ICodex", {
        $kind: "interface"
    });

    Bridge.definei("Codex.Sdk.Search.IIndexQuery$1", function (T) { return {
        $kind: "interface"
    }; });

    Bridge.definei("Codex.Sdk.Search.IIndexQueryFilter$1", function (T) { return {
        $kind: "interface"
    }; });

    /**
     * High level query operations for indexed code
     *
     * @abstract
     * @public
     * @class Codex.Sdk.Search.Index$1
     */
    Bridge.define("Codex.Sdk.Search.Index$1", function (T) { return {

    }; });

    Bridge.define("Codex.Sdk.Search.IndexQuery$1", function (T) { return {
        props: {
            Filter: null,
            /**
             * The maximum number of results to return
             *
             * @instance
             * @public
             * @memberof Codex.Sdk.Search.IndexQuery$1
             * @function MaxResults
             * @type number
             */
            MaxResults: 0
        }
    }; });

    Bridge.define("Codex.Sdk.Search.IndexQueryHits$1", function (T) { return {
        props: {
            /**
             * The total number of results matching the query. 
             NOTE: This may be greater than the number of hits returned.
             *
             * @instance
             * @public
             * @memberof Codex.Sdk.Search.IndexQueryHits$1
             * @function Total
             * @type number
             */
            Total: System.Int64(0),
            /**
             * The results of the query
             *
             * @instance
             * @public
             * @memberof Codex.Sdk.Search.IndexQueryHits$1
             * @function Hits
             * @type System.Collections.Generic.List$1
             */
            Hits: null
        },
        methods: {
            toString: function () {
                return System.String.format("Total: {0}, {1}", this.Total, System.Object.prototype.toString.call(this));
            }
        }
    }; });

    Bridge.define("Codex.Sdk.Search.IndexQueryResponse", {
        props: {
            /**
             * If the query failed, this will contain the error message
             *
             * @instance
             * @public
             * @memberof Codex.Sdk.Search.IndexQueryResponse
             * @function Error
             * @type string
             */
            Error: null,
            /**
             * The raw query sent to the index server
             *
             * @instance
             * @public
             * @memberof Codex.Sdk.Search.IndexQueryResponse
             * @function RawQueries
             * @type System.Collections.Generic.List$1
             */
            RawQueries: null,
            /**
             * The spent executing the query
             *
             * @instance
             * @public
             * @memberof Codex.Sdk.Search.IndexQueryResponse
             * @function Duration
             * @type Codex.Sdk.Search.SerializableTimeSpan
             */
            Duration: null,
            /**
             * The spent executing the query
             *
             * @instance
             * @public
             * @memberof Codex.Sdk.Search.IndexQueryResponse
             * @function ServerTime
             * @type Codex.Sdk.Search.SerializableTimeSpan
             */
            ServerTime: null
        },
        ctors: {
            init: function () {
                this.Duration = new Codex.Sdk.Search.SerializableTimeSpan();
                this.ServerTime = new Codex.Sdk.Search.SerializableTimeSpan();
            }
        },
        methods: {
            toString: function () {
                return System.String.format("Error: {0}, Duration: {1}", this.Error, this.Duration.$clone());
            }
        }
    });

    Bridge.definei("Codex.Sdk.Search.ITermProperty$1", function (T) { return {
        $kind: "interface"
    }; });

    Bridge.define("Codex.Sdk.Search.SerializableTimeSpan", {
        $kind: "struct",
        statics: {
            methods: {
                op_Implicit$1: function (value) {
                    return value.AsTimeSpan();
                },
                op_Implicit: function (value) {
                    return new Codex.Sdk.Search.SerializableTimeSpan.$ctor1(value);
                },
                getDefaultValue: function () { return new Codex.Sdk.Search.SerializableTimeSpan(); }
            }
        },
        props: {
            Ticks: System.Int64(0)
        },
        ctors: {
            $ctor1: function (timespan) {
                this.$initialize();
                this.Ticks = timespan.getTicks();
            },
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            AsTimeSpan: function () {
                return System.TimeSpan.fromTicks(this.Ticks);
            },
            toString: function () {
                return this.AsTimeSpan().toString();
            },
            getHashCode: function () {
                var h = Bridge.addHash([9077984700, this.Ticks]);
                return h;
            },
            equals: function (o) {
                if (!Bridge.is(o, Codex.Sdk.Search.SerializableTimeSpan)) {
                    return false;
                }
                return Bridge.equals(this.Ticks, o.Ticks);
            },
            $clone: function (to) {
                var s = to || new Codex.Sdk.Search.SerializableTimeSpan();
                s.Ticks = this.Ticks;
                return s;
            }
        }
    });

    Bridge.define("Codex.SearchBehavior", {
        $kind: "enum",
        statics: {
            fields: {
                None: 0,
                Term: 1,
                NormalizedKeyword: 2,
                Sortword: 3,
                HierarchicalPath: 4,
                FullText: 5,
                Prefix: 6,
                PrefixFullName: 7
            }
        }
    });

    Bridge.define("Codex.SearchBehaviorAttribute", {
        inherits: [System.Attribute],
        fields: {
            Behavior: 0
        },
        ctors: {
            ctor: function (behavior) {
                this.$initialize();
                System.Attribute.ctor.call(this);
                this.Behavior = behavior;
            }
        }
    });

    Bridge.define("Codex.SearchDescriptorInlineAttribute", {
        inherits: [System.Attribute],
        fields: {
            Inline: false
        },
        ctors: {
            ctor: function (inline) {
                if (inline === void 0) { inline = false; }

                this.$initialize();
                System.Attribute.ctor.call(this);
                this.Inline = inline;
            }
        }
    });

    Bridge.define("Codex.SearchType", {
        statics: {
            methods: {
                Create: function (T, registeredSearchTypes, name) {
                    if (name === void 0) { name = null; }
                    var searchType = new (Codex.SearchType$1(T))(name);
                    searchType.Id = registeredSearchTypes.Count;
                    registeredSearchTypes.add(searchType);
                    return searchType;
                }
            }
        },
        props: {
            Name: null,
            IndexName: null,
            Id: 0
        }
    });

    Bridge.define("Codex.SearchTypes", {
        statics: {
            fields: {
                RegisteredSearchTypes: null,
                Definition: null,
                /**
                 * @static
                 * @public
                 * @memberof Codex.SearchTypes
                 * @type Codex.SearchType
                 */
                Reference: null,
                TextSource: null,
                BoundSource: null,
                Language: null,
                Repository: null,
                Project: null,
                Commit: null,
                CommitFiles: null,
                ProjectReference: null,
                Property: null,
                StoredFilter: null,
                RegisteredEntity: null
            },
            ctors: {
                init: function () {
                    var $t, $t1, $t2, $t3, $t4, $t5;
                    this.RegisteredSearchTypes = new (System.Collections.Generic.List$1(Codex.SearchType)).ctor();
                    this.Definition = Codex.SearchType.Create(Codex.IDefinitionSearchModel, Codex.SearchTypes.RegisteredSearchTypes, "Definition");
                    this.Reference = Codex.SearchType.Create(Codex.IReferenceSearchModel, Codex.SearchTypes.RegisteredSearchTypes, "Reference");
                    this.TextSource = Codex.SearchType.Create(Codex.ITextSourceSearchModel, Codex.SearchTypes.RegisteredSearchTypes, "TextSource");
                    this.BoundSource = Codex.SearchType.Create(Codex.IBoundSourceSearchModel, Codex.SearchTypes.RegisteredSearchTypes, "BoundSource");
                    this.Language = Codex.SearchType.Create(Codex.ILanguageSearchModel, Codex.SearchTypes.RegisteredSearchTypes, "Language");
                    this.Repository = Codex.SearchType.Create(Codex.IRepositorySearchModel, Codex.SearchTypes.RegisteredSearchTypes, "Repository");
                    this.Project = Codex.SearchType.Create(Codex.IProjectSearchModel, Codex.SearchTypes.RegisteredSearchTypes, "Project").Exclude(($t = { ntype: 38, t: Codex.IProjectSearchModel, n: "sm" }, ($t5 = { ntype: 10, t: System.Object, operand: ($t4 = Bridge.getMetadata(Codex.IReferencedProject).m[0], { ntype: 23, t: $t4.rt, expression: ($t3 = {"td":System.Linq.Enumerable,"a":2,"n":"First","is":true,"t":8,"pi":[{"n":"source","pt":System.Collections.Generic.IEnumerable$1(Codex.IReferencedProject),"ps":0}],"tpc":1,"def":function (TSource, source) { return System.Linq.Enumerable.from(source).first(); },"rt":Codex.IReferencedProject,"p":[System.Collections.Generic.IEnumerable$1(Codex.IReferencedProject)]}, { ntype: 6, t: $t3.rt, obj: null, method: $t3, args: Bridge.toList([{ ntype: 10, t: System.Collections.Generic.IEnumerable$1(Codex.IReferencedProject), operand: ($t2 = Bridge.getMetadata(Codex.IProject).m[2], { ntype: 23, t: $t2.rt, expression: ($t1 = Bridge.getMetadata(Codex.IProjectSearchModel).m[0], { ntype: 23, t: $t1.rt, expression: $t, member: $t1 }), member: $t2 }) }]) }), member: $t4 }) }, { ntype: 18, t: Function, rt: $t5.t, body: $t5, p: Bridge.toList([$t]) })));
                    this.Commit = Codex.SearchType.Create(Codex.ICommitSearchModel, Codex.SearchTypes.RegisteredSearchTypes, "Commit");
                    this.CommitFiles = Codex.SearchType.Create(Codex.ICommitFilesSearchModel, Codex.SearchTypes.RegisteredSearchTypes, "CommitFiles");
                    this.ProjectReference = Codex.SearchType.Create(Codex.IProjectReferenceSearchModel, Codex.SearchTypes.RegisteredSearchTypes, "ProjectReference");
                    this.Property = Codex.SearchType.Create(Codex.IPropertySearchModel, Codex.SearchTypes.RegisteredSearchTypes, "Property");
                    this.StoredFilter = Codex.SearchType.Create(Codex.IStoredFilter, Codex.SearchTypes.RegisteredSearchTypes, "StoredFilter");
                    this.RegisteredEntity = Codex.SearchType.Create(Codex.IRegisteredEntity, Codex.SearchTypes.RegisteredSearchTypes, "RegisteredEntity");
                }
            }
        }
    });

    Bridge.define("Codex.SerializationInterfaceAttribute", {
        inherits: [System.Attribute],
        fields: {
            Type: null
        },
        ctors: {
            ctor: function (type) {
                this.$initialize();
                System.Attribute.ctor.call(this);
                this.Type = type;
            }
        }
    });

    Bridge.define("Codex.Utilities.CollectionUtilities");

    Bridge.define("Codex.Utilities.CollectionUtilities.Empty$1", function (T) { return {
        statics: {
            fields: {
                List: null,
                Array: null
            },
            ctors: {
                init: function () {
                    this.List = new (System.Collections.Generic.List$1(T)).$ctor2(0);
                    this.Array = System.Array.init(0, function (){
                        return Bridge.getDefaultValue(T);
                    }, T);
                }
            }
        }
    }; });

    Bridge.define("Codex.Utilities.SerializationUtilities", {
        statics: {
            methods: {
                AssignDuplicate: function (T, value, lastValue) {
                    if (System.Collections.Generic.EqualityComparer$1(T).def.equals2(value, Bridge.getDefaultValue(T))) {
                        return lastValue.v;
                    } else {
                        lastValue.v = value;
                        return value;
                    }
                },
                RemoveDuplicate: function (T, value, lastValue) {
                    if (System.Collections.Generic.EqualityComparer$1(T).def.equals2(value, Bridge.getDefaultValue(T))) {
                        return Bridge.getDefaultValue(T);
                    } else {
                        lastValue.v = value;
                        return value;
                    }
                }
            }
        }
    });

    Bridge.define("Codex.View.App", {
        inherits: [System.Windows.Application],
        main: function Main () {
            System.Windows.ApplicationHost.Current.System$Windows$IApplicationHost$Run($asm.$.Codex.View.App.f1);
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                System.Windows.Application.ctor.call(this);
                Codex.View.Styles.Initialize();
                // TODO: This should be configurable through build properties somehow
                Codex.View.CodexProvider.Instance = new Codex.View.Web.WebApiCodex("http://localhost:9491/api/codex/");
            }
        },
        methods: {
            InitializeComponent: function () {
                System.Windows.Application.LoadComponent$1(this, Granular.Compatibility.Uri.CreateAbsoluteUri("pack://application:,,,/Codex.View.Web;component/App.xaml"));
            }
        }
    });

    Bridge.ns("Codex.View.App", $asm.$);

    Bridge.apply($asm.$.Codex.View.App, {
        f1: function () {
            var application = new Codex.View.App();
            application.InitializeComponent();
            application.Run();
        }
    });

    Bridge.define("Codex.View.NotifyPropertyChangedBase", {
        inherits: [System.ComponentModel.INotifyPropertyChanged],
        events: {
            propertyChanged: null
        },
        alias: ["addPropertyChanged", "System$ComponentModel$INotifyPropertyChanged$addPropertyChanged",
        "removePropertyChanged", "System$ComponentModel$INotifyPropertyChanged$removePropertyChanged"],
        methods: {
            addPropertyChanged: function (value) {
                this.addpropertyChanged(value);
            },
            removePropertyChanged: function (value) {
                this.removepropertyChanged(value);
            },
            OnPropertyChanged: function (memberName) {
                if (memberName === void 0) { memberName = null; }
                !Bridge.staticEquals(this.propertyChanged, null) ? this.propertyChanged(this, new System.ComponentModel.PropertyChangedEventArgs(memberName)) : null;
            }
        }
    });

    Bridge.define("Codex.View.LeftPaneContent", {
        $kind: "interface"
    });

    Bridge.define("Codex.View.CategoryGroupSearchResultsViewModel", {
        props: {
            HeaderVisibility: {
                get: function () {
                    return System.String.isNullOrEmpty(this.Header) ? System.Windows.Visibility.Collapsed : System.Windows.Visibility.Visible;
                }
            },
            Header: null,
            ProjectResults: null
        },
        ctors: {
            init: function () {
                this.ProjectResults = new Codex.View.ProjectResultsViewModel.ctor();
            },
            ctor: function (searchString, response) {
                this.$initialize();
                var result = response.Result;

                this.ProjectResults.ProjectGroups = System.Linq.Enumerable.from(result.Hits).select($asm.$.Codex.View.CategoryGroupSearchResultsViewModel.f1).groupBy($asm.$.Codex.View.CategoryGroupSearchResultsViewModel.f2).select($asm.$.Codex.View.CategoryGroupSearchResultsViewModel.f6).toList(Codex.View.ProjectGroupResultsViewModel);

                this.Header = System.String.format("{0} text search hits for '{1}'", Bridge.box(result.Hits.Count, System.Int32), searchString);
            }
        }
    });

    Bridge.ns("Codex.View.CategoryGroupSearchResultsViewModel", $asm.$);

    Bridge.apply($asm.$.Codex.View.CategoryGroupSearchResultsViewModel, {
        f1: function (sr) {
            return sr.Codex$Sdk$Search$ISearchResult$TextLine;
        },
        f2: function (sr) {
            return sr.Codex$IProjectScopeEntity$ProjectId;
        },
        f3: function (sr) {
            return sr.Codex$IProjectFileScopeEntity$ProjectRelativePath;
        },
        f4: function (sr) {
            return new Codex.View.TextSpanSearchResultViewModel(sr);
        },
        f5: function (fileGroup) {
            var $t1;
            return ($t1 = new Codex.View.FileResultsViewModel(), $t1.Path = fileGroup.key(), $t1.Items = fileGroup.select($asm.$.Codex.View.CategoryGroupSearchResultsViewModel.f4).toList(Codex.View.TextSpanSearchResultViewModel), $t1);
        },
        f6: function (projectGroup) {
            var $t;
            return ($t = new Codex.View.ProjectGroupResultsViewModel(), $t.ProjectName = projectGroup.key(), $t.Items = projectGroup.groupBy($asm.$.Codex.View.CategoryGroupSearchResultsViewModel.f3).select($asm.$.Codex.View.CategoryGroupSearchResultsViewModel.f5).toList(Codex.View.FileResultsViewModel), $t);
        }
    });

    Bridge.define("Codex.View.CodexProvider", {
        statics: {
            props: {
                Instance: null
            }
        }
    });

    Bridge.define("Codex.View.EditorHostControl", {
        inherits: [System.Windows.FrameworkElement,Granular.Presentation.Web.IHtmlElementHost],
        fields: {
            m_htmlElement: null
        },
        alias: ["SetRenderElement", "Granular$Presentation$Web$IHtmlElementHost$SetRenderElement"],
        methods: {
            SetRenderElement: function (htmlElement) {
                this.m_htmlElement = htmlElement;
                this.m_htmlElement.textContent = "Hello World";
            }
        }
    });

    Bridge.define("Codex.View.FileItemResultViewModel");

    Bridge.define("Codex.View.ProjectItemResultViewModel");

    Bridge.define("Codex.View.GranularExtensions", {
        statics: {
            methods: {
                AsTriggerProperty: function (dependencyProperty) {
                    return new System.Windows.DependencyPropertyPathElement(dependencyProperty);
                },
                WithSetters: function (trigger, setters) {
                    var $t;
                    if (setters === void 0) { setters = []; }
                    $t = Bridge.getEnumerator(setters);
                    try {
                        while ($t.moveNext()) {
                            var setter = $t.Current;
                            trigger.Setters.add(setter);
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$dispose();
                        }
                    }
                    return trigger;
                }
            }
        }
    });

    /** @namespace Codex.View */

    /**
     * Interaction logic for LeftPane.xaml
     *
     * @public
     * @class Codex.View.LeftPaneView
     * @augments System.Windows.Controls.UserControl
     */
    Bridge.define("Codex.View.LeftPaneView", {
        inherits: [System.Windows.Controls.UserControl],
        fields: {
            SearchInfo: null,
            PaneContent: null
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                System.Windows.Controls.UserControl.ctor.call(this);
                this.InitializeComponent();
            }
        },
        methods: {
            InitializeComponent: function () {
                System.Windows.Application.LoadComponent$1(this, Granular.Compatibility.Uri.CreateAbsoluteUri("pack://application:,,,/Codex.View.Web;component/LeftPaneView.xaml"));
            }
        }
    });

    /**
     * Interaction logic for MainWindow.xaml
     *
     * @public
     * @class Codex.View.MainWindow
     * @augments System.Windows.Window
     */
    Bridge.define("Codex.View.MainWindow", {
        inherits: [System.Windows.Window],
        fields: {
            ViewModel: null,
            SearchBox: null,
            SearchBoxAndImagesColumn: null,
            HeaderMenuColumn: null,
            LeftPane: null
        },
        props: {
            CodexService: null
        },
        ctors: {
            init: function () {
                this.ViewModel = new Codex.View.ViewModelDataContext();
                this.CodexService = Codex.View.CodexProvider.Instance;
            },
            ctor: function () {
                this.$initialize();
                System.Windows.Window.ctor.call(this);
                this.InitializeComponent();
                this.DataContext = this.ViewModel;
                this.ViewModel.Initialize();
                this.SearchBox.Text = "ixedoc";
            }
        },
        methods: {
            Button_Click: function (sender, e) { },
            Grid_Loaded: function (sender, e) {
                System.Console.WriteLine("Grid_Loaded");
            },
            SearchTextChanged: function (sender, e) {
                var $step = 0,
                    $task1, 
                    $taskResult1, 
                    $jumpFromFinally, 
                    searchString, 
                    $t, 
                    response, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        for (;;) {
                            $step = System.Array.min([0,1], $step);
                            switch ($step) {
                                case 0: {
                                    searchString = this.SearchBox.Text;
                                    searchString = searchString.trim();

                                    if (searchString.length < 3) {
                                        this.ViewModel.LeftPane = ($t = new Codex.View.LeftPaneViewModel(), $t.SearchInfo = "Enter at least 3 characters.", $t);
                                        return;
                                    }

                                    $task1 = this.CodexService.Codex$Sdk$Search$ICodex$SearchAsync(($t = new Codex.Sdk.Search.SearchArguments(), $t.SearchString = searchString, $t));
                                    $step = 1;
                                    $task1.continueWith($asyncBody, true);
                                    return;
                                }
                                case 1: {
                                    $taskResult1 = $task1.getAwaitedResult();
                                    response = $taskResult1;

                                    this.ViewModel.LeftPane = Codex.View.LeftPaneViewModel.FromSearchResponse(searchString, response);
                                    return;
                                }
                                default: {
                                    return;
                                }
                            }
                        }
                    }, arguments);

                $asyncBody();
            },
            InitializeComponent: function () {
                System.Windows.Application.LoadComponent$1(this, Granular.Compatibility.Uri.CreateAbsoluteUri("pack://application:,,,/Codex.View.Web;component/MainWindow.xaml"));
            }
        }
    });

    Bridge.define("Codex.View.ProjectGroupResultsViewModel", {
        props: {
            ProjectName: null,
            Items: null
        }
    });

    Bridge.define("Codex.View.Styles", {
        statics: {
            fields: {
                MouseOverBackgroundProperty: null,
                IsMouseOverHeaderProperty: null
            },
            ctors: {
                init: function () {
                    this.MouseOverBackgroundProperty = System.Windows.DependencyProperty.RegisterAttached("MouseOverBackground", System.Windows.Media.Brush, Codex.View.Styles, new System.Windows.PropertyMetadata.$ctor1(System.Windows.Media.Brushes.Transparent));
                    this.IsMouseOverHeaderProperty = System.Windows.DependencyProperty.RegisterAttached("IsMouseOverHeader", System.Boolean, Codex.View.Styles, new System.Windows.PropertyMetadata.$ctor1(Bridge.box(false, System.Boolean, System.Boolean.toString)));
                }
            },
            methods: {
                GetMouseOverBackground: function (obj) {
                    return Bridge.cast(obj.GetValue(Codex.View.Styles.MouseOverBackgroundProperty), System.Windows.Media.Brush);
                },
                SetMouseOverBackground: function (obj, value) {
                    obj.SetValue(Codex.View.Styles.MouseOverBackgroundProperty, value);
                },
                GetIsMouseOverHeader: function (obj) {
                    return System.Nullable.getValue(Bridge.cast(Bridge.unbox(obj.GetValue(Codex.View.Styles.IsMouseOverHeaderProperty)), System.Boolean));
                },
                SetIsMouseOverHeader: function (obj, value) {
                    obj.SetValue(Codex.View.Styles.IsMouseOverHeaderProperty, Bridge.box(value, System.Boolean, System.Boolean.toString));
                },
                Initialize: function () { }
            }
        }
    });

    Bridge.define("Codex.View.Web.Compatibility.Reference", {
        statics: {
            fields: {
                GranularPresentationGenericReference: null,
                JQueryReference: null
            }
        }
    });

    Bridge.define("System.CompatibilityExtensions", {
        statics: {
            methods: {
                ToLowerInvariant: function (value) {
                    return value.toLowerCase();
                }
            }
        }
    });

    Bridge.define("Codex.EntityBase", {
        inherits: [Codex.ISerializableEntity],
        methods: {
            Initialize: function () { },
            OnSerializingCore: function () { },
            OnDeserializedCore: function () { },
            Codex$ISerializableEntity$OnSerializing: function () {
                this.OnSerializingCore();
            },
            Codex$ISerializableEntity$OnDeserialized: function () {
                this.OnDeserializedCore();
            }
        }
    });

    Bridge.define("Codex.IProjectScopeEntity", {
        inherits: [Codex.IRepoScopeEntity],
        $kind: "interface"
    });

    Bridge.define("Codex.IRepoFileScopeEntity", {
        inherits: [Codex.IRepoScopeEntity],
        $kind: "interface"
    });

    Bridge.define("Codex.ISourceSearchModelBase", {
        inherits: [Codex.ISearchEntity],
        $kind: "interface"
    });

    /**
     * Defines a classified span of text
     *
     * @abstract
     * @public
     * @class Codex.IClassificationSpan
     * @implements  Codex.ISpan
     */
    Bridge.define("Codex.IClassificationSpan", {
        inherits: [Codex.ISpan],
        $kind: "interface"
    });

    Bridge.define("Codex.ICommitScopeEntity", {
        inherits: [Codex.IRepoScopeEntity],
        $kind: "interface"
    });

    /**
     * Represents a changed file in a commit
     *
     * @abstract
     * @public
     * @class Codex.ICommitChangedFile
     * @implements  Codex.ICommitFileLink
     */
    Bridge.define("Codex.ICommitChangedFile", {
        inherits: [Codex.ICommitFileLink],
        $kind: "interface"
    });

    Bridge.define("Codex.ICommitSearchModel", {
        inherits: [Codex.ISearchEntity],
        $kind: "interface"
    });

    Bridge.define("Codex.IDefinitionSearchModel", {
        inherits: [Codex.ISearchEntity],
        $kind: "interface"
    });

    Bridge.define("Codex.IDefinitionSpan", {
        inherits: [Codex.ISpan],
        $kind: "interface"
    });

    Bridge.define("Codex.IReferenceSymbol", {
        inherits: [Codex.ICodeSymbol],
        $kind: "interface"
    });

    Bridge.define("Codex.ILanguageSearchModel", {
        inherits: [Codex.ISearchEntity],
        $kind: "interface"
    });

    Bridge.define("Codex.ILineSpan", {
        inherits: [Codex.ISpan],
        $kind: "interface"
    });

    Bridge.define("Codex.IProjectSearchModel", {
        inherits: [Codex.ISearchEntity],
        $kind: "interface"
    });

    Bridge.define("Codex.IPropertySearchModel", {
        inherits: [Codex.ISearchEntity],
        $kind: "interface"
    });

    /**
     * In order to compute a stable integral id for each entity. This type is used to store into a 'follow' index which
     stores entities of this type using the {@link } of the corresponding search entity. Then the
     sequence number assigned by ElasticSearch is used as the shard stable id ({@link })
     for the entity. This approach is used in order to ensure that the stable id appears as an explicit field in the document rather
     which allows configuration of how the field is indexed (not true for sequence number field without code changes to ES).
     *
     * @abstract
     * @public
     * @class Codex.IRegisteredEntity
     * @implements  Codex.ISearchEntity
     */
    Bridge.define("Codex.IRegisteredEntity", {
        inherits: [Codex.ISearchEntity],
        $kind: "interface"
    });

    Bridge.define("Codex.IRepositorySearchModel", {
        inherits: [Codex.ISearchEntity],
        $kind: "interface"
    });

    /**
     * Defines a stored filter which matches entities in a particular index shard in a stable manner
     *
     * @abstract
     * @public
     * @class Codex.IStoredFilter
     * @implements  Codex.ISearchEntity
     */
    Bridge.define("Codex.IStoredFilter", {
        inherits: [Codex.ISearchEntity],
        $kind: "interface"
    });

    /**
     * Documentation for typed parameter
     *
     * @abstract
     * @public
     * @class Codex.ITypedParameterDocumentation
     * @implements  Codex.IParameterDocumentation
     */
    Bridge.define("Codex.ITypedParameterDocumentation", {
        inherits: [Codex.IParameterDocumentation],
        $kind: "interface"
    });

    Bridge.define("Codex.ObjectModel.PropertyMapBase", {
        inherits: [System.Collections.Generic.Dictionary$2(System.String,System.String)]
    });

    Bridge.define("Codex.Sdk.Search.BinaryFilter$1", function (T) { return {
        inherits: [Codex.Sdk.Search.IndexFilter$1(T)],
        fields: {
            Operator: 0,
            Left: null,
            Right: null
        },
        ctors: {
            ctor: function (op, left, right) {
                this.$initialize();
                Codex.Sdk.Search.IndexFilter$1(T).ctor.call(this);
                this.Operator = op;
                this.Left = left;
                this.Right = right;
            }
        }
    }; });

    Bridge.define("Codex.Sdk.Search.ContextCodexArgumentsBase", {
        inherits: [Codex.Sdk.Search.CodexArgumentsBase],
        fields: {
            /**
             * The id of the repository referencing the symbol.
             NOTE: This is used to priority inter-repository matches over
             matches from outside the repository
             *
             * @instance
             * @public
             * @memberof Codex.Sdk.Search.ContextCodexArgumentsBase
             * @type string
             */
            ReferencingRepositoryId: null,
            /**
             * The id of the project referencing the symbol.
             NOTE: This is used to priority inter-repository matches over
             matches from outside the repository
             *
             * @instance
             * @public
             * @memberof Codex.Sdk.Search.ContextCodexArgumentsBase
             * @type string
             */
            ReferencingProjectId: null,
            /**
             * The id of the file referencing the symbol.
             NOTE: This is used to priority inter-repository matches over
             matches from outside the repository
             *
             * @instance
             * @public
             * @memberof Codex.Sdk.Search.ContextCodexArgumentsBase
             * @type string
             */
            ReferencingFileId: null
        }
    });

    Bridge.define("Codex.Sdk.Search.FullTextIndexProperty$1", function (T) { return {
        inherits: [Codex.Sdk.Search.TermIndexProperty$1(T)]
    }; });

    Bridge.define("Codex.Sdk.Search.IndexQueryResponse$1", function (T) { return {
        inherits: [Codex.Sdk.Search.IndexQueryResponse],
        props: {
            /**
             * The results of the query
             *
             * @instance
             * @public
             * @memberof Codex.Sdk.Search.IndexQueryResponse$1
             * @function Result
             * @type T
             */
            Result: Bridge.getDefaultValue(T)
        },
        methods: {
            toString: function () {
                return System.String.format("Result: {0}, {1}", this.Result, Codex.Sdk.Search.IndexQueryResponse.prototype.toString.call(this));
            }
        }
    }; });

    Bridge.definei("Codex.Sdk.Search.IPrefixProperty$1", function (T) { return {
        inherits: [Codex.Sdk.Search.ITermProperty$1(T)],
        $kind: "interface"
    }; });

    Bridge.define("Codex.Sdk.Search.NormalizedKeywordIndexProperty$1", function (T) { return {
        inherits: [Codex.Sdk.Search.TermIndexProperty$1(T)]
    }; });

    Bridge.define("Codex.Sdk.Search.PrefixFullNameIndexProperty$1", function (T) { return {
        inherits: [Codex.Sdk.Search.TermIndexProperty$1(T)]
    }; });

    Bridge.define("Codex.Sdk.Search.PrefixIndexProperty$1", function (T) { return {
        inherits: [Codex.Sdk.Search.TermIndexProperty$1(T)]
    }; });

    Bridge.define("Codex.Sdk.Search.SortwordIndexProperty$1", function (T) { return {
        inherits: [Codex.Sdk.Search.TermIndexProperty$1(T)]
    }; });

    Bridge.define("Codex.SearchType$1", function (TSearchType) { return {
        inherits: [Codex.SearchType],
        fields: {
            CopyToFields: null,
            InheritFields: null
        },
        props: {
            Type: {
                get: function () {
                    return TSearchType;
                }
            }
        },
        ctors: {
            init: function () {
                this.CopyToFields = new (System.Collections.Generic.List$1(System.Object)).ctor();
                this.InheritFields = new (System.Collections.Generic.List$1(System.Object)).ctor();
            },
            ctor: function (name) {
                this.$initialize();
                Codex.SearchType.ctor.call(this);
                this.Name = name;
                this.IndexName = System.CompatibilityExtensions.ToLowerInvariant(this.Name);
            }
        },
        methods: {
            Inherit: function (T, providerField, searchField) {
                return this;
            },
            CopyTo: function (sourceField, targetField) {
                return this;
            },
            Exclude: function (searchField) {
                return this;
            },
            SearchAs: function (T, searchField, behavior) {
                return this;
            }
        }
    }; });

    Bridge.define("Codex.View.BindableValue$1", function (T) { return {
        inherits: [Codex.View.NotifyPropertyChangedBase],
        fields: {
            value: Bridge.getDefaultValue(T)
        },
        props: {
            Value: {
                get: function () {
                    return this.value;
                },
                set: function (value) {
                    this.value = value;
                    this.OnPropertyChanged("Value");
                }
            }
        }
    }; });

    Bridge.define("Codex.View.CategorizedSearchResultsViewModel", {
        inherits: [Codex.View.LeftPaneContent],
        props: {
            Categories: null
        },
        ctors: {
            ctor: function (searchString, response) {
                this.$initialize();
                this.Categories = function (_o1) {
                        _o1.add(new Codex.View.CategoryGroupSearchResultsViewModel(searchString, response));
                        return _o1;
                    }(new (System.Collections.Generic.List$1(Codex.View.CategoryGroupSearchResultsViewModel)).ctor());
            }
        }
    });

    Bridge.define("Codex.View.FileResultsViewModel", {
        inherits: [Codex.View.ProjectItemResultViewModel],
        props: {
            Path: null,
            Items: null
        }
    });

    Bridge.define("Codex.View.LeftPaneViewModel", {
        inherits: [Codex.View.NotifyPropertyChangedBase],
        statics: {
            fields: {
                Initial: null
            },
            ctors: {
                init: function () {
                    var $t;
                    this.Initial = ($t = new Codex.View.LeftPaneViewModel(), $t.SearchInfo = "Enter a search string. Start with ` for full text search results only.", $t);
                }
            },
            methods: {
                FromSearchResponse: function (searchString, response) {
                    var $t, $t1;
                    if (response.Error != null) {
                        return ($t = new Codex.View.LeftPaneViewModel(), $t.SearchInfo = response.Error, $t);
                    } else if ((($t = response.Result) != null ? $t.Hits : null) == null || response.Result.Hits.Count === 0) {
                        return ($t1 = new Codex.View.LeftPaneViewModel(), $t1.SearchInfo = System.String.format("No results found.", null), $t1);
                    }

                    var result = response.Result;
                    var isDefinitionsResult = result.Hits.getItem(0).Codex$Sdk$Search$ISearchResult$Definition != null;
                    return ($t1 = new Codex.View.LeftPaneViewModel(), $t1.Content = isDefinitionsResult ? Bridge.cast(new Codex.View.ProjectResultsViewModel.$ctor1(searchString, response), Codex.View.LeftPaneContent) : new Codex.View.CategorizedSearchResultsViewModel(searchString, response), $t1.SearchInfo = isDefinitionsResult ? (System.Int64(result.Hits.Count).lt(result.Total) ? System.String.format("Displaying top {0} results out of {1}:", Bridge.box(result.Hits.Count, System.Int32), result.Total) : System.String.format("{0} results found:", Bridge.box(result.Hits.Count, System.Int32))) : "", $t1);
                }
            }
        },
        props: {
            SearchInfoVisibility: {
                get: function () {
                    return !System.String.isNullOrEmpty(this.SearchInfo) ? System.Windows.Visibility.Visible : System.Windows.Visibility.Collapsed;
                }
            },
            SearchInfo: null,
            ContentVisibility: {
                get: function () {
                    return this.Content != null ? System.Windows.Visibility.Visible : System.Windows.Visibility.Collapsed;
                }
            },
            Content: null
        }
    });

    Bridge.define("Codex.View.ProjectResultsViewModel", {
        inherits: [Codex.View.LeftPaneContent],
        props: {
            ProjectGroups: null
        },
        ctors: {
            ctor: function () {
                this.$initialize();
            },
            $ctor1: function (searchString, response) {
                this.$initialize();
                this.ProjectGroups = System.Linq.Enumerable.from(response.Result.Hits).select($asm.$.Codex.View.ProjectResultsViewModel.f1).groupBy($asm.$.Codex.View.ProjectResultsViewModel.f2).select($asm.$.Codex.View.ProjectResultsViewModel.f4).toList(Codex.View.ProjectGroupResultsViewModel);
            }
        }
    });

    Bridge.ns("Codex.View.ProjectResultsViewModel", $asm.$);

    Bridge.apply($asm.$.Codex.View.ProjectResultsViewModel, {
        f1: function (sr) {
            return sr.Codex$Sdk$Search$ISearchResult$Definition;
        },
        f2: function (sr) {
            return sr.Codex$ICodeSymbol$ProjectId;
        },
        f3: function (symbol) {
            return new Codex.View.SymbolResultViewModel(symbol);
        },
        f4: function (projectGroup) {
            var $t;
            return ($t = new Codex.View.ProjectGroupResultsViewModel(), $t.ProjectName = projectGroup.key(), $t.Items = projectGroup.select($asm.$.Codex.View.ProjectResultsViewModel.f3).toList(Codex.View.SymbolResultViewModel), $t);
        }
    });

    Bridge.define("Codex.View.SymbolResultViewModel", {
        inherits: [Codex.View.ProjectItemResultViewModel],
        props: {
            ShortName: null,
            DisplayName: null,
            SymbolKind: null,
            ProjectId: null,
            ImageMoniker: null,
            SortOrder: 0,
            IdentifierLength: {
                get: function () {
                    return this.ShortName.length;
                }
            }
        },
        ctors: {
            ctor: function (entry) {
                var $t;
                this.$initialize();
                Codex.View.ProjectItemResultViewModel.ctor.call(this);
                this.ShortName = entry.Codex$IDefinitionSymbol$ShortName;
                this.DisplayName = entry.Codex$IDefinitionSymbol$DisplayName;
                this.ProjectId = entry.Codex$ICodeSymbol$ProjectId;
                this.SymbolKind = ($t = entry.Codex$ICodeSymbol$Kind) != null ? System.CompatibilityExtensions.ToLowerInvariant($t) : null;
            }
        }
    });

    Bridge.define("Codex.View.TextSpanSearchResultViewModel", {
        inherits: [Codex.View.FileItemResultViewModel],
        props: {
            SearchResult: null,
            LineNumber: 0,
            PrefixText: null,
            ContentText: null,
            SuffixText: null
        },
        ctors: {
            ctor: function (result) {
                this.$initialize();
                Codex.View.FileItemResultViewModel.ctor.call(this);
                this.SearchResult = result;
                var referringSpan = result.Codex$Sdk$Search$ITextLineSpanResult$TextSpan;
                this.LineNumber = referringSpan.Codex$ILineSpan$LineNumber;
                var lineSpanText = referringSpan.Codex$ITextLineSpan$LineSpanText;
                if (lineSpanText != null) {
                    this.PrefixText = lineSpanText.substr(0, referringSpan.Codex$ILineSpan$LineSpanStart);
                    this.ContentText = lineSpanText.substr(referringSpan.Codex$ILineSpan$LineSpanStart, referringSpan.Codex$ISpan$Length);
                    this.SuffixText = lineSpanText.substr(((referringSpan.Codex$ILineSpan$LineSpanStart + referringSpan.Codex$ISpan$Length) | 0));
                }
            }
        }
    });

    Bridge.define("Codex.View.ViewModelDataContext", {
        inherits: [Codex.View.NotifyPropertyChangedBase],
        fields: {
            leftPane: null
        },
        props: {
            LeftPane: {
                get: function () {
                    return this.leftPane;
                },
                set: function (value) {
                    // HACK to force full refresh of left pane
                    //if (value != null)
                    //{
                    //    leftPane = null;
                    //    OnPropertyChanged();
                    //}

                    this.leftPane = value;
                    this.OnPropertyChanged("LeftPane");
                }
            }
        },
        methods: {
            Initialize: function () {
                this.LeftPane = Codex.View.LeftPaneViewModel.Initial;
            }
        }
    });

    Bridge.define("Codex.View.Web.WebApiCodex", {
        inherits: [Codex.Sdk.Search.ICodex],
        fields: {
            baseUrl: null
        },
        alias: [
            "FindAllReferencesAsync", "Codex$Sdk$Search$ICodex$FindAllReferencesAsync",
            "FindDefinitionAsync", "Codex$Sdk$Search$ICodex$FindDefinitionAsync",
            "FindDefinitionLocationAsync", "Codex$Sdk$Search$ICodex$FindDefinitionLocationAsync",
            "GetSourceAsync", "Codex$Sdk$Search$ICodex$GetSourceAsync",
            "SearchAsync", "Codex$Sdk$Search$ICodex$SearchAsync"
        ],
        ctors: {
            ctor: function (baseUrl) {
                this.$initialize();
                this.baseUrl = System.String.endsWith(baseUrl, "/") ? baseUrl : (baseUrl || "") + String.fromCharCode(47);
            }
        },
        methods: {
            FindAllReferencesAsync: function ($arguments) {
                return this.PostAsync(Codex.Sdk.Search.IndexQueryHitsResponse$1(Codex.ObjectModel.ReferenceSearchModel), Codex.Sdk.Search.IndexQueryHitsResponse$1(Codex.IReferenceSearchModel), Codex.Sdk.Search.CodexServiceMethod.FindAllRefs, $arguments);
            },
            FindDefinitionAsync: function ($arguments) {
                return this.PostAsync(Codex.Sdk.Search.IndexQueryHitsResponse$1(Codex.ObjectModel.DefinitionSearchModel), Codex.Sdk.Search.IndexQueryHitsResponse$1(Codex.IDefinitionSearchModel), Codex.Sdk.Search.CodexServiceMethod.FindDef, $arguments);
            },
            FindDefinitionLocationAsync: function ($arguments) {
                return this.PostAsync(Codex.Sdk.Search.IndexQueryHitsResponse$1(Codex.ObjectModel.ReferenceSearchModel), Codex.Sdk.Search.IndexQueryHitsResponse$1(Codex.IReferenceSearchModel), Codex.Sdk.Search.CodexServiceMethod.FindDefLocation, $arguments);
            },
            GetSourceAsync: function ($arguments) {
                return this.PostAsync(Codex.Sdk.Search.IndexQueryResponse$1(Codex.ObjectModel.BoundSourceSearchModel), Codex.Sdk.Search.IndexQueryResponse$1(Codex.IBoundSourceSearchModel), Codex.Sdk.Search.CodexServiceMethod.GetSource, $arguments);
            },
            SearchAsync: function ($arguments) {
                return this.PostAsync(Codex.Sdk.Search.IndexQueryHitsResponse$1(Codex.ObjectModel.SearchResult), Codex.Sdk.Search.IndexQueryHitsResponse$1(Codex.Sdk.Search.ISearchResult), Codex.Sdk.Search.CodexServiceMethod.Search, $arguments);
            },
            PostAsync: function (TSerializedResult, TResult, searchMethod, $arguments) {
                var tcs = new System.Threading.Tasks.TaskCompletionSource();

                var url = (this.baseUrl || "") + (System.Enum.toString(Codex.Sdk.Search.CodexServiceMethod, searchMethod) || "");
                System.Console.WriteLine(url);

                var argumentsData = Newtonsoft.Json.JsonConvert.SerializeObject($arguments);

                var config = { url: url, type: "POST", data: argumentsData, contentType: "application/json; charset=utf-8", success: function (data, textStatus, successRequest) {
                    tcs.setResult(Newtonsoft.Json.JsonConvert.DeserializeObject(successRequest.responseText, TSerializedResult));
                    return null;
                }, error: function (errorRequest, textStatus, errorThrown) {
                    var $t;
                    tcs.setResult(($t = new TResult(), $t.Error = System.String.format("Error: {0}", errorThrown), $t));

                    return null;
                } };

                jQuery.ajax(config);

                return tcs.task;
            }
        }
    });

    Bridge.define("Codex.IProjectFileScopeEntity", {
        inherits: [Codex.IRepoFileScopeEntity,Codex.IProjectScopeEntity],
        $kind: "interface"
    });

    Bridge.define("Codex.IBoundSourceSearchModel", {
        inherits: [Codex.ISourceSearchModelBase],
        $kind: "interface"
    });

    /**
     * Describes a commit in version control
     *
     * @abstract
     * @public
     * @class Codex.ICommit
     * @implements  Codex.ICommitScopeEntity
     */
    Bridge.define("Codex.ICommit", {
        inherits: [Codex.ICommitScopeEntity],
        $kind: "interface"
    });

    /**
     * Represents a directory in source control
     *
     * @abstract
     * @public
     * @class Codex.ICommitFilesDirectory
     * @implements  Codex.IRepoFileScopeEntity
     */
    Bridge.define("Codex.ICommitFilesDirectory", {
        inherits: [Codex.IRepoFileScopeEntity],
        $kind: "interface"
    });

    /**
     * The set of files present in the repository at a given commit.
     *
     * @abstract
     * @public
     * @class Codex.ICommitFilesSearchModel
     * @implements  Codex.ICommitScopeEntity
     * @implements  Codex.IRepoScopeEntity
     * @implements  Codex.ISearchEntity
     */
    Bridge.define("Codex.ICommitFilesSearchModel", {
        inherits: [Codex.ICommitScopeEntity,Codex.IRepoScopeEntity,Codex.ISearchEntity],
        $kind: "interface"
    });

    Bridge.define("Codex.IDefinitionSymbol", {
        inherits: [Codex.IReferenceSymbol],
        $kind: "interface"
    });

    /**
     * Decribes a symbol related to a given documented symbol
     *
     * @abstract
     * @public
     * @class Codex.IDocumentationReferenceSymbol
     * @implements  Codex.IReferenceSymbol
     */
    Bridge.define("Codex.IDocumentationReferenceSymbol", {
        inherits: [Codex.IReferenceSymbol],
        $kind: "interface"
    });

    /**
     * A specialized definition span referring to a parameter of a method/property
     *
     * @abstract
     * @public
     * @class Codex.IParameterDefinitionSpan
     * @implements  Codex.ILineSpan
     */
    Bridge.define("Codex.IParameterDefinitionSpan", {
        inherits: [Codex.ILineSpan],
        $kind: "interface"
    });

    Bridge.define("Codex.ITextLineSpan", {
        inherits: [Codex.ILineSpan],
        $kind: "interface"
    });

    Bridge.define("Codex.IProject", {
        inherits: [Codex.IProjectScopeEntity],
        $kind: "interface"
    });

    Bridge.define("Codex.IProjectReferenceSearchModel", {
        inherits: [Codex.IProjectScopeEntity,Codex.ISearchEntity],
        $kind: "interface"
    });

    Bridge.define("Codex.ITextSourceSearchModel", {
        inherits: [Codex.ISourceSearchModelBase],
        $kind: "interface"
    });

    Bridge.define("Codex.ObjectModel.RepoScopeEntity", {
        inherits: [Codex.EntityBase,Codex.IRepoScopeEntity],
        fields: {
            m_RepositoryName: null
        },
        props: {
            /**
             * The name of the repository containing the entity
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.RepoScopeEntity
             * @function RepositoryName
             * @type string
             */
            RepositoryName: {
                get: function () {
                    return this.m_RepositoryName;
                },
                set: function (value) {
                    this.m_RepositoryName = value;
                }
            }
        },
        alias: ["RepositoryName", "Codex$IRepoScopeEntity$RepositoryName"],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.RepoScopeEntity, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_RepositoryName = value.Codex$IRepoScopeEntity$RepositoryName;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    /**
     * Marker interface for searchable entities
     TODO: Consider moving {@link } out if its not needed by all searchable entities
     *
     * @public
     * @class Codex.ObjectModel.SearchEntity
     * @augments Codex.EntityBase
     * @implements  Codex.ISearchEntity
     */
    Bridge.define("Codex.ObjectModel.SearchEntity", {
        inherits: [Codex.EntityBase,Codex.ISearchEntity],
        fields: {
            m_Uid: null,
            m_EntityContentId: null,
            m_EntityContentSize: 0,
            m_EntityVersion: null,
            m_ShardStableId: System.Int64(0)
        },
        props: {
            Uid: {
                get: function () {
                    return this.m_Uid;
                },
                set: function (value) {
                    this.m_Uid = value;
                }
            },
            /**
             * Defines the content addressable identifier for the entity. This is used
             to determine if an entity with the same {@link } should be updated
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SearchEntity
             * @function EntityContentId
             * @type string
             */
            EntityContentId: {
                get: function () {
                    return this.m_EntityContentId;
                },
                set: function (value) {
                    this.m_EntityContentId = value;
                }
            },
            /**
             * Defines the size of the raw serialized entity.
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SearchEntity
             * @function EntityContentSize
             * @type number
             */
            EntityContentSize: {
                get: function () {
                    return this.m_EntityContentSize;
                },
                set: function (value) {
                    this.m_EntityContentSize = value;
                }
            },
            /**
             * The version number used when storing the entity (for use by ElasticSearch concurrency control
             to prevent races when storing values)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SearchEntity
             * @function EntityVersion
             * @type ?number
             */
            EntityVersion: {
                get: function () {
                    return this.m_EntityVersion;
                },
                set: function (value) {
                    this.m_EntityVersion = value;
                }
            },
            /**
             * The per-shard stable identity (derived from ElasticSearch sequence number)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SearchEntity
             * @function ShardStableId
             * @type number
             */
            ShardStableId: {
                get: function () {
                    return this.m_ShardStableId;
                },
                set: function (value) {
                    this.m_ShardStableId = value;
                }
            }
        },
        alias: [
            "Uid", "Codex$ISearchEntity$Uid",
            "EntityContentId", "Codex$ISearchEntity$EntityContentId",
            "EntityContentSize", "Codex$ISearchEntity$EntityContentSize",
            "EntityVersion", "Codex$ISearchEntity$EntityVersion",
            "ShardStableId", "Codex$ISearchEntity$ShardStableId"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.SearchEntity, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_Uid = value.Codex$ISearchEntity$Uid;
                this.m_EntityContentId = value.Codex$ISearchEntity$EntityContentId;
                this.m_EntityContentSize = value.Codex$ISearchEntity$EntityContentSize;
                this.m_EntityVersion = value.Codex$ISearchEntity$EntityVersion;
                this.m_ShardStableId = value.Codex$ISearchEntity$ShardStableId;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    /**
     * Describes a branch in a repository
     *
     * @public
     * @class Codex.ObjectModel.Branch
     * @augments Codex.EntityBase
     * @implements  Codex.IBranch
     */
    Bridge.define("Codex.ObjectModel.Branch", {
        inherits: [Codex.EntityBase,Codex.IBranch],
        fields: {
            m_Name: null,
            m_Description: null,
            m_HeadCommitId: null
        },
        props: {
            /**
             * The name of the branch
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Branch
             * @function Name
             * @type string
             */
            Name: {
                get: function () {
                    return this.m_Name;
                },
                set: function (value) {
                    this.m_Name = value;
                }
            },
            /**
             * The branch description
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Branch
             * @function Description
             * @type string
             */
            Description: {
                get: function () {
                    return this.m_Description;
                },
                set: function (value) {
                    this.m_Description = value;
                }
            },
            /**
             * The head commit of the branch
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Branch
             * @function HeadCommitId
             * @type string
             */
            HeadCommitId: {
                get: function () {
                    return this.m_HeadCommitId;
                },
                set: function (value) {
                    this.m_HeadCommitId = value;
                }
            }
        },
        alias: [
            "Name", "Codex$IBranch$Name",
            "Description", "Codex$IBranch$Description",
            "HeadCommitId", "Codex$IBranch$HeadCommitId"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.Branch, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_Name = value.Codex$IBranch$Name;
                this.m_Description = value.Codex$IBranch$Description;
                this.m_HeadCommitId = value.Codex$IBranch$HeadCommitId;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.Span", {
        inherits: [Codex.EntityBase,Codex.ISpan],
        fields: {
            m_Start: 0,
            m_Length: 0
        },
        props: {
            /**
             * The absolute character offset of the span within the document
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Span
             * @function Start
             * @type number
             */
            Start: {
                get: function () {
                    return this.m_Start;
                },
                set: function (value) {
                    this.m_Start = value;
                }
            },
            /**
             * The length of the span
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Span
             * @function Length
             * @type number
             */
            Length: {
                get: function () {
                    return this.m_Length;
                },
                set: function (value) {
                    this.m_Length = value;
                }
            },
            /**
             * The absolute character offset of the end (exclusive) of the span within the document
             *
             * @instance
             * @public
             * @readonly
             * @memberof Codex.ObjectModel.Span
             * @function End
             * @type number
             */
            End: {
                get: function () {
                    return ((this.Start + this.Length) | 0);
                }
            }
        },
        alias: [
            "Start", "Codex$ISpan$Start",
            "Length", "Codex$ISpan$Length"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.Span, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_Start = value.Codex$ISpan$Start;
                this.m_Length = value.Codex$ISpan$Length;
                return Bridge.cast((this), TTarget);
            },
            Contains: function (span) {
                if (span == null) {
                    return false;
                }

                return span.Start >= this.Start && span.End <= this.End;
            },
            SpanEquals: function (span) {
                if (span == null) {
                    return false;
                }

                return span.Start === this.Start && span.End === this.End;
            }
        }
    });

    /**
     * Describes styling for a given classification
     *
     * @public
     * @class Codex.ObjectModel.ClassificationStyle
     * @augments Codex.EntityBase
     * @implements  Codex.IClassificationStyle
     */
    Bridge.define("Codex.ObjectModel.ClassificationStyle", {
        inherits: [Codex.EntityBase,Codex.IClassificationStyle],
        fields: {
            m_Color: 0,
            m_Italic: false,
            m_Name: null
        },
        props: {
            /**
             * The default classification color for the classification. This is used for
             contexts where a mapping from classification id to color is not
             available.
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ClassificationStyle
             * @function Color
             * @type number
             */
            Color: {
                get: function () {
                    return this.m_Color;
                },
                set: function (value) {
                    this.m_Color = value;
                }
            },
            /**
             * Indicates whether the spans classified with this classification should have italic font by default
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ClassificationStyle
             * @function Italic
             * @type boolean
             */
            Italic: {
                get: function () {
                    return this.m_Italic;
                },
                set: function (value) {
                    this.m_Italic = value;
                }
            },
            /**
             * The name of the classification
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ClassificationStyle
             * @function Name
             * @type string
             */
            Name: {
                get: function () {
                    return this.m_Name;
                },
                set: function (value) {
                    this.m_Name = value;
                }
            }
        },
        alias: [
            "Color", "Codex$IClassificationStyle$Color",
            "Italic", "Codex$IClassificationStyle$Italic",
            "Name", "Codex$IClassificationStyle$Name"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.ClassificationStyle, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_Color = value.Codex$IClassificationStyle$Color;
                this.m_Italic = value.Codex$IClassificationStyle$Italic;
                this.m_Name = value.Codex$IClassificationStyle$Name;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.CodeReview", {
        inherits: [Codex.EntityBase,Codex.ICodeReview],
        fields: {
            m_Id: null,
            m_Description: null,
            m_Url: null,
            m_Status: 0
        },
        props: {
            Id: {
                get: function () {
                    return this.m_Id;
                },
                set: function (value) {
                    this.m_Id = value;
                }
            },
            Description: {
                get: function () {
                    return this.m_Description;
                },
                set: function (value) {
                    this.m_Description = value;
                }
            },
            /**
             * Url for accessing code review in source control management (i.e. GitHub or VSO)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CodeReview
             * @function Url
             * @type string
             */
            Url: {
                get: function () {
                    return this.m_Url;
                },
                set: function (value) {
                    this.m_Url = value;
                }
            },
            Status: {
                get: function () {
                    return this.m_Status;
                },
                set: function (value) {
                    this.m_Status = value;
                }
            }
        },
        alias: [
            "Id", "Codex$ICodeReview$Id",
            "Description", "Codex$ICodeReview$Description",
            "Url", "Codex$ICodeReview$Url",
            "Status", "Codex$ICodeReview$Status"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.CodeReview, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_Id = value.Codex$ICodeReview$Id;
                this.m_Description = value.Codex$ICodeReview$Description;
                this.m_Url = value.Codex$ICodeReview$Url;
                this.m_Status = value.Codex$ICodeReview$Status;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.CodeReviewComment", {
        inherits: [Codex.EntityBase,Codex.ICodeReviewComment],
        fields: {
            m_Text: null,
            m_Reviewer: null,
            m_Importance: 0,
            m_CommentTime: null
        },
        props: {
            Text: {
                get: function () {
                    return this.m_Text;
                },
                set: function (value) {
                    this.m_Text = value;
                }
            },
            /**
             * The name of the reviewer which made the comment
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CodeReviewComment
             * @function Reviewer
             * @type string
             */
            Reviewer: {
                get: function () {
                    return this.m_Reviewer;
                },
                set: function (value) {
                    this.m_Reviewer = value;
                }
            },
            /**
             * The importance of the comment
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CodeReviewComment
             * @function Importance
             * @type Codex.CommentImportance
             */
            Importance: {
                get: function () {
                    return this.m_Importance;
                },
                set: function (value) {
                    this.m_Importance = value;
                }
            },
            /**
             * The time when the comment was submitted
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CodeReviewComment
             * @function CommentTime
             * @type System.DateTime
             */
            CommentTime: {
                get: function () {
                    return this.m_CommentTime;
                },
                set: function (value) {
                    this.m_CommentTime = value;
                }
            }
        },
        alias: [
            "Text", "Codex$ICodeReviewComment$Text",
            "Reviewer", "Codex$ICodeReviewComment$Reviewer",
            "Importance", "Codex$ICodeReviewComment$Importance",
            "CommentTime", "Codex$ICodeReviewComment$CommentTime"
        ],
        ctors: {
            init: function () {
                this.m_CommentTime = System.DateTime.getDefaultValue();
            },
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.CodeReviewComment, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_Text = value.Codex$ICodeReviewComment$Text;
                this.m_Reviewer = value.Codex$ICodeReviewComment$Reviewer;
                this.m_Importance = value.Codex$ICodeReviewComment$Importance;
                this.m_CommentTime = value.Codex$ICodeReviewComment$CommentTime;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.CodeReviewCommentThread", {
        inherits: [Codex.EntityBase,Codex.ICodeReviewCommentThread],
        fields: {
            m_OriginalSpan: null,
            m_StartIteration: 0,
            m_LastUpdated: null,
            m_FileRepoRelativePath: null,
            m_Comments: null
        },
        props: {
            /**
             * The original location for the comment in the originating iteration
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.CodeReviewCommentThread
             * @function Codex$ICodeReviewCommentThread$OriginalSpan
             * @type Codex.ILineSpan
             */
            Codex$ICodeReviewCommentThread$OriginalSpan: {
                get: function () {
                    return this.OriginalSpan;
                }
            },
            /**
             * The original location for the comment in the originating iteration
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CodeReviewCommentThread
             * @function OriginalSpan
             * @type Codex.ObjectModel.LineSpan
             */
            OriginalSpan: {
                get: function () {
                    return this.m_OriginalSpan;
                },
                set: function (value) {
                    this.m_OriginalSpan = value;
                }
            },
            /**
             * The iteration where the comment originated
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CodeReviewCommentThread
             * @function StartIteration
             * @type number
             */
            StartIteration: {
                get: function () {
                    return this.m_StartIteration;
                },
                set: function (value) {
                    this.m_StartIteration = value;
                }
            },
            /**
             * The last tie
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CodeReviewCommentThread
             * @function LastUpdated
             * @type System.DateTime
             */
            LastUpdated: {
                get: function () {
                    return this.m_LastUpdated;
                },
                set: function (value) {
                    this.m_LastUpdated = value;
                }
            },
            FileRepoRelativePath: {
                get: function () {
                    return this.m_FileRepoRelativePath;
                },
                set: function (value) {
                    this.m_FileRepoRelativePath = value;
                }
            },
            Codex$ICodeReviewCommentThread$Comments: {
                get: function () {
                    return this.Comments;
                }
            },
            Comments: {
                get: function () {
                    return this.m_Comments;
                },
                set: function (value) {
                    this.m_Comments = value;
                }
            }
        },
        alias: [
            "StartIteration", "Codex$ICodeReviewCommentThread$StartIteration",
            "LastUpdated", "Codex$ICodeReviewCommentThread$LastUpdated",
            "FileRepoRelativePath", "Codex$ICodeReviewCommentThread$FileRepoRelativePath"
        ],
        ctors: {
            init: function () {
                this.m_LastUpdated = System.DateTime.getDefaultValue();
                this.m_Comments = new (System.Collections.Generic.List$1(Codex.ObjectModel.CodeReviewComment)).ctor();
            },
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.CodeReviewCommentThread, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_OriginalSpan = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.LineSpan, Bridge.global.Codex.ObjectModel.LineSpan, this.OriginalSpan, $asm.$.Codex.ObjectModel.CodeReviewCommentThread.f1);
                ;
                this.m_StartIteration = value.Codex$ICodeReviewCommentThread$StartIteration;
                this.m_LastUpdated = value.Codex$ICodeReviewCommentThread$LastUpdated;
                this.m_FileRepoRelativePath = value.Codex$ICodeReviewCommentThread$FileRepoRelativePath;
                this.m_Comments = new (System.Collections.Generic.List$1(Codex.ObjectModel.CodeReviewComment)).$ctor1(System.Linq.Enumerable.from(value.Codex$ICodeReviewCommentThread$Comments).select($asm.$.Codex.ObjectModel.CodeReviewCommentThread.f3));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.CodeReviewCommentThread", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.CodeReviewCommentThread, {
        f1: function (v) {
            return new Codex.ObjectModel.LineSpan.ctor().CopyFrom$1(Codex.ObjectModel.LineSpan, v);
        },
        f2: function (_v) {
            return new Codex.ObjectModel.CodeReviewComment.ctor().CopyFrom(Codex.ObjectModel.CodeReviewComment, _v);
        },
        f3: function (v) {
            return Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ICodeReviewComment, Bridge.global.Codex.ObjectModel.CodeReviewComment, v, $asm.$.Codex.ObjectModel.CodeReviewCommentThread.f2);
        }
    });

    Bridge.define("Codex.ObjectModel.CodeReviewerInfo", {
        inherits: [Codex.EntityBase,Codex.ICodeReviewerInfo],
        fields: {
            m_Name: null
        },
        props: {
            Name: {
                get: function () {
                    return this.m_Name;
                },
                set: function (value) {
                    this.m_Name = value;
                }
            }
        },
        alias: ["Name", "Codex$ICodeReviewerInfo$Name"],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.CodeReviewerInfo, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_Name = value.Codex$ICodeReviewerInfo$Name;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.CodeReviewFile", {
        inherits: [Codex.EntityBase,Codex.ICodeReviewFile],
        fields: {
            m_StartIteration: 0,
            m_RepoRelativePath: null,
            m_FileId: null,
            m_BaselineFileId: null,
            m_ChangeKind: 0
        },
        props: {
            /**
             * The first iteration in which this file appears
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CodeReviewFile
             * @function StartIteration
             * @type number
             */
            StartIteration: {
                get: function () {
                    return this.m_StartIteration;
                },
                set: function (value) {
                    this.m_StartIteration = value;
                }
            },
            /**
             * The relative path in the repository
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CodeReviewFile
             * @function RepoRelativePath
             * @type string
             */
            RepoRelativePath: {
                get: function () {
                    return this.m_RepoRelativePath;
                },
                set: function (value) {
                    this.m_RepoRelativePath = value;
                }
            },
            /**
             * The file id of the new version of the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CodeReviewFile
             * @function FileId
             * @type string
             */
            FileId: {
                get: function () {
                    return this.m_FileId;
                },
                set: function (value) {
                    this.m_FileId = value;
                }
            },
            /**
             * The file id of the baseline version of the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CodeReviewFile
             * @function BaselineFileId
             * @type string
             */
            BaselineFileId: {
                get: function () {
                    return this.m_BaselineFileId;
                },
                set: function (value) {
                    this.m_BaselineFileId = value;
                }
            },
            /**
             * The type of change applied to the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CodeReviewFile
             * @function ChangeKind
             * @type Codex.FileChangeKind
             */
            ChangeKind: {
                get: function () {
                    return this.m_ChangeKind;
                },
                set: function (value) {
                    this.m_ChangeKind = value;
                }
            }
        },
        alias: [
            "StartIteration", "Codex$ICodeReviewFile$StartIteration",
            "RepoRelativePath", "Codex$ICodeReviewFile$RepoRelativePath",
            "FileId", "Codex$ICodeReviewFile$FileId",
            "BaselineFileId", "Codex$ICodeReviewFile$BaselineFileId",
            "ChangeKind", "Codex$ICodeReviewFile$ChangeKind"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.CodeReviewFile, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_StartIteration = value.Codex$ICodeReviewFile$StartIteration;
                this.m_RepoRelativePath = value.Codex$ICodeReviewFile$RepoRelativePath;
                this.m_FileId = value.Codex$ICodeReviewFile$FileId;
                this.m_BaselineFileId = value.Codex$ICodeReviewFile$BaselineFileId;
                this.m_ChangeKind = value.Codex$ICodeReviewFile$ChangeKind;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.CodeReviewIteration", {
        inherits: [Codex.EntityBase,Codex.ICodeReviewIteration],
        fields: {
            m_IterationNumber: 0,
            m_ReviewId: null,
            m_Description: null,
            m_Files: null
        },
        props: {
            IterationNumber: {
                get: function () {
                    return this.m_IterationNumber;
                },
                set: function (value) {
                    this.m_IterationNumber = value;
                }
            },
            ReviewId: {
                get: function () {
                    return this.m_ReviewId;
                },
                set: function (value) {
                    this.m_ReviewId = value;
                }
            },
            Description: {
                get: function () {
                    return this.m_Description;
                },
                set: function (value) {
                    this.m_Description = value;
                }
            },
            Codex$ICodeReviewIteration$Files: {
                get: function () {
                    return this.Files;
                }
            },
            Files: {
                get: function () {
                    return this.m_Files;
                },
                set: function (value) {
                    this.m_Files = value;
                }
            }
        },
        alias: [
            "IterationNumber", "Codex$ICodeReviewIteration$IterationNumber",
            "ReviewId", "Codex$ICodeReviewIteration$ReviewId",
            "Description", "Codex$ICodeReviewIteration$Description"
        ],
        ctors: {
            init: function () {
                this.m_Files = new (System.Collections.Generic.List$1(Codex.ObjectModel.CodeReviewFile)).ctor();
            },
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.CodeReviewIteration, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_IterationNumber = value.Codex$ICodeReviewIteration$IterationNumber;
                this.m_ReviewId = value.Codex$ICodeReviewIteration$ReviewId;
                this.m_Description = value.Codex$ICodeReviewIteration$Description;
                this.m_Files = new (System.Collections.Generic.List$1(Codex.ObjectModel.CodeReviewFile)).$ctor1(System.Linq.Enumerable.from(value.Codex$ICodeReviewIteration$Files).select($asm.$.Codex.ObjectModel.CodeReviewIteration.f2));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.CodeReviewIteration", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.CodeReviewIteration, {
        f1: function (_v) {
            return new Codex.ObjectModel.CodeReviewFile.ctor().CopyFrom(Codex.ObjectModel.CodeReviewFile, _v);
        },
        f2: function (v) {
            return Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ICodeReviewFile, Bridge.global.Codex.ObjectModel.CodeReviewFile, v, $asm.$.Codex.ObjectModel.CodeReviewIteration.f1);
        }
    });

    /**
     * Represents a version of a repository file for a commit
     *
     * @public
     * @class Codex.ObjectModel.CommitFileLink
     * @augments Codex.EntityBase
     * @implements  Codex.ICommitFileLink
     */
    Bridge.define("Codex.ObjectModel.CommitFileLink", {
        inherits: [Codex.EntityBase,Codex.ICommitFileLink],
        fields: {
            m_RepoRelativePath: null,
            m_FileId: null,
            m_VersionControlFileId: null
        },
        props: {
            /**
             * The relative path in the repository to the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CommitFileLink
             * @function RepoRelativePath
             * @type string
             */
            RepoRelativePath: {
                get: function () {
                    return this.m_RepoRelativePath;
                },
                set: function (value) {
                    this.m_RepoRelativePath = value;
                }
            },
            /**
             * Unique identifer for file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CommitFileLink
             * @function FileId
             * @type string
             */
            FileId: {
                get: function () {
                    return this.m_FileId;
                },
                set: function (value) {
                    this.m_FileId = value;
                }
            },
            /**
             * Unique identifer for file content as determined by version control
             (i.e. the blob hash)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CommitFileLink
             * @function VersionControlFileId
             * @type string
             */
            VersionControlFileId: {
                get: function () {
                    return this.m_VersionControlFileId;
                },
                set: function (value) {
                    this.m_VersionControlFileId = value;
                }
            }
        },
        alias: [
            "RepoRelativePath", "Codex$ICommitFileLink$RepoRelativePath",
            "FileId", "Codex$ICommitFileLink$FileId",
            "VersionControlFileId", "Codex$ICommitFileLink$VersionControlFileId"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.CommitFileLink, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_RepoRelativePath = value.Codex$ICommitFileLink$RepoRelativePath;
                this.m_FileId = value.Codex$ICommitFileLink$FileId;
                this.m_VersionControlFileId = value.Codex$ICommitFileLink$VersionControlFileId;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.Symbol", {
        inherits: [Codex.EntityBase,Codex.ICodeSymbol],
        fields: {
            m_ProjectId: null,
            m_Id: null,
            m_Kind: null
        },
        props: {
            /**
             * The identifier of the project in which the symbol appears
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Symbol
             * @function ProjectId
             * @type string
             */
            ProjectId: {
                get: function () {
                    return this.m_ProjectId;
                },
                set: function (value) {
                    this.m_ProjectId = value;
                }
            },
            /**
             * The identifier for the symbol
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Symbol
             * @function Id
             * @type Codex.ObjectModel.SymbolId
             */
            Id: {
                get: function () {
                    return this.m_Id;
                },
                set: function (value) {
                    this.m_Id = value;
                }
            },
            /**
             * The symbol kind. (i.e. interface, method, field)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Symbol
             * @function Kind
             * @type string
             */
            Kind: {
                get: function () {
                    return this.m_Kind;
                },
                set: function (value) {
                    this.m_Kind = value;
                }
            },
            /**
             * Extension data used during analysis/search
             TODO: Why is this needed?
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Symbol
             * @function ExtData
             * @type Codex.ObjectModel.ExtensionData
             */
            ExtData: null
        },
        alias: [
            "ProjectId", "Codex$ICodeSymbol$ProjectId",
            "Id", "Codex$ICodeSymbol$Id",
            "Kind", "Codex$ICodeSymbol$Kind"
        ],
        ctors: {
            init: function () {
                this.m_Id = new Codex.ObjectModel.SymbolId();
            },
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.Symbol, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_ProjectId = value.Codex$ICodeSymbol$ProjectId;
                this.m_Id = value.Codex$ICodeSymbol$Id;
                this.m_Kind = value.Codex$ICodeSymbol$Kind;
                return Bridge.cast((this), TTarget);
            },
            Equals: function (other) {
                return System.String.equals(this.ProjectId, other.ProjectId, 4) && System.String.equals(this.Id.Value, other.Id.Value, 4);
            },
            equals: function (obj) {
                if (Bridge.referenceEquals(null, obj)) {
                    return false;
                }
                if (Bridge.referenceEquals(this, obj)) {
                    return true;
                }
                if (!Bridge.referenceEquals(Bridge.getType(obj), Bridge.getType(this))) {
                    return false;
                }
                return this.Equals(Bridge.cast(obj, Codex.ObjectModel.Symbol));
            },
            getHashCode: function () {
                var $t, $t1, $t2, $t3;
                return (Bridge.Int.mul((($t = (($t1 = this.ProjectId) != null ? Bridge.getHashCode($t1) : null), $t != null ? $t : 0)), 397)) ^ (($t2 = (($t3 = this.Id.Value) != null ? Bridge.getHashCode($t3) : null), $t2 != null ? $t2 : 0));
            },
            toString: function () {
                return this.Id.Value;
            }
        }
    });

    /**
     * Defines documentation about a symbol
     *
     * @public
     * @class Codex.ObjectModel.DocumentationInfo
     * @augments Codex.EntityBase
     * @implements  Codex.IDocumentationInfo
     */
    Bridge.define("Codex.ObjectModel.DocumentationInfo", {
        inherits: [Codex.EntityBase,Codex.IDocumentationInfo],
        fields: {
            m_DeclarationName: null,
            m_Comment: null,
            m_AssociatedSymbol: null,
            m_References: null,
            m_Summary: null,
            m_Remarks: null,
            m_Arguments: null,
            m_TypeParameters: null,
            m_Exceptions: null
        },
        props: {
            /**
             * The declaration name for the symbol
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DocumentationInfo
             * @function DeclarationName
             * @type string
             */
            DeclarationName: {
                get: function () {
                    return this.m_DeclarationName;
                },
                set: function (value) {
                    this.m_DeclarationName = value;
                }
            },
            /**
             * The comment applied to the definition (this is the raw doc comment text)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DocumentationInfo
             * @function Comment
             * @type string
             */
            Comment: {
                get: function () {
                    return this.m_Comment;
                },
                set: function (value) {
                    this.m_Comment = value;
                }
            },
            /**
             * Identity of symbol which generated this documentation
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.DocumentationInfo
             * @function Codex$IDocumentationInfo$AssociatedSymbol
             * @type Codex.ICodeSymbol
             */
            Codex$IDocumentationInfo$AssociatedSymbol: {
                get: function () {
                    return this.AssociatedSymbol;
                }
            },
            /**
             * Identity of symbol which generated this documentation
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DocumentationInfo
             * @function AssociatedSymbol
             * @type Codex.ObjectModel.Symbol
             */
            AssociatedSymbol: {
                get: function () {
                    return this.m_AssociatedSymbol;
                },
                set: function (value) {
                    this.m_AssociatedSymbol = value;
                }
            },
            /**
             * The other symbols referenced by this symbol (i.e. base type, implemented interface
             or interface members, overridden members, return type of method or property type)
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.DocumentationInfo
             * @function Codex$IDocumentationInfo$References
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IDocumentationInfo$References: {
                get: function () {
                    return this.References;
                }
            },
            /**
             * The other symbols referenced by this symbol (i.e. base type, implemented interface
             or interface members, overridden members, return type of method or property type)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DocumentationInfo
             * @function References
             * @type System.Collections.Generic.List$1
             */
            References: {
                get: function () {
                    return this.m_References;
                },
                set: function (value) {
                    this.m_References = value;
                }
            },
            /**
             * Describes the symbol
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DocumentationInfo
             * @function Summary
             * @type string
             */
            Summary: {
                get: function () {
                    return this.m_Summary;
                },
                set: function (value) {
                    this.m_Summary = value;
                }
            },
            /**
             * Supplementation information about the symbol
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DocumentationInfo
             * @function Remarks
             * @type string
             */
            Remarks: {
                get: function () {
                    return this.m_Remarks;
                },
                set: function (value) {
                    this.m_Remarks = value;
                }
            },
            /**
             * Comments on arguments
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.DocumentationInfo
             * @function Codex$IDocumentationInfo$Arguments
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IDocumentationInfo$Arguments: {
                get: function () {
                    return this.Arguments;
                }
            },
            /**
             * Comments on arguments
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DocumentationInfo
             * @function Arguments
             * @type System.Collections.Generic.List$1
             */
            Arguments: {
                get: function () {
                    return this.m_Arguments;
                },
                set: function (value) {
                    this.m_Arguments = value;
                }
            },
            /**
             * Comments on type parameters
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.DocumentationInfo
             * @function Codex$IDocumentationInfo$TypeParameters
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IDocumentationInfo$TypeParameters: {
                get: function () {
                    return this.TypeParameters;
                }
            },
            /**
             * Comments on type parameters
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DocumentationInfo
             * @function TypeParameters
             * @type System.Collections.Generic.List$1
             */
            TypeParameters: {
                get: function () {
                    return this.m_TypeParameters;
                },
                set: function (value) {
                    this.m_TypeParameters = value;
                }
            },
            /**
             * Information about exceptions which can be thrown
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.DocumentationInfo
             * @function Codex$IDocumentationInfo$Exceptions
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IDocumentationInfo$Exceptions: {
                get: function () {
                    return this.Exceptions;
                }
            },
            /**
             * Information about exceptions which can be thrown
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DocumentationInfo
             * @function Exceptions
             * @type System.Collections.Generic.List$1
             */
            Exceptions: {
                get: function () {
                    return this.m_Exceptions;
                },
                set: function (value) {
                    this.m_Exceptions = value;
                }
            }
        },
        alias: [
            "DeclarationName", "Codex$IDocumentationInfo$DeclarationName",
            "Comment", "Codex$IDocumentationInfo$Comment",
            "Summary", "Codex$IDocumentationInfo$Summary",
            "Remarks", "Codex$IDocumentationInfo$Remarks"
        ],
        ctors: {
            init: function () {
                this.m_References = new (System.Collections.Generic.List$1(Codex.ObjectModel.DocumentationReferenceSymbol)).ctor();
                this.m_Arguments = new (System.Collections.Generic.List$1(Codex.ObjectModel.TypedParameterDocumentation)).ctor();
                this.m_TypeParameters = new (System.Collections.Generic.List$1(Codex.ObjectModel.ParameterDocumentation)).ctor();
                this.m_Exceptions = new (System.Collections.Generic.List$1(Codex.ObjectModel.TypedParameterDocumentation)).ctor();
            },
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.DocumentationInfo, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_DeclarationName = value.Codex$IDocumentationInfo$DeclarationName;
                this.m_Comment = value.Codex$IDocumentationInfo$Comment;
                this.m_AssociatedSymbol = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.Symbol, Bridge.global.Codex.ObjectModel.Symbol, this.AssociatedSymbol, $asm.$.Codex.ObjectModel.DocumentationInfo.f1);
                ;
                this.m_References = new (System.Collections.Generic.List$1(Codex.ObjectModel.DocumentationReferenceSymbol)).$ctor1(System.Linq.Enumerable.from(value.Codex$IDocumentationInfo$References).select($asm.$.Codex.ObjectModel.DocumentationInfo.f3));
                this.m_Summary = value.Codex$IDocumentationInfo$Summary;
                this.m_Remarks = value.Codex$IDocumentationInfo$Remarks;
                this.m_Arguments = new (System.Collections.Generic.List$1(Codex.ObjectModel.TypedParameterDocumentation)).$ctor1(System.Linq.Enumerable.from(value.Codex$IDocumentationInfo$Arguments).select($asm.$.Codex.ObjectModel.DocumentationInfo.f5));
                this.m_TypeParameters = new (System.Collections.Generic.List$1(Codex.ObjectModel.ParameterDocumentation)).$ctor1(System.Linq.Enumerable.from(value.Codex$IDocumentationInfo$TypeParameters).select($asm.$.Codex.ObjectModel.DocumentationInfo.f7));
                this.m_Exceptions = new (System.Collections.Generic.List$1(Codex.ObjectModel.TypedParameterDocumentation)).$ctor1(System.Linq.Enumerable.from(value.Codex$IDocumentationInfo$Exceptions).select($asm.$.Codex.ObjectModel.DocumentationInfo.f5));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.DocumentationInfo", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.DocumentationInfo, {
        f1: function (v) {
            return new Codex.ObjectModel.Symbol.ctor().CopyFrom(Codex.ObjectModel.Symbol, v);
        },
        f2: function (_v) {
            return new Codex.ObjectModel.DocumentationReferenceSymbol.ctor().CopyFrom$2(Codex.ObjectModel.DocumentationReferenceSymbol, _v);
        },
        f3: function (v) {
            return Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.IDocumentationReferenceSymbol, Bridge.global.Codex.ObjectModel.DocumentationReferenceSymbol, v, $asm.$.Codex.ObjectModel.DocumentationInfo.f2);
        },
        f4: function (_v) {
            return new Codex.ObjectModel.TypedParameterDocumentation.ctor().CopyFrom$1(Codex.ObjectModel.TypedParameterDocumentation, _v);
        },
        f5: function (v) {
            return Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ITypedParameterDocumentation, Bridge.global.Codex.ObjectModel.TypedParameterDocumentation, v, $asm.$.Codex.ObjectModel.DocumentationInfo.f4);
        },
        f6: function (_v) {
            return new Codex.ObjectModel.ParameterDocumentation.ctor().CopyFrom(Codex.ObjectModel.ParameterDocumentation, _v);
        },
        f7: function (v) {
            return Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.IParameterDocumentation, Bridge.global.Codex.ObjectModel.ParameterDocumentation, v, $asm.$.Codex.ObjectModel.DocumentationInfo.f6);
        }
    });

    /**
     * Describes encoding so that file may be reconstituted in a byte-identical form
     *
     * @public
     * @class Codex.ObjectModel.EncodingDescription
     * @augments Codex.EntityBase
     * @implements  Codex.IEncodingDescription
     */
    Bridge.define("Codex.ObjectModel.EncodingDescription", {
        inherits: [Codex.EntityBase,Codex.IEncodingDescription],
        fields: {
            m_Name: null,
            m_Preamble: null
        },
        props: {
            /**
             * The name of the encoding
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.EncodingDescription
             * @function Name
             * @type string
             */
            Name: {
                get: function () {
                    return this.m_Name;
                },
                set: function (value) {
                    this.m_Name = value;
                }
            },
            /**
             * The encoding preamble
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.EncodingDescription
             * @function Preamble
             * @type Array.<number>
             */
            Preamble: {
                get: function () {
                    return this.m_Preamble;
                },
                set: function (value) {
                    this.m_Preamble = value;
                }
            }
        },
        alias: [
            "Name", "Codex$IEncodingDescription$Name",
            "Preamble", "Codex$IEncodingDescription$Preamble"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.EncodingDescription, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_Name = value.Codex$IEncodingDescription$Name;
                this.m_Preamble = value.Codex$IEncodingDescription$Preamble;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.FileStatistics", {
        inherits: [Codex.EntityBase,Codex.IFileStatistics],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.FileStatistics, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.Index", {
        inherits: [Codex.EntityBase,Codex.Sdk.Search.IIndex],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.Index, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.LanguageInfo", {
        inherits: [Codex.EntityBase,Codex.ILanguageInfo],
        fields: {
            m_Name: null,
            m_Classifications: null
        },
        props: {
            /**
             * The name of the language
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.LanguageInfo
             * @function Name
             * @type string
             */
            Name: {
                get: function () {
                    return this.m_Name;
                },
                set: function (value) {
                    this.m_Name = value;
                }
            },
            /**
             * Describes the style for classified spans. See {@link }.
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.LanguageInfo
             * @function Codex$ILanguageInfo$Classifications
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$ILanguageInfo$Classifications: {
                get: function () {
                    return this.Classifications;
                }
            },
            /**
             * Describes the style for classified spans. See {@link }.
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.LanguageInfo
             * @function Classifications
             * @type System.Collections.Generic.List$1
             */
            Classifications: {
                get: function () {
                    return this.m_Classifications;
                },
                set: function (value) {
                    this.m_Classifications = value;
                }
            }
        },
        alias: ["Name", "Codex$ILanguageInfo$Name"],
        ctors: {
            init: function () {
                this.m_Classifications = new (System.Collections.Generic.List$1(Codex.ObjectModel.ClassificationStyle)).ctor();
            },
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.LanguageInfo, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_Name = value.Codex$ILanguageInfo$Name;
                this.m_Classifications = new (System.Collections.Generic.List$1(Codex.ObjectModel.ClassificationStyle)).$ctor1(System.Linq.Enumerable.from(value.Codex$ILanguageInfo$Classifications).select($asm.$.Codex.ObjectModel.LanguageInfo.f2));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.LanguageInfo", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.LanguageInfo, {
        f1: function (_v) {
            return new Codex.ObjectModel.ClassificationStyle.ctor().CopyFrom(Codex.ObjectModel.ClassificationStyle, _v);
        },
        f2: function (v) {
            return Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.IClassificationStyle, Bridge.global.Codex.ObjectModel.ClassificationStyle, v, $asm.$.Codex.ObjectModel.LanguageInfo.f1);
        }
    });

    Bridge.define("Codex.ObjectModel.OutliningRegion", {
        inherits: [Codex.EntityBase,Codex.IOutliningRegion],
        fields: {
            m_Kind: null,
            m_Header: null,
            m_Content: null
        },
        props: {
            Kind: {
                get: function () {
                    return this.m_Kind;
                },
                set: function (value) {
                    this.m_Kind = value;
                }
            },
            /**
             * Defines the region containing the header text of the outlining region
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.OutliningRegion
             * @function Codex$IOutliningRegion$Header
             * @type Codex.ILineSpan
             */
            Codex$IOutliningRegion$Header: {
                get: function () {
                    return this.Header;
                }
            },
            /**
             * Defines the region containing the header text of the outlining region
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.OutliningRegion
             * @function Header
             * @type Codex.ObjectModel.LineSpan
             */
            Header: {
                get: function () {
                    return this.m_Header;
                },
                set: function (value) {
                    this.m_Header = value;
                }
            },
            /**
             * Defines the region containing the collapsible content region of the outlining region
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.OutliningRegion
             * @function Codex$IOutliningRegion$Content
             * @type Codex.ILineSpan
             */
            Codex$IOutliningRegion$Content: {
                get: function () {
                    return this.Content;
                }
            },
            /**
             * Defines the region containing the collapsible content region of the outlining region
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.OutliningRegion
             * @function Content
             * @type Codex.ObjectModel.LineSpan
             */
            Content: {
                get: function () {
                    return this.m_Content;
                },
                set: function (value) {
                    this.m_Content = value;
                }
            }
        },
        alias: ["Kind", "Codex$IOutliningRegion$Kind"],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.OutliningRegion, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_Kind = value.Codex$IOutliningRegion$Kind;
                this.m_Header = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.LineSpan, Bridge.global.Codex.ObjectModel.LineSpan, this.Header, $asm.$.Codex.ObjectModel.OutliningRegion.f1);
                ;
                this.m_Content = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.LineSpan, Bridge.global.Codex.ObjectModel.LineSpan, this.Content, $asm.$.Codex.ObjectModel.OutliningRegion.f1);
                ;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.OutliningRegion", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.OutliningRegion, {
        f1: function (v) {
            return new Codex.ObjectModel.LineSpan.ctor().CopyFrom$1(Codex.ObjectModel.LineSpan, v);
        }
    });

    /**
     * Documentation for a method parameter
     *
     * @public
     * @class Codex.ObjectModel.ParameterDocumentation
     * @augments Codex.EntityBase
     * @implements  Codex.IParameterDocumentation
     */
    Bridge.define("Codex.ObjectModel.ParameterDocumentation", {
        inherits: [Codex.EntityBase,Codex.IParameterDocumentation],
        fields: {
            m_Name: null,
            m_Comment: null
        },
        props: {
            /**
             * The name of the parameter
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ParameterDocumentation
             * @function Name
             * @type string
             */
            Name: {
                get: function () {
                    return this.m_Name;
                },
                set: function (value) {
                    this.m_Name = value;
                }
            },
            /**
             * The comment associated with the symbol
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ParameterDocumentation
             * @function Comment
             * @type string
             */
            Comment: {
                get: function () {
                    return this.m_Comment;
                },
                set: function (value) {
                    this.m_Comment = value;
                }
            }
        },
        alias: [
            "Name", "Codex$IParameterDocumentation$Name",
            "Comment", "Codex$IParameterDocumentation$Comment"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.ParameterDocumentation, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_Name = value.Codex$IParameterDocumentation$Name;
                this.m_Comment = value.Codex$IParameterDocumentation$Comment;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.PropertyMap", {
        inherits: [Codex.ObjectModel.PropertyMapBase,Codex.IPropertyMap],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.PropertyMapBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.PropertyMapBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.PropertyMap, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                return Bridge.cast((this), TTarget);
            },
            Initialize: function () { }
        }
    });

    Bridge.define("Codex.ObjectModel.ReferencedProject", {
        inherits: [Codex.EntityBase,Codex.IReferencedProject],
        fields: {
            m_ProjectId: null,
            m_Definitions: null,
            m_DisplayName: null,
            m_Properties: null
        },
        props: {
            /**
             * The identifier of the referenced project
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferencedProject
             * @function ProjectId
             * @type string
             */
            ProjectId: {
                get: function () {
                    return this.m_ProjectId;
                },
                set: function (value) {
                    this.m_ProjectId = value;
                }
            },
            /**
             * Used definitions for the project. Sorted.
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.ReferencedProject
             * @function Codex$IReferencedProject$Definitions
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IReferencedProject$Definitions: {
                get: function () {
                    return this.Definitions;
                }
            },
            /**
             * Used definitions for the project. Sorted.
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferencedProject
             * @function Definitions
             * @type System.Collections.Generic.List$1
             */
            Definitions: {
                get: function () {
                    return this.m_Definitions;
                },
                set: function (value) {
                    this.m_Definitions = value;
                }
            },
            /**
             * The display name of the project
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferencedProject
             * @function DisplayName
             * @type string
             */
            DisplayName: {
                get: function () {
                    return this.m_DisplayName;
                },
                set: function (value) {
                    this.m_DisplayName = value;
                }
            },
            /**
             * The properties of the project. Such as Version, PublicKey, etc.
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.ReferencedProject
             * @function Codex$IReferencedProject$Properties
             * @type Codex.IPropertyMap
             */
            Codex$IReferencedProject$Properties: {
                get: function () {
                    return this.Properties;
                }
            },
            /**
             * The properties of the project. Such as Version, PublicKey, etc.
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferencedProject
             * @function Properties
             * @type Codex.ObjectModel.PropertyMap
             */
            Properties: {
                get: function () {
                    return this.m_Properties;
                },
                set: function (value) {
                    this.m_Properties = value;
                }
            }
        },
        alias: [
            "ProjectId", "Codex$IReferencedProject$ProjectId",
            "DisplayName", "Codex$IReferencedProject$DisplayName"
        ],
        ctors: {
            init: function () {
                this.m_Definitions = new (System.Collections.Generic.List$1(Codex.ObjectModel.DefinitionSymbol)).ctor();
            },
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.ReferencedProject, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_ProjectId = value.Codex$IReferencedProject$ProjectId;
                this.m_Definitions = new (System.Collections.Generic.List$1(Codex.ObjectModel.DefinitionSymbol)).$ctor1(System.Linq.Enumerable.from(value.Codex$IReferencedProject$Definitions).select($asm.$.Codex.ObjectModel.ReferencedProject.f2));
                this.m_DisplayName = value.Codex$IReferencedProject$DisplayName;
                this.m_Properties = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.PropertyMap, Bridge.global.Codex.ObjectModel.PropertyMap, this.Properties, $asm.$.Codex.ObjectModel.ReferencedProject.f3);
                ;
                return Bridge.cast((this), TTarget);
            },
            toString: function () {
                var $t;
                return ($t = this.DisplayName, $t != null ? $t : this.ProjectId);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.ReferencedProject", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.ReferencedProject, {
        f1: function (_v) {
            return new Codex.ObjectModel.DefinitionSymbol.ctor().CopyFrom$2(Codex.ObjectModel.DefinitionSymbol, _v);
        },
        f2: function (v) {
            return Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.IDefinitionSymbol, Bridge.global.Codex.ObjectModel.DefinitionSymbol, v, $asm.$.Codex.ObjectModel.ReferencedProject.f1);
        },
        f3: function (v) {
            return new Codex.ObjectModel.PropertyMap.ctor().CopyFrom(Codex.ObjectModel.PropertyMap, v);
        }
    });

    Bridge.define("Codex.ObjectModel.Repository", {
        inherits: [Codex.EntityBase,Codex.IRepository],
        fields: {
            m_Name: null,
            m_Description: null,
            m_Id: null,
            m_WebAddress: null,
            m_SourceControlWebAddress: null,
            m_FileWebAddressTransformInputRegex: null,
            m_PrimaryBranch: null,
            m_RepositoryReferences: null
        },
        props: {
            /**
             * The name fo the repository
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Repository
             * @function Name
             * @type string
             */
            Name: {
                get: function () {
                    return this.m_Name;
                },
                set: function (value) {
                    this.m_Name = value;
                }
            },
            /**
             * Describes the repository
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Repository
             * @function Description
             * @type string
             */
            Description: {
                get: function () {
                    return this.m_Description;
                },
                set: function (value) {
                    this.m_Description = value;
                }
            },
            Id: {
                get: function () {
                    return this.m_Id;
                },
                set: function (value) {
                    this.m_Id = value;
                }
            },
            WebAddress: {
                get: function () {
                    return this.m_WebAddress;
                },
                set: function (value) {
                    this.m_WebAddress = value;
                }
            },
            /**
             * The web address for source control of the repository
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Repository
             * @function SourceControlWebAddress
             * @type string
             */
            SourceControlWebAddress: {
                get: function () {
                    return this.m_SourceControlWebAddress;
                },
                set: function (value) {
                    this.m_SourceControlWebAddress = value;
                }
            },
            /**
             * The regex for extracting
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Repository
             * @function FileWebAddressTransformInputRegex
             * @type string
             */
            FileWebAddressTransformInputRegex: {
                get: function () {
                    return this.m_FileWebAddressTransformInputRegex;
                },
                set: function (value) {
                    this.m_FileWebAddressTransformInputRegex = value;
                }
            },
            /**
             * The name of the primary branch for the repository
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Repository
             * @function PrimaryBranch
             * @type string
             */
            PrimaryBranch: {
                get: function () {
                    return this.m_PrimaryBranch;
                },
                set: function (value) {
                    this.m_PrimaryBranch = value;
                }
            },
            Codex$IRepository$RepositoryReferences: {
                get: function () {
                    return this.RepositoryReferences;
                }
            },
            RepositoryReferences: {
                get: function () {
                    return this.m_RepositoryReferences;
                },
                set: function (value) {
                    this.m_RepositoryReferences = value;
                }
            }
        },
        alias: [
            "Name", "Codex$IRepository$Name",
            "Description", "Codex$IRepository$Description",
            "Id", "Codex$IRepository$Id",
            "WebAddress", "Codex$IRepository$WebAddress",
            "SourceControlWebAddress", "Codex$IRepository$SourceControlWebAddress",
            "FileWebAddressTransformInputRegex", "Codex$IRepository$FileWebAddressTransformInputRegex",
            "PrimaryBranch", "Codex$IRepository$PrimaryBranch"
        ],
        ctors: {
            init: function () {
                this.m_RepositoryReferences = new (System.Collections.Generic.List$1(Codex.ObjectModel.RepositoryReference)).ctor();
            },
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.Repository, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_Name = value.Codex$IRepository$Name;
                this.m_Description = value.Codex$IRepository$Description;
                this.m_Id = value.Codex$IRepository$Id;
                this.m_WebAddress = value.Codex$IRepository$WebAddress;
                this.m_SourceControlWebAddress = value.Codex$IRepository$SourceControlWebAddress;
                this.m_FileWebAddressTransformInputRegex = value.Codex$IRepository$FileWebAddressTransformInputRegex;
                this.m_PrimaryBranch = value.Codex$IRepository$PrimaryBranch;
                this.m_RepositoryReferences = new (System.Collections.Generic.List$1(Codex.ObjectModel.RepositoryReference)).$ctor1(System.Linq.Enumerable.from(value.Codex$IRepository$RepositoryReferences).select($asm.$.Codex.ObjectModel.Repository.f2));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.Repository", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.Repository, {
        f1: function (_v) {
            return new Codex.ObjectModel.RepositoryReference.ctor().CopyFrom(Codex.ObjectModel.RepositoryReference, _v);
        },
        f2: function (v) {
            return Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.IRepositoryReference, Bridge.global.Codex.ObjectModel.RepositoryReference, v, $asm.$.Codex.ObjectModel.Repository.f1);
        }
    });

    Bridge.define("Codex.ObjectModel.RepositoryReference", {
        inherits: [Codex.EntityBase,Codex.IRepositoryReference],
        fields: {
            m_Name: null,
            m_Id: null
        },
        props: {
            /**
             * The name of the reference repository
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.RepositoryReference
             * @function Name
             * @type string
             */
            Name: {
                get: function () {
                    return this.m_Name;
                },
                set: function (value) {
                    this.m_Name = value;
                }
            },
            /**
             * Optional. Id of repository
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.RepositoryReference
             * @function Id
             * @type string
             */
            Id: {
                get: function () {
                    return this.m_Id;
                },
                set: function (value) {
                    this.m_Id = value;
                }
            }
        },
        alias: [
            "Name", "Codex$IRepositoryReference$Name",
            "Id", "Codex$IRepositoryReference$Id"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.RepositoryReference, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_Name = value.Codex$IRepositoryReference$Name;
                this.m_Id = value.Codex$IRepositoryReference$Id;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    /**
     * Information for creating an ICodexRepositoryStore
     *
     * @public
     * @class Codex.ObjectModel.RepositoryStoreInfo
     * @augments Codex.EntityBase
     * @implements  Codex.IRepositoryStoreInfo
     */
    Bridge.define("Codex.ObjectModel.RepositoryStoreInfo", {
        inherits: [Codex.EntityBase,Codex.IRepositoryStoreInfo],
        fields: {
            m_Repository: null,
            m_Branch: null,
            m_Commit: null
        },
        props: {
            /**
             * The repository being stored
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.RepositoryStoreInfo
             * @function Codex$IRepositoryStoreInfo$Repository
             * @type Codex.IRepository
             */
            Codex$IRepositoryStoreInfo$Repository: {
                get: function () {
                    return this.Repository;
                }
            },
            /**
             * The repository being stored
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.RepositoryStoreInfo
             * @function Repository
             * @type Codex.ObjectModel.Repository
             */
            Repository: {
                get: function () {
                    return this.m_Repository;
                },
                set: function (value) {
                    this.m_Repository = value;
                }
            },
            /**
             * The branch being stored
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.RepositoryStoreInfo
             * @function Codex$IRepositoryStoreInfo$Branch
             * @type Codex.IBranch
             */
            Codex$IRepositoryStoreInfo$Branch: {
                get: function () {
                    return this.Branch;
                }
            },
            /**
             * The branch being stored
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.RepositoryStoreInfo
             * @function Branch
             * @type Codex.ObjectModel.Branch
             */
            Branch: {
                get: function () {
                    return this.m_Branch;
                },
                set: function (value) {
                    this.m_Branch = value;
                }
            },
            /**
             * The commit being stored
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.RepositoryStoreInfo
             * @function Codex$IRepositoryStoreInfo$Commit
             * @type Codex.ICommit
             */
            Codex$IRepositoryStoreInfo$Commit: {
                get: function () {
                    return this.Commit;
                }
            },
            /**
             * The commit being stored
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.RepositoryStoreInfo
             * @function Commit
             * @type Codex.ObjectModel.Commit
             */
            Commit: {
                get: function () {
                    return this.m_Commit;
                },
                set: function (value) {
                    this.m_Commit = value;
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.RepositoryStoreInfo, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_Repository = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.Repository, Bridge.global.Codex.ObjectModel.Repository, this.Repository, $asm.$.Codex.ObjectModel.RepositoryStoreInfo.f1);
                ;
                this.m_Branch = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.Branch, Bridge.global.Codex.ObjectModel.Branch, this.Branch, $asm.$.Codex.ObjectModel.RepositoryStoreInfo.f2);
                ;
                this.m_Commit = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.Commit, Bridge.global.Codex.ObjectModel.Commit, this.Commit, $asm.$.Codex.ObjectModel.RepositoryStoreInfo.f3);
                ;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.RepositoryStoreInfo", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.RepositoryStoreInfo, {
        f1: function (v) {
            return new Codex.ObjectModel.Repository.ctor().CopyFrom(Codex.ObjectModel.Repository, v);
        },
        f2: function (v) {
            return new Codex.ObjectModel.Branch.ctor().CopyFrom(Codex.ObjectModel.Branch, v);
        },
        f3: function (v) {
            return new Codex.ObjectModel.Commit.ctor().CopyFrom$2(Codex.ObjectModel.Commit, v);
        }
    });

    Bridge.define("Codex.ObjectModel.SearchResult", {
        inherits: [Codex.EntityBase,Codex.Sdk.Search.ISearchResult],
        fields: {
            m_TextLine: null,
            m_Definition: null
        },
        props: {
            /**
             * The text span for a text result
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.SearchResult
             * @function Codex$Sdk$Search$ISearchResult$TextLine
             * @type Codex.Sdk.Search.ITextLineSpanResult
             */
            Codex$Sdk$Search$ISearchResult$TextLine: {
                get: function () {
                    return this.TextLine;
                }
            },
            /**
             * The text span for a text result
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SearchResult
             * @function TextLine
             * @type Codex.ObjectModel.TextLineSpanResult
             */
            TextLine: {
                get: function () {
                    return this.m_TextLine;
                },
                set: function (value) {
                    this.m_TextLine = value;
                }
            },
            /**
             * The definition of the search result
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.SearchResult
             * @function Codex$Sdk$Search$ISearchResult$Definition
             * @type Codex.IDefinitionSymbol
             */
            Codex$Sdk$Search$ISearchResult$Definition: {
                get: function () {
                    return this.Definition;
                }
            },
            /**
             * The definition of the search result
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SearchResult
             * @function Definition
             * @type Codex.ObjectModel.DefinitionSymbol
             */
            Definition: {
                get: function () {
                    return this.m_Definition;
                },
                set: function (value) {
                    this.m_Definition = value;
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.SearchResult, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_TextLine = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.TextLineSpanResult, Bridge.global.Codex.ObjectModel.TextLineSpanResult, this.TextLine, $asm.$.Codex.ObjectModel.SearchResult.f1);
                ;
                this.m_Definition = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.DefinitionSymbol, Bridge.global.Codex.ObjectModel.DefinitionSymbol, this.Definition, $asm.$.Codex.ObjectModel.SearchResult.f2);
                ;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.SearchResult", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.SearchResult, {
        f1: function (v) {
            return new Codex.ObjectModel.TextLineSpanResult.ctor().CopyFrom$4(Codex.ObjectModel.TextLineSpanResult, v);
        },
        f2: function (v) {
            return new Codex.ObjectModel.DefinitionSymbol.ctor().CopyFrom$2(Codex.ObjectModel.DefinitionSymbol, v);
        }
    });

    /**
     * Information about a source file as defined by the source control provider
     *
     * @public
     * @class Codex.ObjectModel.SourceControlFileInfo
     * @augments Codex.EntityBase
     * @implements  Codex.ISourceControlFileInfo
     */
    Bridge.define("Codex.ObjectModel.SourceControlFileInfo", {
        inherits: [Codex.EntityBase,Codex.ISourceControlFileInfo],
        fields: {
            m_SourceControlContentId: null
        },
        props: {
            /**
             * Unique id for the source file content as defined by the source control provider (i.e. git SHA)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SourceControlFileInfo
             * @function SourceControlContentId
             * @type string
             */
            SourceControlContentId: {
                get: function () {
                    return this.m_SourceControlContentId;
                },
                set: function (value) {
                    this.m_SourceControlContentId = value;
                }
            }
        },
        alias: ["SourceControlContentId", "Codex$ISourceControlFileInfo$SourceControlContentId"],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.SourceControlFileInfo, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_SourceControlContentId = value.Codex$ISourceControlFileInfo$SourceControlContentId;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    /**
     * Defines text contents of a file and associated data
     *
     * @public
     * @class Codex.ObjectModel.SourceFile
     * @augments Codex.EntityBase
     * @implements  Codex.ISourceFile
     */
    Bridge.define("Codex.ObjectModel.SourceFile", {
        inherits: [Codex.EntityBase,Codex.ISourceFile],
        fields: {
            m_Info: null,
            m_Content: null,
            m_ExcludeFromSearch: false
        },
        props: {
            /**
             * The information about the source file
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.SourceFile
             * @function Codex$ISourceFile$Info
             * @type Codex.ISourceFileInfo
             */
            Codex$ISourceFile$Info: {
                get: function () {
                    return this.Info;
                }
            },
            /**
             * The information about the source file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SourceFile
             * @function Info
             * @type Codex.ObjectModel.SourceFileInfo
             */
            Info: {
                get: function () {
                    return this.m_Info;
                },
                set: function (value) {
                    this.m_Info = value;
                }
            },
            /**
             * The content of the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SourceFile
             * @function Content
             * @type string
             */
            Content: {
                get: function () {
                    return this.m_Content;
                },
                set: function (value) {
                    this.m_Content = value;
                }
            },
            /**
             * Indicates that the file should be excluded from text search
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SourceFile
             * @function ExcludeFromSearch
             * @type boolean
             */
            ExcludeFromSearch: {
                get: function () {
                    return this.m_ExcludeFromSearch;
                },
                set: function (value) {
                    this.m_ExcludeFromSearch = value;
                }
            }
        },
        alias: [
            "Content", "Codex$ISourceFile$Content",
            "ExcludeFromSearch", "Codex$ISourceFile$ExcludeFromSearch"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.SourceFile, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_Info = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.SourceFileInfo, Bridge.global.Codex.ObjectModel.SourceFileInfo, this.Info, $asm.$.Codex.ObjectModel.SourceFile.f1);
                ;
                this.m_Content = value.Codex$ISourceFile$Content;
                this.m_ExcludeFromSearch = value.Codex$ISourceFile$ExcludeFromSearch;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.SourceFile", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.SourceFile, {
        f1: function (v) {
            return new Codex.ObjectModel.SourceFileInfo.ctor().CopyFrom$5(Codex.ObjectModel.SourceFileInfo, v);
        }
    });

    Bridge.define("Codex.ObjectModel.StoredBoundSourceFile", {
        inherits: [Codex.EntityBase,Codex.IStoredBoundSourceFile],
        fields: {
            m_BoundSourceFile: null,
            m_CompressedClassifications: null,
            m_CompressedReferences: null
        },
        props: {
            Codex$IStoredBoundSourceFile$BoundSourceFile: {
                get: function () {
                    return this.BoundSourceFile;
                }
            },
            BoundSourceFile: {
                get: function () {
                    return this.m_BoundSourceFile;
                },
                set: function (value) {
                    this.m_BoundSourceFile = value;
                }
            },
            /**
             * Compressed list of classification spans
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.StoredBoundSourceFile
             * @function CompressedClassifications
             * @type Codex.IClassificationList
             */
            CompressedClassifications: {
                get: function () {
                    return this.m_CompressedClassifications;
                },
                set: function (value) {
                    this.m_CompressedClassifications = value;
                }
            },
            /**
             * Compressed list of reference spans
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.StoredBoundSourceFile
             * @function CompressedReferences
             * @type Codex.IReferenceList
             */
            CompressedReferences: {
                get: function () {
                    return this.m_CompressedReferences;
                },
                set: function (value) {
                    this.m_CompressedReferences = value;
                }
            }
        },
        alias: [
            "CompressedClassifications", "Codex$IStoredBoundSourceFile$CompressedClassifications",
            "CompressedReferences", "Codex$IStoredBoundSourceFile$CompressedReferences"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.StoredBoundSourceFile, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_BoundSourceFile = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.BoundSourceFile, Bridge.global.Codex.ObjectModel.BoundSourceFile, this.BoundSourceFile, $asm.$.Codex.ObjectModel.StoredBoundSourceFile.f1);
                ;
                this.m_CompressedClassifications = value.Codex$IStoredBoundSourceFile$CompressedClassifications;
                this.m_CompressedReferences = value.Codex$IStoredBoundSourceFile$CompressedReferences;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.StoredBoundSourceFile", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.StoredBoundSourceFile, {
        f1: function (v) {
            return new Codex.ObjectModel.BoundSourceFile.ctor().CopyFrom$5(Codex.ObjectModel.BoundSourceFile, v);
        }
    });

    Bridge.define("Codex.Sdk.Search.FindSymbolArgumentsBase", {
        inherits: [Codex.Sdk.Search.ContextCodexArgumentsBase],
        fields: {
            /**
             * The symbol id of the symbol
             *
             * @instance
             * @public
             * @memberof Codex.Sdk.Search.FindSymbolArgumentsBase
             * @type string
             */
            SymbolId: null,
            /**
             * The project id of the symbol
             *
             * @instance
             * @public
             * @memberof Codex.Sdk.Search.FindSymbolArgumentsBase
             * @type string
             */
            ProjectId: null
        }
    });

    Bridge.define("Codex.Sdk.Search.GetSourceArguments", {
        inherits: [Codex.Sdk.Search.ContextCodexArgumentsBase]
    });

    Bridge.define("Codex.Sdk.Search.IndexQueryHitsResponse$1", function (T) { return {
        inherits: [Codex.Sdk.Search.IndexQueryResponse$1(Codex.Sdk.Search.IndexQueryHits$1(T))]
    }; });

    Bridge.define("Codex.Sdk.Search.SearchArguments", {
        inherits: [Codex.Sdk.Search.ContextCodexArgumentsBase],
        fields: {
            SearchString: null
        }
    });

    Bridge.define("Codex.IBoundSourceInfo", {
        inherits: [Codex.IProjectFileScopeEntity],
        $kind: "interface"
    });

    Bridge.define("Codex.ISymbolSpan", {
        inherits: [Codex.ITextLineSpan],
        $kind: "interface"
    });

    /**
     * NOTE: Do not set {@link }
     *
     * @abstract
     * @public
     * @class Codex.IProjectFileLink
     * @implements  Codex.IProjectFileScopeEntity
     */
    Bridge.define("Codex.IProjectFileLink", {
        inherits: [Codex.IProjectFileScopeEntity],
        $kind: "interface"
    });

    Bridge.define("Codex.IReferenceSearchModel", {
        inherits: [Codex.IProjectFileScopeEntity,Codex.ISearchEntity],
        $kind: "interface"
    });

    Bridge.define("Codex.ISourceFileInfo", {
        inherits: [Codex.IRepoFileScopeEntity,Codex.ISourceControlFileInfo,Codex.IProjectFileScopeEntity],
        $kind: "interface"
    });

    Bridge.define("Codex.ObjectModel.ProjectScopeEntity", {
        inherits: [Codex.ObjectModel.RepoScopeEntity,Codex.IProjectScopeEntity],
        fields: {
            m_ProjectId: null
        },
        props: {
            /**
             * The identifier of the project containing the entity
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ProjectScopeEntity
             * @function ProjectId
             * @type string
             */
            ProjectId: {
                get: function () {
                    return this.m_ProjectId;
                },
                set: function (value) {
                    this.m_ProjectId = value;
                }
            }
        },
        alias: ["ProjectId", "Codex$IProjectScopeEntity$ProjectId"],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.RepoScopeEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.RepoScopeEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.ProjectScopeEntity, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.RepoScopeEntity.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_ProjectId = value.Codex$IProjectScopeEntity$ProjectId;
                Codex.ObjectModel.RepoScopeEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.RepoScopeEntity, Bridge.cast((value), Codex.IRepoScopeEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.ProjectFileScopeEntity", {
        inherits: [Codex.EntityBase,Codex.IProjectFileScopeEntity],
        fields: {
            m_ProjectRelativePath: null,
            m_RepoRelativePath: null,
            m_RepositoryName: null,
            m_ProjectId: null
        },
        props: {
            /**
             * The project relative path of the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ProjectFileScopeEntity
             * @function ProjectRelativePath
             * @type string
             */
            ProjectRelativePath: {
                get: function () {
                    return this.m_ProjectRelativePath;
                },
                set: function (value) {
                    this.m_ProjectRelativePath = value;
                }
            },
            /**
             * The repo relative path to the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ProjectFileScopeEntity
             * @function RepoRelativePath
             * @type string
             */
            RepoRelativePath: {
                get: function () {
                    return this.m_RepoRelativePath;
                },
                set: function (value) {
                    this.m_RepoRelativePath = value;
                }
            },
            /**
             * The name of the repository containing the entity
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ProjectFileScopeEntity
             * @function RepositoryName
             * @type string
             */
            RepositoryName: {
                get: function () {
                    return this.m_RepositoryName;
                },
                set: function (value) {
                    this.m_RepositoryName = value;
                }
            },
            /**
             * The identifier of the project containing the entity
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ProjectFileScopeEntity
             * @function ProjectId
             * @type string
             */
            ProjectId: {
                get: function () {
                    return this.m_ProjectId;
                },
                set: function (value) {
                    this.m_ProjectId = value;
                }
            }
        },
        alias: [
            "ProjectRelativePath", "Codex$IProjectFileScopeEntity$ProjectRelativePath",
            "RepoRelativePath", "Codex$IRepoFileScopeEntity$RepoRelativePath",
            "RepositoryName", "Codex$IRepoScopeEntity$RepositoryName",
            "ProjectId", "Codex$IProjectScopeEntity$ProjectId"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.ProjectFileScopeEntity, value);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom$2(Codex.ObjectModel.ProjectFileScopeEntity, value);
            },
            $ctor4: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom$3(Codex.ObjectModel.ProjectFileScopeEntity, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom$1(Codex.ObjectModel.ProjectFileScopeEntity, value);
            }
        },
        methods: {
            CopyFrom$3: function (TTarget, value) {
                this.m_RepositoryName = value.Codex$IRepoScopeEntity$RepositoryName;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom$2: function (TTarget, value) {
                this.m_RepoRelativePath = value.Codex$IRepoFileScopeEntity$RepoRelativePath;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom$1: function (TTarget, value) {
                this.m_ProjectId = value.Codex$IProjectScopeEntity$ProjectId;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom: function (TTarget, value) {
                this.m_ProjectRelativePath = value.Codex$IProjectFileScopeEntity$ProjectRelativePath;
                this.m_RepoRelativePath = Bridge.cast((value), Codex.IRepoFileScopeEntity).Codex$IRepoFileScopeEntity$RepoRelativePath;
                this.m_RepositoryName = Bridge.cast((value), Codex.IRepoScopeEntity).Codex$IRepoScopeEntity$RepositoryName;
                this.m_ProjectId = Bridge.cast((value), Codex.IProjectScopeEntity).Codex$IProjectScopeEntity$ProjectId;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.BoundSourceSearchModel", {
        inherits: [Codex.ObjectModel.SearchEntity,Codex.IBoundSourceSearchModel],
        fields: {
            m_TextUid: null,
            m_SourceInfo: null,
            m_BindingInfo: null,
            m_CompressedClassifications: null,
            m_CompressedReferences: null,
            m_SourceControlInfo: null
        },
        props: {
            /**
             * The unique identifier of the associated {@link }
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.BoundSourceSearchModel
             * @function TextUid
             * @type string
             */
            TextUid: {
                get: function () {
                    return this.m_TextUid;
                },
                set: function (value) {
                    this.m_TextUid = value;
                }
            },
            /**
             * Information about the source file
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.BoundSourceSearchModel
             * @function Codex$IBoundSourceSearchModel$SourceInfo
             * @type Codex.ISourceFileInfo
             */
            Codex$IBoundSourceSearchModel$SourceInfo: {
                get: function () {
                    return this.SourceInfo;
                }
            },
            /**
             * Information about the source file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.BoundSourceSearchModel
             * @function SourceInfo
             * @type Codex.ObjectModel.SourceFileInfo
             */
            SourceInfo: {
                get: function () {
                    return this.m_SourceInfo;
                },
                set: function (value) {
                    this.m_SourceInfo = value;
                }
            },
            /**
             * The binding info
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.BoundSourceSearchModel
             * @function Codex$IBoundSourceSearchModel$BindingInfo
             * @type Codex.IBoundSourceInfo
             */
            Codex$IBoundSourceSearchModel$BindingInfo: {
                get: function () {
                    return this.BindingInfo;
                }
            },
            /**
             * The binding info
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.BoundSourceSearchModel
             * @function BindingInfo
             * @type Codex.ObjectModel.BoundSourceInfo
             */
            BindingInfo: {
                get: function () {
                    return this.m_BindingInfo;
                },
                set: function (value) {
                    this.m_BindingInfo = value;
                }
            },
            /**
             * Compressed list of classification spans
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.BoundSourceSearchModel
             * @function CompressedClassifications
             * @type Codex.IClassificationList
             */
            CompressedClassifications: {
                get: function () {
                    return this.m_CompressedClassifications;
                },
                set: function (value) {
                    this.m_CompressedClassifications = value;
                }
            },
            /**
             * Compressed list of reference spans
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.BoundSourceSearchModel
             * @function CompressedReferences
             * @type Codex.IReferenceList
             */
            CompressedReferences: {
                get: function () {
                    return this.m_CompressedReferences;
                },
                set: function (value) {
                    this.m_CompressedReferences = value;
                }
            },
            /**
             * Information about the source file from source control provider (may be null)
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.BoundSourceSearchModel
             * @function Codex$ISourceSearchModelBase$SourceControlInfo
             * @type Codex.ISourceControlFileInfo
             */
            Codex$ISourceSearchModelBase$SourceControlInfo: {
                get: function () {
                    return this.SourceControlInfo;
                }
            },
            /**
             * Information about the source file from source control provider (may be null)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.BoundSourceSearchModel
             * @function SourceControlInfo
             * @type Codex.ObjectModel.SourceControlFileInfo
             */
            SourceControlInfo: {
                get: function () {
                    return this.m_SourceControlInfo;
                },
                set: function (value) {
                    this.m_SourceControlInfo = value;
                }
            }
        },
        alias: [
            "TextUid", "Codex$IBoundSourceSearchModel$TextUid",
            "CompressedClassifications", "Codex$IBoundSourceSearchModel$CompressedClassifications",
            "CompressedReferences", "Codex$IBoundSourceSearchModel$CompressedReferences"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.BoundSourceSearchModel, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.$ctor1.call(this, value);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$2(Codex.ObjectModel.BoundSourceSearchModel, value);
            }
        },
        methods: {
            CopyFrom$2: function (TTarget, value) {
                this.m_SourceControlInfo = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.SourceControlFileInfo, Bridge.global.Codex.ObjectModel.SourceControlFileInfo, this.SourceControlInfo, $asm.$.Codex.ObjectModel.BoundSourceSearchModel.f1);
                ;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom$1: function (TTarget, value) {
                this.m_TextUid = value.Codex$IBoundSourceSearchModel$TextUid;
                this.m_SourceInfo = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.SourceFileInfo, Bridge.global.Codex.ObjectModel.SourceFileInfo, this.SourceInfo, $asm.$.Codex.ObjectModel.BoundSourceSearchModel.f2);
                ;
                this.m_BindingInfo = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.BoundSourceInfo, Bridge.global.Codex.ObjectModel.BoundSourceInfo, this.BindingInfo, $asm.$.Codex.ObjectModel.BoundSourceSearchModel.f3);
                ;
                this.m_CompressedClassifications = value.Codex$IBoundSourceSearchModel$CompressedClassifications;
                this.m_CompressedReferences = value.Codex$IBoundSourceSearchModel$CompressedReferences;
                Codex.ObjectModel.SearchEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.SearchEntity, Bridge.cast((value), Codex.ISearchEntity));
                this.m_SourceControlInfo = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.SourceControlFileInfo, Bridge.global.Codex.ObjectModel.SourceControlFileInfo, this.SourceControlInfo, $asm.$.Codex.ObjectModel.BoundSourceSearchModel.f1);
                ;
                return Bridge.cast((this), TTarget);
            },
            OnDeserializedCore: function () {
                if (this.CompressedClassifications != null) {
                    this.BindingInfo.Classifications = this.CompressedClassifications.Codex$IClassificationList$ToList();
                }

                if (this.CompressedReferences != null) {
                    this.BindingInfo.References = this.CompressedReferences.Codex$IReferenceList$ToList();
                }

                Codex.ObjectModel.SearchEntity.prototype.OnDeserializedCore.call(this);
            },
            OnSerializingCore: function () {
                if (this.CompressedClassifications != null) {
                    this.BindingInfo.Classifications = Codex.Utilities.CollectionUtilities.Empty$1(Codex.ObjectModel.ClassificationSpan).Array;
                }

                if (this.CompressedReferences != null) {
                    this.BindingInfo.References = Codex.Utilities.CollectionUtilities.Empty$1(Codex.ObjectModel.ReferenceSpan).Array;
                }

                Codex.ObjectModel.SearchEntity.prototype.OnSerializingCore.call(this);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.BoundSourceSearchModel", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.BoundSourceSearchModel, {
        f1: function (v) {
            return new Codex.ObjectModel.SourceControlFileInfo.ctor().CopyFrom(Codex.ObjectModel.SourceControlFileInfo, v);
        },
        f2: function (v) {
            return new Codex.ObjectModel.SourceFileInfo.ctor().CopyFrom$5(Codex.ObjectModel.SourceFileInfo, v);
        },
        f3: function (v) {
            return new Codex.ObjectModel.BoundSourceInfo.ctor().CopyFrom$4(Codex.ObjectModel.BoundSourceInfo, v);
        }
    });

    /**
     * Defines a classified span of text
     *
     * @public
     * @class Codex.ObjectModel.ClassificationSpan
     * @augments Codex.ObjectModel.Span
     * @implements  Codex.IClassificationSpan
     */
    Bridge.define("Codex.ObjectModel.ClassificationSpan", {
        inherits: [Codex.ObjectModel.Span,Codex.IClassificationSpan],
        fields: {
            m_DefaultClassificationColor: 0,
            m_Classification: null,
            m_LocalGroupId: 0
        },
        props: {
            /**
             * The default classification color for the span. This is used for
             contexts where a mapping from classification id to color is not
             available.
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ClassificationSpan
             * @function DefaultClassificationColor
             * @type number
             */
            DefaultClassificationColor: {
                get: function () {
                    return this.m_DefaultClassificationColor;
                },
                set: function (value) {
                    this.m_DefaultClassificationColor = value;
                }
            },
            /**
             * The classification identifier for the span
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ClassificationSpan
             * @function Classification
             * @type string
             */
            Classification: {
                get: function () {
                    return this.m_Classification;
                },
                set: function (value) {
                    this.m_Classification = value;
                }
            },
            /**
             * The identifier to the local group of spans which refer to the same common symbol
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ClassificationSpan
             * @function LocalGroupId
             * @type number
             */
            LocalGroupId: {
                get: function () {
                    return this.m_LocalGroupId;
                },
                set: function (value) {
                    this.m_LocalGroupId = value;
                }
            }
        },
        alias: [
            "DefaultClassificationColor", "Codex$IClassificationSpan$DefaultClassificationColor",
            "Classification", "Codex$IClassificationSpan$Classification",
            "LocalGroupId", "Codex$IClassificationSpan$LocalGroupId"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.Span.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.Span.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.ClassificationSpan, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.Span.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_DefaultClassificationColor = value.Codex$IClassificationSpan$DefaultClassificationColor;
                this.m_Classification = value.Codex$IClassificationSpan$Classification;
                this.m_LocalGroupId = value.Codex$IClassificationSpan$LocalGroupId;
                Codex.ObjectModel.Span.prototype.CopyFrom.call(this, Codex.ObjectModel.Span, Bridge.cast((value), Codex.ISpan));
                return Bridge.cast((this), TTarget);
            },
            Initialize: function () {
                this.DefaultClassificationColor = -1;
                Codex.ObjectModel.Span.prototype.Initialize.call(this);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.CommitScopeEntity", {
        inherits: [Codex.ObjectModel.RepoScopeEntity,Codex.ICommitScopeEntity],
        fields: {
            m_CommitId: null
        },
        props: {
            /**
             * The unique identifier for this commit/changeset in version control
             (i.e. git commit hash or TFS changeset number)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CommitScopeEntity
             * @function CommitId
             * @type string
             */
            CommitId: {
                get: function () {
                    return this.m_CommitId;
                },
                set: function (value) {
                    this.m_CommitId = value;
                }
            }
        },
        alias: ["CommitId", "Codex$ICommitScopeEntity$CommitId"],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.RepoScopeEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.RepoScopeEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.CommitScopeEntity, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.RepoScopeEntity.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_CommitId = value.Codex$ICommitScopeEntity$CommitId;
                Codex.ObjectModel.RepoScopeEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.RepoScopeEntity, Bridge.cast((value), Codex.IRepoScopeEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    /**
     * Represents a changed file in a commit
     *
     * @public
     * @class Codex.ObjectModel.CommitChangedFile
     * @augments Codex.ObjectModel.CommitFileLink
     * @implements  Codex.ICommitChangedFile
     */
    Bridge.define("Codex.ObjectModel.CommitChangedFile", {
        inherits: [Codex.ObjectModel.CommitFileLink,Codex.ICommitChangedFile],
        fields: {
            m_ChangeKind: 0,
            m_OriginalFilePath: null
        },
        props: {
            /**
             * The type of change applied to the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CommitChangedFile
             * @function ChangeKind
             * @type Codex.FileChangeKind
             */
            ChangeKind: {
                get: function () {
                    return this.m_ChangeKind;
                },
                set: function (value) {
                    this.m_ChangeKind = value;
                }
            },
            /**
             * For a renamed file, the path to the file prior to the rename
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CommitChangedFile
             * @function OriginalFilePath
             * @type string
             */
            OriginalFilePath: {
                get: function () {
                    return this.m_OriginalFilePath;
                },
                set: function (value) {
                    this.m_OriginalFilePath = value;
                }
            }
        },
        alias: [
            "ChangeKind", "Codex$ICommitChangedFile$ChangeKind",
            "OriginalFilePath", "Codex$ICommitChangedFile$OriginalFilePath"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.CommitFileLink.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.CommitFileLink.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.CommitChangedFile, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.CommitFileLink.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_ChangeKind = value.Codex$ICommitChangedFile$ChangeKind;
                this.m_OriginalFilePath = value.Codex$ICommitChangedFile$OriginalFilePath;
                Codex.ObjectModel.CommitFileLink.prototype.CopyFrom.call(this, Codex.ObjectModel.CommitFileLink, Bridge.cast((value), Codex.ICommitFileLink));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.RepoFileScopeEntity", {
        inherits: [Codex.ObjectModel.RepoScopeEntity,Codex.IRepoFileScopeEntity],
        fields: {
            m_RepoRelativePath: null
        },
        props: {
            /**
             * The repo relative path to the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.RepoFileScopeEntity
             * @function RepoRelativePath
             * @type string
             */
            RepoRelativePath: {
                get: function () {
                    return this.m_RepoRelativePath;
                },
                set: function (value) {
                    this.m_RepoRelativePath = value;
                }
            }
        },
        alias: ["RepoRelativePath", "Codex$IRepoFileScopeEntity$RepoRelativePath"],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.RepoScopeEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.RepoScopeEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.RepoFileScopeEntity, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.RepoScopeEntity.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_RepoRelativePath = value.Codex$IRepoFileScopeEntity$RepoRelativePath;
                Codex.ObjectModel.RepoScopeEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.RepoScopeEntity, Bridge.cast((value), Codex.IRepoScopeEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    /**
     * The set of files present in the repository at a given commit.
     *
     * @public
     * @class Codex.ObjectModel.CommitFilesSearchModel
     * @augments Codex.ObjectModel.SearchEntity
     * @implements  Codex.ICommitFilesSearchModel
     */
    Bridge.define("Codex.ObjectModel.CommitFilesSearchModel", {
        inherits: [Codex.ObjectModel.SearchEntity,Codex.ICommitFilesSearchModel],
        fields: {
            m_CommitFiles: null,
            m_CommitId: null,
            m_RepositoryName: null
        },
        props: {
            Codex$ICommitFilesSearchModel$CommitFiles: {
                get: function () {
                    return this.CommitFiles;
                }
            },
            CommitFiles: {
                get: function () {
                    return this.m_CommitFiles;
                },
                set: function (value) {
                    this.m_CommitFiles = value;
                }
            },
            /**
             * The unique identifier for this commit/changeset in version control
             (i.e. git commit hash or TFS changeset number)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CommitFilesSearchModel
             * @function CommitId
             * @type string
             */
            CommitId: {
                get: function () {
                    return this.m_CommitId;
                },
                set: function (value) {
                    this.m_CommitId = value;
                }
            },
            /**
             * The name of the repository containing the entity
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CommitFilesSearchModel
             * @function RepositoryName
             * @type string
             */
            RepositoryName: {
                get: function () {
                    return this.m_RepositoryName;
                },
                set: function (value) {
                    this.m_RepositoryName = value;
                }
            }
        },
        alias: [
            "CommitId", "Codex$ICommitScopeEntity$CommitId",
            "RepositoryName", "Codex$IRepoScopeEntity$RepositoryName"
        ],
        ctors: {
            init: function () {
                this.m_CommitFiles = new (System.Collections.Generic.List$1(Codex.ObjectModel.CommitFileLink)).ctor();
            },
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.CommitFilesSearchModel, value);
            },
            $ctor4: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.$ctor1.call(this, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$2(Codex.ObjectModel.CommitFilesSearchModel, value);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$3(Codex.ObjectModel.CommitFilesSearchModel, value);
            }
        },
        methods: {
            CopyFrom$3: function (TTarget, value) {
                this.m_RepositoryName = value.Codex$IRepoScopeEntity$RepositoryName;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom$2: function (TTarget, value) {
                this.m_CommitId = value.Codex$ICommitScopeEntity$CommitId;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom$1: function (TTarget, value) {
                this.m_CommitFiles = new (System.Collections.Generic.List$1(Codex.ObjectModel.CommitFileLink)).$ctor1(System.Linq.Enumerable.from(value.Codex$ICommitFilesSearchModel$CommitFiles).select($asm.$.Codex.ObjectModel.CommitFilesSearchModel.f2));
                Codex.ObjectModel.SearchEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.SearchEntity, Bridge.cast((value), Codex.ISearchEntity));
                this.m_CommitId = Bridge.cast((value), Codex.ICommitScopeEntity).Codex$ICommitScopeEntity$CommitId;
                this.m_RepositoryName = Bridge.cast((value), Codex.IRepoScopeEntity).Codex$IRepoScopeEntity$RepositoryName;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.CommitFilesSearchModel", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.CommitFilesSearchModel, {
        f1: function (_v) {
            return new Codex.ObjectModel.CommitFileLink.ctor().CopyFrom(Codex.ObjectModel.CommitFileLink, _v);
        },
        f2: function (v) {
            return Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ICommitFileLink, Bridge.global.Codex.ObjectModel.CommitFileLink, v, $asm.$.Codex.ObjectModel.CommitFilesSearchModel.f1);
        }
    });

    Bridge.define("Codex.ObjectModel.CommitSearchModel", {
        inherits: [Codex.ObjectModel.SearchEntity,Codex.ICommitSearchModel],
        fields: {
            m_Commit: null
        },
        props: {
            Codex$ICommitSearchModel$Commit: {
                get: function () {
                    return this.Commit;
                }
            },
            Commit: {
                get: function () {
                    return this.m_Commit;
                },
                set: function (value) {
                    this.m_Commit = value;
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.CommitSearchModel, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_Commit = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.Commit, Bridge.global.Codex.ObjectModel.Commit, this.Commit, $asm.$.Codex.ObjectModel.CommitSearchModel.f1);
                ;
                Codex.ObjectModel.SearchEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.SearchEntity, Bridge.cast((value), Codex.ISearchEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.CommitSearchModel", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.CommitSearchModel, {
        f1: function (v) {
            return new Codex.ObjectModel.Commit.ctor().CopyFrom$2(Codex.ObjectModel.Commit, v);
        }
    });

    Bridge.define("Codex.ObjectModel.DefinitionSearchModel", {
        inherits: [Codex.ObjectModel.SearchEntity,Codex.IDefinitionSearchModel],
        fields: {
            m_Definition: null,
            m_Keywords: null
        },
        props: {
            Codex$IDefinitionSearchModel$Definition: {
                get: function () {
                    return this.Definition;
                }
            },
            Definition: {
                get: function () {
                    return this.m_Definition;
                },
                set: function (value) {
                    this.m_Definition = value;
                }
            },
            /**
             * Keywords are additional terms which can be used to find a given symbol.
             NOTE: Keywords can only be used to select from symbols which have
             a primary term match
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.DefinitionSearchModel
             * @function Codex$IDefinitionSearchModel$Keywords
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IDefinitionSearchModel$Keywords: {
                get: function () {
                    return this.Keywords;
                }
            },
            /**
             * Keywords are additional terms which can be used to find a given symbol.
             NOTE: Keywords can only be used to select from symbols which have
             a primary term match
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DefinitionSearchModel
             * @function Keywords
             * @type System.Collections.Generic.List$1
             */
            Keywords: {
                get: function () {
                    return this.m_Keywords;
                },
                set: function (value) {
                    this.m_Keywords = value;
                }
            }
        },
        ctors: {
            init: function () {
                this.m_Keywords = new (System.Collections.Generic.List$1(System.String)).ctor();
            },
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.DefinitionSearchModel, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_Definition = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.DefinitionSymbol, Bridge.global.Codex.ObjectModel.DefinitionSymbol, this.Definition, $asm.$.Codex.ObjectModel.DefinitionSearchModel.f1);
                ;
                this.m_Keywords = new (System.Collections.Generic.List$1(System.String)).$ctor1(value.Codex$IDefinitionSearchModel$Keywords);
                Codex.ObjectModel.SearchEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.SearchEntity, Bridge.cast((value), Codex.ISearchEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.DefinitionSearchModel", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.DefinitionSearchModel, {
        f1: function (v) {
            return new Codex.ObjectModel.DefinitionSymbol.ctor().CopyFrom$2(Codex.ObjectModel.DefinitionSymbol, v);
        }
    });

    Bridge.define("Codex.ObjectModel.DefinitionSpan", {
        inherits: [Codex.ObjectModel.Span,Codex.IDefinitionSpan],
        fields: {
            m_Definition: null,
            m_Parameters: null
        },
        props: {
            /**
             * The definition symbol referred to by the span
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.DefinitionSpan
             * @function Codex$IDefinitionSpan$Definition
             * @type Codex.IDefinitionSymbol
             */
            Codex$IDefinitionSpan$Definition: {
                get: function () {
                    return this.Definition;
                }
            },
            /**
             * The definition symbol referred to by the span
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DefinitionSpan
             * @function Definition
             * @type Codex.ObjectModel.DefinitionSymbol
             */
            Definition: {
                get: function () {
                    return this.m_Definition;
                },
                set: function (value) {
                    this.m_Definition = value;
                }
            },
            /**
             * Gets the definitions for parameters
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.DefinitionSpan
             * @function Codex$IDefinitionSpan$Parameters
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IDefinitionSpan$Parameters: {
                get: function () {
                    return this.Parameters;
                }
            },
            /**
             * Gets the definitions for parameters
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DefinitionSpan
             * @function Parameters
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Parameters: {
                get: function () {
                    return this.m_Parameters;
                },
                set: function (value) {
                    this.m_Parameters = value;
                }
            }
        },
        ctors: {
            init: function () {
                this.m_Parameters = Codex.Utilities.CollectionUtilities.Empty$1(Codex.ObjectModel.ParameterDefinitionSpan).Array;
            },
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.Span.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.Span.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.DefinitionSpan, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.Span.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_Definition = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.DefinitionSymbol, Bridge.global.Codex.ObjectModel.DefinitionSymbol, this.Definition, $asm.$.Codex.ObjectModel.DefinitionSpan.f1);
                ;
                this.m_Parameters = new (System.Collections.Generic.List$1(Codex.ObjectModel.ParameterDefinitionSpan)).$ctor1(System.Linq.Enumerable.from(value.Codex$IDefinitionSpan$Parameters).select($asm.$.Codex.ObjectModel.DefinitionSpan.f3));
                Codex.ObjectModel.Span.prototype.CopyFrom.call(this, Codex.ObjectModel.Span, Bridge.cast((value), Codex.ISpan));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.DefinitionSpan", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.DefinitionSpan, {
        f1: function (v) {
            return new Codex.ObjectModel.DefinitionSymbol.ctor().CopyFrom$2(Codex.ObjectModel.DefinitionSymbol, v);
        },
        f2: function (_v) {
            return new Codex.ObjectModel.ParameterDefinitionSpan.ctor().CopyFrom$2(Codex.ObjectModel.ParameterDefinitionSpan, _v);
        },
        f3: function (v) {
            return Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.IParameterDefinitionSpan, Bridge.global.Codex.ObjectModel.ParameterDefinitionSpan, v, $asm.$.Codex.ObjectModel.DefinitionSpan.f2);
        }
    });

    Bridge.define("Codex.ObjectModel.ReferenceSymbol", {
        inherits: [Codex.ObjectModel.Symbol,Codex.IReferenceSymbol],
        fields: {
            m_ReferenceKind: null,
            m_IsImplicitlyDeclared: false,
            m_ExcludeFromDefaultSearch: false,
            m_ExcludeFromSearch: false
        },
        props: {
            /**
             * The kind of reference. This is used to group references.
             (i.e. for C#(aka .NET) MethodOverride, InterfaceMemberImplementation, InterfaceImplementation, etc.)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferenceSymbol
             * @function ReferenceKind
             * @type string
             */
            ReferenceKind: {
                get: function () {
                    return this.m_ReferenceKind;
                },
                set: function (value) {
                    this.m_ReferenceKind = value;
                }
            },
            /**
             * Indicates the corresponding definition is implicitly declared and therefore this should not be
             used for find all references search
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferenceSymbol
             * @function IsImplicitlyDeclared
             * @type boolean
             */
            IsImplicitlyDeclared: {
                get: function () {
                    return this.m_IsImplicitlyDeclared;
                },
                set: function (value) {
                    this.m_IsImplicitlyDeclared = value;
                }
            },
            /**
             * Indicates if the symbol should be excluded from the definition/find all references search (by default).
             Symbol will only be included if kind is explicitly specified
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferenceSymbol
             * @function ExcludeFromDefaultSearch
             * @type boolean
             */
            ExcludeFromDefaultSearch: {
                get: function () {
                    return this.m_ExcludeFromDefaultSearch;
                },
                set: function (value) {
                    this.m_ExcludeFromDefaultSearch = value;
                }
            },
            /**
             * Indicates if the symbol should NEVER be included in the definition/find all references search.
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferenceSymbol
             * @function ExcludeFromSearch
             * @type boolean
             */
            ExcludeFromSearch: {
                get: function () {
                    return this.m_ExcludeFromSearch;
                },
                set: function (value) {
                    this.m_ExcludeFromSearch = value;
                }
            }
        },
        alias: [
            "ReferenceKind", "Codex$IReferenceSymbol$ReferenceKind",
            "IsImplicitlyDeclared", "Codex$IReferenceSymbol$IsImplicitlyDeclared",
            "ExcludeFromDefaultSearch", "Codex$IReferenceSymbol$ExcludeFromDefaultSearch",
            "ExcludeFromSearch", "Codex$IReferenceSymbol$ExcludeFromSearch"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.Symbol.ctor.call(this);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.Symbol.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.ReferenceSymbol, value);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.Symbol.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_ReferenceKind = value.Codex$IReferenceSymbol$ReferenceKind;
                this.m_IsImplicitlyDeclared = value.Codex$IReferenceSymbol$IsImplicitlyDeclared;
                this.m_ExcludeFromDefaultSearch = value.Codex$IReferenceSymbol$ExcludeFromDefaultSearch;
                this.m_ExcludeFromSearch = value.Codex$IReferenceSymbol$ExcludeFromSearch;
                Codex.ObjectModel.Symbol.prototype.CopyFrom.call(this, Codex.ObjectModel.Symbol, Bridge.cast((value), Codex.ICodeSymbol));
                return Bridge.cast((this), TTarget);
            },
            toString: function () {
                return (this.ReferenceKind || "") + " " + (Codex.ObjectModel.Symbol.prototype.toString.call(this) || "");
            }
        }
    });

    Bridge.define("Codex.ObjectModel.LanguageSearchModel", {
        inherits: [Codex.ObjectModel.SearchEntity,Codex.ILanguageSearchModel],
        fields: {
            m_Language: null
        },
        props: {
            Codex$ILanguageSearchModel$Language: {
                get: function () {
                    return this.Language;
                }
            },
            Language: {
                get: function () {
                    return this.m_Language;
                },
                set: function (value) {
                    this.m_Language = value;
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.LanguageSearchModel, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_Language = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.LanguageInfo, Bridge.global.Codex.ObjectModel.LanguageInfo, this.Language, $asm.$.Codex.ObjectModel.LanguageSearchModel.f1);
                ;
                Codex.ObjectModel.SearchEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.SearchEntity, Bridge.cast((value), Codex.ISearchEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.LanguageSearchModel", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.LanguageSearchModel, {
        f1: function (v) {
            return new Codex.ObjectModel.LanguageInfo.ctor().CopyFrom(Codex.ObjectModel.LanguageInfo, v);
        }
    });

    Bridge.define("Codex.ObjectModel.LineSpan", {
        inherits: [Codex.ObjectModel.Span,Codex.ILineSpan],
        fields: {
            m_LineIndex: null,
            m_LineNumber: null,
            m_LineSpanStart: 0,
            m_LineOffset: 0
        },
        props: {
            /**
             * The 0-based index of the line containing the span
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.LineSpan
             * @function LineIndex
             * @type number
             */
            LineIndex: {
                get: function () {
                    return this.CoerceLineIndex(this.m_LineIndex);
                },
                set: function (value) {
                    this.m_LineIndex = value;
                }
            },
            /**
             * The 1-based line number of the line containing the span
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.LineSpan
             * @function LineNumber
             * @type number
             */
            LineNumber: {
                get: function () {
                    return this.CoerceLineNumber(this.m_LineNumber);
                },
                set: function (value) {
                    this.m_LineNumber = value;
                }
            },
            /**
             * The character position where the span starts in the line text
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.LineSpan
             * @function LineSpanStart
             * @type number
             */
            LineSpanStart: {
                get: function () {
                    return this.m_LineSpanStart;
                },
                set: function (value) {
                    this.m_LineSpanStart = value;
                }
            },
            /**
             * If positive, the offset of the line span from the beginning of the line
             If negative, the offset of the linespan from the end of the next line
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.LineSpan
             * @function LineOffset
             * @type number
             */
            LineOffset: {
                get: function () {
                    return this.m_LineOffset;
                },
                set: function (value) {
                    this.m_LineOffset = value;
                }
            }
        },
        alias: [
            "LineIndex", "Codex$ILineSpan$LineIndex",
            "LineNumber", "Codex$ILineSpan$LineNumber",
            "LineSpanStart", "Codex$ILineSpan$LineSpanStart",
            "LineOffset", "Codex$ILineSpan$LineOffset"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.Span.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.Span.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.LineSpan, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.Span.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_LineIndex = value.Codex$ILineSpan$LineIndex;
                this.m_LineNumber = value.Codex$ILineSpan$LineNumber;
                this.m_LineSpanStart = value.Codex$ILineSpan$LineSpanStart;
                this.m_LineOffset = value.Codex$ILineSpan$LineOffset;
                Codex.ObjectModel.Span.prototype.CopyFrom.call(this, Codex.ObjectModel.Span, Bridge.cast((value), Codex.ISpan));
                return Bridge.cast((this), TTarget);
            },
            CoerceLineIndex: function (value) {
                if (value == null || (System.Nullable.lte(value, 0) && this.m_LineNumber != null)) {
                    if (this.m_LineNumber != null) {
                        // Line number is 1-based whereas this value is 0-based
                        return ((System.Nullable.getValue(this.m_LineNumber) - 1) | 0);
                    } else {
                        return 0;
                    }
                }

                return System.Nullable.getValue(value);
            },
            CoerceLineNumber: function (value) {
                if (value == null || (System.Nullable.eq(value, 1) && this.m_LineIndex != null)) {
                    if (this.m_LineIndex != null) {
                        // Line index is 0-based whereas this value is 1-based
                        return ((System.Nullable.getValue(this.m_LineIndex) + 1) | 0);
                    } else {
                        return 1;
                    }
                }

                return System.Nullable.getValue(value);
            },
            OnDeserializedCore: function () {
                Codex.ObjectModel.Span.prototype.OnDeserializedCore.call(this);
            },
            OnSerializingCore: function () {
                Codex.ObjectModel.Span.prototype.OnSerializingCore.call(this);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.ProjectReferenceSearchModel", {
        inherits: [Codex.ObjectModel.SearchEntity,Codex.IProjectReferenceSearchModel],
        fields: {
            m_ProjectReference: null,
            m_ProjectId: null,
            m_RepositoryName: null
        },
        props: {
            Codex$IProjectReferenceSearchModel$ProjectReference: {
                get: function () {
                    return this.ProjectReference;
                }
            },
            ProjectReference: {
                get: function () {
                    return this.m_ProjectReference;
                },
                set: function (value) {
                    this.m_ProjectReference = value;
                }
            },
            /**
             * The identifier of the project containing the entity
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ProjectReferenceSearchModel
             * @function ProjectId
             * @type string
             */
            ProjectId: {
                get: function () {
                    return this.m_ProjectId;
                },
                set: function (value) {
                    this.m_ProjectId = value;
                }
            },
            /**
             * The name of the repository containing the entity
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ProjectReferenceSearchModel
             * @function RepositoryName
             * @type string
             */
            RepositoryName: {
                get: function () {
                    return this.m_RepositoryName;
                },
                set: function (value) {
                    this.m_RepositoryName = value;
                }
            }
        },
        alias: [
            "ProjectId", "Codex$IProjectScopeEntity$ProjectId",
            "RepositoryName", "Codex$IRepoScopeEntity$RepositoryName"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.ProjectReferenceSearchModel, value);
            },
            $ctor4: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.$ctor1.call(this, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$2(Codex.ObjectModel.ProjectReferenceSearchModel, value);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$3(Codex.ObjectModel.ProjectReferenceSearchModel, value);
            }
        },
        methods: {
            CopyFrom$3: function (TTarget, value) {
                this.m_RepositoryName = value.Codex$IRepoScopeEntity$RepositoryName;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom$2: function (TTarget, value) {
                this.m_ProjectId = value.Codex$IProjectScopeEntity$ProjectId;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom$1: function (TTarget, value) {
                this.m_ProjectReference = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.ReferencedProject, Bridge.global.Codex.ObjectModel.ReferencedProject, this.ProjectReference, $asm.$.Codex.ObjectModel.ProjectReferenceSearchModel.f1);
                ;
                Codex.ObjectModel.SearchEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.SearchEntity, Bridge.cast((value), Codex.ISearchEntity));
                this.m_ProjectId = Bridge.cast((value), Codex.IProjectScopeEntity).Codex$IProjectScopeEntity$ProjectId;
                this.m_RepositoryName = Bridge.cast((value), Codex.IRepoScopeEntity).Codex$IRepoScopeEntity$RepositoryName;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.ProjectReferenceSearchModel", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.ProjectReferenceSearchModel, {
        f1: function (v) {
            return new Codex.ObjectModel.ReferencedProject.ctor().CopyFrom(Codex.ObjectModel.ReferencedProject, v);
        }
    });

    Bridge.define("Codex.ObjectModel.ProjectSearchModel", {
        inherits: [Codex.ObjectModel.SearchEntity,Codex.IProjectSearchModel],
        fields: {
            m_Project: null
        },
        props: {
            Codex$IProjectSearchModel$Project: {
                get: function () {
                    return this.Project;
                }
            },
            Project: {
                get: function () {
                    return this.m_Project;
                },
                set: function (value) {
                    this.m_Project = value;
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.ProjectSearchModel, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_Project = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.AnalyzedProject, Bridge.global.Codex.ObjectModel.AnalyzedProject, this.Project, $asm.$.Codex.ObjectModel.ProjectSearchModel.f1);
                ;
                Codex.ObjectModel.SearchEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.SearchEntity, Bridge.cast((value), Codex.ISearchEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.ProjectSearchModel", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.ProjectSearchModel, {
        f1: function (v) {
            return new Codex.ObjectModel.AnalyzedProject.ctor().CopyFrom$2(Codex.ObjectModel.AnalyzedProject, v);
        }
    });

    Bridge.define("Codex.ObjectModel.PropertySearchModel", {
        inherits: [Codex.ObjectModel.SearchEntity,Codex.IPropertySearchModel],
        fields: {
            m_Key: null,
            m_Value: null,
            m_OwnerId: null
        },
        props: {
            /**
             * The key of the property
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.PropertySearchModel
             * @function Key
             * @type string
             */
            Key: {
                get: function () {
                    return this.m_Key;
                },
                set: function (value) {
                    this.m_Key = value;
                }
            },
            /**
             * The value of the property
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.PropertySearchModel
             * @function Value
             * @type string
             */
            Value: {
                get: function () {
                    return this.m_Value;
                },
                set: function (value) {
                    this.m_Value = value;
                }
            },
            /**
             * The identifier of the object owning this property
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.PropertySearchModel
             * @function OwnerId
             * @type string
             */
            OwnerId: {
                get: function () {
                    return this.m_OwnerId;
                },
                set: function (value) {
                    this.m_OwnerId = value;
                }
            }
        },
        alias: [
            "Key", "Codex$IPropertySearchModel$Key",
            "Value", "Codex$IPropertySearchModel$Value",
            "OwnerId", "Codex$IPropertySearchModel$OwnerId"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.PropertySearchModel, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_Key = value.Codex$IPropertySearchModel$Key;
                this.m_Value = value.Codex$IPropertySearchModel$Value;
                this.m_OwnerId = value.Codex$IPropertySearchModel$OwnerId;
                Codex.ObjectModel.SearchEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.SearchEntity, Bridge.cast((value), Codex.ISearchEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    /**
     * In order to compute a stable integral id for each entity. This type is used to store into a 'follow' index which
     stores entities of this type using the {@link } of the corresponding search entity. Then the
     sequence number assigned by ElasticSearch is used as the shard stable id ({@link })
     for the entity. This approach is used in order to ensure that the stable id appears as an explicit field in the document rather
     which allows configuration of how the field is indexed (not true for sequence number field without code changes to ES).
     *
     * @public
     * @class Codex.ObjectModel.RegisteredEntity
     * @augments Codex.ObjectModel.SearchEntity
     * @implements  Codex.IRegisteredEntity
     */
    Bridge.define("Codex.ObjectModel.RegisteredEntity", {
        inherits: [Codex.ObjectModel.SearchEntity,Codex.IRegisteredEntity],
        fields: {
            m_DateAdded: null
        },
        props: {
            /**
             * The date in which the entity was registered (i.e. added to the store)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.RegisteredEntity
             * @function DateAdded
             * @type System.DateTime
             */
            DateAdded: {
                get: function () {
                    return this.m_DateAdded;
                },
                set: function (value) {
                    this.m_DateAdded = value;
                }
            }
        },
        alias: ["DateAdded", "Codex$IRegisteredEntity$DateAdded"],
        ctors: {
            init: function () {
                this.m_DateAdded = System.DateTime.getDefaultValue();
            },
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.RegisteredEntity, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_DateAdded = value.Codex$IRegisteredEntity$DateAdded;
                Codex.ObjectModel.SearchEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.SearchEntity, Bridge.cast((value), Codex.ISearchEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.RepositorySearchModel", {
        inherits: [Codex.ObjectModel.SearchEntity,Codex.IRepositorySearchModel],
        fields: {
            m_Repository: null
        },
        props: {
            Codex$IRepositorySearchModel$Repository: {
                get: function () {
                    return this.Repository;
                }
            },
            Repository: {
                get: function () {
                    return this.m_Repository;
                },
                set: function (value) {
                    this.m_Repository = value;
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.RepositorySearchModel, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_Repository = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.Repository, Bridge.global.Codex.ObjectModel.Repository, this.Repository, $asm.$.Codex.ObjectModel.RepositorySearchModel.f1);
                ;
                Codex.ObjectModel.SearchEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.SearchEntity, Bridge.cast((value), Codex.ISearchEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.RepositorySearchModel", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.RepositorySearchModel, {
        f1: function (v) {
            return new Codex.ObjectModel.Repository.ctor().CopyFrom(Codex.ObjectModel.Repository, v);
        }
    });

    Bridge.define("Codex.ObjectModel.SourceSearchModelBase", {
        inherits: [Codex.ObjectModel.SearchEntity,Codex.ISourceSearchModelBase],
        fields: {
            m_SourceControlInfo: null
        },
        props: {
            /**
             * Information about the source file from source control provider (may be null)
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.SourceSearchModelBase
             * @function Codex$ISourceSearchModelBase$SourceControlInfo
             * @type Codex.ISourceControlFileInfo
             */
            Codex$ISourceSearchModelBase$SourceControlInfo: {
                get: function () {
                    return this.SourceControlInfo;
                }
            },
            /**
             * Information about the source file from source control provider (may be null)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SourceSearchModelBase
             * @function SourceControlInfo
             * @type Codex.ObjectModel.SourceControlFileInfo
             */
            SourceControlInfo: {
                get: function () {
                    return this.m_SourceControlInfo;
                },
                set: function (value) {
                    this.m_SourceControlInfo = value;
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.SourceSearchModelBase, value);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_SourceControlInfo = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.SourceControlFileInfo, Bridge.global.Codex.ObjectModel.SourceControlFileInfo, this.SourceControlInfo, $asm.$.Codex.ObjectModel.SourceSearchModelBase.f1);
                ;
                Codex.ObjectModel.SearchEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.SearchEntity, Bridge.cast((value), Codex.ISearchEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.SourceSearchModelBase", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.SourceSearchModelBase, {
        f1: function (v) {
            return new Codex.ObjectModel.SourceControlFileInfo.ctor().CopyFrom(Codex.ObjectModel.SourceControlFileInfo, v);
        }
    });

    /**
     * Defines a stored filter which matches entities in a particular index shard in a stable manner
     *
     * @public
     * @class Codex.ObjectModel.StoredFilter
     * @augments Codex.ObjectModel.SearchEntity
     * @implements  Codex.IStoredFilter
     */
    Bridge.define("Codex.ObjectModel.StoredFilter", {
        inherits: [Codex.ObjectModel.SearchEntity,Codex.IStoredFilter],
        fields: {
            m_DateUpdated: null,
            m_IndexName: null,
            m_Shard: 0,
            m_StableIds: null,
            m_BaseUids: null,
            m_UnionFilters: null,
            m_Filter: null,
            m_FilterHash: null,
            m_FilterCount: 0
        },
        props: {
            /**
             * The time of the last update to the stored filter
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.StoredFilter
             * @function DateUpdated
             * @type System.DateTime
             */
            DateUpdated: {
                get: function () {
                    return this.m_DateUpdated;
                },
                set: function (value) {
                    this.m_DateUpdated = value;
                }
            },
            /**
             * The name of the index to which the stored filter applies
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.StoredFilter
             * @function IndexName
             * @type string
             */
            IndexName: {
                get: function () {
                    return this.m_IndexName;
                },
                set: function (value) {
                    this.m_IndexName = value;
                }
            },
            /**
             * The shard to which the stored filter applies
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.StoredFilter
             * @function Shard
             * @type number
             */
            Shard: {
                get: function () {
                    return this.m_Shard;
                },
                set: function (value) {
                    this.m_Shard = value;
                }
            },
            /**
             * List of stable ids to include in the stored filter.
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.StoredFilter
             * @function Codex$IStoredFilter$StableIds
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IStoredFilter$StableIds: {
                get: function () {
                    return this.StableIds;
                }
            },
            /**
             * List of stable ids to include in the stored filter.
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.StoredFilter
             * @function StableIds
             * @type System.Collections.Generic.List$1
             */
            StableIds: {
                get: function () {
                    return this.m_StableIds;
                },
                set: function (value) {
                    this.m_StableIds = value;
                }
            },
            /**
             * List of uids to for stored filters which will be unioned with the given stored filter
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.StoredFilter
             * @function Codex$IStoredFilter$BaseUids
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IStoredFilter$BaseUids: {
                get: function () {
                    return this.BaseUids;
                }
            },
            /**
             * List of uids to for stored filters which will be unioned with the given stored filter
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.StoredFilter
             * @function BaseUids
             * @type System.Collections.Generic.List$1
             */
            BaseUids: {
                get: function () {
                    return this.m_BaseUids;
                },
                set: function (value) {
                    this.m_BaseUids = value;
                }
            },
            /**
             * List of stored filters which will be unioned with the given stored filter
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.StoredFilter
             * @function Codex$IStoredFilter$UnionFilters
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IStoredFilter$UnionFilters: {
                get: function () {
                    return this.UnionFilters;
                }
            },
            /**
             * List of stored filters which will be unioned with the given stored filter
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.StoredFilter
             * @function UnionFilters
             * @type System.Collections.Generic.List$1
             */
            UnionFilters: {
                get: function () {
                    return this.m_UnionFilters;
                },
                set: function (value) {
                    this.m_UnionFilters = value;
                }
            },
            /**
             * The stored filter bit set which matches the stored filter documents
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.StoredFilter
             * @function Filter
             * @type Array.<number>
             */
            Filter: {
                get: function () {
                    return this.m_Filter;
                },
                set: function (value) {
                    this.m_Filter = value;
                }
            },
            /**
             * The hash of {@link }
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.StoredFilter
             * @function FilterHash
             * @type string
             */
            FilterHash: {
                get: function () {
                    return this.m_FilterHash;
                },
                set: function (value) {
                    this.m_FilterHash = value;
                }
            },
            /**
             * The count of elements matched by {@link }
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.StoredFilter
             * @function FilterCount
             * @type number
             */
            FilterCount: {
                get: function () {
                    return this.m_FilterCount;
                },
                set: function (value) {
                    this.m_FilterCount = value;
                }
            }
        },
        alias: [
            "DateUpdated", "Codex$IStoredFilter$DateUpdated",
            "IndexName", "Codex$IStoredFilter$IndexName",
            "Shard", "Codex$IStoredFilter$Shard",
            "Filter", "Codex$IStoredFilter$Filter",
            "FilterHash", "Codex$IStoredFilter$FilterHash",
            "FilterCount", "Codex$IStoredFilter$FilterCount"
        ],
        ctors: {
            init: function () {
                this.m_DateUpdated = System.DateTime.getDefaultValue();
                this.m_StableIds = new (System.Collections.Generic.List$1(System.Int64)).ctor();
                this.m_BaseUids = new (System.Collections.Generic.List$1(System.String)).ctor();
                this.m_UnionFilters = new (System.Collections.Generic.List$1(System.Array.type(System.Byte))).ctor();
            },
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.StoredFilter, value);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_DateUpdated = value.Codex$IStoredFilter$DateUpdated;
                this.m_IndexName = value.Codex$IStoredFilter$IndexName;
                this.m_Shard = value.Codex$IStoredFilter$Shard;
                this.m_StableIds = new (System.Collections.Generic.List$1(System.Int64)).$ctor1(value.Codex$IStoredFilter$StableIds);
                this.m_BaseUids = new (System.Collections.Generic.List$1(System.String)).$ctor1(value.Codex$IStoredFilter$BaseUids);
                this.m_UnionFilters = new (System.Collections.Generic.List$1(System.Array.type(System.Byte))).$ctor1(value.Codex$IStoredFilter$UnionFilters);
                this.m_Filter = value.Codex$IStoredFilter$Filter;
                this.m_FilterHash = value.Codex$IStoredFilter$FilterHash;
                this.m_FilterCount = value.Codex$IStoredFilter$FilterCount;
                Codex.ObjectModel.SearchEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.SearchEntity, Bridge.cast((value), Codex.ISearchEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.Sdk.Search.ITextLineSpanResult", {
        inherits: [Codex.IProjectFileScopeEntity],
        $kind: "interface"
    });

    Bridge.define("Codex.ObjectModel.TextSourceSearchModel", {
        inherits: [Codex.ObjectModel.SearchEntity,Codex.ITextSourceSearchModel],
        fields: {
            m_File: null,
            m_SourceControlInfo: null
        },
        props: {
            Codex$ITextSourceSearchModel$File: {
                get: function () {
                    return this.File;
                }
            },
            File: {
                get: function () {
                    return this.m_File;
                },
                set: function (value) {
                    this.m_File = value;
                }
            },
            /**
             * Information about the source file from source control provider (may be null)
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.TextSourceSearchModel
             * @function Codex$ISourceSearchModelBase$SourceControlInfo
             * @type Codex.ISourceControlFileInfo
             */
            Codex$ISourceSearchModelBase$SourceControlInfo: {
                get: function () {
                    return this.SourceControlInfo;
                }
            },
            /**
             * Information about the source file from source control provider (may be null)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.TextSourceSearchModel
             * @function SourceControlInfo
             * @type Codex.ObjectModel.SourceControlFileInfo
             */
            SourceControlInfo: {
                get: function () {
                    return this.m_SourceControlInfo;
                },
                set: function (value) {
                    this.m_SourceControlInfo = value;
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$2(Codex.ObjectModel.TextSourceSearchModel, value);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.$ctor1.call(this, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.TextSourceSearchModel, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_SourceControlInfo = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.SourceControlFileInfo, Bridge.global.Codex.ObjectModel.SourceControlFileInfo, this.SourceControlInfo, $asm.$.Codex.ObjectModel.TextSourceSearchModel.f1);
                ;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom$2: function (TTarget, value) {
                this.m_File = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.SourceFile, Bridge.global.Codex.ObjectModel.SourceFile, this.File, $asm.$.Codex.ObjectModel.TextSourceSearchModel.f2);
                ;
                Codex.ObjectModel.SearchEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.SearchEntity, Bridge.cast((value), Codex.ISearchEntity));
                this.m_SourceControlInfo = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.SourceControlFileInfo, Bridge.global.Codex.ObjectModel.SourceControlFileInfo, this.SourceControlInfo, $asm.$.Codex.ObjectModel.TextSourceSearchModel.f1);
                ;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.TextSourceSearchModel", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.TextSourceSearchModel, {
        f1: function (v) {
            return new Codex.ObjectModel.SourceControlFileInfo.ctor().CopyFrom(Codex.ObjectModel.SourceControlFileInfo, v);
        },
        f2: function (v) {
            return new Codex.ObjectModel.SourceFile.ctor().CopyFrom(Codex.ObjectModel.SourceFile, v);
        }
    });

    /**
     * Documentation for typed parameter
     *
     * @public
     * @class Codex.ObjectModel.TypedParameterDocumentation
     * @augments Codex.ObjectModel.ParameterDocumentation
     * @implements  Codex.ITypedParameterDocumentation
     */
    Bridge.define("Codex.ObjectModel.TypedParameterDocumentation", {
        inherits: [Codex.ObjectModel.ParameterDocumentation,Codex.ITypedParameterDocumentation],
        fields: {
            m_Type: null
        },
        props: {
            /**
             * The type of the parameter
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.TypedParameterDocumentation
             * @function Codex$ITypedParameterDocumentation$Type
             * @type Codex.IDocumentationReferenceSymbol
             */
            Codex$ITypedParameterDocumentation$Type: {
                get: function () {
                    return this.Type;
                }
            },
            /**
             * The type of the parameter
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.TypedParameterDocumentation
             * @function Type
             * @type Codex.ObjectModel.DocumentationReferenceSymbol
             */
            Type: {
                get: function () {
                    return this.m_Type;
                },
                set: function (value) {
                    this.m_Type = value;
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.ParameterDocumentation.ctor.call(this);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.ParameterDocumentation.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.TypedParameterDocumentation, value);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.ParameterDocumentation.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_Type = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.DocumentationReferenceSymbol, Bridge.global.Codex.ObjectModel.DocumentationReferenceSymbol, this.Type, $asm.$.Codex.ObjectModel.TypedParameterDocumentation.f1);
                ;
                Codex.ObjectModel.ParameterDocumentation.prototype.CopyFrom.call(this, Codex.ObjectModel.ParameterDocumentation, Bridge.cast((value), Codex.IParameterDocumentation));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.TypedParameterDocumentation", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.TypedParameterDocumentation, {
        f1: function (v) {
            return new Codex.ObjectModel.DocumentationReferenceSymbol.ctor().CopyFrom$2(Codex.ObjectModel.DocumentationReferenceSymbol, v);
        }
    });

    Bridge.define("Codex.Sdk.Search.FindAllReferencesArguments", {
        inherits: [Codex.Sdk.Search.FindSymbolArgumentsBase]
    });

    Bridge.define("Codex.Sdk.Search.FindDefinitionArguments", {
        inherits: [Codex.Sdk.Search.FindSymbolArgumentsBase]
    });

    Bridge.define("Codex.Sdk.Search.FindDefinitionLocationArguments", {
        inherits: [Codex.Sdk.Search.FindSymbolArgumentsBase]
    });

    /**
     * Represents a source file with associated semantic bindings
     *
     * @abstract
     * @public
     * @class Codex.IBoundSourceFile
     * @implements  Codex.IBoundSourceInfo
     */
    Bridge.define("Codex.IBoundSourceFile", {
        inherits: [Codex.IBoundSourceInfo],
        $kind: "interface"
    });

    /**
     * A specialized reference span referring to a parameter to a method/property
     *
     * @abstract
     * @public
     * @class Codex.IParameterReferenceSpan
     * @implements  Codex.ISymbolSpan
     */
    Bridge.define("Codex.IParameterReferenceSpan", {
        inherits: [Codex.ISymbolSpan],
        $kind: "interface"
    });

    Bridge.define("Codex.IReferenceSpan", {
        inherits: [Codex.ISymbolSpan],
        $kind: "interface"
    });

    Bridge.define("Codex.ObjectModel.AnalyzedProject", {
        inherits: [Codex.ObjectModel.ProjectScopeEntity,Codex.IProject],
        fields: {
            m_ProjectKind: null,
            m_Files: null,
            m_ProjectReferences: null
        },
        props: {
            /**
             * The project kind (see {@link })
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.AnalyzedProject
             * @function ProjectKind
             * @type string
             */
            ProjectKind: {
                get: function () {
                    return this.m_ProjectKind;
                },
                set: function (value) {
                    this.m_ProjectKind = value;
                }
            },
            /**
             * References to files in the project
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.AnalyzedProject
             * @function Codex$IProject$Files
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IProject$Files: {
                get: function () {
                    return this.Files;
                }
            },
            /**
             * References to files in the project
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.AnalyzedProject
             * @function Files
             * @type System.Collections.Generic.List$1
             */
            Files: {
                get: function () {
                    return this.m_Files;
                },
                set: function (value) {
                    this.m_Files = value;
                }
            },
            /**
             * Descriptions of referenced projects and used definitions from the projects
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.AnalyzedProject
             * @function Codex$IProject$ProjectReferences
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IProject$ProjectReferences: {
                get: function () {
                    return this.ProjectReferences;
                }
            },
            /**
             * Descriptions of referenced projects and used definitions from the projects
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.AnalyzedProject
             * @function ProjectReferences
             * @type System.Collections.Generic.List$1
             */
            ProjectReferences: {
                get: function () {
                    return this.m_ProjectReferences;
                },
                set: function (value) {
                    this.m_ProjectReferences = value;
                }
            }
        },
        alias: ["ProjectKind", "Codex$IProject$ProjectKind"],
        ctors: {
            init: function () {
                this.m_Files = new (System.Collections.Generic.List$1(Codex.ObjectModel.ProjectFileLink)).ctor();
                this.m_ProjectReferences = new (System.Collections.Generic.List$1(Codex.ObjectModel.ReferencedProject)).ctor();
            },
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.ProjectScopeEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.ProjectScopeEntity.ctor.call(this);
                this.CopyFrom$2(Codex.ObjectModel.AnalyzedProject, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.ProjectScopeEntity.$ctor1.call(this, value);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.ObjectModel.ProjectScopeEntity.$ctor2.call(this, value);
            }
        },
        methods: {
            CopyFrom$2: function (TTarget, value) {
                this.m_ProjectKind = value.Codex$IProject$ProjectKind;
                this.m_Files = new (System.Collections.Generic.List$1(Codex.ObjectModel.ProjectFileLink)).$ctor1(System.Linq.Enumerable.from(value.Codex$IProject$Files).select($asm.$.Codex.ObjectModel.AnalyzedProject.f2));
                this.m_ProjectReferences = new (System.Collections.Generic.List$1(Codex.ObjectModel.ReferencedProject)).$ctor1(System.Linq.Enumerable.from(value.Codex$IProject$ProjectReferences).select($asm.$.Codex.ObjectModel.AnalyzedProject.f4));
                Codex.ObjectModel.ProjectScopeEntity.prototype.CopyFrom$1.call(this, Codex.ObjectModel.ProjectScopeEntity, Bridge.cast((value), Codex.IProjectScopeEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.AnalyzedProject", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.AnalyzedProject, {
        f1: function (_v) {
            return new Codex.ObjectModel.ProjectFileLink.ctor().CopyFrom$4(Codex.ObjectModel.ProjectFileLink, _v);
        },
        f2: function (v) {
            return Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.IProjectFileLink, Bridge.global.Codex.ObjectModel.ProjectFileLink, v, $asm.$.Codex.ObjectModel.AnalyzedProject.f1);
        },
        f3: function (_v) {
            return new Codex.ObjectModel.ReferencedProject.ctor().CopyFrom(Codex.ObjectModel.ReferencedProject, _v);
        },
        f4: function (v) {
            return Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.IReferencedProject, Bridge.global.Codex.ObjectModel.ReferencedProject, v, $asm.$.Codex.ObjectModel.AnalyzedProject.f3);
        }
    });

    Bridge.define("Codex.ObjectModel.BoundSourceInfo", {
        inherits: [Codex.ObjectModel.ProjectFileScopeEntity,Codex.IBoundSourceInfo],
        fields: {
            m_ReferenceCount: null,
            m_DefinitionCount: null,
            m_Language: null,
            m_References: null,
            m_Definitions: null,
            m_Classifications: null,
            m_OutliningRegions: null,
            m_ExcludeFromSearch: false
        },
        props: {
            /**
             * The number of references in the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.BoundSourceInfo
             * @function ReferenceCount
             * @type number
             */
            ReferenceCount: {
                get: function () {
                    return this.CoerceReferenceCount(this.m_ReferenceCount);
                },
                set: function (value) {
                    this.m_ReferenceCount = value;
                }
            },
            /**
             * The number of definitions in the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.BoundSourceInfo
             * @function DefinitionCount
             * @type number
             */
            DefinitionCount: {
                get: function () {
                    return this.CoerceDefinitionCount(this.m_DefinitionCount);
                },
                set: function (value) {
                    this.m_DefinitionCount = value;
                }
            },
            /**
             * The language of the file
             TODO: Remove
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.BoundSourceInfo
             * @function Language
             * @type string
             */
            Language: {
                get: function () {
                    return this.m_Language;
                },
                set: function (value) {
                    this.m_Language = value;
                }
            },
            /**
             * References for the document. Sorted. May overlap.
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.BoundSourceInfo
             * @function Codex$IBoundSourceInfo$References
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IBoundSourceInfo$References: {
                get: function () {
                    return this.References;
                }
            },
            /**
             * References for the document. Sorted. May overlap.
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.BoundSourceInfo
             * @function References
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            References: {
                get: function () {
                    return this.m_References;
                },
                set: function (value) {
                    this.m_References = value;
                }
            },
            /**
             * Definitions for the document. Sorted. No overlap?
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.BoundSourceInfo
             * @function Codex$IBoundSourceInfo$Definitions
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IBoundSourceInfo$Definitions: {
                get: function () {
                    return this.Definitions;
                }
            },
            /**
             * Definitions for the document. Sorted. No overlap?
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.BoundSourceInfo
             * @function Definitions
             * @type System.Collections.Generic.List$1
             */
            Definitions: {
                get: function () {
                    return this.m_Definitions;
                },
                set: function (value) {
                    this.m_Definitions = value;
                }
            },
            /**
             * Classifications for the document. Sorted by start index. No overlap.
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.BoundSourceInfo
             * @function Codex$IBoundSourceInfo$Classifications
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IBoundSourceInfo$Classifications: {
                get: function () {
                    return this.Classifications;
                }
            },
            /**
             * Classifications for the document. Sorted by start index. No overlap.
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.BoundSourceInfo
             * @function Classifications
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Classifications: {
                get: function () {
                    return this.m_Classifications;
                },
                set: function (value) {
                    this.m_Classifications = value;
                }
            },
            /**
             * Outlining regions for the document. May overlap.
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.BoundSourceInfo
             * @function Codex$IBoundSourceInfo$OutliningRegions
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IBoundSourceInfo$OutliningRegions: {
                get: function () {
                    return this.OutliningRegions;
                }
            },
            /**
             * Outlining regions for the document. May overlap.
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.BoundSourceInfo
             * @function OutliningRegions
             * @type System.Collections.Generic.List$1
             */
            OutliningRegions: {
                get: function () {
                    return this.m_OutliningRegions;
                },
                set: function (value) {
                    this.m_OutliningRegions = value;
                }
            },
            /**
             * Indicates that the file should be excluded from text search
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.BoundSourceInfo
             * @function ExcludeFromSearch
             * @type boolean
             */
            ExcludeFromSearch: {
                get: function () {
                    return this.m_ExcludeFromSearch;
                },
                set: function (value) {
                    this.m_ExcludeFromSearch = value;
                }
            }
        },
        alias: [
            "ReferenceCount", "Codex$IBoundSourceInfo$ReferenceCount",
            "DefinitionCount", "Codex$IBoundSourceInfo$DefinitionCount",
            "Language", "Codex$IBoundSourceInfo$Language",
            "ExcludeFromSearch", "Codex$IBoundSourceInfo$ExcludeFromSearch"
        ],
        ctors: {
            init: function () {
                this.m_References = Codex.Utilities.CollectionUtilities.Empty$1(Codex.ObjectModel.ReferenceSpan).Array;
                this.m_Definitions = new (System.Collections.Generic.List$1(Codex.ObjectModel.DefinitionSpan)).ctor();
                this.m_Classifications = Codex.Utilities.CollectionUtilities.Empty$1(Codex.ObjectModel.ClassificationSpan).Array;
                this.m_OutliningRegions = new (System.Collections.Generic.List$1(Codex.ObjectModel.OutliningRegion)).ctor();
            },
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.ProjectFileScopeEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.ProjectFileScopeEntity.ctor.call(this);
                this.CopyFrom$4(Codex.ObjectModel.BoundSourceInfo, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.ProjectFileScopeEntity.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$4: function (TTarget, value) {
                this.m_ReferenceCount = value.Codex$IBoundSourceInfo$ReferenceCount;
                this.m_DefinitionCount = value.Codex$IBoundSourceInfo$DefinitionCount;
                this.m_Language = value.Codex$IBoundSourceInfo$Language;
                this.m_References = new (System.Collections.Generic.List$1(Codex.ObjectModel.ReferenceSpan)).$ctor1(System.Linq.Enumerable.from(value.Codex$IBoundSourceInfo$References).select($asm.$.Codex.ObjectModel.BoundSourceInfo.f2));
                this.m_Definitions = new (System.Collections.Generic.List$1(Codex.ObjectModel.DefinitionSpan)).$ctor1(System.Linq.Enumerable.from(value.Codex$IBoundSourceInfo$Definitions).select($asm.$.Codex.ObjectModel.BoundSourceInfo.f4));
                this.m_Classifications = new (System.Collections.Generic.List$1(Codex.ObjectModel.ClassificationSpan)).$ctor1(System.Linq.Enumerable.from(value.Codex$IBoundSourceInfo$Classifications).select($asm.$.Codex.ObjectModel.BoundSourceInfo.f6));
                this.m_OutliningRegions = new (System.Collections.Generic.List$1(Codex.ObjectModel.OutliningRegion)).$ctor1(System.Linq.Enumerable.from(value.Codex$IBoundSourceInfo$OutliningRegions).select($asm.$.Codex.ObjectModel.BoundSourceInfo.f8));
                this.m_ExcludeFromSearch = value.Codex$IBoundSourceInfo$ExcludeFromSearch;
                Codex.ObjectModel.ProjectFileScopeEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.ProjectFileScopeEntity, Bridge.cast((value), Codex.IProjectFileScopeEntity));
                return Bridge.cast((this), TTarget);
            },
            CoerceReferenceCount: function (value) {
                var $t;
                return ($t = value, $t != null ? $t : System.Array.getCount(this.References, Codex.ObjectModel.ReferenceSpan));
            },
            CoerceDefinitionCount: function (value) {
                var $t;
                return ($t = value, $t != null ? $t : this.Definitions.Count);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.BoundSourceInfo", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.BoundSourceInfo, {
        f1: function (_v) {
            return new Codex.ObjectModel.ReferenceSpan.ctor().CopyFrom$4(Codex.ObjectModel.ReferenceSpan, _v);
        },
        f2: function (v) {
            return Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.IReferenceSpan, Bridge.global.Codex.ObjectModel.ReferenceSpan, v, $asm.$.Codex.ObjectModel.BoundSourceInfo.f1);
        },
        f3: function (_v) {
            return new Codex.ObjectModel.DefinitionSpan.ctor().CopyFrom$1(Codex.ObjectModel.DefinitionSpan, _v);
        },
        f4: function (v) {
            return Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.IDefinitionSpan, Bridge.global.Codex.ObjectModel.DefinitionSpan, v, $asm.$.Codex.ObjectModel.BoundSourceInfo.f3);
        },
        f5: function (_v) {
            return new Codex.ObjectModel.ClassificationSpan.ctor().CopyFrom$1(Codex.ObjectModel.ClassificationSpan, _v);
        },
        f6: function (v) {
            return Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.IClassificationSpan, Bridge.global.Codex.ObjectModel.ClassificationSpan, v, $asm.$.Codex.ObjectModel.BoundSourceInfo.f5);
        },
        f7: function (_v) {
            return new Codex.ObjectModel.OutliningRegion.ctor().CopyFrom(Codex.ObjectModel.OutliningRegion, _v);
        },
        f8: function (v) {
            return Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.IOutliningRegion, Bridge.global.Codex.ObjectModel.OutliningRegion, v, $asm.$.Codex.ObjectModel.BoundSourceInfo.f7);
        }
    });

    /**
     * Describes a commit in version control
     *
     * @public
     * @class Codex.ObjectModel.Commit
     * @augments Codex.ObjectModel.CommitScopeEntity
     * @implements  Codex.ICommit
     */
    Bridge.define("Codex.ObjectModel.Commit", {
        inherits: [Codex.ObjectModel.CommitScopeEntity,Codex.ICommit],
        fields: {
            m_Description: null,
            m_DateUploaded: null,
            m_DateCommitted: null,
            m_ParentCommitIds: null,
            m_ChangedFiles: null
        },
        props: {
            /**
             * The commit description describing the changes
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Commit
             * @function Description
             * @type string
             */
            Description: {
                get: function () {
                    return this.m_Description;
                },
                set: function (value) {
                    this.m_Description = value;
                }
            },
            /**
             * The date the commit was stored to the index
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Commit
             * @function DateUploaded
             * @type System.DateTime
             */
            DateUploaded: {
                get: function () {
                    return this.m_DateUploaded;
                },
                set: function (value) {
                    this.m_DateUploaded = value;
                }
            },
            /**
             * The date of the commit
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Commit
             * @function DateCommitted
             * @type System.DateTime
             */
            DateCommitted: {
                get: function () {
                    return this.m_DateCommitted;
                },
                set: function (value) {
                    this.m_DateCommitted = value;
                }
            },
            /**
             * The {@link } of the parent commits
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.Commit
             * @function Codex$ICommit$ParentCommitIds
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$ICommit$ParentCommitIds: {
                get: function () {
                    return this.ParentCommitIds;
                }
            },
            /**
             * The {@link } of the parent commits
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Commit
             * @function ParentCommitIds
             * @type System.Collections.Generic.List$1
             */
            ParentCommitIds: {
                get: function () {
                    return this.m_ParentCommitIds;
                },
                set: function (value) {
                    this.m_ParentCommitIds = value;
                }
            },
            /**
             * The files changed in the commit
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.Commit
             * @function Codex$ICommit$ChangedFiles
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$ICommit$ChangedFiles: {
                get: function () {
                    return this.ChangedFiles;
                }
            },
            /**
             * The files changed in the commit
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Commit
             * @function ChangedFiles
             * @type System.Collections.Generic.List$1
             */
            ChangedFiles: {
                get: function () {
                    return this.m_ChangedFiles;
                },
                set: function (value) {
                    this.m_ChangedFiles = value;
                }
            }
        },
        alias: [
            "Description", "Codex$ICommit$Description",
            "DateUploaded", "Codex$ICommit$DateUploaded",
            "DateCommitted", "Codex$ICommit$DateCommitted"
        ],
        ctors: {
            init: function () {
                this.m_DateUploaded = System.DateTime.getDefaultValue();
                this.m_DateCommitted = System.DateTime.getDefaultValue();
                this.m_ParentCommitIds = new (System.Collections.Generic.List$1(System.String)).ctor();
                this.m_ChangedFiles = new (System.Collections.Generic.List$1(Codex.ObjectModel.CommitChangedFile)).ctor();
            },
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.CommitScopeEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.CommitScopeEntity.ctor.call(this);
                this.CopyFrom$2(Codex.ObjectModel.Commit, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.CommitScopeEntity.$ctor1.call(this, value);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.ObjectModel.CommitScopeEntity.$ctor2.call(this, value);
            }
        },
        methods: {
            CopyFrom$2: function (TTarget, value) {
                this.m_Description = value.Codex$ICommit$Description;
                this.m_DateUploaded = value.Codex$ICommit$DateUploaded;
                this.m_DateCommitted = value.Codex$ICommit$DateCommitted;
                this.m_ParentCommitIds = new (System.Collections.Generic.List$1(System.String)).$ctor1(value.Codex$ICommit$ParentCommitIds);
                this.m_ChangedFiles = new (System.Collections.Generic.List$1(Codex.ObjectModel.CommitChangedFile)).$ctor1(System.Linq.Enumerable.from(value.Codex$ICommit$ChangedFiles).select($asm.$.Codex.ObjectModel.Commit.f2));
                Codex.ObjectModel.CommitScopeEntity.prototype.CopyFrom$1.call(this, Codex.ObjectModel.CommitScopeEntity, Bridge.cast((value), Codex.ICommitScopeEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.Commit", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.Commit, {
        f1: function (_v) {
            return new Codex.ObjectModel.CommitChangedFile.ctor().CopyFrom$1(Codex.ObjectModel.CommitChangedFile, _v);
        },
        f2: function (v) {
            return Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ICommitChangedFile, Bridge.global.Codex.ObjectModel.CommitChangedFile, v, $asm.$.Codex.ObjectModel.Commit.f1);
        }
    });

    /**
     * Represents a directory in source control
     *
     * @public
     * @class Codex.ObjectModel.CommitFilesDirectory
     * @augments Codex.ObjectModel.RepoFileScopeEntity
     * @implements  Codex.ICommitFilesDirectory
     */
    Bridge.define("Codex.ObjectModel.CommitFilesDirectory", {
        inherits: [Codex.ObjectModel.RepoFileScopeEntity,Codex.ICommitFilesDirectory],
        fields: {
            m_Files: null
        },
        props: {
            /**
             * The files in the directory
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.CommitFilesDirectory
             * @function Codex$ICommitFilesDirectory$Files
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$ICommitFilesDirectory$Files: {
                get: function () {
                    return this.Files;
                }
            },
            /**
             * The files in the directory
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CommitFilesDirectory
             * @function Files
             * @type System.Collections.Generic.List$1
             */
            Files: {
                get: function () {
                    return this.m_Files;
                },
                set: function (value) {
                    this.m_Files = value;
                }
            }
        },
        ctors: {
            init: function () {
                this.m_Files = new (System.Collections.Generic.List$1(Codex.ObjectModel.CommitFileLink)).ctor();
            },
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.RepoFileScopeEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.RepoFileScopeEntity.ctor.call(this);
                this.CopyFrom$2(Codex.ObjectModel.CommitFilesDirectory, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.RepoFileScopeEntity.$ctor1.call(this, value);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.ObjectModel.RepoFileScopeEntity.$ctor2.call(this, value);
            }
        },
        methods: {
            CopyFrom$2: function (TTarget, value) {
                this.m_Files = new (System.Collections.Generic.List$1(Codex.ObjectModel.CommitFileLink)).$ctor1(System.Linq.Enumerable.from(value.Codex$ICommitFilesDirectory$Files).select($asm.$.Codex.ObjectModel.CommitFilesDirectory.f2));
                Codex.ObjectModel.RepoFileScopeEntity.prototype.CopyFrom$1.call(this, Codex.ObjectModel.RepoFileScopeEntity, Bridge.cast((value), Codex.IRepoFileScopeEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.CommitFilesDirectory", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.CommitFilesDirectory, {
        f1: function (_v) {
            return new Codex.ObjectModel.CommitFileLink.ctor().CopyFrom(Codex.ObjectModel.CommitFileLink, _v);
        },
        f2: function (v) {
            return Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ICommitFileLink, Bridge.global.Codex.ObjectModel.CommitFileLink, v, $asm.$.Codex.ObjectModel.CommitFilesDirectory.f1);
        }
    });

    Bridge.define("Codex.ObjectModel.DefinitionSymbol", {
        inherits: [Codex.ObjectModel.ReferenceSymbol,Codex.IDefinitionSymbol],
        fields: {
            m_Uid: null,
            m_DisplayName: null,
            m_ShortName: null,
            m_ContainerQualifiedName: null,
            m_Modifiers: null,
            m_Glyph: 0,
            m_SymbolDepth: 0,
            m_DocumentationInfo: null,
            m_TypeName: null,
            m_DeclarationName: null,
            m_Comment: null
        },
        props: {
            /**
             * The unique identifier for the symbol
             NOTE: This is not applicable to most symbols. Only set for symbols
             which are added in a shared context and need this for deduplication)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DefinitionSymbol
             * @function Uid
             * @type string
             */
            Uid: {
                get: function () {
                    return this.m_Uid;
                },
                set: function (value) {
                    this.m_Uid = value;
                }
            },
            /**
             * The display name of the symbol
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DefinitionSymbol
             * @function DisplayName
             * @type string
             */
            DisplayName: {
                get: function () {
                    return this.m_DisplayName;
                },
                set: function (value) {
                    this.m_DisplayName = value;
                }
            },
            /**
             * The short name of the symbol (i.e. Task).
             This is used to find the symbol when search term does not contain '.'
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DefinitionSymbol
             * @function ShortName
             * @type string
             */
            ShortName: {
                get: function () {
                    return this.CoerceShortName(this.m_ShortName);
                },
                set: function (value) {
                    this.m_ShortName = value;
                }
            },
            /**
             * The qualified name of the symbol (i.e. System.Threading.Tasks.Task).
             This is used to find the symbol when the search term contains '.'
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DefinitionSymbol
             * @function ContainerQualifiedName
             * @type string
             */
            ContainerQualifiedName: {
                get: function () {
                    return this.m_ContainerQualifiedName;
                },
                set: function (value) {
                    this.m_ContainerQualifiedName = value;
                }
            },
            /**
             * Modifiers for the symbol such as public
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DefinitionSymbol
             * @function Modifiers
             * @type Array.<string>
             */
            Modifiers: {
                get: function () {
                    return this.m_Modifiers;
                },
                set: function (value) {
                    this.m_Modifiers = value;
                }
            },
            /**
             * The glyph
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DefinitionSymbol
             * @function Glyph
             * @type Codex.ObjectModel.Glyph
             */
            Glyph: {
                get: function () {
                    return this.m_Glyph;
                },
                set: function (value) {
                    this.m_Glyph = value;
                }
            },
            /**
             * The depth of the symbol in its symbolic tree
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DefinitionSymbol
             * @function SymbolDepth
             * @type number
             */
            SymbolDepth: {
                get: function () {
                    return this.m_SymbolDepth;
                },
                set: function (value) {
                    this.m_SymbolDepth = value;
                }
            },
            /**
             * Documentation for the symbol (if any)
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.DefinitionSymbol
             * @function Codex$IDefinitionSymbol$DocumentationInfo
             * @type Codex.IDocumentationInfo
             */
            Codex$IDefinitionSymbol$DocumentationInfo: {
                get: function () {
                    return this.DocumentationInfo;
                }
            },
            /**
             * Documentation for the symbol (if any)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DefinitionSymbol
             * @function DocumentationInfo
             * @type Codex.ObjectModel.DocumentationInfo
             */
            DocumentationInfo: {
                get: function () {
                    return this.m_DocumentationInfo;
                },
                set: function (value) {
                    this.m_DocumentationInfo = value;
                }
            },
            /**
             * The name of the type for the symbol
             (i.e. return type of method)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DefinitionSymbol
             * @function TypeName
             * @type string
             */
            TypeName: {
                get: function () {
                    return this.m_TypeName;
                },
                set: function (value) {
                    this.m_TypeName = value;
                }
            },
            /**
             * The declaration name for the symbol
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DefinitionSymbol
             * @function DeclarationName
             * @type string
             */
            DeclarationName: {
                get: function () {
                    return this.m_DeclarationName;
                },
                set: function (value) {
                    this.m_DeclarationName = value;
                }
            },
            /**
             * The comment applied to the definition
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DefinitionSymbol
             * @function Comment
             * @type string
             */
            Comment: {
                get: function () {
                    return this.m_Comment;
                },
                set: function (value) {
                    this.m_Comment = value;
                }
            }
        },
        alias: [
            "Uid", "Codex$IDefinitionSymbol$Uid",
            "DisplayName", "Codex$IDefinitionSymbol$DisplayName",
            "ShortName", "Codex$IDefinitionSymbol$ShortName",
            "ContainerQualifiedName", "Codex$IDefinitionSymbol$ContainerQualifiedName",
            "Modifiers", "Codex$IDefinitionSymbol$Modifiers",
            "Glyph", "Codex$IDefinitionSymbol$Glyph",
            "SymbolDepth", "Codex$IDefinitionSymbol$SymbolDepth",
            "TypeName", "Codex$IDefinitionSymbol$TypeName",
            "DeclarationName", "Codex$IDefinitionSymbol$DeclarationName",
            "Comment", "Codex$IDefinitionSymbol$Comment"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.ReferenceSymbol.ctor.call(this);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.ReferenceSymbol.ctor.call(this);
                this.CopyFrom$2(Codex.ObjectModel.DefinitionSymbol, value);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.ObjectModel.ReferenceSymbol.$ctor2.call(this, value);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.ReferenceSymbol.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$2: function (TTarget, value) {
                this.m_Uid = value.Codex$IDefinitionSymbol$Uid;
                this.m_DisplayName = value.Codex$IDefinitionSymbol$DisplayName;
                this.m_ShortName = value.Codex$IDefinitionSymbol$ShortName;
                this.m_ContainerQualifiedName = value.Codex$IDefinitionSymbol$ContainerQualifiedName;
                this.m_Modifiers = value.Codex$IDefinitionSymbol$Modifiers;
                this.m_Glyph = value.Codex$IDefinitionSymbol$Glyph;
                this.m_SymbolDepth = value.Codex$IDefinitionSymbol$SymbolDepth;
                this.m_DocumentationInfo = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.DocumentationInfo, Bridge.global.Codex.ObjectModel.DocumentationInfo, this.DocumentationInfo, $asm.$.Codex.ObjectModel.DefinitionSymbol.f1);
                ;
                this.m_TypeName = value.Codex$IDefinitionSymbol$TypeName;
                this.m_DeclarationName = value.Codex$IDefinitionSymbol$DeclarationName;
                this.m_Comment = value.Codex$IDefinitionSymbol$Comment;
                Codex.ObjectModel.ReferenceSymbol.prototype.CopyFrom$1.call(this, Codex.ObjectModel.ReferenceSymbol, Bridge.cast((value), Codex.IReferenceSymbol));
                return Bridge.cast((this), TTarget);
            },
            Initialize: function () {
                this.ReferenceKind = "Definition";
                Codex.ObjectModel.ReferenceSymbol.prototype.Initialize.call(this);
            },
            CoerceShortName: function (value) {
                var $t;
                return ($t = value, $t != null ? $t : "");
            },
            toString: function () {
                return this.DisplayName;
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.DefinitionSymbol", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.DefinitionSymbol, {
        f1: function (v) {
            return new Codex.ObjectModel.DocumentationInfo.ctor().CopyFrom(Codex.ObjectModel.DocumentationInfo, v);
        }
    });

    /**
     * Decribes a symbol related to a given documented symbol
     *
     * @public
     * @class Codex.ObjectModel.DocumentationReferenceSymbol
     * @augments Codex.ObjectModel.ReferenceSymbol
     * @implements  Codex.IDocumentationReferenceSymbol
     */
    Bridge.define("Codex.ObjectModel.DocumentationReferenceSymbol", {
        inherits: [Codex.ObjectModel.ReferenceSymbol,Codex.IDocumentationReferenceSymbol],
        fields: {
            m_DisplayName: null,
            m_Comment: null
        },
        props: {
            /**
             * The display name of the symbol reference as it should appear in documentation
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DocumentationReferenceSymbol
             * @function DisplayName
             * @type string
             */
            DisplayName: {
                get: function () {
                    return this.m_DisplayName;
                },
                set: function (value) {
                    this.m_DisplayName = value;
                }
            },
            /**
             * The comment associated with the reference
             (i.e. return type description https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/xmldoc/returns)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DocumentationReferenceSymbol
             * @function Comment
             * @type string
             */
            Comment: {
                get: function () {
                    return this.m_Comment;
                },
                set: function (value) {
                    this.m_Comment = value;
                }
            }
        },
        alias: [
            "DisplayName", "Codex$IDocumentationReferenceSymbol$DisplayName",
            "Comment", "Codex$IDocumentationReferenceSymbol$Comment"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.ReferenceSymbol.ctor.call(this);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.ReferenceSymbol.ctor.call(this);
                this.CopyFrom$2(Codex.ObjectModel.DocumentationReferenceSymbol, value);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.ObjectModel.ReferenceSymbol.$ctor2.call(this, value);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.ReferenceSymbol.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$2: function (TTarget, value) {
                this.m_DisplayName = value.Codex$IDocumentationReferenceSymbol$DisplayName;
                this.m_Comment = value.Codex$IDocumentationReferenceSymbol$Comment;
                Codex.ObjectModel.ReferenceSymbol.prototype.CopyFrom$1.call(this, Codex.ObjectModel.ReferenceSymbol, Bridge.cast((value), Codex.IReferenceSymbol));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    /**
     * A specialized definition span referring to a parameter of a method/property
     *
     * @public
     * @class Codex.ObjectModel.ParameterDefinitionSpan
     * @augments Codex.ObjectModel.LineSpan
     * @implements  Codex.IParameterDefinitionSpan
     */
    Bridge.define("Codex.ObjectModel.ParameterDefinitionSpan", {
        inherits: [Codex.ObjectModel.LineSpan,Codex.IParameterDefinitionSpan],
        fields: {
            m_ParameterIndex: 0,
            m_Name: null
        },
        props: {
            /**
             * The index of the parameter in the list of parameters for the method
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ParameterDefinitionSpan
             * @function ParameterIndex
             * @type number
             */
            ParameterIndex: {
                get: function () {
                    return this.m_ParameterIndex;
                },
                set: function (value) {
                    this.m_ParameterIndex = value;
                }
            },
            /**
             * The name of the parameter
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ParameterDefinitionSpan
             * @function Name
             * @type string
             */
            Name: {
                get: function () {
                    return this.m_Name;
                },
                set: function (value) {
                    this.m_Name = value;
                }
            }
        },
        alias: [
            "ParameterIndex", "Codex$IParameterDefinitionSpan$ParameterIndex",
            "Name", "Codex$IParameterDefinitionSpan$Name"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.LineSpan.ctor.call(this);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.LineSpan.ctor.call(this);
                this.CopyFrom$2(Codex.ObjectModel.ParameterDefinitionSpan, value);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.LineSpan.$ctor1.call(this, value);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.ObjectModel.LineSpan.$ctor2.call(this, value);
            }
        },
        methods: {
            CopyFrom$2: function (TTarget, value) {
                this.m_ParameterIndex = value.Codex$IParameterDefinitionSpan$ParameterIndex;
                this.m_Name = value.Codex$IParameterDefinitionSpan$Name;
                Codex.ObjectModel.LineSpan.prototype.CopyFrom$1.call(this, Codex.ObjectModel.LineSpan, Bridge.cast((value), Codex.ILineSpan));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.TextLineSpan", {
        inherits: [Codex.ObjectModel.LineSpan,Codex.ITextLineSpan],
        fields: {
            m_LineSpanText: null
        },
        props: {
            /**
             * The line text
             TODO: It would be nice to not store this here and instead apply it as a join
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.TextLineSpan
             * @function LineSpanText
             * @type string
             */
            LineSpanText: {
                get: function () {
                    return this.m_LineSpanText;
                },
                set: function (value) {
                    this.m_LineSpanText = value;
                }
            }
        },
        alias: ["LineSpanText", "Codex$ITextLineSpan$LineSpanText"],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.LineSpan.ctor.call(this);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.ObjectModel.LineSpan.ctor.call(this);
                this.CopyFrom$2(Codex.ObjectModel.TextLineSpan, value);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.LineSpan.$ctor1.call(this, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.LineSpan.$ctor2.call(this, value);
            }
        },
        methods: {
            CopyFrom$2: function (TTarget, value) {
                this.m_LineSpanText = value.Codex$ITextLineSpan$LineSpanText;
                Codex.ObjectModel.LineSpan.prototype.CopyFrom$1.call(this, Codex.ObjectModel.LineSpan, Bridge.cast((value), Codex.ILineSpan));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    /**
     * NOTE: Do not set {@link }
     *
     * @public
     * @class Codex.ObjectModel.ProjectFileLink
     * @augments Codex.ObjectModel.ProjectFileScopeEntity
     * @implements  Codex.IProjectFileLink
     */
    Bridge.define("Codex.ObjectModel.ProjectFileLink", {
        inherits: [Codex.ObjectModel.ProjectFileScopeEntity,Codex.IProjectFileLink],
        fields: {
            m_FileId: null
        },
        props: {
            /**
             * Unique identifier for file
             TODO: Make this checksum and searchable and use for discovering commit from PDB.
             TODO: What is this?
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ProjectFileLink
             * @function FileId
             * @type string
             */
            FileId: {
                get: function () {
                    return this.m_FileId;
                },
                set: function (value) {
                    this.m_FileId = value;
                }
            }
        },
        alias: ["FileId", "Codex$IProjectFileLink$FileId"],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.ProjectFileScopeEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.ProjectFileScopeEntity.ctor.call(this);
                this.CopyFrom$4(Codex.ObjectModel.ProjectFileLink, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.ProjectFileScopeEntity.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$4: function (TTarget, value) {
                this.m_FileId = value.Codex$IProjectFileLink$FileId;
                Codex.ObjectModel.ProjectFileScopeEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.ProjectFileScopeEntity, Bridge.cast((value), Codex.IProjectFileScopeEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.ReferenceSearchModel", {
        inherits: [Codex.ObjectModel.SearchEntity,Codex.IReferenceSearchModel],
        fields: {
            m_Reference: null,
            m_Spans: null,
            m_CompressedSpans: null,
            m_ProjectRelativePath: null,
            m_RepoRelativePath: null,
            m_RepositoryName: null,
            m_ProjectId: null
        },
        props: {
            /**
             * The reference symbol
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.ReferenceSearchModel
             * @function Codex$IReferenceSearchModel$Reference
             * @type Codex.ICodeSymbol
             */
            Codex$IReferenceSearchModel$Reference: {
                get: function () {
                    return this.Reference;
                }
            },
            /**
             * The reference symbol
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferenceSearchModel
             * @function Reference
             * @type Codex.ObjectModel.Symbol
             */
            Reference: {
                get: function () {
                    return this.m_Reference;
                },
                set: function (value) {
                    this.m_Reference = value;
                }
            },
            Codex$IReferenceSearchModel$Spans: {
                get: function () {
                    return this.Spans;
                }
            },
            Spans: {
                get: function () {
                    return this.CoerceSpans(this.m_Spans);
                },
                set: function (value) {
                    this.m_Spans = value;
                }
            },
            /**
             * Compressed list of spans
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferenceSearchModel
             * @function CompressedSpans
             * @type Codex.ISymbolLineSpanList
             */
            CompressedSpans: {
                get: function () {
                    return this.m_CompressedSpans;
                },
                set: function (value) {
                    this.m_CompressedSpans = value;
                }
            },
            /**
             * The project relative path of the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferenceSearchModel
             * @function ProjectRelativePath
             * @type string
             */
            ProjectRelativePath: {
                get: function () {
                    return this.m_ProjectRelativePath;
                },
                set: function (value) {
                    this.m_ProjectRelativePath = value;
                }
            },
            /**
             * The repo relative path to the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferenceSearchModel
             * @function RepoRelativePath
             * @type string
             */
            RepoRelativePath: {
                get: function () {
                    return this.m_RepoRelativePath;
                },
                set: function (value) {
                    this.m_RepoRelativePath = value;
                }
            },
            /**
             * The name of the repository containing the entity
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferenceSearchModel
             * @function RepositoryName
             * @type string
             */
            RepositoryName: {
                get: function () {
                    return this.m_RepositoryName;
                },
                set: function (value) {
                    this.m_RepositoryName = value;
                }
            },
            /**
             * The identifier of the project containing the entity
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferenceSearchModel
             * @function ProjectId
             * @type string
             */
            ProjectId: {
                get: function () {
                    return this.m_ProjectId;
                },
                set: function (value) {
                    this.m_ProjectId = value;
                }
            }
        },
        alias: [
            "CompressedSpans", "Codex$IReferenceSearchModel$CompressedSpans",
            "ProjectRelativePath", "Codex$IProjectFileScopeEntity$ProjectRelativePath",
            "RepoRelativePath", "Codex$IRepoFileScopeEntity$RepoRelativePath",
            "RepositoryName", "Codex$IRepoScopeEntity$RepositoryName",
            "ProjectId", "Codex$IProjectScopeEntity$ProjectId"
        ],
        ctors: {
            init: function () {
                this.m_Spans = Codex.Utilities.CollectionUtilities.Empty$1(Codex.ObjectModel.SymbolSpan).Array;
            },
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$3(Codex.ObjectModel.ReferenceSearchModel, value);
            },
            $ctor6: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.$ctor1.call(this, value);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.ReferenceSearchModel, value);
            },
            $ctor4: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$4(Codex.ObjectModel.ReferenceSearchModel, value);
            },
            $ctor5: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$5(Codex.ObjectModel.ReferenceSearchModel, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$2(Codex.ObjectModel.ReferenceSearchModel, value);
            }
        },
        methods: {
            CopyFrom$5: function (TTarget, value) {
                this.m_RepositoryName = value.Codex$IRepoScopeEntity$RepositoryName;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom$4: function (TTarget, value) {
                this.m_RepoRelativePath = value.Codex$IRepoFileScopeEntity$RepoRelativePath;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom$2: function (TTarget, value) {
                this.m_ProjectId = value.Codex$IProjectScopeEntity$ProjectId;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom$1: function (TTarget, value) {
                this.m_ProjectRelativePath = value.Codex$IProjectFileScopeEntity$ProjectRelativePath;
                this.m_RepoRelativePath = Bridge.cast((value), Codex.IRepoFileScopeEntity).Codex$IRepoFileScopeEntity$RepoRelativePath;
                this.m_RepositoryName = Bridge.cast((value), Codex.IRepoScopeEntity).Codex$IRepoScopeEntity$RepositoryName;
                this.m_ProjectId = Bridge.cast((value), Codex.IProjectScopeEntity).Codex$IProjectScopeEntity$ProjectId;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom$3: function (TTarget, value) {
                this.m_Reference = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.Symbol, Bridge.global.Codex.ObjectModel.Symbol, this.Reference, $asm.$.Codex.ObjectModel.ReferenceSearchModel.f1);
                ;
                this.m_Spans = new (System.Collections.Generic.List$1(Codex.ObjectModel.SymbolSpan)).$ctor1(System.Linq.Enumerable.from(value.Codex$IReferenceSearchModel$Spans).select($asm.$.Codex.ObjectModel.ReferenceSearchModel.f3));
                this.m_CompressedSpans = value.Codex$IReferenceSearchModel$CompressedSpans;
                Codex.ObjectModel.SearchEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.SearchEntity, Bridge.cast((value), Codex.ISearchEntity));
                this.m_ProjectRelativePath = Bridge.cast((value), Codex.IProjectFileScopeEntity).Codex$IProjectFileScopeEntity$ProjectRelativePath;
                this.m_RepoRelativePath = Bridge.cast((value), Codex.IRepoFileScopeEntity).Codex$IRepoFileScopeEntity$RepoRelativePath;
                this.m_RepositoryName = Bridge.cast((value), Codex.IRepoScopeEntity).Codex$IRepoScopeEntity$RepositoryName;
                this.m_ProjectId = Bridge.cast((value), Codex.IProjectScopeEntity).Codex$IProjectScopeEntity$ProjectId;
                return Bridge.cast((this), TTarget);
            },
            CoerceSpans: function (value) {
                var $t;
                value = value || (($t = this.CompressedSpans) != null ? $t.Codex$ISymbolLineSpanList$ToList() : null);
                this.Spans = value;
                return value;
            },
            OnSerializingCore: function () {
                var $t;
                if (this.Spans != null) {
                    var lineSpanText = { v : null };
                    $t = Bridge.getEnumerator(this.Spans, Codex.ObjectModel.SymbolSpan);
                    try {
                        while ($t.moveNext()) {
                            var span = $t.Current;
                            span.LineSpanText = Codex.Utilities.SerializationUtilities.RemoveDuplicate(System.String, span.LineSpanText, lineSpanText);
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$dispose();
                        }
                    }}

                Codex.ObjectModel.SearchEntity.prototype.OnSerializingCore.call(this);
            },
            OnDeserializedCore: function () {
                var $t;
                if (this.Spans != null) {
                    var lineSpanText = { v : null };
                    $t = Bridge.getEnumerator(this.Spans, Codex.ObjectModel.SymbolSpan);
                    try {
                        while ($t.moveNext()) {
                            var span = $t.Current;
                            span.LineSpanText = Codex.Utilities.SerializationUtilities.AssignDuplicate(System.String, span.LineSpanText, lineSpanText);
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$dispose();
                        }
                    }}

                Codex.ObjectModel.SearchEntity.prototype.OnDeserializedCore.call(this);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.ReferenceSearchModel", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.ReferenceSearchModel, {
        f1: function (v) {
            return new Codex.ObjectModel.Symbol.ctor().CopyFrom(Codex.ObjectModel.Symbol, v);
        },
        f2: function (_v) {
            return new Codex.ObjectModel.SymbolSpan.ctor().CopyFrom$3(Codex.ObjectModel.SymbolSpan, _v);
        },
        f3: function (v) {
            return Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ISymbolSpan, Bridge.global.Codex.ObjectModel.SymbolSpan, v, $asm.$.Codex.ObjectModel.ReferenceSearchModel.f2);
        }
    });

    Bridge.define("Codex.ObjectModel.SourceFileInfo", {
        inherits: [Codex.EntityBase,Codex.ISourceFileInfo],
        fields: {
            m_Lines: 0,
            m_Size: 0,
            m_Language: null,
            m_WebAddress: null,
            m_Encoding: null,
            m_Properties: null,
            m_RepoRelativePath: null,
            m_RepositoryName: null,
            m_SourceControlContentId: null,
            m_ProjectRelativePath: null,
            m_ProjectId: null
        },
        props: {
            /**
             * The number of lines in the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SourceFileInfo
             * @function Lines
             * @type number
             */
            Lines: {
                get: function () {
                    return this.m_Lines;
                },
                set: function (value) {
                    this.m_Lines = value;
                }
            },
            /**
             * The size of the file in bytes
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SourceFileInfo
             * @function Size
             * @type number
             */
            Size: {
                get: function () {
                    return this.m_Size;
                },
                set: function (value) {
                    this.m_Size = value;
                }
            },
            /**
             * The language of the file
             TODO: Remove
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SourceFileInfo
             * @function Language
             * @type string
             */
            Language: {
                get: function () {
                    return this.m_Language;
                },
                set: function (value) {
                    this.m_Language = value;
                }
            },
            /**
             * The web address of the file. TODO: Remove? Is repo relative path enough?
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SourceFileInfo
             * @function WebAddress
             * @type string
             */
            WebAddress: {
                get: function () {
                    return this.m_WebAddress;
                },
                set: function (value) {
                    this.m_WebAddress = value;
                }
            },
            /**
             * The encoding used for the file
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.SourceFileInfo
             * @function Codex$ISourceFileInfo$Encoding
             * @type Codex.IEncodingDescription
             */
            Codex$ISourceFileInfo$Encoding: {
                get: function () {
                    return this.Encoding;
                }
            },
            /**
             * The encoding used for the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SourceFileInfo
             * @function Encoding
             * @type Codex.ObjectModel.EncodingDescription
             */
            Encoding: {
                get: function () {
                    return this.m_Encoding;
                },
                set: function (value) {
                    this.m_Encoding = value;
                }
            },
            /**
             * Extensible key value properties for the document.
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.SourceFileInfo
             * @function Codex$ISourceFileInfo$Properties
             * @type Codex.IPropertyMap
             */
            Codex$ISourceFileInfo$Properties: {
                get: function () {
                    return this.Properties;
                }
            },
            /**
             * Extensible key value properties for the document.
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SourceFileInfo
             * @function Properties
             * @type Codex.ObjectModel.PropertyMap
             */
            Properties: {
                get: function () {
                    return this.m_Properties;
                },
                set: function (value) {
                    this.m_Properties = value;
                }
            },
            /**
             * The repo relative path to the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SourceFileInfo
             * @function RepoRelativePath
             * @type string
             */
            RepoRelativePath: {
                get: function () {
                    return this.m_RepoRelativePath;
                },
                set: function (value) {
                    this.m_RepoRelativePath = value;
                }
            },
            /**
             * The name of the repository containing the entity
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SourceFileInfo
             * @function RepositoryName
             * @type string
             */
            RepositoryName: {
                get: function () {
                    return this.m_RepositoryName;
                },
                set: function (value) {
                    this.m_RepositoryName = value;
                }
            },
            /**
             * Unique id for the source file content as defined by the source control provider (i.e. git SHA)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SourceFileInfo
             * @function SourceControlContentId
             * @type string
             */
            SourceControlContentId: {
                get: function () {
                    return this.m_SourceControlContentId;
                },
                set: function (value) {
                    this.m_SourceControlContentId = value;
                }
            },
            /**
             * The project relative path of the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SourceFileInfo
             * @function ProjectRelativePath
             * @type string
             */
            ProjectRelativePath: {
                get: function () {
                    return this.m_ProjectRelativePath;
                },
                set: function (value) {
                    this.m_ProjectRelativePath = value;
                }
            },
            /**
             * The identifier of the project containing the entity
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SourceFileInfo
             * @function ProjectId
             * @type string
             */
            ProjectId: {
                get: function () {
                    return this.m_ProjectId;
                },
                set: function (value) {
                    this.m_ProjectId = value;
                }
            }
        },
        alias: [
            "Lines", "Codex$ISourceFileInfo$Lines",
            "Size", "Codex$ISourceFileInfo$Size",
            "Language", "Codex$ISourceFileInfo$Language",
            "WebAddress", "Codex$ISourceFileInfo$WebAddress",
            "RepoRelativePath", "Codex$IRepoFileScopeEntity$RepoRelativePath",
            "RepositoryName", "Codex$IRepoScopeEntity$RepositoryName",
            "SourceControlContentId", "Codex$ISourceControlFileInfo$SourceControlContentId",
            "ProjectRelativePath", "Codex$IProjectFileScopeEntity$ProjectRelativePath",
            "ProjectId", "Codex$IProjectScopeEntity$ProjectId"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor6: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom$5(Codex.ObjectModel.SourceFileInfo, value);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom$2(Codex.ObjectModel.SourceFileInfo, value);
            },
            $ctor4: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom$3(Codex.ObjectModel.SourceFileInfo, value);
            },
            $ctor5: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom$4(Codex.ObjectModel.SourceFileInfo, value);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.SourceFileInfo, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom$1(Codex.ObjectModel.SourceFileInfo, value);
            }
        },
        methods: {
            CopyFrom$3: function (TTarget, value) {
                this.m_RepositoryName = value.Codex$IRepoScopeEntity$RepositoryName;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom$2: function (TTarget, value) {
                this.m_RepoRelativePath = value.Codex$IRepoFileScopeEntity$RepoRelativePath;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom$4: function (TTarget, value) {
                this.m_SourceControlContentId = value.Codex$ISourceControlFileInfo$SourceControlContentId;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom$1: function (TTarget, value) {
                this.m_ProjectId = value.Codex$IProjectScopeEntity$ProjectId;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom: function (TTarget, value) {
                this.m_ProjectRelativePath = value.Codex$IProjectFileScopeEntity$ProjectRelativePath;
                this.m_RepoRelativePath = Bridge.cast((value), Codex.IRepoFileScopeEntity).Codex$IRepoFileScopeEntity$RepoRelativePath;
                this.m_RepositoryName = Bridge.cast((value), Codex.IRepoScopeEntity).Codex$IRepoScopeEntity$RepositoryName;
                this.m_ProjectId = Bridge.cast((value), Codex.IProjectScopeEntity).Codex$IProjectScopeEntity$ProjectId;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom$5: function (TTarget, value) {
                this.m_Lines = value.Codex$ISourceFileInfo$Lines;
                this.m_Size = value.Codex$ISourceFileInfo$Size;
                this.m_Language = value.Codex$ISourceFileInfo$Language;
                this.m_WebAddress = value.Codex$ISourceFileInfo$WebAddress;
                this.m_Encoding = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.EncodingDescription, Bridge.global.Codex.ObjectModel.EncodingDescription, this.Encoding, $asm.$.Codex.ObjectModel.SourceFileInfo.f1);
                ;
                this.m_Properties = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.PropertyMap, Bridge.global.Codex.ObjectModel.PropertyMap, this.Properties, $asm.$.Codex.ObjectModel.SourceFileInfo.f2);
                ;
                this.m_RepoRelativePath = Bridge.cast((value), Codex.IRepoFileScopeEntity).Codex$IRepoFileScopeEntity$RepoRelativePath;
                this.m_RepositoryName = Bridge.cast((value), Codex.IRepoScopeEntity).Codex$IRepoScopeEntity$RepositoryName;
                this.m_SourceControlContentId = Bridge.cast((value), Codex.ISourceControlFileInfo).Codex$ISourceControlFileInfo$SourceControlContentId;
                this.m_ProjectRelativePath = Bridge.cast((value), Codex.IProjectFileScopeEntity).Codex$IProjectFileScopeEntity$ProjectRelativePath;
                this.m_ProjectId = Bridge.cast((value), Codex.IProjectScopeEntity).Codex$IProjectScopeEntity$ProjectId;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.SourceFileInfo", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.SourceFileInfo, {
        f1: function (v) {
            return new Codex.ObjectModel.EncodingDescription.ctor().CopyFrom(Codex.ObjectModel.EncodingDescription, v);
        },
        f2: function (v) {
            return new Codex.ObjectModel.PropertyMap.ctor().CopyFrom(Codex.ObjectModel.PropertyMap, v);
        }
    });

    Bridge.define("Codex.ObjectModel.TextLineSpanResult", {
        inherits: [Codex.ObjectModel.ProjectFileScopeEntity,Codex.Sdk.Search.ITextLineSpanResult],
        fields: {
            m_TextSpan: null
        },
        props: {
            Codex$Sdk$Search$ITextLineSpanResult$TextSpan: {
                get: function () {
                    return this.TextSpan;
                }
            },
            TextSpan: {
                get: function () {
                    return this.m_TextSpan;
                },
                set: function (value) {
                    this.m_TextSpan = value;
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.ProjectFileScopeEntity.ctor.call(this);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.ProjectFileScopeEntity.ctor.call(this);
                this.CopyFrom$4(Codex.ObjectModel.TextLineSpanResult, value);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.ProjectFileScopeEntity.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$4: function (TTarget, value) {
                this.m_TextSpan = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.TextLineSpan, Bridge.global.Codex.ObjectModel.TextLineSpan, this.TextSpan, $asm.$.Codex.ObjectModel.TextLineSpanResult.f1);
                ;
                Codex.ObjectModel.ProjectFileScopeEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.ProjectFileScopeEntity, Bridge.cast((value), Codex.IProjectFileScopeEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.TextLineSpanResult", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.TextLineSpanResult, {
        f1: function (v) {
            return new Codex.ObjectModel.TextLineSpan.ctor().CopyFrom$2(Codex.ObjectModel.TextLineSpan, v);
        }
    });

    /**
     * Represents a source file with associated semantic bindings
     *
     * @public
     * @class Codex.ObjectModel.BoundSourceFile
     * @augments Codex.ObjectModel.BoundSourceInfo
     * @implements  Codex.IBoundSourceFile
     */
    Bridge.define("Codex.ObjectModel.BoundSourceFile", {
        inherits: [Codex.ObjectModel.BoundSourceInfo,Codex.IBoundSourceFile],
        fields: {
            m_SourceFile: null
        },
        props: {
            /**
             * The source file
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.BoundSourceFile
             * @function Codex$IBoundSourceFile$SourceFile
             * @type Codex.ISourceFile
             */
            Codex$IBoundSourceFile$SourceFile: {
                get: function () {
                    return this.SourceFile;
                }
            },
            /**
             * The source file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.BoundSourceFile
             * @function SourceFile
             * @type Codex.ObjectModel.SourceFile
             */
            SourceFile: {
                get: function () {
                    return this.m_SourceFile;
                },
                set: function (value) {
                    this.m_SourceFile = value;
                }
            }
        },
        alias: [
            "References", "Codex$IBoundSourceInfo$References",
            "Definitions", "Codex$IBoundSourceInfo$Definitions",
            "Classifications", "Codex$IBoundSourceInfo$Classifications",
            "OutliningRegions", "Codex$IBoundSourceInfo$OutliningRegions"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.BoundSourceInfo.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.BoundSourceInfo.ctor.call(this);
                this.CopyFrom$5(Codex.ObjectModel.BoundSourceFile, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.BoundSourceInfo.$ctor1.call(this, value);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.ObjectModel.BoundSourceInfo.$ctor2.call(this, value);
            }
        },
        methods: {
            CopyFrom$5: function (TTarget, value) {
                this.m_SourceFile = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.SourceFile, Bridge.global.Codex.ObjectModel.SourceFile, this.SourceFile, $asm.$.Codex.ObjectModel.BoundSourceFile.f1);
                ;
                Codex.ObjectModel.BoundSourceInfo.prototype.CopyFrom$4.call(this, Codex.ObjectModel.BoundSourceInfo, Bridge.cast((value), Codex.IBoundSourceInfo));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.BoundSourceFile", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.BoundSourceFile, {
        f1: function (v) {
            return new Codex.ObjectModel.SourceFile.ctor().CopyFrom(Codex.ObjectModel.SourceFile, v);
        }
    });

    Bridge.define("Codex.ObjectModel.SymbolSpan", {
        inherits: [Codex.ObjectModel.TextLineSpan,Codex.ISymbolSpan],
        props: {
            LineSpanEnd: {
                get: function () {
                    return ((this.LineSpanStart + this.Length) | 0);
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.TextLineSpan.ctor.call(this);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.ObjectModel.TextLineSpan.ctor.call(this);
                this.CopyFrom$3(Codex.ObjectModel.SymbolSpan, value);
            },
            $ctor4: function (value) {
                this.$initialize();
                Codex.ObjectModel.TextLineSpan.$ctor3.call(this, value);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.TextLineSpan.$ctor1.call(this, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.TextLineSpan.$ctor2.call(this, value);
            }
        },
        methods: {
            CopyFrom$3: function (TTarget, value) {
                Codex.ObjectModel.TextLineSpan.prototype.CopyFrom$2.call(this, Codex.ObjectModel.TextLineSpan, Bridge.cast((value), Codex.ITextLineSpan));
                return Bridge.cast((this), TTarget);
            },
            Trim: function () {
                var initialLength = this.LineSpanText.length;
                this.LineSpanText = System.String.trimStart(this.LineSpanText);
                var newLength = this.LineSpanText.length;
                this.LineSpanStart = (this.LineSpanStart - (((initialLength - newLength) | 0))) | 0;
                this.LineSpanText = System.String.trimEnd(this.LineSpanText);
                this.LineSpanStart = Math.max(this.LineSpanStart, 0);
                this.Length = Math.min(this.LineSpanText.length, this.Length);
            },
            CreateReference: function (referenceSymbol, relatedDefinition) {
                var $t;
                if (relatedDefinition === void 0) { relatedDefinition = new Codex.ObjectModel.SymbolId(); }
                return ($t = new Codex.ObjectModel.ReferenceSpan.$ctor4(this), $t.RelatedDefinition = relatedDefinition, $t.Reference = referenceSymbol, $t);
            },
            CreateDefinition: function (definition) {
                var $t;
                return ($t = new Codex.ObjectModel.DefinitionSpan.$ctor2(this), $t.Definition = definition, $t);
            }
        }
    });

    /**
     * A specialized reference span referring to a parameter to a method/property
     *
     * @public
     * @class Codex.ObjectModel.ParameterReferenceSpan
     * @augments Codex.ObjectModel.SymbolSpan
     * @implements  Codex.IParameterReferenceSpan
     */
    Bridge.define("Codex.ObjectModel.ParameterReferenceSpan", {
        inherits: [Codex.ObjectModel.SymbolSpan,Codex.IParameterReferenceSpan],
        fields: {
            m_ParameterIndex: 0
        },
        props: {
            /**
             * The index of the parameter in the list of parameters for the method
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ParameterReferenceSpan
             * @function ParameterIndex
             * @type number
             */
            ParameterIndex: {
                get: function () {
                    return this.m_ParameterIndex;
                },
                set: function (value) {
                    this.m_ParameterIndex = value;
                }
            }
        },
        alias: ["ParameterIndex", "Codex$IParameterReferenceSpan$ParameterIndex"],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.SymbolSpan.ctor.call(this);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.SymbolSpan.ctor.call(this);
                this.CopyFrom$4(Codex.ObjectModel.ParameterReferenceSpan, value);
            },
            $ctor4: function (value) {
                this.$initialize();
                Codex.ObjectModel.SymbolSpan.$ctor3.call(this, value);
            },
            $ctor5: function (value) {
                this.$initialize();
                Codex.ObjectModel.SymbolSpan.$ctor4.call(this, value);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.SymbolSpan.$ctor1.call(this, value);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.ObjectModel.SymbolSpan.$ctor2.call(this, value);
            }
        },
        methods: {
            CopyFrom$4: function (TTarget, value) {
                this.m_ParameterIndex = value.Codex$IParameterReferenceSpan$ParameterIndex;
                Codex.ObjectModel.SymbolSpan.prototype.CopyFrom$3.call(this, Codex.ObjectModel.SymbolSpan, Bridge.cast((value), Codex.ISymbolSpan));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.ReferenceSpan", {
        inherits: [Codex.ObjectModel.SymbolSpan,Codex.IReferenceSpan],
        fields: {
            m_RelatedDefinition: null,
            m_Reference: null,
            m_Parameters: null
        },
        props: {
            /**
             * Gets the symbol id of the definition which provides this reference
             (i.e. method definition for interface implementation)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferenceSpan
             * @function RelatedDefinition
             * @type Codex.ObjectModel.SymbolId
             */
            RelatedDefinition: {
                get: function () {
                    return this.m_RelatedDefinition;
                },
                set: function (value) {
                    this.m_RelatedDefinition = value;
                }
            },
            /**
             * The reference symbol referred to by the span
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.ReferenceSpan
             * @function Codex$IReferenceSpan$Reference
             * @type Codex.IReferenceSymbol
             */
            Codex$IReferenceSpan$Reference: {
                get: function () {
                    return this.Reference;
                }
            },
            /**
             * The reference symbol referred to by the span
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferenceSpan
             * @function Reference
             * @type Codex.ObjectModel.ReferenceSymbol
             */
            Reference: {
                get: function () {
                    return this.m_Reference;
                },
                set: function (value) {
                    this.m_Reference = value;
                }
            },
            /**
             * Gets the references to parameters
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.ReferenceSpan
             * @function Codex$IReferenceSpan$Parameters
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IReferenceSpan$Parameters: {
                get: function () {
                    return this.Parameters;
                }
            },
            /**
             * Gets the references to parameters
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferenceSpan
             * @function Parameters
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Parameters: {
                get: function () {
                    return this.m_Parameters;
                },
                set: function (value) {
                    this.m_Parameters = value;
                }
            }
        },
        alias: ["RelatedDefinition", "Codex$IReferenceSpan$RelatedDefinition"],
        ctors: {
            init: function () {
                this.m_RelatedDefinition = new Codex.ObjectModel.SymbolId();
                this.m_Parameters = Codex.Utilities.CollectionUtilities.Empty$1(Codex.ObjectModel.ParameterReferenceSpan).Array;
            },
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.SymbolSpan.ctor.call(this);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.SymbolSpan.ctor.call(this);
                this.CopyFrom$4(Codex.ObjectModel.ReferenceSpan, value);
            },
            $ctor4: function (value) {
                this.$initialize();
                Codex.ObjectModel.SymbolSpan.$ctor3.call(this, value);
            },
            $ctor5: function (value) {
                this.$initialize();
                Codex.ObjectModel.SymbolSpan.$ctor4.call(this, value);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.SymbolSpan.$ctor1.call(this, value);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.ObjectModel.SymbolSpan.$ctor2.call(this, value);
            }
        },
        methods: {
            CopyFrom$4: function (TTarget, value) {
                this.m_RelatedDefinition = value.Codex$IReferenceSpan$RelatedDefinition;
                this.m_Reference = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.ReferenceSymbol, Bridge.global.Codex.ObjectModel.ReferenceSymbol, this.Reference, $asm.$.Codex.ObjectModel.ReferenceSpan.f1);
                ;
                this.m_Parameters = new (System.Collections.Generic.List$1(Codex.ObjectModel.ParameterReferenceSpan)).$ctor1(System.Linq.Enumerable.from(value.Codex$IReferenceSpan$Parameters).select($asm.$.Codex.ObjectModel.ReferenceSpan.f3));
                Codex.ObjectModel.SymbolSpan.prototype.CopyFrom$3.call(this, Codex.ObjectModel.SymbolSpan, Bridge.cast((value), Codex.ISymbolSpan));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.ReferenceSpan", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.ReferenceSpan, {
        f1: function (v) {
            return new Codex.ObjectModel.ReferenceSymbol.ctor().CopyFrom$1(Codex.ObjectModel.ReferenceSymbol, v);
        },
        f2: function (_v) {
            return new Codex.ObjectModel.ParameterReferenceSpan.ctor().CopyFrom$4(Codex.ObjectModel.ParameterReferenceSpan, _v);
        },
        f3: function (v) {
            return Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.IParameterReferenceSpan, Bridge.global.Codex.ObjectModel.ParameterReferenceSpan, v, $asm.$.Codex.ObjectModel.ReferenceSpan.f2);
        }
    });
});

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJDb2RleC5WaWV3LldlYi5qcyIsCiAgInNvdXJjZVJvb3QiOiAiIiwKICAic291cmNlcyI6IFsiLi4vLi4vQ29kZXguU2RrLlR5cGVzL1N1cHBvcnQvQXR0cmlidXRlcy5jcyIsIi4uLy4uL0NvZGV4LlNkay5UeXBlcy9TdXBwb3J0L0RhdGFJbmNsdXNpb24uY3MiLCIuLi8uLi9Db2RleC5TZGsuVHlwZXMvRW50aXR5VXRpbGl0aWVzLmNzIiwiLi4vQ29kZXguU2RrLlNoYXJlZC9FbnRpdHlUeXBlcy5nLmNzIiwiLi4vQ29kZXguU2RrLlNoYXJlZC9HbHlwaC5jcyIsIkNvbXBhdGliaWxpdHkvQ29tcGF0aWJpbGl0eS5jcyIsIi4uLy4uL0NvZGV4LlNkay5UeXBlcy9BcGkvSUluZGV4LmNzIiwiLi4vLi4vQ29kZXguU2RrLlR5cGVzL0FwaS9JQ29kZXguY3MiLCIuLi8uLi9Db2RleC5TZGsuVHlwZXMvU3VwcG9ydC9TZWFyY2hUeXBlRGVzY3JpcHRvcnMuY3MiLCIuLi8uLi9Db2RleC5TZGsuVHlwZXMvU2VhcmNoVHlwZXMuY3MiLCIuLi9Db2RleC5TZGsuU2hhcmVkL1V0aWxpdGllcy9Db2xsZWN0aW9uVXRpbGl0aWVzLmNzIiwiLi4vQ29kZXguU2RrLlNoYXJlZC9VdGlsaXRpZXMvU2VyaWFsaXphdGlvblV0aWxpdGllcy5jcyIsIi4uL0NvZGV4LlZpZXcuU2hhcmVkL0FwcC5jcyIsIi4uL0NvZGV4LlZpZXcuU2hhcmVkL1ZpZXdNb2RlbHMuY3MiLCJFZGl0b3JIb3N0Q29udHJvbC5jcyIsIi4uL0NvZGV4LlZpZXcuU2hhcmVkL0dyYW51bGFyRXh0ZW5zaW9ucy5jcyIsIi4uL0NvZGV4LlZpZXcuU2hhcmVkL0xlZnRQYW5lVmlldy54YW1sLmNzIiwiLi4vQ29kZXguVmlldy5TaGFyZWQvTWFpbldpbmRvdy54YW1sLmNzIiwiLi4vQ29kZXguVmlldy5TaGFyZWQvU3R5bGVzLmNzIiwiLi4vLi4vQ29kZXguU2RrLlR5cGVzL0VudGl0eUJhc2UuY3MiLCJXZWJBcGlDb2RleC5jcyJdLAogICJuYW1lcyI6IFsiIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0QkFnRmtDQTs7Ozs7Z0JBRXRCQSx5QkFBb0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0QkNyRE1BOzs7Z0JBRTFCQSxxQkFBZ0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQ3JCYUEsR0FBR0EsU0FBU0EsS0FBT0E7b0JBSWhEQSxJQUFJQSxPQUFPQTt3QkFBTUEsT0FBT0E7O29CQUN4QkEsT0FBT0EsS0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRCRm1DbUJBOzs7Z0JBRS9CQSxZQUFPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NEJBMENhQTs7O2dCQUVwQkEscUJBQWdCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDRy9FcUZBOzs7OztvQkFHckdBLGtCQUE4RUEsS0FBSUE7b0JBQ2xGQSxnQkFBZ0JBLEFBQU9BLGVBQWdCQSxBQUFPQTtvQkFDOUNBLGdCQUFnQkEsQUFBT0EsMEJBQVNBLEFBQU9BO29CQUN2Q0EsZ0JBQWdCQSxBQUFPQSwwQkFBMkJBLEFBQU9BO29CQUN6REEsZ0JBQWdCQSxBQUFPQSxxQ0FBb0JBLEFBQU9BO29CQUNsREEsZ0JBQWdCQSxBQUFPQSx1QkFBd0JBLEFBQU9BO29CQUN0REEsZ0JB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QSxLQUFLQTt3QkFDTEEsS0FBS0E7d0JBQ0xBLEtBQUtBOzRCQUNEQSxPQUFPQTt3QkFFWEEsS0FBS0E7d0JBQ0xBLEtBQUtBO3dCQUNMQSxLQUFLQTt3QkFDTEEsS0FBS0E7NEJBQ0RBLE9BQU9BO3dCQUVYQSxLQUFLQTt3QkFDTEEsS0FBS0E7d0JBQ0xBLEtBQUtBO3dCQUNMQSxLQUFLQTs0QkFDREEsT0FBT0E7d0JBRVhBLEtBQUtBOzRCQUNEQSxPQUFPQTt3QkFFWEEsS0FBS0E7NEJBQ0RBLE9BQU9BO3dCQUVYQSxLQUFLQTs0QkFDREEsT0FBT0E7d0JBRVhBLEtBQUtBOzRCQUNEQSxPQUFPQTt3QkFFWEEsS0FBS0E7NEJBQ0RBLE9BQU9BO3dCQUVYQSxLQUFLQTt3QkFDTEEsS0FBS0E7d0JBQ0xBLEtBQUtBO3dCQUNMQSxLQUFLQTs0QkFDREEsT0FBT0E7d0JBRVhBLEtBQUtBO3dCQUNMQSxLQUFLQTt3QkFDTEEsS0FBS0E7d0JBQ0xBLEtBQUtBOzRCQUNEQSxPQUFPQTt3QkFFWEEsS0FBS0E7NEJBQ0RBLE9BQU9BO3dCQUVYQSxLQUFLQTs0QkFDREEsT0FBT0E7d0JBRVhBLEtBQUtBOzRCQUNEQSxPQUFPQTt3QkFFWEEsS0FBS0E7d0JBQ0xBLEtBQUtBO3dCQUNMQSxLQUFLQTt3QkFDTEEsS0FBS0E7NEJBQ0RBLE9BQU9BO3dCQUVYQSxLQUFLQTs0QkFDREEsT0FBT0E7d0JBRVhBLEtBQUtBOzRCQUNEQSxPQUFPQTt3QkFFWEEsS0FBS0E7d0JBQ0xBLEtBQUtBO3dCQUNMQSxLQUFLQTt3QkFDTEEsS0FBS0E7NEJBQ0RBLE9BQU9BO3dCQUVYQSxLQUFLQTs0QkFDREEsT0FBT0E7d0JBRVhBLEtBQUtBO3dCQUNMQSxLQUFLQTt3QkFDTEEsS0FBS0E7d0JBQ0xBLEtBQUtBO3dCQUNMQSxLQUFLQTs0QkFDREEsT0FBT0E7d0JBRVhBOzRCQUNJQSxNQUFNQSxJQUFJQTs7O2dEQUlnQ0E7b0JBRWxEQSxRQUFRQTt3QkFFSkEsS0FBS0E7d0JBQ0xBLEtBQUtBO3dCQUNMQSxLQUFLQTt3QkFDTEEsS0FB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akJBOzs4QkFHaUJBOzsrREFDakJBOzs7O2tDQWVtQkEsU0FBU0E7Z0JBRXJDQSx3QkFBd0JBLEFBQUNBLEFBQStCQSxBQUFDQTtnQkFDekRBLDJGQUEwQkEsQUFBQ0EsWUFBbUJBLENBQUNBO2dCQUMvQ0EsT0FBT0EsQUFBQ0EsWUFBU0EsQ0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBMUdkQSxPQUFPQTs7O29CQUdQQSwyQkFBMkJBOzs7Ozs7Ozs7Ozs7OztvQkFTM0JBLE9BQU9BOzs7Ozs7Ozs7Ozs7OztvQkFTUEEsT0FBT0E7OztvQkFHUEEsbUJBQW1CQTs7Ozs7Ozs7Ozs7Ozs7b0JBU25CQSxPQUFPQTs7Ozs7Ozs7Ozs7Ozs7b0JBU1BBLE9BQU9BOzs7b0JBR1BBLG9CQUFvQkE7Ozs7Ozs7O29DQTVFNERBOzs7Ozs7OEJBS25FQTs7O2dCQUNqQkEsaURBQTZCQTs7OEJBR1pBOzsrREFDUkE7OzhCQUdRQTs7K0RBQ1JBOzs4QkFHUUE7OytEQUNSQTs7OEJBR1FBOzsrREFDUkE7Ozs7a0NBMERtQkEsU0FBU0E7Z0JBRXJDQSwyQkFBMkJBLEFBQUNBLEFBQXNCQSxBQUFDQTtnQkFDbkRBLG1CQUFtQkEsbUlBQWdIQSxnQkFBV0EsQUFBNEdBO2dCQUEwREE7Z0JBQ3BUQSxvQkFBb0JBLEtBQUlBLG9GQUF3REEsNEJBQXNIQSxBQUFDQSxBQUFzQkEsQUFBQ0EsOENBQW9CQSxBQUErR0E7Z0JBQ2pXQSwyRkFBMEJBLEFBQUNBLFlBQW1CQSxDQUFDQTtnQkFDL0NBLE9BQU9BLEFBQUNBLFlBQVNBLENBQUNBOzs7Ozs7Ozs7bUJBSDZPQSxJQUFJQSx1RkFBNENBOzs7bUJBQ2tTQSxJQUFJQSxxR0FBMERBOzs7bUJBQXpTQSxzSUFBbUhBLEdBQUdBLEFBQStHQSIsCiAgInNvdXJjZXNDb250ZW50IjogWyJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG5uYW1lc3BhY2UgQ29kZXhcclxue1xyXG4gICAgW0F0dHJpYnV0ZVVzYWdlKEF0dHJpYnV0ZVRhcmdldHMuUHJvcGVydHksIEluaGVyaXRlZCA9IGZhbHNlLCBBbGxvd011bHRpcGxlID0gZmFsc2UpXVxyXG4gICAgcHVibGljIHNlYWxlZCBjbGFzcyBTZWFyY2hEZXNjcmlwdG9ySW5saW5lQXR0cmlidXRlIDogQXR0cmlidXRlXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IGJvb2wgSW5saW5lO1xyXG5cclxuICAgICAgICBwdWJsaWMgU2VhcmNoRGVzY3JpcHRvcklubGluZUF0dHJpYnV0ZShib29sIGlubGluZSA9IGZhbHNlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgSW5saW5lID0gaW5saW5lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBbQXR0cmlidXRlVXNhZ2UoQXR0cmlidXRlVGFyZ2V0cy5Qcm9wZXJ0eSwgSW5oZXJpdGVkID0gZmFsc2UsIEFsbG93TXVsdGlwbGUgPSBmYWxzZSldXHJcbiAgICBwdWJsaWMgc2VhbGVkIGNsYXNzIEVudGl0eUlkQXR0cmlidXRlIDogQXR0cmlidXRlXHJcbiAgICB7XHJcbiAgICB9XHJcblxyXG4gICAgW0F0dHJpYnV0ZVVzYWdlKEF0dHJpYnV0ZVRhcmdldHMuQ2xhc3MsIEluaGVyaXRlZCA9IGZhbHNlLCBBbGxvd011bHRpcGxlID0gZmFsc2UpXVxyXG4gICAgcHVibGljIHNlYWxlZCBjbGFzcyBQbGFjZWhvbGRlckF0dHJpYnV0ZSA6IEF0dHJpYnV0ZVxyXG4gICAge1xyXG4gICAgfVxyXG5cclxuICAgIFtBdHRyaWJ1dGVVc2FnZShBdHRyaWJ1dGVUYXJnZXRzLkNsYXNzLCBJbmhlcml0ZWQgPSBmYWxzZSwgQWxsb3dNdWx0aXBsZSA9IGZhbHNlKV1cclxuICAgIHB1YmxpYyBzZWFsZWQgY2xhc3MgU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSA6IEF0dHJpYnV0ZVxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyByZWFkb25seSBUeXBlIFR5cGU7XHJcblxyXG4gICAgICAgIHB1YmxpYyBTZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKFR5cGUgdHlwZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFR5cGUgPSB0eXBlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBbQXR0cmlidXRlVXNhZ2UoQXR0cmlidXRlVGFyZ2V0cy5JbnRlcmZhY2UsIEluaGVyaXRlZCA9IGZhbHNlLCBBbGxvd011bHRpcGxlID0gZmFsc2UpXVxyXG4gICAgcHVibGljIHNlYWxlZCBjbGFzcyBBZGFwdGVyVHlwZUF0dHJpYnV0ZSA6IEF0dHJpYnV0ZVxyXG4gICAge1xyXG4gICAgfVxyXG5cclxuICAgIFtBdHRyaWJ1dGVVc2FnZShBdHRyaWJ1dGVUYXJnZXRzLkludGVyZmFjZSwgSW5oZXJpdGVkID0gZmFsc2UsIEFsbG93TXVsdGlwbGUgPSBmYWxzZSldXHJcbiAgICBwdWJsaWMgc2VhbGVkIGNsYXNzIEdlbmVyYXRlZENsYXNzTmFtZUF0dHJpYnV0ZSA6IEF0dHJpYnV0ZVxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyByZWFkb25seSBzdHJpbmcgTmFtZTtcclxuXHJcbiAgICAgICAgcHVibGljIEdlbmVyYXRlZENsYXNzTmFtZUF0dHJpYnV0ZShzdHJpbmcgbmFtZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIE5hbWUgPSBuYW1lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8gSW5kaWNhdGVzIGFuIGF0dGFjaGVkIHByb3BlcnR5IHdoaWNoIGlzIG5vdCBpbnRyaW5zaWMgdG8gdGhlIHBhcmVudCBvYmplY3QgYW5kIHNob3VsZCBiZVxyXG4gICAgLy8vIGV4Y2x1ZGVkIHdoZW4gY29tcHV0aW5nIHRoZSA8c2VlIGNyZWY9XCJJU2VhcmNoRW50aXR5LkVudGl0eUNvbnRlbnRJZFwiLz5cclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBbQXR0cmlidXRlVXNhZ2UoQXR0cmlidXRlVGFyZ2V0cy5Qcm9wZXJ0eSwgSW5oZXJpdGVkID0gZmFsc2UsIEFsbG93TXVsdGlwbGUgPSBmYWxzZSldXHJcbiAgICBwdWJsaWMgc2VhbGVkIGNsYXNzIEF0dGFjaGVkQXR0cmlidXRlIDogQXR0cmlidXRlXHJcbiAgICB7XHJcbiAgICB9XHJcblxyXG4gICAgW0F0dHJpYnV0ZVVzYWdlKEF0dHJpYnV0ZVRhcmdldHMuUHJvcGVydHksIEluaGVyaXRlZCA9IGZhbHNlLCBBbGxvd011bHRpcGxlID0gZmFsc2UpXVxyXG4gICAgcHVibGljIHNlYWxlZCBjbGFzcyBRdWVyeUF0dHJpYnV0ZSA6IEF0dHJpYnV0ZVxyXG4gICAge1xyXG4gICAgfVxyXG5cclxuICAgIFtBdHRyaWJ1dGVVc2FnZShBdHRyaWJ1dGVUYXJnZXRzLlByb3BlcnR5LCBJbmhlcml0ZWQgPSBmYWxzZSwgQWxsb3dNdWx0aXBsZSA9IGZhbHNlKV1cclxuICAgIHB1YmxpYyBzZWFsZWQgY2xhc3MgUmVhZE9ubHlMaXN0QXR0cmlidXRlIDogQXR0cmlidXRlXHJcbiAgICB7XHJcbiAgICB9XHJcblxyXG4gICAgW0F0dHJpYnV0ZVVzYWdlKEF0dHJpYnV0ZVRhcmdldHMuUHJvcGVydHksIEluaGVyaXRlZCA9IGZhbHNlLCBBbGxvd011bHRpcGxlID0gZmFsc2UpXVxyXG4gICAgcHVibGljIHNlYWxlZCBjbGFzcyBDb2VyY2VHZXRBdHRyaWJ1dGUgOiBBdHRyaWJ1dGVcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgVHlwZSBDb2VyY2VkU291cmNlVHlwZTtcclxuXHJcbiAgICAgICAgcHVibGljIENvZXJjZUdldEF0dHJpYnV0ZShUeXBlIGNvZXJjZWRTb3VyY2VUeXBlID0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIENvZXJjZWRTb3VyY2VUeXBlID0gY29lcmNlZFNvdXJjZVR5cGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyBJbmRpY2F0ZXMgc3RhZ2VzIGZvciB3aGljaCB0aGUgZ2l2ZW4gcHJvcGVydHkgc2hvdWxkIGJlIGluY2x1ZGVkXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgW0F0dHJpYnV0ZVVzYWdlKEF0dHJpYnV0ZVRhcmdldHMuUHJvcGVydHksIEluaGVyaXRlZCA9IGZhbHNlLCBBbGxvd011bHRpcGxlID0gZmFsc2UpXVxyXG4gICAgcHVibGljIHNlYWxlZCBjbGFzcyBJbmNsdWRlQXR0cmlidXRlIDogQXR0cmlidXRlXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IE9iamVjdFN0YWdlIEFsbG93ZWRTdGFnZXM7XHJcblxyXG4gICAgICAgIHB1YmxpYyBJbmNsdWRlQXR0cmlidXRlKE9iamVjdFN0YWdlIHN0YWdlcylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEFsbG93ZWRTdGFnZXMgPSBzdGFnZXM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFtBdHRyaWJ1dGVVc2FnZShBdHRyaWJ1dGVUYXJnZXRzLlByb3BlcnR5IHwgQXR0cmlidXRlVGFyZ2V0cy5JbnRlcmZhY2UgfCBBdHRyaWJ1dGVUYXJnZXRzLkNsYXNzLCBJbmhlcml0ZWQgPSBmYWxzZSwgQWxsb3dNdWx0aXBsZSA9IGZhbHNlKV1cclxuICAgIHB1YmxpYyBzZWFsZWQgY2xhc3MgUmVxdWlyZWRGb3JBdHRyaWJ1dGUgOiBBdHRyaWJ1dGVcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgT2JqZWN0U3RhZ2UgU3RhZ2VzO1xyXG5cclxuICAgICAgICBwdWJsaWMgUmVxdWlyZWRGb3JBdHRyaWJ1dGUoT2JqZWN0U3RhZ2Ugc3RhZ2VzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgU3RhZ2VzID0gc3RhZ2VzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZW51bSBPYmplY3RTdGFnZVxyXG4gICAge1xyXG4gICAgICAgIE5vbmUgPSAwLFxyXG4gICAgICAgIEFuYWx5c2lzID0gMSxcclxuICAgICAgICBJbmRleCA9IDEgPDwgMSxcclxuICAgICAgICBTZWFyY2ggPSAxIDw8IDIsXHJcbiAgICAgICAgQWxsID0gU2VhcmNoIHwgSW5kZXggfCBBbmFseXNpc1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlbnVtIFNlYXJjaEJlaGF2aW9yXHJcbiAgICB7XHJcbiAgICAgICAgTm9uZSxcclxuICAgICAgICBUZXJtLFxyXG4gICAgICAgIE5vcm1hbGl6ZWRLZXl3b3JkLFxyXG4gICAgICAgIFNvcnR3b3JkLFxyXG4gICAgICAgIEhpZXJhcmNoaWNhbFBhdGgsXHJcbiAgICAgICAgRnVsbFRleHQsXHJcbiAgICAgICAgUHJlZml4LFxyXG4gICAgICAgIFByZWZpeEZ1bGxOYW1lXHJcbiAgICB9XHJcblxyXG4gICAgW0F0dHJpYnV0ZVVzYWdlKEF0dHJpYnV0ZVRhcmdldHMuUHJvcGVydHksIEluaGVyaXRlZCA9IGZhbHNlLCBBbGxvd011bHRpcGxlID0gZmFsc2UpXVxyXG4gICAgcHVibGljIHNlYWxlZCBjbGFzcyBTZWFyY2hCZWhhdmlvckF0dHJpYnV0ZSA6IEF0dHJpYnV0ZVxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyByZWFkb25seSBTZWFyY2hCZWhhdmlvciBCZWhhdmlvcjtcclxuXHJcbiAgICAgICAgcHVibGljIFNlYXJjaEJlaGF2aW9yQXR0cmlidXRlKFNlYXJjaEJlaGF2aW9yIGJlaGF2aW9yKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQmVoYXZpb3IgPSBiZWhhdmlvcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcblxyXG5uYW1lc3BhY2UgQ29kZXhcclxue1xyXG4gICAgcHVibGljIGVudW0gRGF0YUluY2x1c2lvbk9wdGlvbnNcbiAgICB7XG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gRGF0YSBzaG91bGQgYWx3YXlzIGJlIGluY2x1ZGVkXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cbiAgICAgICAgTm9uZSA9IDAsXG4gICAgICAgIERlZmluaXRpb25zID0gMSxcbiAgICAgICAgUmVmZXJlbmNlcyA9IDEgPDwgMSxcbiAgICAgICAgQ2xhc3NpZmljYXRpb25zID0gMSA8PCAyLFxuICAgICAgICBTZWFyY2hEZWZpbml0aW9ucyA9IDEgPDwgMyxcbiAgICAgICAgU2VhcmNoUmVmZXJlbmNlcyA9IDEgPDwgNCxcbiAgICAgICAgQ29udGVudCA9IDEgPDwgNSxcbiAgICAgICAgQWxsID0gRGVmaW5pdGlvbnMgfCBSZWZlcmVuY2VzIHwgQ2xhc3NpZmljYXRpb25zIHwgU2VhcmNoRGVmaW5pdGlvbnMgfCBTZWFyY2hSZWZlcmVuY2VzIHwgQ29udGVudCxcblxuICAgICAgICAvLyBEZWZhdWx0IGRvZXMgbm90IGluY2x1ZGUgZGVmaW5pdGlvbnMgc2luY2UgdGhleSBjYW4gYmUgcXVlcmllZCBsYXppbHkgcmF0aGVyIHRoYW4gZWFnZXJseSByZXRyaWV2ZWQuXG4gICAgICAgIERlZmF1bHQgPSBSZWZlcmVuY2VzIHwgQ2xhc3NpZmljYXRpb25zIHwgU2VhcmNoRGVmaW5pdGlvbnMgfCBTZWFyY2hSZWZlcmVuY2VzIHwgQ29udGVudFxuICAgIH1cclxuXHJcbiAgICBbQXR0cmlidXRlVXNhZ2UoQXR0cmlidXRlVGFyZ2V0cy5Qcm9wZXJ0eSwgSW5oZXJpdGVkID0gZmFsc2UsIEFsbG93TXVsdGlwbGUgPSBmYWxzZSldXHJcbiAgICBwdWJsaWMgc2VhbGVkIGNsYXNzIERhdGFJbmNsdXNpb25BdHRyaWJ1dGUgOiBBdHRyaWJ1dGVcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgRGF0YUluY2x1c2lvbk9wdGlvbnMgRGF0YUluY2x1c2lvbjtcclxuXHJcbiAgICAgICAgcHVibGljIERhdGFJbmNsdXNpb25BdHRyaWJ1dGUoRGF0YUluY2x1c2lvbk9wdGlvbnMgZGF0YUluY2x1c2lvbilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIERhdGFJbmNsdXNpb24gPSBkYXRhSW5jbHVzaW9uO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG5uYW1lc3BhY2UgQ29kZXhcclxue1xyXG4gICAgcHVibGljIHN0YXRpYyBjbGFzcyBFbnRpdHlVdGlsaXRpZXNcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIFRUYXJnZXQgTnVsbE9yQ29weTxULCBUVGFyZ2V0PihUIG9iaiwgRnVuYzxULCBUVGFyZ2V0PiBjb3B5KVxyXG4gICAgICAgICAgICB3aGVyZSBUIDogY2xhc3NcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IGNsYXNzLCBUXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAob2JqID09IG51bGwpIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICByZXR1cm4gY29weShvYmopO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIDxhdXRvLWdlbmVyYXRlZD5cclxuLy8gICAgIFRoaXMgY29kZSB3YXMgZ2VuZXJhdGVkIGJ5IGEgdG9vbC5cclxuLy8gICAgIFJ1bnRpbWUgVmVyc2lvbjo0LjAuMzAzMTkuNDIwMDBcclxuLy9cclxuLy8gICAgIENoYW5nZXMgdG8gdGhpcyBmaWxlIG1heSBjYXVzZSBpbmNvcnJlY3QgYmVoYXZpb3IgYW5kIHdpbGwgYmUgbG9zdCBpZlxyXG4vLyAgICAgdGhlIGNvZGUgaXMgcmVnZW5lcmF0ZWQuXHJcbi8vIDwvYXV0by1nZW5lcmF0ZWQ+XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5uYW1lc3BhY2UgQ29kZXguT2JqZWN0TW9kZWwge1xyXG4gICAgdXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxuICAgIHVzaW5nIENvZGV4LkZyYW1ld29yay5UeXBlcztcclxuICAgIFxyXG4gICAgXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBDb2RleFR5cGVVdGlsaXRpZXMge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklSZWFkT25seURpY3Rpb25hcnk8U3lzdGVtLlR5cGUsIFN5c3RlbS5UeXBlPiBzX3R5cGVNYXBwaW5ncyA9IENyZWF0ZVR5cGVNYXBwaW5nKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuRGljdGlvbmFyeTxTeXN0ZW0uVHlwZSwgU3lzdGVtLlR5cGU+IENyZWF0ZVR5cGVNYXBwaW5nKCkge1xyXG4gICAgICAgICAgICBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5EaWN0aW9uYXJ5PFN5c3RlbS5UeXBlLCBTeXN0ZW0uVHlwZT4gdHlwZU1hcHBpbmcgPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuRGljdGlvbmFyeTxTeXN0ZW0uVHlwZSwgU3lzdGVtLlR5cGU+KCk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSUNvbW1pdCksIHR5cGVvZihDb21taXQpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb21taXQpLCB0eXBlb2YoQ29kZXguSUNvbW1pdCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklDb21taXRDaGFuZ2VkRmlsZSksIHR5cGVvZihDb21taXRDaGFuZ2VkRmlsZSkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvbW1pdENoYW5nZWRGaWxlKSwgdHlwZW9mKENvZGV4LklDb21taXRDaGFuZ2VkRmlsZSkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklDb21taXRGaWxlTGluayksIHR5cGVvZihDb21taXRGaWxlTGluaykpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvbW1pdEZpbGVMaW5rKSwgdHlwZW9mKENvZGV4LklDb21taXRGaWxlTGluaykpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklCcmFuY2gpLCB0eXBlb2YoQnJhbmNoKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQnJhbmNoKSwgdHlwZW9mKENvZGV4LklCcmFuY2gpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JQm91bmRTb3VyY2VGaWxlKSwgdHlwZW9mKEJvdW5kU291cmNlRmlsZSkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKEJvdW5kU291cmNlRmlsZSksIHR5cGVvZihDb2RleC5JQm91bmRTb3VyY2VGaWxlKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSUJvdW5kU291cmNlSW5mbyksIHR5cGVvZihCb3VuZFNvdXJjZUluZm8pKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihCb3VuZFNvdXJjZUluZm8pLCB0eXBlb2YoQ29kZXguSUJvdW5kU291cmNlSW5mbykpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklTb3VyY2VDb250cm9sRmlsZUluZm8pLCB0eXBlb2YoU291cmNlQ29udHJvbEZpbGVJbmZvKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoU291cmNlQ29udHJvbEZpbGVJbmZvKSwgdHlwZW9mKENvZGV4LklTb3VyY2VDb250cm9sRmlsZUluZm8pKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JU291cmNlRmlsZUluZm8pLCB0eXBlb2YoU291cmNlRmlsZUluZm8pKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihTb3VyY2VGaWxlSW5mbyksIHR5cGVvZihDb2RleC5JU291cmNlRmlsZUluZm8pKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JRW5jb2RpbmdEZXNjcmlwdGlvbiksIHR5cGVvZihFbmNvZGluZ0Rlc2NyaXB0aW9uKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoRW5jb2RpbmdEZXNjcmlwdGlvbiksIHR5cGVvZihDb2RleC5JRW5jb2RpbmdEZXNjcmlwdGlvbikpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklTb3VyY2VGaWxlKSwgdHlwZW9mKFNvdXJjZUZpbGUpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihTb3VyY2VGaWxlKSwgdHlwZW9mKENvZGV4LklTb3VyY2VGaWxlKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSU91dGxpbmluZ1JlZ2lvbiksIHR5cGVvZihPdXRsaW5pbmdSZWdpb24pKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihPdXRsaW5pbmdSZWdpb24pLCB0eXBlb2YoQ29kZXguSU91dGxpbmluZ1JlZ2lvbikpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklEZWZpbml0aW9uU3BhbiksIHR5cGVvZihEZWZpbml0aW9uU3BhbikpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKERlZmluaXRpb25TcGFuKSwgdHlwZW9mKENvZGV4LklEZWZpbml0aW9uU3BhbikpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklQYXJhbWV0ZXJEZWZpbml0aW9uU3BhbiksIHR5cGVvZihQYXJhbWV0ZXJEZWZpbml0aW9uU3BhbikpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKFBhcmFtZXRlckRlZmluaXRpb25TcGFuKSwgdHlwZW9mKENvZGV4LklQYXJhbWV0ZXJEZWZpbml0aW9uU3BhbikpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklSZWZlcmVuY2VTcGFuKSwgdHlwZW9mKFJlZmVyZW5jZVNwYW4pKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihSZWZlcmVuY2VTcGFuKSwgdHlwZW9mKENvZGV4LklSZWZlcmVuY2VTcGFuKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSVBhcmFtZXRlclJlZmVyZW5jZVNwYW4pLCB0eXBlb2YoUGFyYW1ldGVyUmVmZXJlbmNlU3BhbikpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKFBhcmFtZXRlclJlZmVyZW5jZVNwYW4pLCB0eXBlb2YoQ29kZXguSVBhcmFtZXRlclJlZmVyZW5jZVNwYW4pKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JQ2xhc3NpZmljYXRpb25TcGFuKSwgdHlwZW9mKENsYXNzaWZpY2F0aW9uU3BhbikpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENsYXNzaWZpY2F0aW9uU3BhbiksIHR5cGVvZihDb2RleC5JQ2xhc3NpZmljYXRpb25TcGFuKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSVN5bWJvbFNwYW4pLCB0eXBlb2YoU3ltYm9sU3BhbikpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKFN5bWJvbFNwYW4pLCB0eXBlb2YoQ29kZXguSVN5bWJvbFNwYW4pKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JVGV4dExpbmVTcGFuKSwgdHlwZW9mKFRleHRMaW5lU3BhbikpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKFRleHRMaW5lU3BhbiksIHR5cGVvZihDb2RleC5JVGV4dExpbmVTcGFuKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSUxpbmVTcGFuKSwgdHlwZW9mKExpbmVTcGFuKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoTGluZVNwYW4pLCB0eXBlb2YoQ29kZXguSUxpbmVTcGFuKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSVNwYW4pLCB0eXBlb2YoU3BhbikpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKFNwYW4pLCB0eXBlb2YoQ29kZXguSVNwYW4pKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JQ29kZVJldmlldyksIHR5cGVvZihDb2RlUmV2aWV3KSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZVJldmlldyksIHR5cGVvZihDb2RleC5JQ29kZVJldmlldykpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklDb2RlUmV2aWV3SXRlcmF0aW9uKSwgdHlwZW9mKENvZGVSZXZpZXdJdGVyYXRpb24pKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RlUmV2aWV3SXRlcmF0aW9uKSwgdHlwZW9mKENvZGV4LklDb2RlUmV2aWV3SXRlcmF0aW9uKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSUNvZGVSZXZpZXdlckluZm8pLCB0eXBlb2YoQ29kZVJldmlld2VySW5mbykpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGVSZXZpZXdlckluZm8pLCB0eXBlb2YoQ29kZXguSUNvZGVSZXZpZXdlckluZm8pKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JQ29kZVJldmlld0ZpbGUpLCB0eXBlb2YoQ29kZVJldmlld0ZpbGUpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RlUmV2aWV3RmlsZSksIHR5cGVvZihDb2RleC5JQ29kZVJldmlld0ZpbGUpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JQ29kZVJldmlld0NvbW1lbnRUaHJlYWQpLCB0eXBlb2YoQ29kZVJldmlld0NvbW1lbnRUaHJlYWQpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RlUmV2aWV3Q29tbWVudFRocmVhZCksIHR5cGVvZihDb2RleC5JQ29kZVJldmlld0NvbW1lbnRUaHJlYWQpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JQ29kZVJldmlld0NvbW1lbnQpLCB0eXBlb2YoQ29kZVJldmlld0NvbW1lbnQpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RlUmV2aWV3Q29tbWVudCksIHR5cGVvZihDb2RleC5JQ29kZVJldmlld0NvbW1lbnQpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JTGFuZ3VhZ2VJbmZvKSwgdHlwZW9mKExhbmd1YWdlSW5mbykpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKExhbmd1YWdlSW5mbyksIHR5cGVvZihDb2RleC5JTGFuZ3VhZ2VJbmZvKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSUNsYXNzaWZpY2F0aW9uU3R5bGUpLCB0eXBlb2YoQ2xhc3NpZmljYXRpb25TdHlsZSkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENsYXNzaWZpY2F0aW9uU3R5bGUpLCB0eXBlb2YoQ29kZXguSUNsYXNzaWZpY2F0aW9uU3R5bGUpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JUHJvamVjdCksIHR5cGVvZihBbmFseXplZFByb2plY3QpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihBbmFseXplZFByb2plY3QpLCB0eXBlb2YoQ29kZXguSVByb2plY3QpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JUmVmZXJlbmNlZFByb2plY3QpLCB0eXBlb2YoUmVmZXJlbmNlZFByb2plY3QpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihSZWZlcmVuY2VkUHJvamVjdCksIHR5cGVvZihDb2RleC5JUmVmZXJlbmNlZFByb2plY3QpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JUHJvamVjdEZpbGVMaW5rKSwgdHlwZW9mKFByb2plY3RGaWxlTGluaykpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKFByb2plY3RGaWxlTGluayksIHR5cGVvZihDb2RleC5JUHJvamVjdEZpbGVMaW5rKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSURvY3VtZW50YXRpb25JbmZvKSwgdHlwZW9mKERvY3VtZW50YXRpb25JbmZvKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoRG9jdW1lbnRhdGlvbkluZm8pLCB0eXBlb2YoQ29kZXguSURvY3VtZW50YXRpb25JbmZvKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSVBhcmFtZXRlckRvY3VtZW50YXRpb24pLCB0eXBlb2YoUGFyYW1ldGVyRG9jdW1lbnRhdGlvbikpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKFBhcmFtZXRlckRvY3VtZW50YXRpb24pLCB0eXBlb2YoQ29kZXguSVBhcmFtZXRlckRvY3VtZW50YXRpb24pKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JVHlwZWRQYXJhbWV0ZXJEb2N1bWVudGF0aW9uKSwgdHlwZW9mKFR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbikpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKFR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbiksIHR5cGVvZihDb2RleC5JVHlwZWRQYXJhbWV0ZXJEb2N1bWVudGF0aW9uKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSURvY3VtZW50YXRpb25SZWZlcmVuY2VTeW1ib2wpLCB0eXBlb2YoRG9jdW1lbnRhdGlvblJlZmVyZW5jZVN5bWJvbCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKERvY3VtZW50YXRpb25SZWZlcmVuY2VTeW1ib2wpLCB0eXBlb2YoQ29kZXguSURvY3VtZW50YXRpb25SZWZlcmVuY2VTeW1ib2wpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JUHJvcGVydHlTZWFyY2hNb2RlbCksIHR5cGVvZihQcm9wZXJ0eVNlYXJjaE1vZGVsKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoUHJvcGVydHlTZWFyY2hNb2RlbCksIHR5cGVvZihDb2RleC5JUHJvcGVydHlTZWFyY2hNb2RlbCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklQcm9wZXJ0eU1hcCksIHR5cGVvZihQcm9wZXJ0eU1hcCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKFByb3BlcnR5TWFwKSwgdHlwZW9mKENvZGV4LklQcm9wZXJ0eU1hcCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklSZXBvc2l0b3J5KSwgdHlwZW9mKFJlcG9zaXRvcnkpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihSZXBvc2l0b3J5KSwgdHlwZW9mKENvZGV4LklSZXBvc2l0b3J5KSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSVJlcG9zaXRvcnlSZWZlcmVuY2UpLCB0eXBlb2YoUmVwb3NpdG9yeVJlZmVyZW5jZSkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKFJlcG9zaXRvcnlSZWZlcmVuY2UpLCB0eXBlb2YoQ29kZXguSVJlcG9zaXRvcnlSZWZlcmVuY2UpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JU2VhcmNoRW50aXR5KSwgdHlwZW9mKFNlYXJjaEVudGl0eSkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKFNlYXJjaEVudGl0eSksIHR5cGVvZihDb2RleC5JU2VhcmNoRW50aXR5KSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSVJlcG9TY29wZUVudGl0eSksIHR5cGVvZihSZXBvU2NvcGVFbnRpdHkpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihSZXBvU2NvcGVFbnRpdHkpLCB0eXBlb2YoQ29kZXguSVJlcG9TY29wZUVudGl0eSkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklDb21taXRTY29wZUVudGl0eSksIHR5cGVvZihDb21taXRTY29wZUVudGl0eSkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvbW1pdFNjb3BlRW50aXR5KSwgdHlwZW9mKENvZGV4LklDb21taXRTY29wZUVudGl0eSkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklQcm9qZWN0U2NvcGVFbnRpdHkpLCB0eXBlb2YoUHJvamVjdFNjb3BlRW50aXR5KSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoUHJvamVjdFNjb3BlRW50aXR5KSwgdHlwZW9mKENvZGV4LklQcm9qZWN0U2NvcGVFbnRpdHkpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JUmVwb0ZpbGVTY29wZUVudGl0eSksIHR5cGVvZihSZXBvRmlsZVNjb3BlRW50aXR5KSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoUmVwb0ZpbGVTY29wZUVudGl0eSksIHR5cGVvZihDb2RleC5JUmVwb0ZpbGVTY29wZUVudGl0eSkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklQcm9qZWN0RmlsZVNjb3BlRW50aXR5KSwgdHlwZW9mKFByb2plY3RGaWxlU2NvcGVFbnRpdHkpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihQcm9qZWN0RmlsZVNjb3BlRW50aXR5KSwgdHlwZW9mKENvZGV4LklQcm9qZWN0RmlsZVNjb3BlRW50aXR5KSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSVJlZ2lzdGVyZWRFbnRpdHkpLCB0eXBlb2YoUmVnaXN0ZXJlZEVudGl0eSkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKFJlZ2lzdGVyZWRFbnRpdHkpLCB0eXBlb2YoQ29kZXguSVJlZ2lzdGVyZWRFbnRpdHkpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JU3RvcmVkRmlsdGVyKSwgdHlwZW9mKFN0b3JlZEZpbHRlcikpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKFN0b3JlZEZpbHRlciksIHR5cGVvZihDb2RleC5JU3RvcmVkRmlsdGVyKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSURlZmluaXRpb25TZWFyY2hNb2RlbCksIHR5cGVvZihEZWZpbml0aW9uU2VhcmNoTW9kZWwpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihEZWZpbml0aW9uU2VhcmNoTW9kZWwpLCB0eXBlb2YoQ29kZXguSURlZmluaXRpb25TZWFyY2hNb2RlbCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklMYW5ndWFnZVNlYXJjaE1vZGVsKSwgdHlwZW9mKExhbmd1YWdlU2VhcmNoTW9kZWwpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihMYW5ndWFnZVNlYXJjaE1vZGVsKSwgdHlwZW9mKENvZGV4LklMYW5ndWFnZVNlYXJjaE1vZGVsKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSVJlZmVyZW5jZVNlYXJjaE1vZGVsKSwgdHlwZW9mKFJlZmVyZW5jZVNlYXJjaE1vZGVsKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoUmVmZXJlbmNlU2VhcmNoTW9kZWwpLCB0eXBlb2YoQ29kZXguSVJlZmVyZW5jZVNlYXJjaE1vZGVsKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSVNvdXJjZVNlYXJjaE1vZGVsQmFzZSksIHR5cGVvZihTb3VyY2VTZWFyY2hNb2RlbEJhc2UpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihTb3VyY2VTZWFyY2hNb2RlbEJhc2UpLCB0eXBlb2YoQ29kZXguSVNvdXJjZVNlYXJjaE1vZGVsQmFzZSkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklCb3VuZFNvdXJjZVNlYXJjaE1vZGVsKSwgdHlwZW9mKEJvdW5kU291cmNlU2VhcmNoTW9kZWwpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihCb3VuZFNvdXJjZVNlYXJjaE1vZGVsKSwgdHlwZW9mKENvZGV4LklCb3VuZFNvdXJjZVNlYXJjaE1vZGVsKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSVRleHRTb3VyY2VTZWFyY2hNb2RlbCksIHR5cGVvZihUZXh0U291cmNlU2VhcmNoTW9kZWwpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihUZXh0U291cmNlU2VhcmNoTW9kZWwpLCB0eXBlb2YoQ29kZXguSVRleHRTb3VyY2VTZWFyY2hNb2RlbCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklSZXBvc2l0b3J5U2VhcmNoTW9kZWwpLCB0eXBlb2YoUmVwb3NpdG9yeVNlYXJjaE1vZGVsKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoUmVwb3NpdG9yeVNlYXJjaE1vZGVsKSwgdHlwZW9mKENvZGV4LklSZXBvc2l0b3J5U2VhcmNoTW9kZWwpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JUHJvamVjdFNlYXJjaE1vZGVsKSwgdHlwZW9mKFByb2plY3RTZWFyY2hNb2RlbCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKFByb2plY3RTZWFyY2hNb2RlbCksIHR5cGVvZihDb2RleC5JUHJvamVjdFNlYXJjaE1vZGVsKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSVByb2plY3RSZWZlcmVuY2VTZWFyY2hNb2RlbCksIHR5cGVvZihQcm9qZWN0UmVmZXJlbmNlU2VhcmNoTW9kZWwpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihQcm9qZWN0UmVmZXJlbmNlU2VhcmNoTW9kZWwpLCB0eXBlb2YoQ29kZXguSVByb2plY3RSZWZlcmVuY2VTZWFyY2hNb2RlbCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklDb21taXRTZWFyY2hNb2RlbCksIHR5cGVvZihDb21taXRTZWFyY2hNb2RlbCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvbW1pdFNlYXJjaE1vZGVsKSwgdHlwZW9mKENvZGV4LklDb21taXRTZWFyY2hNb2RlbCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklDb21taXRGaWxlc1NlYXJjaE1vZGVsKSwgdHlwZW9mKENvbW1pdEZpbGVzU2VhcmNoTW9kZWwpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb21taXRGaWxlc1NlYXJjaE1vZGVsKSwgdHlwZW9mKENvZGV4LklDb21taXRGaWxlc1NlYXJjaE1vZGVsKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSUZpbGVTdGF0aXN0aWNzKSwgdHlwZW9mKEZpbGVTdGF0aXN0aWNzKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoRmlsZVN0YXRpc3RpY3MpLCB0eXBlb2YoQ29kZXguSUZpbGVTdGF0aXN0aWNzKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSVJlcG9zaXRvcnlTdG9yZUluZm8pLCB0eXBlb2YoUmVwb3NpdG9yeVN0b3JlSW5mbykpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKFJlcG9zaXRvcnlTdG9yZUluZm8pLCB0eXBlb2YoQ29kZXguSVJlcG9zaXRvcnlTdG9yZUluZm8pKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JQ29tbWl0RmlsZXNEaXJlY3RvcnkpLCB0eXBlb2YoQ29tbWl0RmlsZXNEaXJlY3RvcnkpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb21taXRGaWxlc0RpcmVjdG9yeSksIHR5cGVvZihDb2RleC5JQ29tbWl0RmlsZXNEaXJlY3RvcnkpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JU3RvcmVkQm91bmRTb3VyY2VGaWxlKSwgdHlwZW9mKFN0b3JlZEJvdW5kU291cmNlRmlsZSkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKFN0b3JlZEJvdW5kU291cmNlRmlsZSksIHR5cGVvZihDb2RleC5JU3RvcmVkQm91bmRTb3VyY2VGaWxlKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSURlZmluaXRpb25TeW1ib2wpLCB0eXBlb2YoRGVmaW5pdGlvblN5bWJvbCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKERlZmluaXRpb25TeW1ib2wpLCB0eXBlb2YoQ29kZXguSURlZmluaXRpb25TeW1ib2wpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JUmVmZXJlbmNlU3ltYm9sKSwgdHlwZW9mKFJlZmVyZW5jZVN5bWJvbCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKFJlZmVyZW5jZVN5bWJvbCksIHR5cGVvZihDb2RleC5JUmVmZXJlbmNlU3ltYm9sKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSUNvZGVTeW1ib2wpLCB0eXBlb2YoU3ltYm9sKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoU3ltYm9sKSwgdHlwZW9mKENvZGV4LklDb2RlU3ltYm9sKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguU2RrLlNlYXJjaC5JVGV4dExpbmVTcGFuUmVzdWx0KSwgdHlwZW9mKFRleHRMaW5lU3BhblJlc3VsdCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKFRleHRMaW5lU3BhblJlc3VsdCksIHR5cGVvZihDb2RleC5TZGsuU2VhcmNoLklUZXh0TGluZVNwYW5SZXN1bHQpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5TZGsuU2VhcmNoLklTZWFyY2hSZXN1bHQpLCB0eXBlb2YoU2VhcmNoUmVzdWx0KSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoU2VhcmNoUmVzdWx0KSwgdHlwZW9mKENvZGV4LlNkay5TZWFyY2guSVNlYXJjaFJlc3VsdCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LlNkay5TZWFyY2guSUluZGV4KSwgdHlwZW9mKEluZGV4KSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoSW5kZXgpLCB0eXBlb2YoQ29kZXguU2RrLlNlYXJjaC5JSW5kZXgpKTtcclxuICAgICAgICAgICAgcmV0dXJuIHR5cGVNYXBwaW5nO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIERlc2NyaWJlcyBhIGNvbW1pdCBpbiB2ZXJzaW9uIGNvbnRyb2xcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSUNvbW1pdCkpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgQ29tbWl0IDogQ29tbWl0U2NvcGVFbnRpdHksIENvZGV4LklDb21taXQge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fRGVzY3JpcHRpb247XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uRGF0ZVRpbWUgbV9EYXRlVXBsb2FkZWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uRGF0ZVRpbWUgbV9EYXRlQ29tbWl0dGVkO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxzdHJpbmc+IG1fUGFyZW50Q29tbWl0SWRzID0gbmV3IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8c3RyaW5nPigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxDb21taXRDaGFuZ2VkRmlsZT4gbV9DaGFuZ2VkRmlsZXMgPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxDb21taXRDaGFuZ2VkRmlsZT4oKTtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQ29tbWl0KCkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQ29tbWl0KENvZGV4LklDb21taXQgdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxDb21taXQ+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIENvbW1pdChDb2RleC5JQ29tbWl0U2NvcGVFbnRpdHkgdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBDb21taXQoQ29kZXguSVJlcG9TY29wZUVudGl0eSB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgY29tbWl0IGRlc2NyaXB0aW9uIGRlc2NyaWJpbmcgdGhlIGNoYW5nZXNcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBEZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0Rlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fRGVzY3JpcHRpb24gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBkYXRlIHRoZSBjb21taXQgd2FzIHN0b3JlZCB0byB0aGUgaW5kZXhcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFN5c3RlbS5EYXRlVGltZSBEYXRlVXBsb2FkZWQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9EYXRlVXBsb2FkZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9EYXRlVXBsb2FkZWQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBkYXRlIG9mIHRoZSBjb21taXRcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFN5c3RlbS5EYXRlVGltZSBEYXRlQ29tbWl0dGVkIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fRGF0ZUNvbW1pdHRlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0RhdGVDb21taXR0ZWQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSA8c2VlIGNyZWY9XCJQOkNvZGV4LklDb21taXRTY29wZUVudGl0eS5Db21taXRJZFwiIC8+IG9mIHRoZSBwYXJlbnQgY29tbWl0c1xyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSVJlYWRPbmx5TGlzdDxzdHJpbmc+IENvZGV4LklDb21taXQuUGFyZW50Q29tbWl0SWRzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLlBhcmVudENvbW1pdElkcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSA8c2VlIGNyZWY9XCJQOkNvZGV4LklDb21taXRTY29wZUVudGl0eS5Db21taXRJZFwiIC8+IG9mIHRoZSBwYXJlbnQgY29tbWl0c1xyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxzdHJpbmc+IFBhcmVudENvbW1pdElkcyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1BhcmVudENvbW1pdElkcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1BhcmVudENvbW1pdElkcyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGZpbGVzIGNoYW5nZWQgaW4gdGhlIGNvbW1pdFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSVJlYWRPbmx5TGlzdDxDb2RleC5JQ29tbWl0Q2hhbmdlZEZpbGU+IENvZGV4LklDb21taXQuQ2hhbmdlZEZpbGVzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkNoYW5nZWRGaWxlcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBmaWxlcyBjaGFuZ2VkIGluIHRoZSBjb21taXRcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8Q29tbWl0Q2hhbmdlZEZpbGU+IENoYW5nZWRGaWxlcyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0NoYW5nZWRGaWxlcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0NoYW5nZWRGaWxlcyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSUNvbW1pdCB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IENvbW1pdCB7XHJcbiAgICAgICAgICAgIHRoaXMubV9EZXNjcmlwdGlvbiA9ICgoQ29kZXguSUNvbW1pdCkodmFsdWUpKS5EZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgdGhpcy5tX0RhdGVVcGxvYWRlZCA9ICgoQ29kZXguSUNvbW1pdCkodmFsdWUpKS5EYXRlVXBsb2FkZWQ7XHJcbiAgICAgICAgICAgIHRoaXMubV9EYXRlQ29tbWl0dGVkID0gKChDb2RleC5JQ29tbWl0KSh2YWx1ZSkpLkRhdGVDb21taXR0ZWQ7XHJcbiAgICAgICAgICAgIHRoaXMubV9QYXJlbnRDb21taXRJZHMgPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxzdHJpbmc+KCgoQ29kZXguSUNvbW1pdCkodmFsdWUpKS5QYXJlbnRDb21taXRJZHMpO1xyXG4gICAgICAgICAgICB0aGlzLm1fQ2hhbmdlZEZpbGVzID0gbmV3IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8Q29tbWl0Q2hhbmdlZEZpbGU+KFN5c3RlbS5MaW5xLkVudW1lcmFibGUuU2VsZWN0PGdsb2JhbDo6Q29kZXguSUNvbW1pdENoYW5nZWRGaWxlLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuQ29tbWl0Q2hhbmdlZEZpbGU+KCgoQ29kZXguSUNvbW1pdCkodmFsdWUpKS5DaGFuZ2VkRmlsZXMsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguSUNvbW1pdENoYW5nZWRGaWxlLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkNvbW1pdENoYW5nZWRGaWxlPikodiA9PiBFbnRpdHlVdGlsaXRpZXMuTnVsbE9yQ29weTxnbG9iYWw6OkNvZGV4LklDb21taXRDaGFuZ2VkRmlsZSxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkNvbW1pdENoYW5nZWRGaWxlPih2LCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4LklDb21taXRDaGFuZ2VkRmlsZSwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Db21taXRDaGFuZ2VkRmlsZT4pKF92ID0+IG5ldyBDb21taXRDaGFuZ2VkRmlsZSgpLkNvcHlGcm9tPENvbW1pdENoYW5nZWRGaWxlPihfdikpKSkpKTtcclxuICAgICAgICAgICAgYmFzZS5Db3B5RnJvbTxDb21taXRTY29wZUVudGl0eT4oKChDb2RleC5JQ29tbWl0U2NvcGVFbnRpdHkpKHZhbHVlKSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8gUmVwcmVzZW50cyBhIGNoYW5nZWQgZmlsZSBpbiBhIGNvbW1pdFxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JQ29tbWl0Q2hhbmdlZEZpbGUpKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIENvbW1pdENoYW5nZWRGaWxlIDogQ29tbWl0RmlsZUxpbmssIENvZGV4LklDb21taXRDaGFuZ2VkRmlsZSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBDb2RleC5GaWxlQ2hhbmdlS2luZCBtX0NoYW5nZUtpbmQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9PcmlnaW5hbEZpbGVQYXRoO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBDb21taXRDaGFuZ2VkRmlsZSgpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIENvbW1pdENoYW5nZWRGaWxlKENvZGV4LklDb21taXRDaGFuZ2VkRmlsZSB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPENvbW1pdENoYW5nZWRGaWxlPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBDb21taXRDaGFuZ2VkRmlsZShDb2RleC5JQ29tbWl0RmlsZUxpbmsgdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHR5cGUgb2YgY2hhbmdlIGFwcGxpZWQgdG8gdGhlIGZpbGVcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIENvZGV4LkZpbGVDaGFuZ2VLaW5kIENoYW5nZUtpbmQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9DaGFuZ2VLaW5kO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fQ2hhbmdlS2luZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gRm9yIGEgcmVuYW1lZCBmaWxlLCB0aGUgcGF0aCB0byB0aGUgZmlsZSBwcmlvciB0byB0aGUgcmVuYW1lXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgT3JpZ2luYWxGaWxlUGF0aCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX09yaWdpbmFsRmlsZVBhdGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9PcmlnaW5hbEZpbGVQYXRoID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JQ29tbWl0Q2hhbmdlZEZpbGUgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBDb21taXRDaGFuZ2VkRmlsZSB7XHJcbiAgICAgICAgICAgIHRoaXMubV9DaGFuZ2VLaW5kID0gKChDb2RleC5JQ29tbWl0Q2hhbmdlZEZpbGUpKHZhbHVlKSkuQ2hhbmdlS2luZDtcclxuICAgICAgICAgICAgdGhpcy5tX09yaWdpbmFsRmlsZVBhdGggPSAoKENvZGV4LklDb21taXRDaGFuZ2VkRmlsZSkodmFsdWUpKS5PcmlnaW5hbEZpbGVQYXRoO1xyXG4gICAgICAgICAgICBiYXNlLkNvcHlGcm9tPENvbW1pdEZpbGVMaW5rPigoKENvZGV4LklDb21taXRGaWxlTGluaykodmFsdWUpKSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyBSZXByZXNlbnRzIGEgdmVyc2lvbiBvZiBhIHJlcG9zaXRvcnkgZmlsZSBmb3IgYSBjb21taXRcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSUNvbW1pdEZpbGVMaW5rKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBDb21taXRGaWxlTGluayA6IENvZGV4LkVudGl0eUJhc2UsIENvZGV4LklDb21taXRGaWxlTGluayB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9SZXBvUmVsYXRpdmVQYXRoO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fRmlsZUlkO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fVmVyc2lvbkNvbnRyb2xGaWxlSWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIENvbW1pdEZpbGVMaW5rKCkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBDb21taXRGaWxlTGluayhDb2RleC5JQ29tbWl0RmlsZUxpbmsgdmFsdWUpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPENvbW1pdEZpbGVMaW5rPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHJlbGF0aXZlIHBhdGggaW4gdGhlIHJlcG9zaXRvcnkgdG8gdGhlIGZpbGVcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBSZXBvUmVsYXRpdmVQYXRoIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUmVwb1JlbGF0aXZlUGF0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1JlcG9SZWxhdGl2ZVBhdGggPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFVuaXF1ZSBpZGVudGlmZXIgZm9yIGZpbGVcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBGaWxlSWQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9GaWxlSWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9GaWxlSWQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFVuaXF1ZSBpZGVudGlmZXIgZm9yIGZpbGUgY29udGVudCBhcyBkZXRlcm1pbmVkIGJ5IHZlcnNpb24gY29udHJvbFxyXG4gICAgICAgIC8vLyAoaS5lLiB0aGUgYmxvYiBoYXNoKVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIFZlcnNpb25Db250cm9sRmlsZUlkIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fVmVyc2lvbkNvbnRyb2xGaWxlSWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9WZXJzaW9uQ29udHJvbEZpbGVJZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSUNvbW1pdEZpbGVMaW5rIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogQ29tbWl0RmlsZUxpbmsge1xyXG4gICAgICAgICAgICB0aGlzLm1fUmVwb1JlbGF0aXZlUGF0aCA9ICgoQ29kZXguSUNvbW1pdEZpbGVMaW5rKSh2YWx1ZSkpLlJlcG9SZWxhdGl2ZVBhdGg7XHJcbiAgICAgICAgICAgIHRoaXMubV9GaWxlSWQgPSAoKENvZGV4LklDb21taXRGaWxlTGluaykodmFsdWUpKS5GaWxlSWQ7XHJcbiAgICAgICAgICAgIHRoaXMubV9WZXJzaW9uQ29udHJvbEZpbGVJZCA9ICgoQ29kZXguSUNvbW1pdEZpbGVMaW5rKSh2YWx1ZSkpLlZlcnNpb25Db250cm9sRmlsZUlkO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8gRGVzY3JpYmVzIGEgYnJhbmNoIGluIGEgcmVwb3NpdG9yeVxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JQnJhbmNoKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBCcmFuY2ggOiBDb2RleC5FbnRpdHlCYXNlLCBDb2RleC5JQnJhbmNoIHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX05hbWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9EZXNjcmlwdGlvbjtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX0hlYWRDb21taXRJZDtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQnJhbmNoKCkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBCcmFuY2goQ29kZXguSUJyYW5jaCB2YWx1ZSkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208QnJhbmNoPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIG5hbWUgb2YgdGhlIGJyYW5jaFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIE5hbWUge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9OYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fTmFtZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGJyYW5jaCBkZXNjcmlwdGlvblxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIERlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fRGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9EZXNjcmlwdGlvbiA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGhlYWQgY29tbWl0IG9mIHRoZSBicmFuY2hcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBIZWFkQ29tbWl0SWQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9IZWFkQ29tbWl0SWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9IZWFkQ29tbWl0SWQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklCcmFuY2ggdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBCcmFuY2gge1xyXG4gICAgICAgICAgICB0aGlzLm1fTmFtZSA9ICgoQ29kZXguSUJyYW5jaCkodmFsdWUpKS5OYW1lO1xyXG4gICAgICAgICAgICB0aGlzLm1fRGVzY3JpcHRpb24gPSAoKENvZGV4LklCcmFuY2gpKHZhbHVlKSkuRGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgIHRoaXMubV9IZWFkQ29tbWl0SWQgPSAoKENvZGV4LklCcmFuY2gpKHZhbHVlKSkuSGVhZENvbW1pdElkO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8gUmVwcmVzZW50cyBhIHNvdXJjZSBmaWxlIHdpdGggYXNzb2NpYXRlZCBzZW1hbnRpYyBiaW5kaW5nc1xyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JQm91bmRTb3VyY2VGaWxlKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBCb3VuZFNvdXJjZUZpbGUgOiBCb3VuZFNvdXJjZUluZm8sIENvZGV4LklCb3VuZFNvdXJjZUZpbGUge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgU291cmNlRmlsZSBtX1NvdXJjZUZpbGU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIEJvdW5kU291cmNlRmlsZSgpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIEJvdW5kU291cmNlRmlsZShDb2RleC5JQm91bmRTb3VyY2VGaWxlIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208Qm91bmRTb3VyY2VGaWxlPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBCb3VuZFNvdXJjZUZpbGUoQ29kZXguSUJvdW5kU291cmNlSW5mbyB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIEJvdW5kU291cmNlRmlsZShDb2RleC5JUHJvamVjdEZpbGVTY29wZUVudGl0eSB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgc291cmNlIGZpbGVcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIENvZGV4LklTb3VyY2VGaWxlIENvZGV4LklCb3VuZFNvdXJjZUZpbGUuU291cmNlRmlsZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5Tb3VyY2VGaWxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHNvdXJjZSBmaWxlXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBTb3VyY2VGaWxlIFNvdXJjZUZpbGUge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Tb3VyY2VGaWxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fU291cmNlRmlsZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSUJvdW5kU291cmNlRmlsZSB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IEJvdW5kU291cmNlRmlsZSB7XHJcbiAgICAgICAgICAgIHRoaXMubV9Tb3VyY2VGaWxlID0gRW50aXR5VXRpbGl0aWVzLk51bGxPckNvcHk8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Tb3VyY2VGaWxlLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuU291cmNlRmlsZT4oU291cmNlRmlsZSwgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Tb3VyY2VGaWxlLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlNvdXJjZUZpbGU+KSh2ID0+IG5ldyBTb3VyY2VGaWxlKCkuQ29weUZyb208U291cmNlRmlsZT4odikpKTs7XHJcbiAgICAgICAgICAgIGJhc2UuQ29weUZyb208Qm91bmRTb3VyY2VJbmZvPigoKENvZGV4LklCb3VuZFNvdXJjZUluZm8pKHZhbHVlKSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSUJvdW5kU291cmNlSW5mbykpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgQm91bmRTb3VyY2VJbmZvIDogUHJvamVjdEZpbGVTY29wZUVudGl0eSwgQ29kZXguSUJvdW5kU291cmNlSW5mbyB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uTnVsbGFibGU8aW50PiBtX1JlZmVyZW5jZUNvdW50O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLk51bGxhYmxlPGludD4gbV9EZWZpbml0aW9uQ291bnQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9MYW5ndWFnZTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklSZWFkT25seUxpc3Q8UmVmZXJlbmNlU3Bhbj4gbV9SZWZlcmVuY2VzID0gQ29kZXguVXRpbGl0aWVzLkNvbGxlY3Rpb25VdGlsaXRpZXMuRW1wdHk8UmVmZXJlbmNlU3Bhbj4uQXJyYXk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PERlZmluaXRpb25TcGFuPiBtX0RlZmluaXRpb25zID0gbmV3IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8RGVmaW5pdGlvblNwYW4+KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JUmVhZE9ubHlMaXN0PENsYXNzaWZpY2F0aW9uU3Bhbj4gbV9DbGFzc2lmaWNhdGlvbnMgPSBDb2RleC5VdGlsaXRpZXMuQ29sbGVjdGlvblV0aWxpdGllcy5FbXB0eTxDbGFzc2lmaWNhdGlvblNwYW4+LkFycmF5O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxPdXRsaW5pbmdSZWdpb24+IG1fT3V0bGluaW5nUmVnaW9ucyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PE91dGxpbmluZ1JlZ2lvbj4oKTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIGJvb2wgbV9FeGNsdWRlRnJvbVNlYXJjaDtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQm91bmRTb3VyY2VJbmZvKCkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQm91bmRTb3VyY2VJbmZvKENvZGV4LklCb3VuZFNvdXJjZUluZm8gdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxCb3VuZFNvdXJjZUluZm8+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIEJvdW5kU291cmNlSW5mbyhDb2RleC5JUHJvamVjdEZpbGVTY29wZUVudGl0eSB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgbnVtYmVyIG9mIHJlZmVyZW5jZXMgaW4gdGhlIGZpbGVcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGludCBSZWZlcmVuY2VDb3VudCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5Db2VyY2VSZWZlcmVuY2VDb3VudCh0aGlzLm1fUmVmZXJlbmNlQ291bnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUmVmZXJlbmNlQ291bnQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBudW1iZXIgb2YgZGVmaW5pdGlvbnMgaW4gdGhlIGZpbGVcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGludCBEZWZpbml0aW9uQ291bnQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuQ29lcmNlRGVmaW5pdGlvbkNvdW50KHRoaXMubV9EZWZpbml0aW9uQ291bnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fRGVmaW5pdGlvbkNvdW50ID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgbGFuZ3VhZ2Ugb2YgdGhlIGZpbGVcclxuICAgICAgICAvLy8gVE9ETzogUmVtb3ZlXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgTGFuZ3VhZ2Uge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9MYW5ndWFnZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0xhbmd1YWdlID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBSZWZlcmVuY2VzIGZvciB0aGUgZG9jdW1lbnQuIFNvcnRlZC4gTWF5IG92ZXJsYXAuXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JUmVhZE9ubHlMaXN0PENvZGV4LklSZWZlcmVuY2VTcGFuPiBDb2RleC5JQm91bmRTb3VyY2VJbmZvLlJlZmVyZW5jZXMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuUmVmZXJlbmNlcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFJlZmVyZW5jZXMgZm9yIHRoZSBkb2N1bWVudC4gU29ydGVkLiBNYXkgb3ZlcmxhcC5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklSZWFkT25seUxpc3Q8UmVmZXJlbmNlU3Bhbj4gUmVmZXJlbmNlcyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1JlZmVyZW5jZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9SZWZlcmVuY2VzID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBEZWZpbml0aW9ucyBmb3IgdGhlIGRvY3VtZW50LiBTb3J0ZWQuIE5vIG92ZXJsYXA/XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JUmVhZE9ubHlMaXN0PENvZGV4LklEZWZpbml0aW9uU3Bhbj4gQ29kZXguSUJvdW5kU291cmNlSW5mby5EZWZpbml0aW9ucyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5EZWZpbml0aW9ucztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIERlZmluaXRpb25zIGZvciB0aGUgZG9jdW1lbnQuIFNvcnRlZC4gTm8gb3ZlcmxhcD9cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8RGVmaW5pdGlvblNwYW4+IERlZmluaXRpb25zIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fRGVmaW5pdGlvbnM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9EZWZpbml0aW9ucyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gQ2xhc3NpZmljYXRpb25zIGZvciB0aGUgZG9jdW1lbnQuIFNvcnRlZCBieSBzdGFydCBpbmRleC4gTm8gb3ZlcmxhcC5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklSZWFkT25seUxpc3Q8Q29kZXguSUNsYXNzaWZpY2F0aW9uU3Bhbj4gQ29kZXguSUJvdW5kU291cmNlSW5mby5DbGFzc2lmaWNhdGlvbnMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuQ2xhc3NpZmljYXRpb25zO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gQ2xhc3NpZmljYXRpb25zIGZvciB0aGUgZG9jdW1lbnQuIFNvcnRlZCBieSBzdGFydCBpbmRleC4gTm8gb3ZlcmxhcC5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklSZWFkT25seUxpc3Q8Q2xhc3NpZmljYXRpb25TcGFuPiBDbGFzc2lmaWNhdGlvbnMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9DbGFzc2lmaWNhdGlvbnM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9DbGFzc2lmaWNhdGlvbnMgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIE91dGxpbmluZyByZWdpb25zIGZvciB0aGUgZG9jdW1lbnQuIE1heSBvdmVybGFwLlxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSVJlYWRPbmx5TGlzdDxDb2RleC5JT3V0bGluaW5nUmVnaW9uPiBDb2RleC5JQm91bmRTb3VyY2VJbmZvLk91dGxpbmluZ1JlZ2lvbnMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuT3V0bGluaW5nUmVnaW9ucztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIE91dGxpbmluZyByZWdpb25zIGZvciB0aGUgZG9jdW1lbnQuIE1heSBvdmVybGFwLlxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxPdXRsaW5pbmdSZWdpb24+IE91dGxpbmluZ1JlZ2lvbnMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9PdXRsaW5pbmdSZWdpb25zO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fT3V0bGluaW5nUmVnaW9ucyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gSW5kaWNhdGVzIHRoYXQgdGhlIGZpbGUgc2hvdWxkIGJlIGV4Y2x1ZGVkIGZyb20gdGV4dCBzZWFyY2hcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGJvb2wgRXhjbHVkZUZyb21TZWFyY2gge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9FeGNsdWRlRnJvbVNlYXJjaDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0V4Y2x1ZGVGcm9tU2VhcmNoID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JQm91bmRTb3VyY2VJbmZvIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogQm91bmRTb3VyY2VJbmZvIHtcclxuICAgICAgICAgICAgdGhpcy5tX1JlZmVyZW5jZUNvdW50ID0gKChDb2RleC5JQm91bmRTb3VyY2VJbmZvKSh2YWx1ZSkpLlJlZmVyZW5jZUNvdW50O1xyXG4gICAgICAgICAgICB0aGlzLm1fRGVmaW5pdGlvbkNvdW50ID0gKChDb2RleC5JQm91bmRTb3VyY2VJbmZvKSh2YWx1ZSkpLkRlZmluaXRpb25Db3VudDtcclxuICAgICAgICAgICAgdGhpcy5tX0xhbmd1YWdlID0gKChDb2RleC5JQm91bmRTb3VyY2VJbmZvKSh2YWx1ZSkpLkxhbmd1YWdlO1xyXG4gICAgICAgICAgICB0aGlzLm1fUmVmZXJlbmNlcyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PFJlZmVyZW5jZVNwYW4+KFN5c3RlbS5MaW5xLkVudW1lcmFibGUuU2VsZWN0PGdsb2JhbDo6Q29kZXguSVJlZmVyZW5jZVNwYW4sZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5SZWZlcmVuY2VTcGFuPigoKENvZGV4LklCb3VuZFNvdXJjZUluZm8pKHZhbHVlKSkuUmVmZXJlbmNlcywgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5JUmVmZXJlbmNlU3BhbiwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5SZWZlcmVuY2VTcGFuPikodiA9PiBFbnRpdHlVdGlsaXRpZXMuTnVsbE9yQ29weTxnbG9iYWw6OkNvZGV4LklSZWZlcmVuY2VTcGFuLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuUmVmZXJlbmNlU3Bhbj4odiwgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5JUmVmZXJlbmNlU3BhbiwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5SZWZlcmVuY2VTcGFuPikoX3YgPT4gbmV3IFJlZmVyZW5jZVNwYW4oKS5Db3B5RnJvbTxSZWZlcmVuY2VTcGFuPihfdikpKSkpKTtcclxuICAgICAgICAgICAgdGhpcy5tX0RlZmluaXRpb25zID0gbmV3IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8RGVmaW5pdGlvblNwYW4+KFN5c3RlbS5MaW5xLkVudW1lcmFibGUuU2VsZWN0PGdsb2JhbDo6Q29kZXguSURlZmluaXRpb25TcGFuLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuRGVmaW5pdGlvblNwYW4+KCgoQ29kZXguSUJvdW5kU291cmNlSW5mbykodmFsdWUpKS5EZWZpbml0aW9ucywgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5JRGVmaW5pdGlvblNwYW4sIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuRGVmaW5pdGlvblNwYW4+KSh2ID0+IEVudGl0eVV0aWxpdGllcy5OdWxsT3JDb3B5PGdsb2JhbDo6Q29kZXguSURlZmluaXRpb25TcGFuLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuRGVmaW5pdGlvblNwYW4+KHYsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguSURlZmluaXRpb25TcGFuLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkRlZmluaXRpb25TcGFuPikoX3YgPT4gbmV3IERlZmluaXRpb25TcGFuKCkuQ29weUZyb208RGVmaW5pdGlvblNwYW4+KF92KSkpKSkpO1xyXG4gICAgICAgICAgICB0aGlzLm1fQ2xhc3NpZmljYXRpb25zID0gbmV3IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8Q2xhc3NpZmljYXRpb25TcGFuPihTeXN0ZW0uTGlucS5FbnVtZXJhYmxlLlNlbGVjdDxnbG9iYWw6OkNvZGV4LklDbGFzc2lmaWNhdGlvblNwYW4sZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5DbGFzc2lmaWNhdGlvblNwYW4+KCgoQ29kZXguSUJvdW5kU291cmNlSW5mbykodmFsdWUpKS5DbGFzc2lmaWNhdGlvbnMsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguSUNsYXNzaWZpY2F0aW9uU3BhbiwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5DbGFzc2lmaWNhdGlvblNwYW4+KSh2ID0+IEVudGl0eVV0aWxpdGllcy5OdWxsT3JDb3B5PGdsb2JhbDo6Q29kZXguSUNsYXNzaWZpY2F0aW9uU3BhbixnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkNsYXNzaWZpY2F0aW9uU3Bhbj4odiwgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5JQ2xhc3NpZmljYXRpb25TcGFuLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkNsYXNzaWZpY2F0aW9uU3Bhbj4pKF92ID0+IG5ldyBDbGFzc2lmaWNhdGlvblNwYW4oKS5Db3B5RnJvbTxDbGFzc2lmaWNhdGlvblNwYW4+KF92KSkpKSkpO1xyXG4gICAgICAgICAgICB0aGlzLm1fT3V0bGluaW5nUmVnaW9ucyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PE91dGxpbmluZ1JlZ2lvbj4oU3lzdGVtLkxpbnEuRW51bWVyYWJsZS5TZWxlY3Q8Z2xvYmFsOjpDb2RleC5JT3V0bGluaW5nUmVnaW9uLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuT3V0bGluaW5nUmVnaW9uPigoKENvZGV4LklCb3VuZFNvdXJjZUluZm8pKHZhbHVlKSkuT3V0bGluaW5nUmVnaW9ucywgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5JT3V0bGluaW5nUmVnaW9uLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLk91dGxpbmluZ1JlZ2lvbj4pKHYgPT4gRW50aXR5VXRpbGl0aWVzLk51bGxPckNvcHk8Z2xvYmFsOjpDb2RleC5JT3V0bGluaW5nUmVnaW9uLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuT3V0bGluaW5nUmVnaW9uPih2LCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4LklPdXRsaW5pbmdSZWdpb24sIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuT3V0bGluaW5nUmVnaW9uPikoX3YgPT4gbmV3IE91dGxpbmluZ1JlZ2lvbigpLkNvcHlGcm9tPE91dGxpbmluZ1JlZ2lvbj4oX3YpKSkpKSk7XHJcbiAgICAgICAgICAgIHRoaXMubV9FeGNsdWRlRnJvbVNlYXJjaCA9ICgoQ29kZXguSUJvdW5kU291cmNlSW5mbykodmFsdWUpKS5FeGNsdWRlRnJvbVNlYXJjaDtcclxuICAgICAgICAgICAgYmFzZS5Db3B5RnJvbTxQcm9qZWN0RmlsZVNjb3BlRW50aXR5PigoKENvZGV4LklQcm9qZWN0RmlsZVNjb3BlRW50aXR5KSh2YWx1ZSkpKTtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIEluZm9ybWF0aW9uIGFib3V0IGEgc291cmNlIGZpbGUgYXMgZGVmaW5lZCBieSB0aGUgc291cmNlIGNvbnRyb2wgcHJvdmlkZXJcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSVNvdXJjZUNvbnRyb2xGaWxlSW5mbykpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgU291cmNlQ29udHJvbEZpbGVJbmZvIDogQ29kZXguRW50aXR5QmFzZSwgQ29kZXguSVNvdXJjZUNvbnRyb2xGaWxlSW5mbyB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9Tb3VyY2VDb250cm9sQ29udGVudElkO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBTb3VyY2VDb250cm9sRmlsZUluZm8oKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFNvdXJjZUNvbnRyb2xGaWxlSW5mbyhDb2RleC5JU291cmNlQ29udHJvbEZpbGVJbmZvIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxTb3VyY2VDb250cm9sRmlsZUluZm8+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBVbmlxdWUgaWQgZm9yIHRoZSBzb3VyY2UgZmlsZSBjb250ZW50IGFzIGRlZmluZWQgYnkgdGhlIHNvdXJjZSBjb250cm9sIHByb3ZpZGVyIChpLmUuIGdpdCBTSEEpXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgU291cmNlQ29udHJvbENvbnRlbnRJZCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1NvdXJjZUNvbnRyb2xDb250ZW50SWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Tb3VyY2VDb250cm9sQ29udGVudElkID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JU291cmNlQ29udHJvbEZpbGVJbmZvIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogU291cmNlQ29udHJvbEZpbGVJbmZvIHtcclxuICAgICAgICAgICAgdGhpcy5tX1NvdXJjZUNvbnRyb2xDb250ZW50SWQgPSAoKENvZGV4LklTb3VyY2VDb250cm9sRmlsZUluZm8pKHZhbHVlKSkuU291cmNlQ29udHJvbENvbnRlbnRJZDtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklTb3VyY2VGaWxlSW5mbykpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgU291cmNlRmlsZUluZm8gOiBDb2RleC5FbnRpdHlCYXNlLCBDb2RleC5JU291cmNlRmlsZUluZm8ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgaW50IG1fTGluZXM7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBpbnQgbV9TaXplO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fTGFuZ3VhZ2U7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9XZWJBZGRyZXNzO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgRW5jb2RpbmdEZXNjcmlwdGlvbiBtX0VuY29kaW5nO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgUHJvcGVydHlNYXAgbV9Qcm9wZXJ0aWVzO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fUmVwb1JlbGF0aXZlUGF0aDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX1JlcG9zaXRvcnlOYW1lO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fU291cmNlQ29udHJvbENvbnRlbnRJZDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX1Byb2plY3RSZWxhdGl2ZVBhdGg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9Qcm9qZWN0SWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFNvdXJjZUZpbGVJbmZvKCkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBTb3VyY2VGaWxlSW5mbyhDb2RleC5JU291cmNlRmlsZUluZm8gdmFsdWUpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFNvdXJjZUZpbGVJbmZvPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBTb3VyY2VGaWxlSW5mbyhDb2RleC5JUmVwb0ZpbGVTY29wZUVudGl0eSB2YWx1ZSkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208U291cmNlRmlsZUluZm8+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFNvdXJjZUZpbGVJbmZvKENvZGV4LklSZXBvU2NvcGVFbnRpdHkgdmFsdWUpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFNvdXJjZUZpbGVJbmZvPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBTb3VyY2VGaWxlSW5mbyhDb2RleC5JU291cmNlQ29udHJvbEZpbGVJbmZvIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxTb3VyY2VGaWxlSW5mbz4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgU291cmNlRmlsZUluZm8oQ29kZXguSVByb2plY3RGaWxlU2NvcGVFbnRpdHkgdmFsdWUpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFNvdXJjZUZpbGVJbmZvPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBTb3VyY2VGaWxlSW5mbyhDb2RleC5JUHJvamVjdFNjb3BlRW50aXR5IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxTb3VyY2VGaWxlSW5mbz4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBudW1iZXIgb2YgbGluZXMgaW4gdGhlIGZpbGVcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGludCBMaW5lcyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0xpbmVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fTGluZXMgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBzaXplIG9mIHRoZSBmaWxlIGluIGJ5dGVzXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBpbnQgU2l6ZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1NpemU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9TaXplID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgbGFuZ3VhZ2Ugb2YgdGhlIGZpbGVcclxuICAgICAgICAvLy8gVE9ETzogUmVtb3ZlXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgTGFuZ3VhZ2Uge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9MYW5ndWFnZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0xhbmd1YWdlID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgd2ViIGFkZHJlc3Mgb2YgdGhlIGZpbGUuIFRPRE86IFJlbW92ZT8gSXMgcmVwbyByZWxhdGl2ZSBwYXRoIGVub3VnaD9cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBXZWJBZGRyZXNzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fV2ViQWRkcmVzcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1dlYkFkZHJlc3MgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBlbmNvZGluZyB1c2VkIGZvciB0aGUgZmlsZVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgQ29kZXguSUVuY29kaW5nRGVzY3JpcHRpb24gQ29kZXguSVNvdXJjZUZpbGVJbmZvLkVuY29kaW5nIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkVuY29kaW5nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGVuY29kaW5nIHVzZWQgZm9yIHRoZSBmaWxlXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBFbmNvZGluZ0Rlc2NyaXB0aW9uIEVuY29kaW5nIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fRW5jb2Rpbmc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9FbmNvZGluZyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gRXh0ZW5zaWJsZSBrZXkgdmFsdWUgcHJvcGVydGllcyBmb3IgdGhlIGRvY3VtZW50LlxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgQ29kZXguSVByb3BlcnR5TWFwIENvZGV4LklTb3VyY2VGaWxlSW5mby5Qcm9wZXJ0aWVzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLlByb3BlcnRpZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBFeHRlbnNpYmxlIGtleSB2YWx1ZSBwcm9wZXJ0aWVzIGZvciB0aGUgZG9jdW1lbnQuXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBQcm9wZXJ0eU1hcCBQcm9wZXJ0aWVzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUHJvcGVydGllcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1Byb3BlcnRpZXMgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSByZXBvIHJlbGF0aXZlIHBhdGggdG8gdGhlIGZpbGVcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBSZXBvUmVsYXRpdmVQYXRoIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUmVwb1JlbGF0aXZlUGF0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1JlcG9SZWxhdGl2ZVBhdGggPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBuYW1lIG9mIHRoZSByZXBvc2l0b3J5IGNvbnRhaW5pbmcgdGhlIGVudGl0eVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIFJlcG9zaXRvcnlOYW1lIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUmVwb3NpdG9yeU5hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9SZXBvc2l0b3J5TmFtZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVW5pcXVlIGlkIGZvciB0aGUgc291cmNlIGZpbGUgY29udGVudCBhcyBkZWZpbmVkIGJ5IHRoZSBzb3VyY2UgY29udHJvbCBwcm92aWRlciAoaS5lLiBnaXQgU0hBKVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIFNvdXJjZUNvbnRyb2xDb250ZW50SWQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Tb3VyY2VDb250cm9sQ29udGVudElkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fU291cmNlQ29udHJvbENvbnRlbnRJZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHByb2plY3QgcmVsYXRpdmUgcGF0aCBvZiB0aGUgZmlsZVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIFByb2plY3RSZWxhdGl2ZVBhdGgge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Qcm9qZWN0UmVsYXRpdmVQYXRoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUHJvamVjdFJlbGF0aXZlUGF0aCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGlkZW50aWZpZXIgb2YgdGhlIHByb2plY3QgY29udGFpbmluZyB0aGUgZW50aXR5XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgUHJvamVjdElkIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUHJvamVjdElkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUHJvamVjdElkID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JUmVwb1Njb3BlRW50aXR5IHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogU291cmNlRmlsZUluZm8ge1xyXG4gICAgICAgICAgICB0aGlzLm1fUmVwb3NpdG9yeU5hbWUgPSAoKENvZGV4LklSZXBvU2NvcGVFbnRpdHkpKHZhbHVlKSkuUmVwb3NpdG9yeU5hbWU7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JUmVwb0ZpbGVTY29wZUVudGl0eSB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IFNvdXJjZUZpbGVJbmZvIHtcclxuICAgICAgICAgICAgdGhpcy5tX1JlcG9SZWxhdGl2ZVBhdGggPSAoKENvZGV4LklSZXBvRmlsZVNjb3BlRW50aXR5KSh2YWx1ZSkpLlJlcG9SZWxhdGl2ZVBhdGg7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JU291cmNlQ29udHJvbEZpbGVJbmZvIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogU291cmNlRmlsZUluZm8ge1xyXG4gICAgICAgICAgICB0aGlzLm1fU291cmNlQ29udHJvbENvbnRlbnRJZCA9ICgoQ29kZXguSVNvdXJjZUNvbnRyb2xGaWxlSW5mbykodmFsdWUpKS5Tb3VyY2VDb250cm9sQ29udGVudElkO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVByb2plY3RTY29wZUVudGl0eSB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IFNvdXJjZUZpbGVJbmZvIHtcclxuICAgICAgICAgICAgdGhpcy5tX1Byb2plY3RJZCA9ICgoQ29kZXguSVByb2plY3RTY29wZUVudGl0eSkodmFsdWUpKS5Qcm9qZWN0SWQ7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JUHJvamVjdEZpbGVTY29wZUVudGl0eSB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IFNvdXJjZUZpbGVJbmZvIHtcclxuICAgICAgICAgICAgdGhpcy5tX1Byb2plY3RSZWxhdGl2ZVBhdGggPSAoKENvZGV4LklQcm9qZWN0RmlsZVNjb3BlRW50aXR5KSh2YWx1ZSkpLlByb2plY3RSZWxhdGl2ZVBhdGg7XHJcbiAgICAgICAgICAgIHRoaXMubV9SZXBvUmVsYXRpdmVQYXRoID0gKChDb2RleC5JUmVwb0ZpbGVTY29wZUVudGl0eSkodmFsdWUpKS5SZXBvUmVsYXRpdmVQYXRoO1xyXG4gICAgICAgICAgICB0aGlzLm1fUmVwb3NpdG9yeU5hbWUgPSAoKENvZGV4LklSZXBvU2NvcGVFbnRpdHkpKHZhbHVlKSkuUmVwb3NpdG9yeU5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMubV9Qcm9qZWN0SWQgPSAoKENvZGV4LklQcm9qZWN0U2NvcGVFbnRpdHkpKHZhbHVlKSkuUHJvamVjdElkO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVNvdXJjZUZpbGVJbmZvIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogU291cmNlRmlsZUluZm8ge1xyXG4gICAgICAgICAgICB0aGlzLm1fTGluZXMgPSAoKENvZGV4LklTb3VyY2VGaWxlSW5mbykodmFsdWUpKS5MaW5lcztcclxuICAgICAgICAgICAgdGhpcy5tX1NpemUgPSAoKENvZGV4LklTb3VyY2VGaWxlSW5mbykodmFsdWUpKS5TaXplO1xyXG4gICAgICAgICAgICB0aGlzLm1fTGFuZ3VhZ2UgPSAoKENvZGV4LklTb3VyY2VGaWxlSW5mbykodmFsdWUpKS5MYW5ndWFnZTtcclxuICAgICAgICAgICAgdGhpcy5tX1dlYkFkZHJlc3MgPSAoKENvZGV4LklTb3VyY2VGaWxlSW5mbykodmFsdWUpKS5XZWJBZGRyZXNzO1xyXG4gICAgICAgICAgICB0aGlzLm1fRW5jb2RpbmcgPSBFbnRpdHlVdGlsaXRpZXMuTnVsbE9yQ29weTxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkVuY29kaW5nRGVzY3JpcHRpb24sZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5FbmNvZGluZ0Rlc2NyaXB0aW9uPihFbmNvZGluZywgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5FbmNvZGluZ0Rlc2NyaXB0aW9uLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkVuY29kaW5nRGVzY3JpcHRpb24+KSh2ID0+IG5ldyBFbmNvZGluZ0Rlc2NyaXB0aW9uKCkuQ29weUZyb208RW5jb2RpbmdEZXNjcmlwdGlvbj4odikpKTs7XHJcbiAgICAgICAgICAgIHRoaXMubV9Qcm9wZXJ0aWVzID0gRW50aXR5VXRpbGl0aWVzLk51bGxPckNvcHk8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Qcm9wZXJ0eU1hcCxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlByb3BlcnR5TWFwPihQcm9wZXJ0aWVzLCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlByb3BlcnR5TWFwLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlByb3BlcnR5TWFwPikodiA9PiBuZXcgUHJvcGVydHlNYXAoKS5Db3B5RnJvbTxQcm9wZXJ0eU1hcD4odikpKTs7XHJcbiAgICAgICAgICAgIHRoaXMubV9SZXBvUmVsYXRpdmVQYXRoID0gKChDb2RleC5JUmVwb0ZpbGVTY29wZUVudGl0eSkodmFsdWUpKS5SZXBvUmVsYXRpdmVQYXRoO1xyXG4gICAgICAgICAgICB0aGlzLm1fUmVwb3NpdG9yeU5hbWUgPSAoKENvZGV4LklSZXBvU2NvcGVFbnRpdHkpKHZhbHVlKSkuUmVwb3NpdG9yeU5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMubV9Tb3VyY2VDb250cm9sQ29udGVudElkID0gKChDb2RleC5JU291cmNlQ29udHJvbEZpbGVJbmZvKSh2YWx1ZSkpLlNvdXJjZUNvbnRyb2xDb250ZW50SWQ7XHJcbiAgICAgICAgICAgIHRoaXMubV9Qcm9qZWN0UmVsYXRpdmVQYXRoID0gKChDb2RleC5JUHJvamVjdEZpbGVTY29wZUVudGl0eSkodmFsdWUpKS5Qcm9qZWN0UmVsYXRpdmVQYXRoO1xyXG4gICAgICAgICAgICB0aGlzLm1fUHJvamVjdElkID0gKChDb2RleC5JUHJvamVjdFNjb3BlRW50aXR5KSh2YWx1ZSkpLlByb2plY3RJZDtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIERlc2NyaWJlcyBlbmNvZGluZyBzbyB0aGF0IGZpbGUgbWF5IGJlIHJlY29uc3RpdHV0ZWQgaW4gYSBieXRlLWlkZW50aWNhbCBmb3JtXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklFbmNvZGluZ0Rlc2NyaXB0aW9uKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBFbmNvZGluZ0Rlc2NyaXB0aW9uIDogQ29kZXguRW50aXR5QmFzZSwgQ29kZXguSUVuY29kaW5nRGVzY3JpcHRpb24ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fTmFtZTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIGJ5dGVbXSBtX1ByZWFtYmxlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBFbmNvZGluZ0Rlc2NyaXB0aW9uKCkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBFbmNvZGluZ0Rlc2NyaXB0aW9uKENvZGV4LklFbmNvZGluZ0Rlc2NyaXB0aW9uIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxFbmNvZGluZ0Rlc2NyaXB0aW9uPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIG5hbWUgb2YgdGhlIGVuY29kaW5nXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgTmFtZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX05hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9OYW1lID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgZW5jb2RpbmcgcHJlYW1ibGVcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGJ5dGVbXSBQcmVhbWJsZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1ByZWFtYmxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUHJlYW1ibGUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklFbmNvZGluZ0Rlc2NyaXB0aW9uIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogRW5jb2RpbmdEZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgIHRoaXMubV9OYW1lID0gKChDb2RleC5JRW5jb2RpbmdEZXNjcmlwdGlvbikodmFsdWUpKS5OYW1lO1xyXG4gICAgICAgICAgICB0aGlzLm1fUHJlYW1ibGUgPSAoKENvZGV4LklFbmNvZGluZ0Rlc2NyaXB0aW9uKSh2YWx1ZSkpLlByZWFtYmxlO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8gRGVmaW5lcyB0ZXh0IGNvbnRlbnRzIG9mIGEgZmlsZSBhbmQgYXNzb2NpYXRlZCBkYXRhXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklTb3VyY2VGaWxlKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBTb3VyY2VGaWxlIDogQ29kZXguRW50aXR5QmFzZSwgQ29kZXguSVNvdXJjZUZpbGUge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgU291cmNlRmlsZUluZm8gbV9JbmZvO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fQ29udGVudDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIGJvb2wgbV9FeGNsdWRlRnJvbVNlYXJjaDtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgU291cmNlRmlsZSgpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgU291cmNlRmlsZShDb2RleC5JU291cmNlRmlsZSB2YWx1ZSkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208U291cmNlRmlsZT4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgc291cmNlIGZpbGVcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIENvZGV4LklTb3VyY2VGaWxlSW5mbyBDb2RleC5JU291cmNlRmlsZS5JbmZvIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkluZm87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHNvdXJjZSBmaWxlXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBTb3VyY2VGaWxlSW5mbyBJbmZvIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fSW5mbztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0luZm8gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBjb250ZW50IG9mIHRoZSBmaWxlXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgQ29udGVudCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0NvbnRlbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Db250ZW50ID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBJbmRpY2F0ZXMgdGhhdCB0aGUgZmlsZSBzaG91bGQgYmUgZXhjbHVkZWQgZnJvbSB0ZXh0IHNlYXJjaFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgYm9vbCBFeGNsdWRlRnJvbVNlYXJjaCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0V4Y2x1ZGVGcm9tU2VhcmNoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fRXhjbHVkZUZyb21TZWFyY2ggPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklTb3VyY2VGaWxlIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogU291cmNlRmlsZSB7XHJcbiAgICAgICAgICAgIHRoaXMubV9JbmZvID0gRW50aXR5VXRpbGl0aWVzLk51bGxPckNvcHk8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Tb3VyY2VGaWxlSW5mbyxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlNvdXJjZUZpbGVJbmZvPihJbmZvLCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlNvdXJjZUZpbGVJbmZvLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlNvdXJjZUZpbGVJbmZvPikodiA9PiBuZXcgU291cmNlRmlsZUluZm8oKS5Db3B5RnJvbTxTb3VyY2VGaWxlSW5mbz4odikpKTs7XHJcbiAgICAgICAgICAgIHRoaXMubV9Db250ZW50ID0gKChDb2RleC5JU291cmNlRmlsZSkodmFsdWUpKS5Db250ZW50O1xyXG4gICAgICAgICAgICB0aGlzLm1fRXhjbHVkZUZyb21TZWFyY2ggPSAoKENvZGV4LklTb3VyY2VGaWxlKSh2YWx1ZSkpLkV4Y2x1ZGVGcm9tU2VhcmNoO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSU91dGxpbmluZ1JlZ2lvbikpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgT3V0bGluaW5nUmVnaW9uIDogQ29kZXguRW50aXR5QmFzZSwgQ29kZXguSU91dGxpbmluZ1JlZ2lvbiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9LaW5kO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgTGluZVNwYW4gbV9IZWFkZXI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBMaW5lU3BhbiBtX0NvbnRlbnQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIE91dGxpbmluZ1JlZ2lvbigpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgT3V0bGluaW5nUmVnaW9uKENvZGV4LklPdXRsaW5pbmdSZWdpb24gdmFsdWUpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPE91dGxpbmluZ1JlZ2lvbj4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgS2luZCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0tpbmQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9LaW5kID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBEZWZpbmVzIHRoZSByZWdpb24gY29udGFpbmluZyB0aGUgaGVhZGVyIHRleHQgb2YgdGhlIG91dGxpbmluZyByZWdpb25cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIENvZGV4LklMaW5lU3BhbiBDb2RleC5JT3V0bGluaW5nUmVnaW9uLkhlYWRlciB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5IZWFkZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBEZWZpbmVzIHRoZSByZWdpb24gY29udGFpbmluZyB0aGUgaGVhZGVyIHRleHQgb2YgdGhlIG91dGxpbmluZyByZWdpb25cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIExpbmVTcGFuIEhlYWRlciB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0hlYWRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0hlYWRlciA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gRGVmaW5lcyB0aGUgcmVnaW9uIGNvbnRhaW5pbmcgdGhlIGNvbGxhcHNpYmxlIGNvbnRlbnQgcmVnaW9uIG9mIHRoZSBvdXRsaW5pbmcgcmVnaW9uXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBDb2RleC5JTGluZVNwYW4gQ29kZXguSU91dGxpbmluZ1JlZ2lvbi5Db250ZW50IHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkNvbnRlbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBEZWZpbmVzIHRoZSByZWdpb24gY29udGFpbmluZyB0aGUgY29sbGFwc2libGUgY29udGVudCByZWdpb24gb2YgdGhlIG91dGxpbmluZyByZWdpb25cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIExpbmVTcGFuIENvbnRlbnQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Db250ZW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fQ29udGVudCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSU91dGxpbmluZ1JlZ2lvbiB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IE91dGxpbmluZ1JlZ2lvbiB7XHJcbiAgICAgICAgICAgIHRoaXMubV9LaW5kID0gKChDb2RleC5JT3V0bGluaW5nUmVnaW9uKSh2YWx1ZSkpLktpbmQ7XHJcbiAgICAgICAgICAgIHRoaXMubV9IZWFkZXIgPSBFbnRpdHlVdGlsaXRpZXMuTnVsbE9yQ29weTxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkxpbmVTcGFuLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuTGluZVNwYW4+KEhlYWRlciwgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5MaW5lU3BhbiwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5MaW5lU3Bhbj4pKHYgPT4gbmV3IExpbmVTcGFuKCkuQ29weUZyb208TGluZVNwYW4+KHYpKSk7O1xyXG4gICAgICAgICAgICB0aGlzLm1fQ29udGVudCA9IEVudGl0eVV0aWxpdGllcy5OdWxsT3JDb3B5PGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuTGluZVNwYW4sZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5MaW5lU3Bhbj4oQ29udGVudCwgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5MaW5lU3BhbiwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5MaW5lU3Bhbj4pKHYgPT4gbmV3IExpbmVTcGFuKCkuQ29weUZyb208TGluZVNwYW4+KHYpKSk7O1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSURlZmluaXRpb25TcGFuKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBEZWZpbml0aW9uU3BhbiA6IFNwYW4sIENvZGV4LklEZWZpbml0aW9uU3BhbiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBEZWZpbml0aW9uU3ltYm9sIG1fRGVmaW5pdGlvbjtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklSZWFkT25seUxpc3Q8UGFyYW1ldGVyRGVmaW5pdGlvblNwYW4+IG1fUGFyYW1ldGVycyA9IENvZGV4LlV0aWxpdGllcy5Db2xsZWN0aW9uVXRpbGl0aWVzLkVtcHR5PFBhcmFtZXRlckRlZmluaXRpb25TcGFuPi5BcnJheTtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgRGVmaW5pdGlvblNwYW4oKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBEZWZpbml0aW9uU3BhbihDb2RleC5JRGVmaW5pdGlvblNwYW4gdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxEZWZpbml0aW9uU3Bhbj4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgRGVmaW5pdGlvblNwYW4oQ29kZXguSVNwYW4gdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGRlZmluaXRpb24gc3ltYm9sIHJlZmVycmVkIHRvIGJ5IHRoZSBzcGFuXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBDb2RleC5JRGVmaW5pdGlvblN5bWJvbCBDb2RleC5JRGVmaW5pdGlvblNwYW4uRGVmaW5pdGlvbiB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5EZWZpbml0aW9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGRlZmluaXRpb24gc3ltYm9sIHJlZmVycmVkIHRvIGJ5IHRoZSBzcGFuXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBEZWZpbml0aW9uU3ltYm9sIERlZmluaXRpb24ge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9EZWZpbml0aW9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fRGVmaW5pdGlvbiA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gR2V0cyB0aGUgZGVmaW5pdGlvbnMgZm9yIHBhcmFtZXRlcnNcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklSZWFkT25seUxpc3Q8Q29kZXguSVBhcmFtZXRlckRlZmluaXRpb25TcGFuPiBDb2RleC5JRGVmaW5pdGlvblNwYW4uUGFyYW1ldGVycyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5QYXJhbWV0ZXJzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gR2V0cyB0aGUgZGVmaW5pdGlvbnMgZm9yIHBhcmFtZXRlcnNcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklSZWFkT25seUxpc3Q8UGFyYW1ldGVyRGVmaW5pdGlvblNwYW4+IFBhcmFtZXRlcnMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9QYXJhbWV0ZXJzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUGFyYW1ldGVycyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSURlZmluaXRpb25TcGFuIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogRGVmaW5pdGlvblNwYW4ge1xyXG4gICAgICAgICAgICB0aGlzLm1fRGVmaW5pdGlvbiA9IEVudGl0eVV0aWxpdGllcy5OdWxsT3JDb3B5PGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuRGVmaW5pdGlvblN5bWJvbCxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkRlZmluaXRpb25TeW1ib2w+KERlZmluaXRpb24sIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuRGVmaW5pdGlvblN5bWJvbCwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5EZWZpbml0aW9uU3ltYm9sPikodiA9PiBuZXcgRGVmaW5pdGlvblN5bWJvbCgpLkNvcHlGcm9tPERlZmluaXRpb25TeW1ib2w+KHYpKSk7O1xyXG4gICAgICAgICAgICB0aGlzLm1fUGFyYW1ldGVycyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PFBhcmFtZXRlckRlZmluaXRpb25TcGFuPihTeXN0ZW0uTGlucS5FbnVtZXJhYmxlLlNlbGVjdDxnbG9iYWw6OkNvZGV4LklQYXJhbWV0ZXJEZWZpbml0aW9uU3BhbixnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlBhcmFtZXRlckRlZmluaXRpb25TcGFuPigoKENvZGV4LklEZWZpbml0aW9uU3BhbikodmFsdWUpKS5QYXJhbWV0ZXJzLCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4LklQYXJhbWV0ZXJEZWZpbml0aW9uU3BhbiwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5QYXJhbWV0ZXJEZWZpbml0aW9uU3Bhbj4pKHYgPT4gRW50aXR5VXRpbGl0aWVzLk51bGxPckNvcHk8Z2xvYmFsOjpDb2RleC5JUGFyYW1ldGVyRGVmaW5pdGlvblNwYW4sZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5QYXJhbWV0ZXJEZWZpbml0aW9uU3Bhbj4odiwgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5JUGFyYW1ldGVyRGVmaW5pdGlvblNwYW4sIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuUGFyYW1ldGVyRGVmaW5pdGlvblNwYW4+KShfdiA9PiBuZXcgUGFyYW1ldGVyRGVmaW5pdGlvblNwYW4oKS5Db3B5RnJvbTxQYXJhbWV0ZXJEZWZpbml0aW9uU3Bhbj4oX3YpKSkpKSk7XHJcbiAgICAgICAgICAgIGJhc2UuQ29weUZyb208U3Bhbj4oKChDb2RleC5JU3BhbikodmFsdWUpKSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyBBIHNwZWNpYWxpemVkIGRlZmluaXRpb24gc3BhbiByZWZlcnJpbmcgdG8gYSBwYXJhbWV0ZXIgb2YgYSBtZXRob2QvcHJvcGVydHlcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSVBhcmFtZXRlckRlZmluaXRpb25TcGFuKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBQYXJhbWV0ZXJEZWZpbml0aW9uU3BhbiA6IExpbmVTcGFuLCBDb2RleC5JUGFyYW1ldGVyRGVmaW5pdGlvblNwYW4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgaW50IG1fUGFyYW1ldGVySW5kZXg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9OYW1lO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBQYXJhbWV0ZXJEZWZpbml0aW9uU3BhbigpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFBhcmFtZXRlckRlZmluaXRpb25TcGFuKENvZGV4LklQYXJhbWV0ZXJEZWZpbml0aW9uU3BhbiB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFBhcmFtZXRlckRlZmluaXRpb25TcGFuPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBQYXJhbWV0ZXJEZWZpbml0aW9uU3BhbihDb2RleC5JTGluZVNwYW4gdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBQYXJhbWV0ZXJEZWZpbml0aW9uU3BhbihDb2RleC5JU3BhbiB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgaW5kZXggb2YgdGhlIHBhcmFtZXRlciBpbiB0aGUgbGlzdCBvZiBwYXJhbWV0ZXJzIGZvciB0aGUgbWV0aG9kXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBpbnQgUGFyYW1ldGVySW5kZXgge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9QYXJhbWV0ZXJJbmRleDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1BhcmFtZXRlckluZGV4ID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgbmFtZSBvZiB0aGUgcGFyYW1ldGVyXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgTmFtZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX05hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9OYW1lID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JUGFyYW1ldGVyRGVmaW5pdGlvblNwYW4gdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBQYXJhbWV0ZXJEZWZpbml0aW9uU3BhbiB7XHJcbiAgICAgICAgICAgIHRoaXMubV9QYXJhbWV0ZXJJbmRleCA9ICgoQ29kZXguSVBhcmFtZXRlckRlZmluaXRpb25TcGFuKSh2YWx1ZSkpLlBhcmFtZXRlckluZGV4O1xyXG4gICAgICAgICAgICB0aGlzLm1fTmFtZSA9ICgoQ29kZXguSVBhcmFtZXRlckRlZmluaXRpb25TcGFuKSh2YWx1ZSkpLk5hbWU7XHJcbiAgICAgICAgICAgIGJhc2UuQ29weUZyb208TGluZVNwYW4+KCgoQ29kZXguSUxpbmVTcGFuKSh2YWx1ZSkpKTtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklSZWZlcmVuY2VTcGFuKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBSZWZlcmVuY2VTcGFuIDogU3ltYm9sU3BhbiwgQ29kZXguSVJlZmVyZW5jZVNwYW4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgQ29kZXguT2JqZWN0TW9kZWwuU3ltYm9sSWQgbV9SZWxhdGVkRGVmaW5pdGlvbjtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFJlZmVyZW5jZVN5bWJvbCBtX1JlZmVyZW5jZTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklSZWFkT25seUxpc3Q8UGFyYW1ldGVyUmVmZXJlbmNlU3Bhbj4gbV9QYXJhbWV0ZXJzID0gQ29kZXguVXRpbGl0aWVzLkNvbGxlY3Rpb25VdGlsaXRpZXMuRW1wdHk8UGFyYW1ldGVyUmVmZXJlbmNlU3Bhbj4uQXJyYXk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFJlZmVyZW5jZVNwYW4oKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBSZWZlcmVuY2VTcGFuKENvZGV4LklSZWZlcmVuY2VTcGFuIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208UmVmZXJlbmNlU3Bhbj4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUmVmZXJlbmNlU3BhbihDb2RleC5JU3ltYm9sU3BhbiB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFJlZmVyZW5jZVNwYW4oQ29kZXguSVRleHRMaW5lU3BhbiB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFJlZmVyZW5jZVNwYW4oQ29kZXguSUxpbmVTcGFuIHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUmVmZXJlbmNlU3BhbihDb2RleC5JU3BhbiB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBHZXRzIHRoZSBzeW1ib2wgaWQgb2YgdGhlIGRlZmluaXRpb24gd2hpY2ggcHJvdmlkZXMgdGhpcyByZWZlcmVuY2VcclxuICAgICAgICAvLy8gKGkuZS4gbWV0aG9kIGRlZmluaXRpb24gZm9yIGludGVyZmFjZSBpbXBsZW1lbnRhdGlvbilcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIENvZGV4Lk9iamVjdE1vZGVsLlN5bWJvbElkIFJlbGF0ZWREZWZpbml0aW9uIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUmVsYXRlZERlZmluaXRpb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9SZWxhdGVkRGVmaW5pdGlvbiA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHJlZmVyZW5jZSBzeW1ib2wgcmVmZXJyZWQgdG8gYnkgdGhlIHNwYW5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIENvZGV4LklSZWZlcmVuY2VTeW1ib2wgQ29kZXguSVJlZmVyZW5jZVNwYW4uUmVmZXJlbmNlIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLlJlZmVyZW5jZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSByZWZlcmVuY2Ugc3ltYm9sIHJlZmVycmVkIHRvIGJ5IHRoZSBzcGFuXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBSZWZlcmVuY2VTeW1ib2wgUmVmZXJlbmNlIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUmVmZXJlbmNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUmVmZXJlbmNlID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBHZXRzIHRoZSByZWZlcmVuY2VzIHRvIHBhcmFtZXRlcnNcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklSZWFkT25seUxpc3Q8Q29kZXguSVBhcmFtZXRlclJlZmVyZW5jZVNwYW4+IENvZGV4LklSZWZlcmVuY2VTcGFuLlBhcmFtZXRlcnMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuUGFyYW1ldGVycztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIEdldHMgdGhlIHJlZmVyZW5jZXMgdG8gcGFyYW1ldGVyc1xyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSVJlYWRPbmx5TGlzdDxQYXJhbWV0ZXJSZWZlcmVuY2VTcGFuPiBQYXJhbWV0ZXJzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUGFyYW1ldGVycztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1BhcmFtZXRlcnMgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklSZWZlcmVuY2VTcGFuIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogUmVmZXJlbmNlU3BhbiB7XHJcbiAgICAgICAgICAgIHRoaXMubV9SZWxhdGVkRGVmaW5pdGlvbiA9ICgoQ29kZXguSVJlZmVyZW5jZVNwYW4pKHZhbHVlKSkuUmVsYXRlZERlZmluaXRpb247XHJcbiAgICAgICAgICAgIHRoaXMubV9SZWZlcmVuY2UgPSBFbnRpdHlVdGlsaXRpZXMuTnVsbE9yQ29weTxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlJlZmVyZW5jZVN5bWJvbCxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlJlZmVyZW5jZVN5bWJvbD4oUmVmZXJlbmNlLCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlJlZmVyZW5jZVN5bWJvbCwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5SZWZlcmVuY2VTeW1ib2w+KSh2ID0+IG5ldyBSZWZlcmVuY2VTeW1ib2woKS5Db3B5RnJvbTxSZWZlcmVuY2VTeW1ib2w+KHYpKSk7O1xyXG4gICAgICAgICAgICB0aGlzLm1fUGFyYW1ldGVycyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PFBhcmFtZXRlclJlZmVyZW5jZVNwYW4+KFN5c3RlbS5MaW5xLkVudW1lcmFibGUuU2VsZWN0PGdsb2JhbDo6Q29kZXguSVBhcmFtZXRlclJlZmVyZW5jZVNwYW4sZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5QYXJhbWV0ZXJSZWZlcmVuY2VTcGFuPigoKENvZGV4LklSZWZlcmVuY2VTcGFuKSh2YWx1ZSkpLlBhcmFtZXRlcnMsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguSVBhcmFtZXRlclJlZmVyZW5jZVNwYW4sIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuUGFyYW1ldGVyUmVmZXJlbmNlU3Bhbj4pKHYgPT4gRW50aXR5VXRpbGl0aWVzLk51bGxPckNvcHk8Z2xvYmFsOjpDb2RleC5JUGFyYW1ldGVyUmVmZXJlbmNlU3BhbixnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlBhcmFtZXRlclJlZmVyZW5jZVNwYW4+KHYsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguSVBhcmFtZXRlclJlZmVyZW5jZVNwYW4sIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuUGFyYW1ldGVyUmVmZXJlbmNlU3Bhbj4pKF92ID0+IG5ldyBQYXJhbWV0ZXJSZWZlcmVuY2VTcGFuKCkuQ29weUZyb208UGFyYW1ldGVyUmVmZXJlbmNlU3Bhbj4oX3YpKSkpKSk7XHJcbiAgICAgICAgICAgIGJhc2UuQ29weUZyb208U3ltYm9sU3Bhbj4oKChDb2RleC5JU3ltYm9sU3BhbikodmFsdWUpKSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyBBIHNwZWNpYWxpemVkIHJlZmVyZW5jZSBzcGFuIHJlZmVycmluZyB0byBhIHBhcmFtZXRlciB0byBhIG1ldGhvZC9wcm9wZXJ0eVxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JUGFyYW1ldGVyUmVmZXJlbmNlU3BhbikpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgUGFyYW1ldGVyUmVmZXJlbmNlU3BhbiA6IFN5bWJvbFNwYW4sIENvZGV4LklQYXJhbWV0ZXJSZWZlcmVuY2VTcGFuIHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIGludCBtX1BhcmFtZXRlckluZGV4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBQYXJhbWV0ZXJSZWZlcmVuY2VTcGFuKCkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUGFyYW1ldGVyUmVmZXJlbmNlU3BhbihDb2RleC5JUGFyYW1ldGVyUmVmZXJlbmNlU3BhbiB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFBhcmFtZXRlclJlZmVyZW5jZVNwYW4+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFBhcmFtZXRlclJlZmVyZW5jZVNwYW4oQ29kZXguSVN5bWJvbFNwYW4gdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBQYXJhbWV0ZXJSZWZlcmVuY2VTcGFuKENvZGV4LklUZXh0TGluZVNwYW4gdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBQYXJhbWV0ZXJSZWZlcmVuY2VTcGFuKENvZGV4LklMaW5lU3BhbiB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFBhcmFtZXRlclJlZmVyZW5jZVNwYW4oQ29kZXguSVNwYW4gdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGluZGV4IG9mIHRoZSBwYXJhbWV0ZXIgaW4gdGhlIGxpc3Qgb2YgcGFyYW1ldGVycyBmb3IgdGhlIG1ldGhvZFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgaW50IFBhcmFtZXRlckluZGV4IHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUGFyYW1ldGVySW5kZXg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9QYXJhbWV0ZXJJbmRleCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVBhcmFtZXRlclJlZmVyZW5jZVNwYW4gdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBQYXJhbWV0ZXJSZWZlcmVuY2VTcGFuIHtcclxuICAgICAgICAgICAgdGhpcy5tX1BhcmFtZXRlckluZGV4ID0gKChDb2RleC5JUGFyYW1ldGVyUmVmZXJlbmNlU3BhbikodmFsdWUpKS5QYXJhbWV0ZXJJbmRleDtcclxuICAgICAgICAgICAgYmFzZS5Db3B5RnJvbTxTeW1ib2xTcGFuPigoKENvZGV4LklTeW1ib2xTcGFuKSh2YWx1ZSkpKTtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIERlZmluZXMgYSBjbGFzc2lmaWVkIHNwYW4gb2YgdGV4dFxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JQ2xhc3NpZmljYXRpb25TcGFuKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBDbGFzc2lmaWNhdGlvblNwYW4gOiBTcGFuLCBDb2RleC5JQ2xhc3NpZmljYXRpb25TcGFuIHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIGludCBtX0RlZmF1bHRDbGFzc2lmaWNhdGlvbkNvbG9yO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fQ2xhc3NpZmljYXRpb247XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBpbnQgbV9Mb2NhbEdyb3VwSWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIENsYXNzaWZpY2F0aW9uU3BhbigpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIENsYXNzaWZpY2F0aW9uU3BhbihDb2RleC5JQ2xhc3NpZmljYXRpb25TcGFuIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208Q2xhc3NpZmljYXRpb25TcGFuPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBDbGFzc2lmaWNhdGlvblNwYW4oQ29kZXguSVNwYW4gdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGRlZmF1bHQgY2xhc3NpZmljYXRpb24gY29sb3IgZm9yIHRoZSBzcGFuLiBUaGlzIGlzIHVzZWQgZm9yXHJcbiAgICAgICAgLy8vIGNvbnRleHRzIHdoZXJlIGEgbWFwcGluZyBmcm9tIGNsYXNzaWZpY2F0aW9uIGlkIHRvIGNvbG9yIGlzIG5vdFxyXG4gICAgICAgIC8vLyBhdmFpbGFibGUuXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBpbnQgRGVmYXVsdENsYXNzaWZpY2F0aW9uQ29sb3Ige1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9EZWZhdWx0Q2xhc3NpZmljYXRpb25Db2xvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0RlZmF1bHRDbGFzc2lmaWNhdGlvbkNvbG9yID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgY2xhc3NpZmljYXRpb24gaWRlbnRpZmllciBmb3IgdGhlIHNwYW5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBDbGFzc2lmaWNhdGlvbiB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0NsYXNzaWZpY2F0aW9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fQ2xhc3NpZmljYXRpb24gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBpZGVudGlmaWVyIHRvIHRoZSBsb2NhbCBncm91cCBvZiBzcGFucyB3aGljaCByZWZlciB0byB0aGUgc2FtZSBjb21tb24gc3ltYm9sXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBpbnQgTG9jYWxHcm91cElkIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fTG9jYWxHcm91cElkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fTG9jYWxHcm91cElkID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JQ2xhc3NpZmljYXRpb25TcGFuIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogQ2xhc3NpZmljYXRpb25TcGFuIHtcclxuICAgICAgICAgICAgdGhpcy5tX0RlZmF1bHRDbGFzc2lmaWNhdGlvbkNvbG9yID0gKChDb2RleC5JQ2xhc3NpZmljYXRpb25TcGFuKSh2YWx1ZSkpLkRlZmF1bHRDbGFzc2lmaWNhdGlvbkNvbG9yO1xyXG4gICAgICAgICAgICB0aGlzLm1fQ2xhc3NpZmljYXRpb24gPSAoKENvZGV4LklDbGFzc2lmaWNhdGlvblNwYW4pKHZhbHVlKSkuQ2xhc3NpZmljYXRpb247XHJcbiAgICAgICAgICAgIHRoaXMubV9Mb2NhbEdyb3VwSWQgPSAoKENvZGV4LklDbGFzc2lmaWNhdGlvblNwYW4pKHZhbHVlKSkuTG9jYWxHcm91cElkO1xyXG4gICAgICAgICAgICBiYXNlLkNvcHlGcm9tPFNwYW4+KCgoQ29kZXguSVNwYW4pKHZhbHVlKSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSVN5bWJvbFNwYW4pKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIFN5bWJvbFNwYW4gOiBUZXh0TGluZVNwYW4sIENvZGV4LklTeW1ib2xTcGFuIHtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgU3ltYm9sU3BhbigpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFN5bWJvbFNwYW4oQ29kZXguSVN5bWJvbFNwYW4gdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxTeW1ib2xTcGFuPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBTeW1ib2xTcGFuKENvZGV4LklUZXh0TGluZVNwYW4gdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBTeW1ib2xTcGFuKENvZGV4LklMaW5lU3BhbiB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFN5bWJvbFNwYW4oQ29kZXguSVNwYW4gdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVN5bWJvbFNwYW4gdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBTeW1ib2xTcGFuIHtcclxuICAgICAgICAgICAgYmFzZS5Db3B5RnJvbTxUZXh0TGluZVNwYW4+KCgoQ29kZXguSVRleHRMaW5lU3BhbikodmFsdWUpKSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JVGV4dExpbmVTcGFuKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBUZXh0TGluZVNwYW4gOiBMaW5lU3BhbiwgQ29kZXguSVRleHRMaW5lU3BhbiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9MaW5lU3BhblRleHQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFRleHRMaW5lU3BhbigpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFRleHRMaW5lU3BhbihDb2RleC5JVGV4dExpbmVTcGFuIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208VGV4dExpbmVTcGFuPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBUZXh0TGluZVNwYW4oQ29kZXguSUxpbmVTcGFuIHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgVGV4dExpbmVTcGFuKENvZGV4LklTcGFuIHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBsaW5lIHRleHRcclxuICAgICAgICAvLy8gVE9ETzogSXQgd291bGQgYmUgbmljZSB0byBub3Qgc3RvcmUgdGhpcyBoZXJlIGFuZCBpbnN0ZWFkIGFwcGx5IGl0IGFzIGEgam9pblxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIExpbmVTcGFuVGV4dCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0xpbmVTcGFuVGV4dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0xpbmVTcGFuVGV4dCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVRleHRMaW5lU3BhbiB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IFRleHRMaW5lU3BhbiB7XHJcbiAgICAgICAgICAgIHRoaXMubV9MaW5lU3BhblRleHQgPSAoKENvZGV4LklUZXh0TGluZVNwYW4pKHZhbHVlKSkuTGluZVNwYW5UZXh0O1xyXG4gICAgICAgICAgICBiYXNlLkNvcHlGcm9tPExpbmVTcGFuPigoKENvZGV4LklMaW5lU3BhbikodmFsdWUpKSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JTGluZVNwYW4pKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIExpbmVTcGFuIDogU3BhbiwgQ29kZXguSUxpbmVTcGFuIHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5OdWxsYWJsZTxpbnQ+IG1fTGluZUluZGV4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLk51bGxhYmxlPGludD4gbV9MaW5lTnVtYmVyO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgaW50IG1fTGluZVNwYW5TdGFydDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIGludCBtX0xpbmVPZmZzZXQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIExpbmVTcGFuKCkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgTGluZVNwYW4oQ29kZXguSUxpbmVTcGFuIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208TGluZVNwYW4+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIExpbmVTcGFuKENvZGV4LklTcGFuIHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSAwLWJhc2VkIGluZGV4IG9mIHRoZSBsaW5lIGNvbnRhaW5pbmcgdGhlIHNwYW5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGludCBMaW5lSW5kZXgge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuQ29lcmNlTGluZUluZGV4KHRoaXMubV9MaW5lSW5kZXgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fTGluZUluZGV4ID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgMS1iYXNlZCBsaW5lIG51bWJlciBvZiB0aGUgbGluZSBjb250YWluaW5nIHRoZSBzcGFuXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBpbnQgTGluZU51bWJlciB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5Db2VyY2VMaW5lTnVtYmVyKHRoaXMubV9MaW5lTnVtYmVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0xpbmVOdW1iZXIgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBjaGFyYWN0ZXIgcG9zaXRpb24gd2hlcmUgdGhlIHNwYW4gc3RhcnRzIGluIHRoZSBsaW5lIHRleHRcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGludCBMaW5lU3BhblN0YXJ0IHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fTGluZVNwYW5TdGFydDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0xpbmVTcGFuU3RhcnQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIElmIHBvc2l0aXZlLCB0aGUgb2Zmc2V0IG9mIHRoZSBsaW5lIHNwYW4gZnJvbSB0aGUgYmVnaW5uaW5nIG9mIHRoZSBsaW5lXHJcbiAgICAgICAgLy8vIElmIG5lZ2F0aXZlLCB0aGUgb2Zmc2V0IG9mIHRoZSBsaW5lc3BhbiBmcm9tIHRoZSBlbmQgb2YgdGhlIG5leHQgbGluZVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgaW50IExpbmVPZmZzZXQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9MaW5lT2Zmc2V0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fTGluZU9mZnNldCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSUxpbmVTcGFuIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogTGluZVNwYW4ge1xyXG4gICAgICAgICAgICB0aGlzLm1fTGluZUluZGV4ID0gKChDb2RleC5JTGluZVNwYW4pKHZhbHVlKSkuTGluZUluZGV4O1xyXG4gICAgICAgICAgICB0aGlzLm1fTGluZU51bWJlciA9ICgoQ29kZXguSUxpbmVTcGFuKSh2YWx1ZSkpLkxpbmVOdW1iZXI7XHJcbiAgICAgICAgICAgIHRoaXMubV9MaW5lU3BhblN0YXJ0ID0gKChDb2RleC5JTGluZVNwYW4pKHZhbHVlKSkuTGluZVNwYW5TdGFydDtcclxuICAgICAgICAgICAgdGhpcy5tX0xpbmVPZmZzZXQgPSAoKENvZGV4LklMaW5lU3BhbikodmFsdWUpKS5MaW5lT2Zmc2V0O1xyXG4gICAgICAgICAgICBiYXNlLkNvcHlGcm9tPFNwYW4+KCgoQ29kZXguSVNwYW4pKHZhbHVlKSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSVNwYW4pKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIFNwYW4gOiBDb2RleC5FbnRpdHlCYXNlLCBDb2RleC5JU3BhbiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBpbnQgbV9TdGFydDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIGludCBtX0xlbmd0aDtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgU3BhbigpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgU3BhbihDb2RleC5JU3BhbiB2YWx1ZSkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208U3Bhbj4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBhYnNvbHV0ZSBjaGFyYWN0ZXIgb2Zmc2V0IG9mIHRoZSBzcGFuIHdpdGhpbiB0aGUgZG9jdW1lbnRcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGludCBTdGFydCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1N0YXJ0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fU3RhcnQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBsZW5ndGggb2YgdGhlIHNwYW5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGludCBMZW5ndGgge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9MZW5ndGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9MZW5ndGggPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklTcGFuIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogU3BhbiB7XHJcbiAgICAgICAgICAgIHRoaXMubV9TdGFydCA9ICgoQ29kZXguSVNwYW4pKHZhbHVlKSkuU3RhcnQ7XHJcbiAgICAgICAgICAgIHRoaXMubV9MZW5ndGggPSAoKENvZGV4LklTcGFuKSh2YWx1ZSkpLkxlbmd0aDtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklDb2RlUmV2aWV3KSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBDb2RlUmV2aWV3IDogQ29kZXguRW50aXR5QmFzZSwgQ29kZXguSUNvZGVSZXZpZXcge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fSWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9EZXNjcmlwdGlvbjtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX1VybDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIENvZGV4LkNvZGVSZXZpZXdTdGF0dXMgbV9TdGF0dXM7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIENvZGVSZXZpZXcoKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIENvZGVSZXZpZXcoQ29kZXguSUNvZGVSZXZpZXcgdmFsdWUpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPENvZGVSZXZpZXc+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIElkIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fSWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9JZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBEZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0Rlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fRGVzY3JpcHRpb24gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFVybCBmb3IgYWNjZXNzaW5nIGNvZGUgcmV2aWV3IGluIHNvdXJjZSBjb250cm9sIG1hbmFnZW1lbnQgKGkuZS4gR2l0SHViIG9yIFZTTylcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBVcmwge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Vcmw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9VcmwgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBDb2RleC5Db2RlUmV2aWV3U3RhdHVzIFN0YXR1cyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1N0YXR1cztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1N0YXR1cyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSUNvZGVSZXZpZXcgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBDb2RlUmV2aWV3IHtcclxuICAgICAgICAgICAgdGhpcy5tX0lkID0gKChDb2RleC5JQ29kZVJldmlldykodmFsdWUpKS5JZDtcclxuICAgICAgICAgICAgdGhpcy5tX0Rlc2NyaXB0aW9uID0gKChDb2RleC5JQ29kZVJldmlldykodmFsdWUpKS5EZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgdGhpcy5tX1VybCA9ICgoQ29kZXguSUNvZGVSZXZpZXcpKHZhbHVlKSkuVXJsO1xyXG4gICAgICAgICAgICB0aGlzLm1fU3RhdHVzID0gKChDb2RleC5JQ29kZVJldmlldykodmFsdWUpKS5TdGF0dXM7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JQ29kZVJldmlld0l0ZXJhdGlvbikpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgQ29kZVJldmlld0l0ZXJhdGlvbiA6IENvZGV4LkVudGl0eUJhc2UsIENvZGV4LklDb2RlUmV2aWV3SXRlcmF0aW9uIHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIGludCBtX0l0ZXJhdGlvbk51bWJlcjtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX1Jldmlld0lkO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fRGVzY3JpcHRpb247XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PENvZGVSZXZpZXdGaWxlPiBtX0ZpbGVzID0gbmV3IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8Q29kZVJldmlld0ZpbGU+KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIENvZGVSZXZpZXdJdGVyYXRpb24oKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIENvZGVSZXZpZXdJdGVyYXRpb24oQ29kZXguSUNvZGVSZXZpZXdJdGVyYXRpb24gdmFsdWUpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPENvZGVSZXZpZXdJdGVyYXRpb24+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgaW50IEl0ZXJhdGlvbk51bWJlciB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0l0ZXJhdGlvbk51bWJlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0l0ZXJhdGlvbk51bWJlciA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBSZXZpZXdJZCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1Jldmlld0lkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUmV2aWV3SWQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgRGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9EZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0Rlc2NyaXB0aW9uID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSVJlYWRPbmx5TGlzdDxDb2RleC5JQ29kZVJldmlld0ZpbGU+IENvZGV4LklDb2RlUmV2aWV3SXRlcmF0aW9uLkZpbGVzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkZpbGVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8Q29kZVJldmlld0ZpbGU+IEZpbGVzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fRmlsZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9GaWxlcyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSUNvZGVSZXZpZXdJdGVyYXRpb24gdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBDb2RlUmV2aWV3SXRlcmF0aW9uIHtcclxuICAgICAgICAgICAgdGhpcy5tX0l0ZXJhdGlvbk51bWJlciA9ICgoQ29kZXguSUNvZGVSZXZpZXdJdGVyYXRpb24pKHZhbHVlKSkuSXRlcmF0aW9uTnVtYmVyO1xyXG4gICAgICAgICAgICB0aGlzLm1fUmV2aWV3SWQgPSAoKENvZGV4LklDb2RlUmV2aWV3SXRlcmF0aW9uKSh2YWx1ZSkpLlJldmlld0lkO1xyXG4gICAgICAgICAgICB0aGlzLm1fRGVzY3JpcHRpb24gPSAoKENvZGV4LklDb2RlUmV2aWV3SXRlcmF0aW9uKSh2YWx1ZSkpLkRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICB0aGlzLm1fRmlsZXMgPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxDb2RlUmV2aWV3RmlsZT4oU3lzdGVtLkxpbnEuRW51bWVyYWJsZS5TZWxlY3Q8Z2xvYmFsOjpDb2RleC5JQ29kZVJldmlld0ZpbGUsZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Db2RlUmV2aWV3RmlsZT4oKChDb2RleC5JQ29kZVJldmlld0l0ZXJhdGlvbikodmFsdWUpKS5GaWxlcywgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5JQ29kZVJldmlld0ZpbGUsIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuQ29kZVJldmlld0ZpbGU+KSh2ID0+IEVudGl0eVV0aWxpdGllcy5OdWxsT3JDb3B5PGdsb2JhbDo6Q29kZXguSUNvZGVSZXZpZXdGaWxlLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuQ29kZVJldmlld0ZpbGU+KHYsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguSUNvZGVSZXZpZXdGaWxlLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkNvZGVSZXZpZXdGaWxlPikoX3YgPT4gbmV3IENvZGVSZXZpZXdGaWxlKCkuQ29weUZyb208Q29kZVJldmlld0ZpbGU+KF92KSkpKSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSUNvZGVSZXZpZXdlckluZm8pKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIENvZGVSZXZpZXdlckluZm8gOiBDb2RleC5FbnRpdHlCYXNlLCBDb2RleC5JQ29kZVJldmlld2VySW5mbyB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9OYW1lO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBDb2RlUmV2aWV3ZXJJbmZvKCkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBDb2RlUmV2aWV3ZXJJbmZvKENvZGV4LklDb2RlUmV2aWV3ZXJJbmZvIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxDb2RlUmV2aWV3ZXJJbmZvPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBOYW1lIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fTmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX05hbWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklDb2RlUmV2aWV3ZXJJbmZvIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogQ29kZVJldmlld2VySW5mbyB7XHJcbiAgICAgICAgICAgIHRoaXMubV9OYW1lID0gKChDb2RleC5JQ29kZVJldmlld2VySW5mbykodmFsdWUpKS5OYW1lO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSUNvZGVSZXZpZXdGaWxlKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBDb2RlUmV2aWV3RmlsZSA6IENvZGV4LkVudGl0eUJhc2UsIENvZGV4LklDb2RlUmV2aWV3RmlsZSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBpbnQgbV9TdGFydEl0ZXJhdGlvbjtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX1JlcG9SZWxhdGl2ZVBhdGg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9GaWxlSWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9CYXNlbGluZUZpbGVJZDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIENvZGV4LkZpbGVDaGFuZ2VLaW5kIG1fQ2hhbmdlS2luZDtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQ29kZVJldmlld0ZpbGUoKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIENvZGVSZXZpZXdGaWxlKENvZGV4LklDb2RlUmV2aWV3RmlsZSB2YWx1ZSkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208Q29kZVJldmlld0ZpbGU+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgZmlyc3QgaXRlcmF0aW9uIGluIHdoaWNoIHRoaXMgZmlsZSBhcHBlYXJzXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBpbnQgU3RhcnRJdGVyYXRpb24ge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9TdGFydEl0ZXJhdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1N0YXJ0SXRlcmF0aW9uID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgcmVsYXRpdmUgcGF0aCBpbiB0aGUgcmVwb3NpdG9yeVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIFJlcG9SZWxhdGl2ZVBhdGgge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9SZXBvUmVsYXRpdmVQYXRoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUmVwb1JlbGF0aXZlUGF0aCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGZpbGUgaWQgb2YgdGhlIG5ldyB2ZXJzaW9uIG9mIHRoZSBmaWxlXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgRmlsZUlkIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fRmlsZUlkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fRmlsZUlkID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgZmlsZSBpZCBvZiB0aGUgYmFzZWxpbmUgdmVyc2lvbiBvZiB0aGUgZmlsZVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIEJhc2VsaW5lRmlsZUlkIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fQmFzZWxpbmVGaWxlSWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9CYXNlbGluZUZpbGVJZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHR5cGUgb2YgY2hhbmdlIGFwcGxpZWQgdG8gdGhlIGZpbGVcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIENvZGV4LkZpbGVDaGFuZ2VLaW5kIENoYW5nZUtpbmQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9DaGFuZ2VLaW5kO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fQ2hhbmdlS2luZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSUNvZGVSZXZpZXdGaWxlIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogQ29kZVJldmlld0ZpbGUge1xyXG4gICAgICAgICAgICB0aGlzLm1fU3RhcnRJdGVyYXRpb24gPSAoKENvZGV4LklDb2RlUmV2aWV3RmlsZSkodmFsdWUpKS5TdGFydEl0ZXJhdGlvbjtcclxuICAgICAgICAgICAgdGhpcy5tX1JlcG9SZWxhdGl2ZVBhdGggPSAoKENvZGV4LklDb2RlUmV2aWV3RmlsZSkodmFsdWUpKS5SZXBvUmVsYXRpdmVQYXRoO1xyXG4gICAgICAgICAgICB0aGlzLm1fRmlsZUlkID0gKChDb2RleC5JQ29kZVJldmlld0ZpbGUpKHZhbHVlKSkuRmlsZUlkO1xyXG4gICAgICAgICAgICB0aGlzLm1fQmFzZWxpbmVGaWxlSWQgPSAoKENvZGV4LklDb2RlUmV2aWV3RmlsZSkodmFsdWUpKS5CYXNlbGluZUZpbGVJZDtcclxuICAgICAgICAgICAgdGhpcy5tX0NoYW5nZUtpbmQgPSAoKENvZGV4LklDb2RlUmV2aWV3RmlsZSkodmFsdWUpKS5DaGFuZ2VLaW5kO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSUNvZGVSZXZpZXdDb21tZW50VGhyZWFkKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBDb2RlUmV2aWV3Q29tbWVudFRocmVhZCA6IENvZGV4LkVudGl0eUJhc2UsIENvZGV4LklDb2RlUmV2aWV3Q29tbWVudFRocmVhZCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBMaW5lU3BhbiBtX09yaWdpbmFsU3BhbjtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIGludCBtX1N0YXJ0SXRlcmF0aW9uO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLkRhdGVUaW1lIG1fTGFzdFVwZGF0ZWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9GaWxlUmVwb1JlbGF0aXZlUGF0aDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8Q29kZVJldmlld0NvbW1lbnQ+IG1fQ29tbWVudHMgPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxDb2RlUmV2aWV3Q29tbWVudD4oKTtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQ29kZVJldmlld0NvbW1lbnRUaHJlYWQoKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIENvZGVSZXZpZXdDb21tZW50VGhyZWFkKENvZGV4LklDb2RlUmV2aWV3Q29tbWVudFRocmVhZCB2YWx1ZSkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208Q29kZVJldmlld0NvbW1lbnRUaHJlYWQ+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgb3JpZ2luYWwgbG9jYXRpb24gZm9yIHRoZSBjb21tZW50IGluIHRoZSBvcmlnaW5hdGluZyBpdGVyYXRpb25cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIENvZGV4LklMaW5lU3BhbiBDb2RleC5JQ29kZVJldmlld0NvbW1lbnRUaHJlYWQuT3JpZ2luYWxTcGFuIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLk9yaWdpbmFsU3BhbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBvcmlnaW5hbCBsb2NhdGlvbiBmb3IgdGhlIGNvbW1lbnQgaW4gdGhlIG9yaWdpbmF0aW5nIGl0ZXJhdGlvblxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgTGluZVNwYW4gT3JpZ2luYWxTcGFuIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fT3JpZ2luYWxTcGFuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fT3JpZ2luYWxTcGFuID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgaXRlcmF0aW9uIHdoZXJlIHRoZSBjb21tZW50IG9yaWdpbmF0ZWRcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGludCBTdGFydEl0ZXJhdGlvbiB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1N0YXJ0SXRlcmF0aW9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fU3RhcnRJdGVyYXRpb24gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBsYXN0IHRpZVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgU3lzdGVtLkRhdGVUaW1lIExhc3RVcGRhdGVkIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fTGFzdFVwZGF0ZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9MYXN0VXBkYXRlZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBGaWxlUmVwb1JlbGF0aXZlUGF0aCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0ZpbGVSZXBvUmVsYXRpdmVQYXRoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fRmlsZVJlcG9SZWxhdGl2ZVBhdGggPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JUmVhZE9ubHlMaXN0PENvZGV4LklDb2RlUmV2aWV3Q29tbWVudD4gQ29kZXguSUNvZGVSZXZpZXdDb21tZW50VGhyZWFkLkNvbW1lbnRzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkNvbW1lbnRzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8Q29kZVJldmlld0NvbW1lbnQ+IENvbW1lbnRzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fQ29tbWVudHM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Db21tZW50cyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSUNvZGVSZXZpZXdDb21tZW50VGhyZWFkIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogQ29kZVJldmlld0NvbW1lbnRUaHJlYWQge1xyXG4gICAgICAgICAgICB0aGlzLm1fT3JpZ2luYWxTcGFuID0gRW50aXR5VXRpbGl0aWVzLk51bGxPckNvcHk8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5MaW5lU3BhbixnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkxpbmVTcGFuPihPcmlnaW5hbFNwYW4sIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuTGluZVNwYW4sIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuTGluZVNwYW4+KSh2ID0+IG5ldyBMaW5lU3BhbigpLkNvcHlGcm9tPExpbmVTcGFuPih2KSkpOztcclxuICAgICAgICAgICAgdGhpcy5tX1N0YXJ0SXRlcmF0aW9uID0gKChDb2RleC5JQ29kZVJldmlld0NvbW1lbnRUaHJlYWQpKHZhbHVlKSkuU3RhcnRJdGVyYXRpb247XHJcbiAgICAgICAgICAgIHRoaXMubV9MYXN0VXBkYXRlZCA9ICgoQ29kZXguSUNvZGVSZXZpZXdDb21tZW50VGhyZWFkKSh2YWx1ZSkpLkxhc3RVcGRhdGVkO1xyXG4gICAgICAgICAgICB0aGlzLm1fRmlsZVJlcG9SZWxhdGl2ZVBhdGggPSAoKENvZGV4LklDb2RlUmV2aWV3Q29tbWVudFRocmVhZCkodmFsdWUpKS5GaWxlUmVwb1JlbGF0aXZlUGF0aDtcclxuICAgICAgICAgICAgdGhpcy5tX0NvbW1lbnRzID0gbmV3IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8Q29kZVJldmlld0NvbW1lbnQ+KFN5c3RlbS5MaW5xLkVudW1lcmFibGUuU2VsZWN0PGdsb2JhbDo6Q29kZXguSUNvZGVSZXZpZXdDb21tZW50LGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuQ29kZVJldmlld0NvbW1lbnQ+KCgoQ29kZXguSUNvZGVSZXZpZXdDb21tZW50VGhyZWFkKSh2YWx1ZSkpLkNvbW1lbnRzLCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4LklDb2RlUmV2aWV3Q29tbWVudCwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Db2RlUmV2aWV3Q29tbWVudD4pKHYgPT4gRW50aXR5VXRpbGl0aWVzLk51bGxPckNvcHk8Z2xvYmFsOjpDb2RleC5JQ29kZVJldmlld0NvbW1lbnQsZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Db2RlUmV2aWV3Q29tbWVudD4odiwgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5JQ29kZVJldmlld0NvbW1lbnQsIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuQ29kZVJldmlld0NvbW1lbnQ+KShfdiA9PiBuZXcgQ29kZVJldmlld0NvbW1lbnQoKS5Db3B5RnJvbTxDb2RlUmV2aWV3Q29tbWVudD4oX3YpKSkpKSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JQ29kZVJldmlld0NvbW1lbnQpKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIENvZGVSZXZpZXdDb21tZW50IDogQ29kZXguRW50aXR5QmFzZSwgQ29kZXguSUNvZGVSZXZpZXdDb21tZW50IHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX1RleHQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9SZXZpZXdlcjtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIENvZGV4LkNvbW1lbnRJbXBvcnRhbmNlIG1fSW1wb3J0YW5jZTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5EYXRlVGltZSBtX0NvbW1lbnRUaW1lO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBDb2RlUmV2aWV3Q29tbWVudCgpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQ29kZVJldmlld0NvbW1lbnQoQ29kZXguSUNvZGVSZXZpZXdDb21tZW50IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxDb2RlUmV2aWV3Q29tbWVudD4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgVGV4dCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1RleHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9UZXh0ID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgbmFtZSBvZiB0aGUgcmV2aWV3ZXIgd2hpY2ggbWFkZSB0aGUgY29tbWVudFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIFJldmlld2VyIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUmV2aWV3ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9SZXZpZXdlciA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGltcG9ydGFuY2Ugb2YgdGhlIGNvbW1lbnRcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIENvZGV4LkNvbW1lbnRJbXBvcnRhbmNlIEltcG9ydGFuY2Uge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9JbXBvcnRhbmNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fSW1wb3J0YW5jZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHRpbWUgd2hlbiB0aGUgY29tbWVudCB3YXMgc3VibWl0dGVkXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBTeXN0ZW0uRGF0ZVRpbWUgQ29tbWVudFRpbWUge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Db21tZW50VGltZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0NvbW1lbnRUaW1lID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JQ29kZVJldmlld0NvbW1lbnQgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBDb2RlUmV2aWV3Q29tbWVudCB7XHJcbiAgICAgICAgICAgIHRoaXMubV9UZXh0ID0gKChDb2RleC5JQ29kZVJldmlld0NvbW1lbnQpKHZhbHVlKSkuVGV4dDtcclxuICAgICAgICAgICAgdGhpcy5tX1Jldmlld2VyID0gKChDb2RleC5JQ29kZVJldmlld0NvbW1lbnQpKHZhbHVlKSkuUmV2aWV3ZXI7XHJcbiAgICAgICAgICAgIHRoaXMubV9JbXBvcnRhbmNlID0gKChDb2RleC5JQ29kZVJldmlld0NvbW1lbnQpKHZhbHVlKSkuSW1wb3J0YW5jZTtcclxuICAgICAgICAgICAgdGhpcy5tX0NvbW1lbnRUaW1lID0gKChDb2RleC5JQ29kZVJldmlld0NvbW1lbnQpKHZhbHVlKSkuQ29tbWVudFRpbWU7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JTGFuZ3VhZ2VJbmZvKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBMYW5ndWFnZUluZm8gOiBDb2RleC5FbnRpdHlCYXNlLCBDb2RleC5JTGFuZ3VhZ2VJbmZvIHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX05hbWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PENsYXNzaWZpY2F0aW9uU3R5bGU+IG1fQ2xhc3NpZmljYXRpb25zID0gbmV3IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8Q2xhc3NpZmljYXRpb25TdHlsZT4oKTtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgTGFuZ3VhZ2VJbmZvKCkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBMYW5ndWFnZUluZm8oQ29kZXguSUxhbmd1YWdlSW5mbyB2YWx1ZSkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208TGFuZ3VhZ2VJbmZvPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIG5hbWUgb2YgdGhlIGxhbmd1YWdlXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgTmFtZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX05hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9OYW1lID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBEZXNjcmliZXMgdGhlIHN0eWxlIGZvciBjbGFzc2lmaWVkIHNwYW5zLiBTZWUgPHNlZSBjcmVmPVwiUDpDb2RleC5JQm91bmRTb3VyY2VJbmZvLkNsYXNzaWZpY2F0aW9uc1wiIC8+LlxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSVJlYWRPbmx5TGlzdDxDb2RleC5JQ2xhc3NpZmljYXRpb25TdHlsZT4gQ29kZXguSUxhbmd1YWdlSW5mby5DbGFzc2lmaWNhdGlvbnMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuQ2xhc3NpZmljYXRpb25zO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gRGVzY3JpYmVzIHRoZSBzdHlsZSBmb3IgY2xhc3NpZmllZCBzcGFucy4gU2VlIDxzZWUgY3JlZj1cIlA6Q29kZXguSUJvdW5kU291cmNlSW5mby5DbGFzc2lmaWNhdGlvbnNcIiAvPi5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8Q2xhc3NpZmljYXRpb25TdHlsZT4gQ2xhc3NpZmljYXRpb25zIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fQ2xhc3NpZmljYXRpb25zO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fQ2xhc3NpZmljYXRpb25zID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JTGFuZ3VhZ2VJbmZvIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogTGFuZ3VhZ2VJbmZvIHtcclxuICAgICAgICAgICAgdGhpcy5tX05hbWUgPSAoKENvZGV4LklMYW5ndWFnZUluZm8pKHZhbHVlKSkuTmFtZTtcclxuICAgICAgICAgICAgdGhpcy5tX0NsYXNzaWZpY2F0aW9ucyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PENsYXNzaWZpY2F0aW9uU3R5bGU+KFN5c3RlbS5MaW5xLkVudW1lcmFibGUuU2VsZWN0PGdsb2JhbDo6Q29kZXguSUNsYXNzaWZpY2F0aW9uU3R5bGUsZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5DbGFzc2lmaWNhdGlvblN0eWxlPigoKENvZGV4LklMYW5ndWFnZUluZm8pKHZhbHVlKSkuQ2xhc3NpZmljYXRpb25zLCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4LklDbGFzc2lmaWNhdGlvblN0eWxlLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkNsYXNzaWZpY2F0aW9uU3R5bGU+KSh2ID0+IEVudGl0eVV0aWxpdGllcy5OdWxsT3JDb3B5PGdsb2JhbDo6Q29kZXguSUNsYXNzaWZpY2F0aW9uU3R5bGUsZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5DbGFzc2lmaWNhdGlvblN0eWxlPih2LCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4LklDbGFzc2lmaWNhdGlvblN0eWxlLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkNsYXNzaWZpY2F0aW9uU3R5bGU+KShfdiA9PiBuZXcgQ2xhc3NpZmljYXRpb25TdHlsZSgpLkNvcHlGcm9tPENsYXNzaWZpY2F0aW9uU3R5bGU+KF92KSkpKSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8gRGVzY3JpYmVzIHN0eWxpbmcgZm9yIGEgZ2l2ZW4gY2xhc3NpZmljYXRpb25cclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSUNsYXNzaWZpY2F0aW9uU3R5bGUpKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIENsYXNzaWZpY2F0aW9uU3R5bGUgOiBDb2RleC5FbnRpdHlCYXNlLCBDb2RleC5JQ2xhc3NpZmljYXRpb25TdHlsZSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBpbnQgbV9Db2xvcjtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIGJvb2wgbV9JdGFsaWM7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9OYW1lO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBDbGFzc2lmaWNhdGlvblN0eWxlKCkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBDbGFzc2lmaWNhdGlvblN0eWxlKENvZGV4LklDbGFzc2lmaWNhdGlvblN0eWxlIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxDbGFzc2lmaWNhdGlvblN0eWxlPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGRlZmF1bHQgY2xhc3NpZmljYXRpb24gY29sb3IgZm9yIHRoZSBjbGFzc2lmaWNhdGlvbi4gVGhpcyBpcyB1c2VkIGZvclxyXG4gICAgICAgIC8vLyBjb250ZXh0cyB3aGVyZSBhIG1hcHBpbmcgZnJvbSBjbGFzc2lmaWNhdGlvbiBpZCB0byBjb2xvciBpcyBub3RcclxuICAgICAgICAvLy8gYXZhaWxhYmxlLlxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgaW50IENvbG9yIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fQ29sb3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Db2xvciA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gSW5kaWNhdGVzIHdoZXRoZXIgdGhlIHNwYW5zIGNsYXNzaWZpZWQgd2l0aCB0aGlzIGNsYXNzaWZpY2F0aW9uIHNob3VsZCBoYXZlIGl0YWxpYyBmb250IGJ5IGRlZmF1bHRcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGJvb2wgSXRhbGljIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fSXRhbGljO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fSXRhbGljID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgbmFtZSBvZiB0aGUgY2xhc3NpZmljYXRpb25cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBOYW1lIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fTmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX05hbWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklDbGFzc2lmaWNhdGlvblN0eWxlIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogQ2xhc3NpZmljYXRpb25TdHlsZSB7XHJcbiAgICAgICAgICAgIHRoaXMubV9Db2xvciA9ICgoQ29kZXguSUNsYXNzaWZpY2F0aW9uU3R5bGUpKHZhbHVlKSkuQ29sb3I7XHJcbiAgICAgICAgICAgIHRoaXMubV9JdGFsaWMgPSAoKENvZGV4LklDbGFzc2lmaWNhdGlvblN0eWxlKSh2YWx1ZSkpLkl0YWxpYztcclxuICAgICAgICAgICAgdGhpcy5tX05hbWUgPSAoKENvZGV4LklDbGFzc2lmaWNhdGlvblN0eWxlKSh2YWx1ZSkpLk5hbWU7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JUHJvamVjdCkpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgQW5hbHl6ZWRQcm9qZWN0IDogUHJvamVjdFNjb3BlRW50aXR5LCBDb2RleC5JUHJvamVjdCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9Qcm9qZWN0S2luZDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8UHJvamVjdEZpbGVMaW5rPiBtX0ZpbGVzID0gbmV3IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8UHJvamVjdEZpbGVMaW5rPigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxSZWZlcmVuY2VkUHJvamVjdD4gbV9Qcm9qZWN0UmVmZXJlbmNlcyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PFJlZmVyZW5jZWRQcm9qZWN0PigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBBbmFseXplZFByb2plY3QoKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBBbmFseXplZFByb2plY3QoQ29kZXguSVByb2plY3QgdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxBbmFseXplZFByb2plY3Q+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIEFuYWx5emVkUHJvamVjdChDb2RleC5JUHJvamVjdFNjb3BlRW50aXR5IHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQW5hbHl6ZWRQcm9qZWN0KENvZGV4LklSZXBvU2NvcGVFbnRpdHkgdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHByb2plY3Qga2luZCAoc2VlIDxzZWUgY3JlZj1cIlQ6Q29kZXguT2JqZWN0TW9kZWwuUHJvamVjdEtpbmRcIiAvPilcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBQcm9qZWN0S2luZCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1Byb2plY3RLaW5kO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUHJvamVjdEtpbmQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFJlZmVyZW5jZXMgdG8gZmlsZXMgaW4gdGhlIHByb2plY3RcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklSZWFkT25seUxpc3Q8Q29kZXguSVByb2plY3RGaWxlTGluaz4gQ29kZXguSVByb2plY3QuRmlsZXMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuRmlsZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBSZWZlcmVuY2VzIHRvIGZpbGVzIGluIHRoZSBwcm9qZWN0XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PFByb2plY3RGaWxlTGluaz4gRmlsZXMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9GaWxlcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0ZpbGVzID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBEZXNjcmlwdGlvbnMgb2YgcmVmZXJlbmNlZCBwcm9qZWN0cyBhbmQgdXNlZCBkZWZpbml0aW9ucyBmcm9tIHRoZSBwcm9qZWN0c1xyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSVJlYWRPbmx5TGlzdDxDb2RleC5JUmVmZXJlbmNlZFByb2plY3Q+IENvZGV4LklQcm9qZWN0LlByb2plY3RSZWZlcmVuY2VzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLlByb2plY3RSZWZlcmVuY2VzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gRGVzY3JpcHRpb25zIG9mIHJlZmVyZW5jZWQgcHJvamVjdHMgYW5kIHVzZWQgZGVmaW5pdGlvbnMgZnJvbSB0aGUgcHJvamVjdHNcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8UmVmZXJlbmNlZFByb2plY3Q+IFByb2plY3RSZWZlcmVuY2VzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUHJvamVjdFJlZmVyZW5jZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Qcm9qZWN0UmVmZXJlbmNlcyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVByb2plY3QgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBBbmFseXplZFByb2plY3Qge1xyXG4gICAgICAgICAgICB0aGlzLm1fUHJvamVjdEtpbmQgPSAoKENvZGV4LklQcm9qZWN0KSh2YWx1ZSkpLlByb2plY3RLaW5kO1xyXG4gICAgICAgICAgICB0aGlzLm1fRmlsZXMgPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxQcm9qZWN0RmlsZUxpbms+KFN5c3RlbS5MaW5xLkVudW1lcmFibGUuU2VsZWN0PGdsb2JhbDo6Q29kZXguSVByb2plY3RGaWxlTGluayxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlByb2plY3RGaWxlTGluaz4oKChDb2RleC5JUHJvamVjdCkodmFsdWUpKS5GaWxlcywgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5JUHJvamVjdEZpbGVMaW5rLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlByb2plY3RGaWxlTGluaz4pKHYgPT4gRW50aXR5VXRpbGl0aWVzLk51bGxPckNvcHk8Z2xvYmFsOjpDb2RleC5JUHJvamVjdEZpbGVMaW5rLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuUHJvamVjdEZpbGVMaW5rPih2LCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4LklQcm9qZWN0RmlsZUxpbmssIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuUHJvamVjdEZpbGVMaW5rPikoX3YgPT4gbmV3IFByb2plY3RGaWxlTGluaygpLkNvcHlGcm9tPFByb2plY3RGaWxlTGluaz4oX3YpKSkpKSk7XHJcbiAgICAgICAgICAgIHRoaXMubV9Qcm9qZWN0UmVmZXJlbmNlcyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PFJlZmVyZW5jZWRQcm9qZWN0PihTeXN0ZW0uTGlucS5FbnVtZXJhYmxlLlNlbGVjdDxnbG9iYWw6OkNvZGV4LklSZWZlcmVuY2VkUHJvamVjdCxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlJlZmVyZW5jZWRQcm9qZWN0PigoKENvZGV4LklQcm9qZWN0KSh2YWx1ZSkpLlByb2plY3RSZWZlcmVuY2VzLCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4LklSZWZlcmVuY2VkUHJvamVjdCwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5SZWZlcmVuY2VkUHJvamVjdD4pKHYgPT4gRW50aXR5VXRpbGl0aWVzLk51bGxPckNvcHk8Z2xvYmFsOjpDb2RleC5JUmVmZXJlbmNlZFByb2plY3QsZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5SZWZlcmVuY2VkUHJvamVjdD4odiwgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5JUmVmZXJlbmNlZFByb2plY3QsIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuUmVmZXJlbmNlZFByb2plY3Q+KShfdiA9PiBuZXcgUmVmZXJlbmNlZFByb2plY3QoKS5Db3B5RnJvbTxSZWZlcmVuY2VkUHJvamVjdD4oX3YpKSkpKSk7XHJcbiAgICAgICAgICAgIGJhc2UuQ29weUZyb208UHJvamVjdFNjb3BlRW50aXR5PigoKENvZGV4LklQcm9qZWN0U2NvcGVFbnRpdHkpKHZhbHVlKSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSVJlZmVyZW5jZWRQcm9qZWN0KSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBSZWZlcmVuY2VkUHJvamVjdCA6IENvZGV4LkVudGl0eUJhc2UsIENvZGV4LklSZWZlcmVuY2VkUHJvamVjdCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9Qcm9qZWN0SWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PERlZmluaXRpb25TeW1ib2w+IG1fRGVmaW5pdGlvbnMgPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxEZWZpbml0aW9uU3ltYm9sPigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fRGlzcGxheU5hbWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBQcm9wZXJ0eU1hcCBtX1Byb3BlcnRpZXM7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFJlZmVyZW5jZWRQcm9qZWN0KCkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBSZWZlcmVuY2VkUHJvamVjdChDb2RleC5JUmVmZXJlbmNlZFByb2plY3QgdmFsdWUpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFJlZmVyZW5jZWRQcm9qZWN0Pih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGlkZW50aWZpZXIgb2YgdGhlIHJlZmVyZW5jZWQgcHJvamVjdFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIFByb2plY3RJZCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1Byb2plY3RJZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1Byb2plY3RJZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVXNlZCBkZWZpbml0aW9ucyBmb3IgdGhlIHByb2plY3QuIFNvcnRlZC5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklSZWFkT25seUxpc3Q8Q29kZXguSURlZmluaXRpb25TeW1ib2w+IENvZGV4LklSZWZlcmVuY2VkUHJvamVjdC5EZWZpbml0aW9ucyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5EZWZpbml0aW9ucztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFVzZWQgZGVmaW5pdGlvbnMgZm9yIHRoZSBwcm9qZWN0LiBTb3J0ZWQuXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PERlZmluaXRpb25TeW1ib2w+IERlZmluaXRpb25zIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fRGVmaW5pdGlvbnM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9EZWZpbml0aW9ucyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGRpc3BsYXkgbmFtZSBvZiB0aGUgcHJvamVjdFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIERpc3BsYXlOYW1lIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fRGlzcGxheU5hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9EaXNwbGF5TmFtZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHByb3BlcnRpZXMgb2YgdGhlIHByb2plY3QuIFN1Y2ggYXMgVmVyc2lvbiwgUHVibGljS2V5LCBldGMuXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBDb2RleC5JUHJvcGVydHlNYXAgQ29kZXguSVJlZmVyZW5jZWRQcm9qZWN0LlByb3BlcnRpZXMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuUHJvcGVydGllcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBwcm9qZWN0LiBTdWNoIGFzIFZlcnNpb24sIFB1YmxpY0tleSwgZXRjLlxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgUHJvcGVydHlNYXAgUHJvcGVydGllcyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1Byb3BlcnRpZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Qcm9wZXJ0aWVzID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JUmVmZXJlbmNlZFByb2plY3QgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBSZWZlcmVuY2VkUHJvamVjdCB7XHJcbiAgICAgICAgICAgIHRoaXMubV9Qcm9qZWN0SWQgPSAoKENvZGV4LklSZWZlcmVuY2VkUHJvamVjdCkodmFsdWUpKS5Qcm9qZWN0SWQ7XHJcbiAgICAgICAgICAgIHRoaXMubV9EZWZpbml0aW9ucyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PERlZmluaXRpb25TeW1ib2w+KFN5c3RlbS5MaW5xLkVudW1lcmFibGUuU2VsZWN0PGdsb2JhbDo6Q29kZXguSURlZmluaXRpb25TeW1ib2wsZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5EZWZpbml0aW9uU3ltYm9sPigoKENvZGV4LklSZWZlcmVuY2VkUHJvamVjdCkodmFsdWUpKS5EZWZpbml0aW9ucywgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5JRGVmaW5pdGlvblN5bWJvbCwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5EZWZpbml0aW9uU3ltYm9sPikodiA9PiBFbnRpdHlVdGlsaXRpZXMuTnVsbE9yQ29weTxnbG9iYWw6OkNvZGV4LklEZWZpbml0aW9uU3ltYm9sLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuRGVmaW5pdGlvblN5bWJvbD4odiwgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5JRGVmaW5pdGlvblN5bWJvbCwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5EZWZpbml0aW9uU3ltYm9sPikoX3YgPT4gbmV3IERlZmluaXRpb25TeW1ib2woKS5Db3B5RnJvbTxEZWZpbml0aW9uU3ltYm9sPihfdikpKSkpKTtcclxuICAgICAgICAgICAgdGhpcy5tX0Rpc3BsYXlOYW1lID0gKChDb2RleC5JUmVmZXJlbmNlZFByb2plY3QpKHZhbHVlKSkuRGlzcGxheU5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMubV9Qcm9wZXJ0aWVzID0gRW50aXR5VXRpbGl0aWVzLk51bGxPckNvcHk8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Qcm9wZXJ0eU1hcCxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlByb3BlcnR5TWFwPihQcm9wZXJ0aWVzLCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlByb3BlcnR5TWFwLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlByb3BlcnR5TWFwPikodiA9PiBuZXcgUHJvcGVydHlNYXAoKS5Db3B5RnJvbTxQcm9wZXJ0eU1hcD4odikpKTs7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyBOT1RFOiBEbyBub3Qgc2V0IDxzZWUgY3JlZj1cIlA6Q29kZXguSVJlcG9TY29wZUVudGl0eS5SZXBvc2l0b3J5TmFtZVwiIC8+XHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklQcm9qZWN0RmlsZUxpbmspKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIFByb2plY3RGaWxlTGluayA6IFByb2plY3RGaWxlU2NvcGVFbnRpdHksIENvZGV4LklQcm9qZWN0RmlsZUxpbmsge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fRmlsZUlkO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBQcm9qZWN0RmlsZUxpbmsoKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBQcm9qZWN0RmlsZUxpbmsoQ29kZXguSVByb2plY3RGaWxlTGluayB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFByb2plY3RGaWxlTGluaz4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUHJvamVjdEZpbGVMaW5rKENvZGV4LklQcm9qZWN0RmlsZVNjb3BlRW50aXR5IHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFVuaXF1ZSBpZGVudGlmaWVyIGZvciBmaWxlXHJcbiAgICAgICAgLy8vIFRPRE86IE1ha2UgdGhpcyBjaGVja3N1bSBhbmQgc2VhcmNoYWJsZSBhbmQgdXNlIGZvciBkaXNjb3ZlcmluZyBjb21taXQgZnJvbSBQREIuXHJcbiAgICAgICAgLy8vIFRPRE86IFdoYXQgaXMgdGhpcz9cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBGaWxlSWQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9GaWxlSWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9GaWxlSWQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklQcm9qZWN0RmlsZUxpbmsgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBQcm9qZWN0RmlsZUxpbmsge1xyXG4gICAgICAgICAgICB0aGlzLm1fRmlsZUlkID0gKChDb2RleC5JUHJvamVjdEZpbGVMaW5rKSh2YWx1ZSkpLkZpbGVJZDtcclxuICAgICAgICAgICAgYmFzZS5Db3B5RnJvbTxQcm9qZWN0RmlsZVNjb3BlRW50aXR5PigoKENvZGV4LklQcm9qZWN0RmlsZVNjb3BlRW50aXR5KSh2YWx1ZSkpKTtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIERlZmluZXMgZG9jdW1lbnRhdGlvbiBhYm91dCBhIHN5bWJvbFxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JRG9jdW1lbnRhdGlvbkluZm8pKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIERvY3VtZW50YXRpb25JbmZvIDogQ29kZXguRW50aXR5QmFzZSwgQ29kZXguSURvY3VtZW50YXRpb25JbmZvIHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX0RlY2xhcmF0aW9uTmFtZTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX0NvbW1lbnQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTeW1ib2wgbV9Bc3NvY2lhdGVkU3ltYm9sO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxEb2N1bWVudGF0aW9uUmVmZXJlbmNlU3ltYm9sPiBtX1JlZmVyZW5jZXMgPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxEb2N1bWVudGF0aW9uUmVmZXJlbmNlU3ltYm9sPigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fU3VtbWFyeTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX1JlbWFya3M7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PFR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbj4gbV9Bcmd1bWVudHMgPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxUeXBlZFBhcmFtZXRlckRvY3VtZW50YXRpb24+KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PFBhcmFtZXRlckRvY3VtZW50YXRpb24+IG1fVHlwZVBhcmFtZXRlcnMgPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxQYXJhbWV0ZXJEb2N1bWVudGF0aW9uPigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxUeXBlZFBhcmFtZXRlckRvY3VtZW50YXRpb24+IG1fRXhjZXB0aW9ucyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PFR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbj4oKTtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgRG9jdW1lbnRhdGlvbkluZm8oKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIERvY3VtZW50YXRpb25JbmZvKENvZGV4LklEb2N1bWVudGF0aW9uSW5mbyB2YWx1ZSkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208RG9jdW1lbnRhdGlvbkluZm8+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgZGVjbGFyYXRpb24gbmFtZSBmb3IgdGhlIHN5bWJvbFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIERlY2xhcmF0aW9uTmFtZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0RlY2xhcmF0aW9uTmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0RlY2xhcmF0aW9uTmFtZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGNvbW1lbnQgYXBwbGllZCB0byB0aGUgZGVmaW5pdGlvbiAodGhpcyBpcyB0aGUgcmF3IGRvYyBjb21tZW50IHRleHQpXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgQ29tbWVudCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0NvbW1lbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Db21tZW50ID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBJZGVudGl0eSBvZiBzeW1ib2wgd2hpY2ggZ2VuZXJhdGVkIHRoaXMgZG9jdW1lbnRhdGlvblxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgQ29kZXguSUNvZGVTeW1ib2wgQ29kZXguSURvY3VtZW50YXRpb25JbmZvLkFzc29jaWF0ZWRTeW1ib2wge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuQXNzb2NpYXRlZFN5bWJvbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIElkZW50aXR5IG9mIHN5bWJvbCB3aGljaCBnZW5lcmF0ZWQgdGhpcyBkb2N1bWVudGF0aW9uXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBTeW1ib2wgQXNzb2NpYXRlZFN5bWJvbCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0Fzc29jaWF0ZWRTeW1ib2w7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Bc3NvY2lhdGVkU3ltYm9sID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgb3RoZXIgc3ltYm9scyByZWZlcmVuY2VkIGJ5IHRoaXMgc3ltYm9sIChpLmUuIGJhc2UgdHlwZSwgaW1wbGVtZW50ZWQgaW50ZXJmYWNlXHJcbiAgICAgICAgLy8vIG9yIGludGVyZmFjZSBtZW1iZXJzLCBvdmVycmlkZGVuIG1lbWJlcnMsIHJldHVybiB0eXBlIG9mIG1ldGhvZCBvciBwcm9wZXJ0eSB0eXBlKVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSVJlYWRPbmx5TGlzdDxDb2RleC5JRG9jdW1lbnRhdGlvblJlZmVyZW5jZVN5bWJvbD4gQ29kZXguSURvY3VtZW50YXRpb25JbmZvLlJlZmVyZW5jZXMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuUmVmZXJlbmNlcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBvdGhlciBzeW1ib2xzIHJlZmVyZW5jZWQgYnkgdGhpcyBzeW1ib2wgKGkuZS4gYmFzZSB0eXBlLCBpbXBsZW1lbnRlZCBpbnRlcmZhY2VcclxuICAgICAgICAvLy8gb3IgaW50ZXJmYWNlIG1lbWJlcnMsIG92ZXJyaWRkZW4gbWVtYmVycywgcmV0dXJuIHR5cGUgb2YgbWV0aG9kIG9yIHByb3BlcnR5IHR5cGUpXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PERvY3VtZW50YXRpb25SZWZlcmVuY2VTeW1ib2w+IFJlZmVyZW5jZXMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9SZWZlcmVuY2VzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUmVmZXJlbmNlcyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gRGVzY3JpYmVzIHRoZSBzeW1ib2xcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBTdW1tYXJ5IHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fU3VtbWFyeTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1N1bW1hcnkgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFN1cHBsZW1lbnRhdGlvbiBpbmZvcm1hdGlvbiBhYm91dCB0aGUgc3ltYm9sXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgUmVtYXJrcyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1JlbWFya3M7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9SZW1hcmtzID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBDb21tZW50cyBvbiBhcmd1bWVudHNcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklSZWFkT25seUxpc3Q8Q29kZXguSVR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbj4gQ29kZXguSURvY3VtZW50YXRpb25JbmZvLkFyZ3VtZW50cyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5Bcmd1bWVudHM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBDb21tZW50cyBvbiBhcmd1bWVudHNcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8VHlwZWRQYXJhbWV0ZXJEb2N1bWVudGF0aW9uPiBBcmd1bWVudHMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Bcmd1bWVudHM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Bcmd1bWVudHMgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIENvbW1lbnRzIG9uIHR5cGUgcGFyYW1ldGVyc1xyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSVJlYWRPbmx5TGlzdDxDb2RleC5JUGFyYW1ldGVyRG9jdW1lbnRhdGlvbj4gQ29kZXguSURvY3VtZW50YXRpb25JbmZvLlR5cGVQYXJhbWV0ZXJzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLlR5cGVQYXJhbWV0ZXJzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gQ29tbWVudHMgb24gdHlwZSBwYXJhbWV0ZXJzXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PFBhcmFtZXRlckRvY3VtZW50YXRpb24+IFR5cGVQYXJhbWV0ZXJzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fVHlwZVBhcmFtZXRlcnM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9UeXBlUGFyYW1ldGVycyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gSW5mb3JtYXRpb24gYWJvdXQgZXhjZXB0aW9ucyB3aGljaCBjYW4gYmUgdGhyb3duXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JUmVhZE9ubHlMaXN0PENvZGV4LklUeXBlZFBhcmFtZXRlckRvY3VtZW50YXRpb24+IENvZGV4LklEb2N1bWVudGF0aW9uSW5mby5FeGNlcHRpb25zIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkV4Y2VwdGlvbnM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBJbmZvcm1hdGlvbiBhYm91dCBleGNlcHRpb25zIHdoaWNoIGNhbiBiZSB0aHJvd25cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8VHlwZWRQYXJhbWV0ZXJEb2N1bWVudGF0aW9uPiBFeGNlcHRpb25zIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fRXhjZXB0aW9ucztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0V4Y2VwdGlvbnMgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklEb2N1bWVudGF0aW9uSW5mbyB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IERvY3VtZW50YXRpb25JbmZvIHtcclxuICAgICAgICAgICAgdGhpcy5tX0RlY2xhcmF0aW9uTmFtZSA9ICgoQ29kZXguSURvY3VtZW50YXRpb25JbmZvKSh2YWx1ZSkpLkRlY2xhcmF0aW9uTmFtZTtcclxuICAgICAgICAgICAgdGhpcy5tX0NvbW1lbnQgPSAoKENvZGV4LklEb2N1bWVudGF0aW9uSW5mbykodmFsdWUpKS5Db21tZW50O1xyXG4gICAgICAgICAgICB0aGlzLm1fQXNzb2NpYXRlZFN5bWJvbCA9IEVudGl0eVV0aWxpdGllcy5OdWxsT3JDb3B5PGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuU3ltYm9sLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuU3ltYm9sPihBc3NvY2lhdGVkU3ltYm9sLCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlN5bWJvbCwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5TeW1ib2w+KSh2ID0+IG5ldyBTeW1ib2woKS5Db3B5RnJvbTxTeW1ib2w+KHYpKSk7O1xyXG4gICAgICAgICAgICB0aGlzLm1fUmVmZXJlbmNlcyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PERvY3VtZW50YXRpb25SZWZlcmVuY2VTeW1ib2w+KFN5c3RlbS5MaW5xLkVudW1lcmFibGUuU2VsZWN0PGdsb2JhbDo6Q29kZXguSURvY3VtZW50YXRpb25SZWZlcmVuY2VTeW1ib2wsZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Eb2N1bWVudGF0aW9uUmVmZXJlbmNlU3ltYm9sPigoKENvZGV4LklEb2N1bWVudGF0aW9uSW5mbykodmFsdWUpKS5SZWZlcmVuY2VzLCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4LklEb2N1bWVudGF0aW9uUmVmZXJlbmNlU3ltYm9sLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkRvY3VtZW50YXRpb25SZWZlcmVuY2VTeW1ib2w+KSh2ID0+IEVudGl0eVV0aWxpdGllcy5OdWxsT3JDb3B5PGdsb2JhbDo6Q29kZXguSURvY3VtZW50YXRpb25SZWZlcmVuY2VTeW1ib2wsZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Eb2N1bWVudGF0aW9uUmVmZXJlbmNlU3ltYm9sPih2LCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4LklEb2N1bWVudGF0aW9uUmVmZXJlbmNlU3ltYm9sLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkRvY3VtZW50YXRpb25SZWZlcmVuY2VTeW1ib2w+KShfdiA9PiBuZXcgRG9jdW1lbnRhdGlvblJlZmVyZW5jZVN5bWJvbCgpLkNvcHlGcm9tPERvY3VtZW50YXRpb25SZWZlcmVuY2VTeW1ib2w+KF92KSkpKSkpO1xyXG4gICAgICAgICAgICB0aGlzLm1fU3VtbWFyeSA9ICgoQ29kZXguSURvY3VtZW50YXRpb25JbmZvKSh2YWx1ZSkpLlN1bW1hcnk7XHJcbiAgICAgICAgICAgIHRoaXMubV9SZW1hcmtzID0gKChDb2RleC5JRG9jdW1lbnRhdGlvbkluZm8pKHZhbHVlKSkuUmVtYXJrcztcclxuICAgICAgICAgICAgdGhpcy5tX0FyZ3VtZW50cyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PFR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbj4oU3lzdGVtLkxpbnEuRW51bWVyYWJsZS5TZWxlY3Q8Z2xvYmFsOjpDb2RleC5JVHlwZWRQYXJhbWV0ZXJEb2N1bWVudGF0aW9uLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuVHlwZWRQYXJhbWV0ZXJEb2N1bWVudGF0aW9uPigoKENvZGV4LklEb2N1bWVudGF0aW9uSW5mbykodmFsdWUpKS5Bcmd1bWVudHMsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguSVR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbiwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5UeXBlZFBhcmFtZXRlckRvY3VtZW50YXRpb24+KSh2ID0+IEVudGl0eVV0aWxpdGllcy5OdWxsT3JDb3B5PGdsb2JhbDo6Q29kZXguSVR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbixnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbj4odiwgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5JVHlwZWRQYXJhbWV0ZXJEb2N1bWVudGF0aW9uLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbj4pKF92ID0+IG5ldyBUeXBlZFBhcmFtZXRlckRvY3VtZW50YXRpb24oKS5Db3B5RnJvbTxUeXBlZFBhcmFtZXRlckRvY3VtZW50YXRpb24+KF92KSkpKSkpO1xyXG4gICAgICAgICAgICB0aGlzLm1fVHlwZVBhcmFtZXRlcnMgPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxQYXJhbWV0ZXJEb2N1bWVudGF0aW9uPihTeXN0ZW0uTGlucS5FbnVtZXJhYmxlLlNlbGVjdDxnbG9iYWw6OkNvZGV4LklQYXJhbWV0ZXJEb2N1bWVudGF0aW9uLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuUGFyYW1ldGVyRG9jdW1lbnRhdGlvbj4oKChDb2RleC5JRG9jdW1lbnRhdGlvbkluZm8pKHZhbHVlKSkuVHlwZVBhcmFtZXRlcnMsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguSVBhcmFtZXRlckRvY3VtZW50YXRpb24sIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuUGFyYW1ldGVyRG9jdW1lbnRhdGlvbj4pKHYgPT4gRW50aXR5VXRpbGl0aWVzLk51bGxPckNvcHk8Z2xvYmFsOjpDb2RleC5JUGFyYW1ldGVyRG9jdW1lbnRhdGlvbixnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlBhcmFtZXRlckRvY3VtZW50YXRpb24+KHYsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguSVBhcmFtZXRlckRvY3VtZW50YXRpb24sIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuUGFyYW1ldGVyRG9jdW1lbnRhdGlvbj4pKF92ID0+IG5ldyBQYXJhbWV0ZXJEb2N1bWVudGF0aW9uKCkuQ29weUZyb208UGFyYW1ldGVyRG9jdW1lbnRhdGlvbj4oX3YpKSkpKSk7XHJcbiAgICAgICAgICAgIHRoaXMubV9FeGNlcHRpb25zID0gbmV3IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8VHlwZWRQYXJhbWV0ZXJEb2N1bWVudGF0aW9uPihTeXN0ZW0uTGlucS5FbnVtZXJhYmxlLlNlbGVjdDxnbG9iYWw6OkNvZGV4LklUeXBlZFBhcmFtZXRlckRvY3VtZW50YXRpb24sZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5UeXBlZFBhcmFtZXRlckRvY3VtZW50YXRpb24+KCgoQ29kZXguSURvY3VtZW50YXRpb25JbmZvKSh2YWx1ZSkpLkV4Y2VwdGlvbnMsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguSVR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbiwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5UeXBlZFBhcmFtZXRlckRvY3VtZW50YXRpb24+KSh2ID0+IEVudGl0eVV0aWxpdGllcy5OdWxsT3JDb3B5PGdsb2JhbDo6Q29kZXguSVR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbixnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbj4odiwgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5JVHlwZWRQYXJhbWV0ZXJEb2N1bWVudGF0aW9uLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbj4pKF92ID0+IG5ldyBUeXBlZFBhcmFtZXRlckRvY3VtZW50YXRpb24oKS5Db3B5RnJvbTxUeXBlZFBhcmFtZXRlckRvY3VtZW50YXRpb24+KF92KSkpKSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8gRG9jdW1lbnRhdGlvbiBmb3IgYSBtZXRob2QgcGFyYW1ldGVyXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklQYXJhbWV0ZXJEb2N1bWVudGF0aW9uKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBQYXJhbWV0ZXJEb2N1bWVudGF0aW9uIDogQ29kZXguRW50aXR5QmFzZSwgQ29kZXguSVBhcmFtZXRlckRvY3VtZW50YXRpb24ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fTmFtZTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX0NvbW1lbnQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFBhcmFtZXRlckRvY3VtZW50YXRpb24oKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFBhcmFtZXRlckRvY3VtZW50YXRpb24oQ29kZXguSVBhcmFtZXRlckRvY3VtZW50YXRpb24gdmFsdWUpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFBhcmFtZXRlckRvY3VtZW50YXRpb24+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgbmFtZSBvZiB0aGUgcGFyYW1ldGVyXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgTmFtZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX05hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9OYW1lID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgY29tbWVudCBhc3NvY2lhdGVkIHdpdGggdGhlIHN5bWJvbFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIENvbW1lbnQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Db21tZW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fQ29tbWVudCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVBhcmFtZXRlckRvY3VtZW50YXRpb24gdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBQYXJhbWV0ZXJEb2N1bWVudGF0aW9uIHtcclxuICAgICAgICAgICAgdGhpcy5tX05hbWUgPSAoKENvZGV4LklQYXJhbWV0ZXJEb2N1bWVudGF0aW9uKSh2YWx1ZSkpLk5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMubV9Db21tZW50ID0gKChDb2RleC5JUGFyYW1ldGVyRG9jdW1lbnRhdGlvbikodmFsdWUpKS5Db21tZW50O1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8gRG9jdW1lbnRhdGlvbiBmb3IgdHlwZWQgcGFyYW1ldGVyXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklUeXBlZFBhcmFtZXRlckRvY3VtZW50YXRpb24pKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIFR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbiA6IFBhcmFtZXRlckRvY3VtZW50YXRpb24sIENvZGV4LklUeXBlZFBhcmFtZXRlckRvY3VtZW50YXRpb24ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgRG9jdW1lbnRhdGlvblJlZmVyZW5jZVN5bWJvbCBtX1R5cGU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbigpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbihDb2RleC5JVHlwZWRQYXJhbWV0ZXJEb2N1bWVudGF0aW9uIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208VHlwZWRQYXJhbWV0ZXJEb2N1bWVudGF0aW9uPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBUeXBlZFBhcmFtZXRlckRvY3VtZW50YXRpb24oQ29kZXguSVBhcmFtZXRlckRvY3VtZW50YXRpb24gdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHR5cGUgb2YgdGhlIHBhcmFtZXRlclxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgQ29kZXguSURvY3VtZW50YXRpb25SZWZlcmVuY2VTeW1ib2wgQ29kZXguSVR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbi5UeXBlIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLlR5cGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgdHlwZSBvZiB0aGUgcGFyYW1ldGVyXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBEb2N1bWVudGF0aW9uUmVmZXJlbmNlU3ltYm9sIFR5cGUge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9UeXBlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fVHlwZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbiB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IFR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbiB7XHJcbiAgICAgICAgICAgIHRoaXMubV9UeXBlID0gRW50aXR5VXRpbGl0aWVzLk51bGxPckNvcHk8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Eb2N1bWVudGF0aW9uUmVmZXJlbmNlU3ltYm9sLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuRG9jdW1lbnRhdGlvblJlZmVyZW5jZVN5bWJvbD4oVHlwZSwgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Eb2N1bWVudGF0aW9uUmVmZXJlbmNlU3ltYm9sLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkRvY3VtZW50YXRpb25SZWZlcmVuY2VTeW1ib2w+KSh2ID0+IG5ldyBEb2N1bWVudGF0aW9uUmVmZXJlbmNlU3ltYm9sKCkuQ29weUZyb208RG9jdW1lbnRhdGlvblJlZmVyZW5jZVN5bWJvbD4odikpKTs7XHJcbiAgICAgICAgICAgIGJhc2UuQ29weUZyb208UGFyYW1ldGVyRG9jdW1lbnRhdGlvbj4oKChDb2RleC5JUGFyYW1ldGVyRG9jdW1lbnRhdGlvbikodmFsdWUpKSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyBEZWNyaWJlcyBhIHN5bWJvbCByZWxhdGVkIHRvIGEgZ2l2ZW4gZG9jdW1lbnRlZCBzeW1ib2xcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSURvY3VtZW50YXRpb25SZWZlcmVuY2VTeW1ib2wpKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIERvY3VtZW50YXRpb25SZWZlcmVuY2VTeW1ib2wgOiBSZWZlcmVuY2VTeW1ib2wsIENvZGV4LklEb2N1bWVudGF0aW9uUmVmZXJlbmNlU3ltYm9sIHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX0Rpc3BsYXlOYW1lO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fQ29tbWVudDtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgRG9jdW1lbnRhdGlvblJlZmVyZW5jZVN5bWJvbCgpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIERvY3VtZW50YXRpb25SZWZlcmVuY2VTeW1ib2woQ29kZXguSURvY3VtZW50YXRpb25SZWZlcmVuY2VTeW1ib2wgdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxEb2N1bWVudGF0aW9uUmVmZXJlbmNlU3ltYm9sPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBEb2N1bWVudGF0aW9uUmVmZXJlbmNlU3ltYm9sKENvZGV4LklSZWZlcmVuY2VTeW1ib2wgdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBEb2N1bWVudGF0aW9uUmVmZXJlbmNlU3ltYm9sKENvZGV4LklDb2RlU3ltYm9sIHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBkaXNwbGF5IG5hbWUgb2YgdGhlIHN5bWJvbCByZWZlcmVuY2UgYXMgaXQgc2hvdWxkIGFwcGVhciBpbiBkb2N1bWVudGF0aW9uXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgRGlzcGxheU5hbWUge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9EaXNwbGF5TmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0Rpc3BsYXlOYW1lID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgY29tbWVudCBhc3NvY2lhdGVkIHdpdGggdGhlIHJlZmVyZW5jZVxyXG4gICAgICAgIC8vLyAoaS5lLiByZXR1cm4gdHlwZSBkZXNjcmlwdGlvbiBodHRwczovL2RvY3MubWljcm9zb2Z0LmNvbS9lbi11cy9kb3RuZXQvY3NoYXJwL3Byb2dyYW1taW5nLWd1aWRlL3htbGRvYy9yZXR1cm5zKVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIENvbW1lbnQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Db21tZW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fQ29tbWVudCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSURvY3VtZW50YXRpb25SZWZlcmVuY2VTeW1ib2wgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBEb2N1bWVudGF0aW9uUmVmZXJlbmNlU3ltYm9sIHtcclxuICAgICAgICAgICAgdGhpcy5tX0Rpc3BsYXlOYW1lID0gKChDb2RleC5JRG9jdW1lbnRhdGlvblJlZmVyZW5jZVN5bWJvbCkodmFsdWUpKS5EaXNwbGF5TmFtZTtcclxuICAgICAgICAgICAgdGhpcy5tX0NvbW1lbnQgPSAoKENvZGV4LklEb2N1bWVudGF0aW9uUmVmZXJlbmNlU3ltYm9sKSh2YWx1ZSkpLkNvbW1lbnQ7XHJcbiAgICAgICAgICAgIGJhc2UuQ29weUZyb208UmVmZXJlbmNlU3ltYm9sPigoKENvZGV4LklSZWZlcmVuY2VTeW1ib2wpKHZhbHVlKSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSVByb3BlcnR5U2VhcmNoTW9kZWwpKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIFByb3BlcnR5U2VhcmNoTW9kZWwgOiBTZWFyY2hFbnRpdHksIENvZGV4LklQcm9wZXJ0eVNlYXJjaE1vZGVsIHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX0tleTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX1ZhbHVlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fT3duZXJJZDtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUHJvcGVydHlTZWFyY2hNb2RlbCgpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFByb3BlcnR5U2VhcmNoTW9kZWwoQ29kZXguSVByb3BlcnR5U2VhcmNoTW9kZWwgdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxQcm9wZXJ0eVNlYXJjaE1vZGVsPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBQcm9wZXJ0eVNlYXJjaE1vZGVsKENvZGV4LklTZWFyY2hFbnRpdHkgdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGtleSBvZiB0aGUgcHJvcGVydHlcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBLZXkge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9LZXk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9LZXkgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSB2YWx1ZSBvZiB0aGUgcHJvcGVydHlcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBWYWx1ZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1ZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fVmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBpZGVudGlmaWVyIG9mIHRoZSBvYmplY3Qgb3duaW5nIHRoaXMgcHJvcGVydHlcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBPd25lcklkIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fT3duZXJJZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX093bmVySWQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklQcm9wZXJ0eVNlYXJjaE1vZGVsIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogUHJvcGVydHlTZWFyY2hNb2RlbCB7XHJcbiAgICAgICAgICAgIHRoaXMubV9LZXkgPSAoKENvZGV4LklQcm9wZXJ0eVNlYXJjaE1vZGVsKSh2YWx1ZSkpLktleTtcclxuICAgICAgICAgICAgdGhpcy5tX1ZhbHVlID0gKChDb2RleC5JUHJvcGVydHlTZWFyY2hNb2RlbCkodmFsdWUpKS5WYWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5tX093bmVySWQgPSAoKENvZGV4LklQcm9wZXJ0eVNlYXJjaE1vZGVsKSh2YWx1ZSkpLk93bmVySWQ7XHJcbiAgICAgICAgICAgIGJhc2UuQ29weUZyb208U2VhcmNoRW50aXR5PigoKENvZGV4LklTZWFyY2hFbnRpdHkpKHZhbHVlKSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSVByb3BlcnR5TWFwKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBQcm9wZXJ0eU1hcCA6IENvZGV4LklQcm9wZXJ0eU1hcCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFByb3BlcnR5TWFwKCkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBQcm9wZXJ0eU1hcChDb2RleC5JUHJvcGVydHlNYXAgdmFsdWUpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFByb3BlcnR5TWFwPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVByb3BlcnR5TWFwIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogUHJvcGVydHlNYXAge1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSVJlcG9zaXRvcnkpKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIFJlcG9zaXRvcnkgOiBDb2RleC5FbnRpdHlCYXNlLCBDb2RleC5JUmVwb3NpdG9yeSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9OYW1lO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fRGVzY3JpcHRpb247XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9JZDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX1dlYkFkZHJlc3M7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9Tb3VyY2VDb250cm9sV2ViQWRkcmVzcztcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX0ZpbGVXZWJBZGRyZXNzVHJhbnNmb3JtSW5wdXRSZWdleDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX1ByaW1hcnlCcmFuY2g7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PFJlcG9zaXRvcnlSZWZlcmVuY2U+IG1fUmVwb3NpdG9yeVJlZmVyZW5jZXMgPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxSZXBvc2l0b3J5UmVmZXJlbmNlPigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBSZXBvc2l0b3J5KCkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBSZXBvc2l0b3J5KENvZGV4LklSZXBvc2l0b3J5IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxSZXBvc2l0b3J5Pih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIG5hbWUgZm8gdGhlIHJlcG9zaXRvcnlcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBOYW1lIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fTmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX05hbWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIERlc2NyaWJlcyB0aGUgcmVwb3NpdG9yeVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIERlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fRGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9EZXNjcmlwdGlvbiA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBJZCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0lkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fSWQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgV2ViQWRkcmVzcyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1dlYkFkZHJlc3M7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9XZWJBZGRyZXNzID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgd2ViIGFkZHJlc3MgZm9yIHNvdXJjZSBjb250cm9sIG9mIHRoZSByZXBvc2l0b3J5XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgU291cmNlQ29udHJvbFdlYkFkZHJlc3Mge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Tb3VyY2VDb250cm9sV2ViQWRkcmVzcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1NvdXJjZUNvbnRyb2xXZWJBZGRyZXNzID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgcmVnZXggZm9yIGV4dHJhY3RpbmdcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBGaWxlV2ViQWRkcmVzc1RyYW5zZm9ybUlucHV0UmVnZXgge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9GaWxlV2ViQWRkcmVzc1RyYW5zZm9ybUlucHV0UmVnZXg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9GaWxlV2ViQWRkcmVzc1RyYW5zZm9ybUlucHV0UmVnZXggPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBuYW1lIG9mIHRoZSBwcmltYXJ5IGJyYW5jaCBmb3IgdGhlIHJlcG9zaXRvcnlcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBQcmltYXJ5QnJhbmNoIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUHJpbWFyeUJyYW5jaDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1ByaW1hcnlCcmFuY2ggPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JUmVhZE9ubHlMaXN0PENvZGV4LklSZXBvc2l0b3J5UmVmZXJlbmNlPiBDb2RleC5JUmVwb3NpdG9yeS5SZXBvc2l0b3J5UmVmZXJlbmNlcyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5SZXBvc2l0b3J5UmVmZXJlbmNlcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PFJlcG9zaXRvcnlSZWZlcmVuY2U+IFJlcG9zaXRvcnlSZWZlcmVuY2VzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUmVwb3NpdG9yeVJlZmVyZW5jZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9SZXBvc2l0b3J5UmVmZXJlbmNlcyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVJlcG9zaXRvcnkgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBSZXBvc2l0b3J5IHtcclxuICAgICAgICAgICAgdGhpcy5tX05hbWUgPSAoKENvZGV4LklSZXBvc2l0b3J5KSh2YWx1ZSkpLk5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMubV9EZXNjcmlwdGlvbiA9ICgoQ29kZXguSVJlcG9zaXRvcnkpKHZhbHVlKSkuRGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgIHRoaXMubV9JZCA9ICgoQ29kZXguSVJlcG9zaXRvcnkpKHZhbHVlKSkuSWQ7XHJcbiAgICAgICAgICAgIHRoaXMubV9XZWJBZGRyZXNzID0gKChDb2RleC5JUmVwb3NpdG9yeSkodmFsdWUpKS5XZWJBZGRyZXNzO1xyXG4gICAgICAgICAgICB0aGlzLm1fU291cmNlQ29udHJvbFdlYkFkZHJlc3MgPSAoKENvZGV4LklSZXBvc2l0b3J5KSh2YWx1ZSkpLlNvdXJjZUNvbnRyb2xXZWJBZGRyZXNzO1xyXG4gICAgICAgICAgICB0aGlzLm1fRmlsZVdlYkFkZHJlc3NUcmFuc2Zvcm1JbnB1dFJlZ2V4ID0gKChDb2RleC5JUmVwb3NpdG9yeSkodmFsdWUpKS5GaWxlV2ViQWRkcmVzc1RyYW5zZm9ybUlucHV0UmVnZXg7XHJcbiAgICAgICAgICAgIHRoaXMubV9QcmltYXJ5QnJhbmNoID0gKChDb2RleC5JUmVwb3NpdG9yeSkodmFsdWUpKS5QcmltYXJ5QnJhbmNoO1xyXG4gICAgICAgICAgICB0aGlzLm1fUmVwb3NpdG9yeVJlZmVyZW5jZXMgPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxSZXBvc2l0b3J5UmVmZXJlbmNlPihTeXN0ZW0uTGlucS5FbnVtZXJhYmxlLlNlbGVjdDxnbG9iYWw6OkNvZGV4LklSZXBvc2l0b3J5UmVmZXJlbmNlLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuUmVwb3NpdG9yeVJlZmVyZW5jZT4oKChDb2RleC5JUmVwb3NpdG9yeSkodmFsdWUpKS5SZXBvc2l0b3J5UmVmZXJlbmNlcywgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5JUmVwb3NpdG9yeVJlZmVyZW5jZSwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5SZXBvc2l0b3J5UmVmZXJlbmNlPikodiA9PiBFbnRpdHlVdGlsaXRpZXMuTnVsbE9yQ29weTxnbG9iYWw6OkNvZGV4LklSZXBvc2l0b3J5UmVmZXJlbmNlLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuUmVwb3NpdG9yeVJlZmVyZW5jZT4odiwgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5JUmVwb3NpdG9yeVJlZmVyZW5jZSwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5SZXBvc2l0b3J5UmVmZXJlbmNlPikoX3YgPT4gbmV3IFJlcG9zaXRvcnlSZWZlcmVuY2UoKS5Db3B5RnJvbTxSZXBvc2l0b3J5UmVmZXJlbmNlPihfdikpKSkpKTtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklSZXBvc2l0b3J5UmVmZXJlbmNlKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBSZXBvc2l0b3J5UmVmZXJlbmNlIDogQ29kZXguRW50aXR5QmFzZSwgQ29kZXguSVJlcG9zaXRvcnlSZWZlcmVuY2Uge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fTmFtZTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX0lkO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBSZXBvc2l0b3J5UmVmZXJlbmNlKCkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBSZXBvc2l0b3J5UmVmZXJlbmNlKENvZGV4LklSZXBvc2l0b3J5UmVmZXJlbmNlIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxSZXBvc2l0b3J5UmVmZXJlbmNlPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIG5hbWUgb2YgdGhlIHJlZmVyZW5jZSByZXBvc2l0b3J5XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgTmFtZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX05hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9OYW1lID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBPcHRpb25hbC4gSWQgb2YgcmVwb3NpdG9yeVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIElkIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fSWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9JZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVJlcG9zaXRvcnlSZWZlcmVuY2UgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBSZXBvc2l0b3J5UmVmZXJlbmNlIHtcclxuICAgICAgICAgICAgdGhpcy5tX05hbWUgPSAoKENvZGV4LklSZXBvc2l0b3J5UmVmZXJlbmNlKSh2YWx1ZSkpLk5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMubV9JZCA9ICgoQ29kZXguSVJlcG9zaXRvcnlSZWZlcmVuY2UpKHZhbHVlKSkuSWQ7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyBNYXJrZXIgaW50ZXJmYWNlIGZvciBzZWFyY2hhYmxlIGVudGl0aWVzXHJcbiAgICAvLy8gVE9ETzogQ29uc2lkZXIgbW92aW5nIDxzZWUgY3JlZj1cIlA6Q29kZXguSVNlYXJjaEVudGl0eS5FbnRpdHlDb250ZW50SWRcIiAvPiBvdXQgaWYgaXRzIG5vdCBuZWVkZWQgYnkgYWxsIHNlYXJjaGFibGUgZW50aXRpZXNcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSVNlYXJjaEVudGl0eSkpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgU2VhcmNoRW50aXR5IDogQ29kZXguRW50aXR5QmFzZSwgQ29kZXguSVNlYXJjaEVudGl0eSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9VaWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9FbnRpdHlDb250ZW50SWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBpbnQgbV9FbnRpdHlDb250ZW50U2l6ZTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5OdWxsYWJsZTxsb25nPiBtX0VudGl0eVZlcnNpb247XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBsb25nIG1fU2hhcmRTdGFibGVJZDtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgU2VhcmNoRW50aXR5KCkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBTZWFyY2hFbnRpdHkoQ29kZXguSVNlYXJjaEVudGl0eSB2YWx1ZSkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208U2VhcmNoRW50aXR5Pih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBVaWQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9VaWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9VaWQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIERlZmluZXMgdGhlIGNvbnRlbnQgYWRkcmVzc2FibGUgaWRlbnRpZmllciBmb3IgdGhlIGVudGl0eS4gVGhpcyBpcyB1c2VkXHJcbiAgICAgICAgLy8vIHRvIGRldGVybWluZSBpZiBhbiBlbnRpdHkgd2l0aCB0aGUgc2FtZSA8c2VlIGNyZWY9XCJQOkNvZGV4LklTZWFyY2hFbnRpdHkuVWlkXCIgLz4gc2hvdWxkIGJlIHVwZGF0ZWRcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBFbnRpdHlDb250ZW50SWQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9FbnRpdHlDb250ZW50SWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9FbnRpdHlDb250ZW50SWQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIERlZmluZXMgdGhlIHNpemUgb2YgdGhlIHJhdyBzZXJpYWxpemVkIGVudGl0eS5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGludCBFbnRpdHlDb250ZW50U2l6ZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0VudGl0eUNvbnRlbnRTaXplO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fRW50aXR5Q29udGVudFNpemUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSB2ZXJzaW9uIG51bWJlciB1c2VkIHdoZW4gc3RvcmluZyB0aGUgZW50aXR5IChmb3IgdXNlIGJ5IEVsYXN0aWNTZWFyY2ggY29uY3VycmVuY3kgY29udHJvbFxyXG4gICAgICAgIC8vLyB0byBwcmV2ZW50IHJhY2VzIHdoZW4gc3RvcmluZyB2YWx1ZXMpXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBTeXN0ZW0uTnVsbGFibGU8bG9uZz4gRW50aXR5VmVyc2lvbiB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0VudGl0eVZlcnNpb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9FbnRpdHlWZXJzaW9uID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgcGVyLXNoYXJkIHN0YWJsZSBpZGVudGl0eSAoZGVyaXZlZCBmcm9tIEVsYXN0aWNTZWFyY2ggc2VxdWVuY2UgbnVtYmVyKVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgbG9uZyBTaGFyZFN0YWJsZUlkIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fU2hhcmRTdGFibGVJZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1NoYXJkU3RhYmxlSWQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklTZWFyY2hFbnRpdHkgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBTZWFyY2hFbnRpdHkge1xyXG4gICAgICAgICAgICB0aGlzLm1fVWlkID0gKChDb2RleC5JU2VhcmNoRW50aXR5KSh2YWx1ZSkpLlVpZDtcclxuICAgICAgICAgICAgdGhpcy5tX0VudGl0eUNvbnRlbnRJZCA9ICgoQ29kZXguSVNlYXJjaEVudGl0eSkodmFsdWUpKS5FbnRpdHlDb250ZW50SWQ7XHJcbiAgICAgICAgICAgIHRoaXMubV9FbnRpdHlDb250ZW50U2l6ZSA9ICgoQ29kZXguSVNlYXJjaEVudGl0eSkodmFsdWUpKS5FbnRpdHlDb250ZW50U2l6ZTtcclxuICAgICAgICAgICAgdGhpcy5tX0VudGl0eVZlcnNpb24gPSAoKENvZGV4LklTZWFyY2hFbnRpdHkpKHZhbHVlKSkuRW50aXR5VmVyc2lvbjtcclxuICAgICAgICAgICAgdGhpcy5tX1NoYXJkU3RhYmxlSWQgPSAoKENvZGV4LklTZWFyY2hFbnRpdHkpKHZhbHVlKSkuU2hhcmRTdGFibGVJZDtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklSZXBvU2NvcGVFbnRpdHkpKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIFJlcG9TY29wZUVudGl0eSA6IENvZGV4LkVudGl0eUJhc2UsIENvZGV4LklSZXBvU2NvcGVFbnRpdHkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fUmVwb3NpdG9yeU5hbWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFJlcG9TY29wZUVudGl0eSgpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUmVwb1Njb3BlRW50aXR5KENvZGV4LklSZXBvU2NvcGVFbnRpdHkgdmFsdWUpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFJlcG9TY29wZUVudGl0eT4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBuYW1lIG9mIHRoZSByZXBvc2l0b3J5IGNvbnRhaW5pbmcgdGhlIGVudGl0eVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIFJlcG9zaXRvcnlOYW1lIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUmVwb3NpdG9yeU5hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9SZXBvc2l0b3J5TmFtZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVJlcG9TY29wZUVudGl0eSB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IFJlcG9TY29wZUVudGl0eSB7XHJcbiAgICAgICAgICAgIHRoaXMubV9SZXBvc2l0b3J5TmFtZSA9ICgoQ29kZXguSVJlcG9TY29wZUVudGl0eSkodmFsdWUpKS5SZXBvc2l0b3J5TmFtZTtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklDb21taXRTY29wZUVudGl0eSkpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgQ29tbWl0U2NvcGVFbnRpdHkgOiBSZXBvU2NvcGVFbnRpdHksIENvZGV4LklDb21taXRTY29wZUVudGl0eSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9Db21taXRJZDtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQ29tbWl0U2NvcGVFbnRpdHkoKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBDb21taXRTY29wZUVudGl0eShDb2RleC5JQ29tbWl0U2NvcGVFbnRpdHkgdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxDb21taXRTY29wZUVudGl0eT4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQ29tbWl0U2NvcGVFbnRpdHkoQ29kZXguSVJlcG9TY29wZUVudGl0eSB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgdW5pcXVlIGlkZW50aWZpZXIgZm9yIHRoaXMgY29tbWl0L2NoYW5nZXNldCBpbiB2ZXJzaW9uIGNvbnRyb2xcclxuICAgICAgICAvLy8gKGkuZS4gZ2l0IGNvbW1pdCBoYXNoIG9yIFRGUyBjaGFuZ2VzZXQgbnVtYmVyKVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIENvbW1pdElkIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fQ29tbWl0SWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Db21taXRJZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSUNvbW1pdFNjb3BlRW50aXR5IHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogQ29tbWl0U2NvcGVFbnRpdHkge1xyXG4gICAgICAgICAgICB0aGlzLm1fQ29tbWl0SWQgPSAoKENvZGV4LklDb21taXRTY29wZUVudGl0eSkodmFsdWUpKS5Db21taXRJZDtcclxuICAgICAgICAgICAgYmFzZS5Db3B5RnJvbTxSZXBvU2NvcGVFbnRpdHk+KCgoQ29kZXguSVJlcG9TY29wZUVudGl0eSkodmFsdWUpKSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JUHJvamVjdFNjb3BlRW50aXR5KSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBQcm9qZWN0U2NvcGVFbnRpdHkgOiBSZXBvU2NvcGVFbnRpdHksIENvZGV4LklQcm9qZWN0U2NvcGVFbnRpdHkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fUHJvamVjdElkO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBQcm9qZWN0U2NvcGVFbnRpdHkoKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBQcm9qZWN0U2NvcGVFbnRpdHkoQ29kZXguSVByb2plY3RTY29wZUVudGl0eSB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFByb2plY3RTY29wZUVudGl0eT4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUHJvamVjdFNjb3BlRW50aXR5KENvZGV4LklSZXBvU2NvcGVFbnRpdHkgdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGlkZW50aWZpZXIgb2YgdGhlIHByb2plY3QgY29udGFpbmluZyB0aGUgZW50aXR5XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgUHJvamVjdElkIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUHJvamVjdElkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUHJvamVjdElkID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JUHJvamVjdFNjb3BlRW50aXR5IHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogUHJvamVjdFNjb3BlRW50aXR5IHtcclxuICAgICAgICAgICAgdGhpcy5tX1Byb2plY3RJZCA9ICgoQ29kZXguSVByb2plY3RTY29wZUVudGl0eSkodmFsdWUpKS5Qcm9qZWN0SWQ7XHJcbiAgICAgICAgICAgIGJhc2UuQ29weUZyb208UmVwb1Njb3BlRW50aXR5PigoKENvZGV4LklSZXBvU2NvcGVFbnRpdHkpKHZhbHVlKSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSVJlcG9GaWxlU2NvcGVFbnRpdHkpKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIFJlcG9GaWxlU2NvcGVFbnRpdHkgOiBSZXBvU2NvcGVFbnRpdHksIENvZGV4LklSZXBvRmlsZVNjb3BlRW50aXR5IHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX1JlcG9SZWxhdGl2ZVBhdGg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFJlcG9GaWxlU2NvcGVFbnRpdHkoKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBSZXBvRmlsZVNjb3BlRW50aXR5KENvZGV4LklSZXBvRmlsZVNjb3BlRW50aXR5IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208UmVwb0ZpbGVTY29wZUVudGl0eT4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUmVwb0ZpbGVTY29wZUVudGl0eShDb2RleC5JUmVwb1Njb3BlRW50aXR5IHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSByZXBvIHJlbGF0aXZlIHBhdGggdG8gdGhlIGZpbGVcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBSZXBvUmVsYXRpdmVQYXRoIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUmVwb1JlbGF0aXZlUGF0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1JlcG9SZWxhdGl2ZVBhdGggPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklSZXBvRmlsZVNjb3BlRW50aXR5IHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogUmVwb0ZpbGVTY29wZUVudGl0eSB7XHJcbiAgICAgICAgICAgIHRoaXMubV9SZXBvUmVsYXRpdmVQYXRoID0gKChDb2RleC5JUmVwb0ZpbGVTY29wZUVudGl0eSkodmFsdWUpKS5SZXBvUmVsYXRpdmVQYXRoO1xyXG4gICAgICAgICAgICBiYXNlLkNvcHlGcm9tPFJlcG9TY29wZUVudGl0eT4oKChDb2RleC5JUmVwb1Njb3BlRW50aXR5KSh2YWx1ZSkpKTtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklQcm9qZWN0RmlsZVNjb3BlRW50aXR5KSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBQcm9qZWN0RmlsZVNjb3BlRW50aXR5IDogQ29kZXguRW50aXR5QmFzZSwgQ29kZXguSVByb2plY3RGaWxlU2NvcGVFbnRpdHkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fUHJvamVjdFJlbGF0aXZlUGF0aDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX1JlcG9SZWxhdGl2ZVBhdGg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9SZXBvc2l0b3J5TmFtZTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX1Byb2plY3RJZDtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUHJvamVjdEZpbGVTY29wZUVudGl0eSgpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUHJvamVjdEZpbGVTY29wZUVudGl0eShDb2RleC5JUHJvamVjdEZpbGVTY29wZUVudGl0eSB2YWx1ZSkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208UHJvamVjdEZpbGVTY29wZUVudGl0eT4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUHJvamVjdEZpbGVTY29wZUVudGl0eShDb2RleC5JUmVwb0ZpbGVTY29wZUVudGl0eSB2YWx1ZSkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208UHJvamVjdEZpbGVTY29wZUVudGl0eT4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUHJvamVjdEZpbGVTY29wZUVudGl0eShDb2RleC5JUmVwb1Njb3BlRW50aXR5IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxQcm9qZWN0RmlsZVNjb3BlRW50aXR5Pih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBQcm9qZWN0RmlsZVNjb3BlRW50aXR5KENvZGV4LklQcm9qZWN0U2NvcGVFbnRpdHkgdmFsdWUpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFByb2plY3RGaWxlU2NvcGVFbnRpdHk+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgcHJvamVjdCByZWxhdGl2ZSBwYXRoIG9mIHRoZSBmaWxlXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgUHJvamVjdFJlbGF0aXZlUGF0aCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1Byb2plY3RSZWxhdGl2ZVBhdGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Qcm9qZWN0UmVsYXRpdmVQYXRoID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgcmVwbyByZWxhdGl2ZSBwYXRoIHRvIHRoZSBmaWxlXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgUmVwb1JlbGF0aXZlUGF0aCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1JlcG9SZWxhdGl2ZVBhdGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9SZXBvUmVsYXRpdmVQYXRoID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgbmFtZSBvZiB0aGUgcmVwb3NpdG9yeSBjb250YWluaW5nIHRoZSBlbnRpdHlcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBSZXBvc2l0b3J5TmFtZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1JlcG9zaXRvcnlOYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUmVwb3NpdG9yeU5hbWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBpZGVudGlmaWVyIG9mIHRoZSBwcm9qZWN0IGNvbnRhaW5pbmcgdGhlIGVudGl0eVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIFByb2plY3RJZCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1Byb2plY3RJZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1Byb2plY3RJZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVJlcG9TY29wZUVudGl0eSB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IFByb2plY3RGaWxlU2NvcGVFbnRpdHkge1xyXG4gICAgICAgICAgICB0aGlzLm1fUmVwb3NpdG9yeU5hbWUgPSAoKENvZGV4LklSZXBvU2NvcGVFbnRpdHkpKHZhbHVlKSkuUmVwb3NpdG9yeU5hbWU7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JUmVwb0ZpbGVTY29wZUVudGl0eSB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IFByb2plY3RGaWxlU2NvcGVFbnRpdHkge1xyXG4gICAgICAgICAgICB0aGlzLm1fUmVwb1JlbGF0aXZlUGF0aCA9ICgoQ29kZXguSVJlcG9GaWxlU2NvcGVFbnRpdHkpKHZhbHVlKSkuUmVwb1JlbGF0aXZlUGF0aDtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklQcm9qZWN0U2NvcGVFbnRpdHkgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBQcm9qZWN0RmlsZVNjb3BlRW50aXR5IHtcclxuICAgICAgICAgICAgdGhpcy5tX1Byb2plY3RJZCA9ICgoQ29kZXguSVByb2plY3RTY29wZUVudGl0eSkodmFsdWUpKS5Qcm9qZWN0SWQ7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JUHJvamVjdEZpbGVTY29wZUVudGl0eSB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IFByb2plY3RGaWxlU2NvcGVFbnRpdHkge1xyXG4gICAgICAgICAgICB0aGlzLm1fUHJvamVjdFJlbGF0aXZlUGF0aCA9ICgoQ29kZXguSVByb2plY3RGaWxlU2NvcGVFbnRpdHkpKHZhbHVlKSkuUHJvamVjdFJlbGF0aXZlUGF0aDtcclxuICAgICAgICAgICAgdGhpcy5tX1JlcG9SZWxhdGl2ZVBhdGggPSAoKENvZGV4LklSZXBvRmlsZVNjb3BlRW50aXR5KSh2YWx1ZSkpLlJlcG9SZWxhdGl2ZVBhdGg7XHJcbiAgICAgICAgICAgIHRoaXMubV9SZXBvc2l0b3J5TmFtZSA9ICgoQ29kZXguSVJlcG9TY29wZUVudGl0eSkodmFsdWUpKS5SZXBvc2l0b3J5TmFtZTtcclxuICAgICAgICAgICAgdGhpcy5tX1Byb2plY3RJZCA9ICgoQ29kZXguSVByb2plY3RTY29wZUVudGl0eSkodmFsdWUpKS5Qcm9qZWN0SWQ7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyBJbiBvcmRlciB0byBjb21wdXRlIGEgc3RhYmxlIGludGVncmFsIGlkIGZvciBlYWNoIGVudGl0eS4gVGhpcyB0eXBlIGlzIHVzZWQgdG8gc3RvcmUgaW50byBhICdmb2xsb3cnIGluZGV4IHdoaWNoXHJcbiAgICAvLy8gc3RvcmVzIGVudGl0aWVzIG9mIHRoaXMgdHlwZSB1c2luZyB0aGUgPHNlZSBjcmVmPVwiUDpDb2RleC5JU2VhcmNoRW50aXR5LlVpZFwiIC8+IG9mIHRoZSBjb3JyZXNwb25kaW5nIHNlYXJjaCBlbnRpdHkuIFRoZW4gdGhlXHJcbiAgICAvLy8gc2VxdWVuY2UgbnVtYmVyIGFzc2lnbmVkIGJ5IEVsYXN0aWNTZWFyY2ggaXMgdXNlZCBhcyB0aGUgc2hhcmQgc3RhYmxlIGlkICg8c2VlIGNyZWY9XCJQOkNvZGV4LklTZWFyY2hFbnRpdHkuU2hhcmRTdGFibGVJZFwiIC8+KVxyXG4gICAgLy8vIGZvciB0aGUgZW50aXR5LiBUaGlzIGFwcHJvYWNoIGlzIHVzZWQgaW4gb3JkZXIgdG8gZW5zdXJlIHRoYXQgdGhlIHN0YWJsZSBpZCBhcHBlYXJzIGFzIGFuIGV4cGxpY2l0IGZpZWxkIGluIHRoZSBkb2N1bWVudCByYXRoZXJcclxuICAgIC8vLyB3aGljaCBhbGxvd3MgY29uZmlndXJhdGlvbiBvZiBob3cgdGhlIGZpZWxkIGlzIGluZGV4ZWQgKG5vdCB0cnVlIGZvciBzZXF1ZW5jZSBudW1iZXIgZmllbGQgd2l0aG91dCBjb2RlIGNoYW5nZXMgdG8gRVMpLlxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JUmVnaXN0ZXJlZEVudGl0eSkpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgUmVnaXN0ZXJlZEVudGl0eSA6IFNlYXJjaEVudGl0eSwgQ29kZXguSVJlZ2lzdGVyZWRFbnRpdHkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLkRhdGVUaW1lIG1fRGF0ZUFkZGVkO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBSZWdpc3RlcmVkRW50aXR5KCkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUmVnaXN0ZXJlZEVudGl0eShDb2RleC5JUmVnaXN0ZXJlZEVudGl0eSB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFJlZ2lzdGVyZWRFbnRpdHk+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFJlZ2lzdGVyZWRFbnRpdHkoQ29kZXguSVNlYXJjaEVudGl0eSB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgZGF0ZSBpbiB3aGljaCB0aGUgZW50aXR5IHdhcyByZWdpc3RlcmVkIChpLmUuIGFkZGVkIHRvIHRoZSBzdG9yZSlcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFN5c3RlbS5EYXRlVGltZSBEYXRlQWRkZWQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9EYXRlQWRkZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9EYXRlQWRkZWQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklSZWdpc3RlcmVkRW50aXR5IHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogUmVnaXN0ZXJlZEVudGl0eSB7XHJcbiAgICAgICAgICAgIHRoaXMubV9EYXRlQWRkZWQgPSAoKENvZGV4LklSZWdpc3RlcmVkRW50aXR5KSh2YWx1ZSkpLkRhdGVBZGRlZDtcclxuICAgICAgICAgICAgYmFzZS5Db3B5RnJvbTxTZWFyY2hFbnRpdHk+KCgoQ29kZXguSVNlYXJjaEVudGl0eSkodmFsdWUpKSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyBEZWZpbmVzIGEgc3RvcmVkIGZpbHRlciB3aGljaCBtYXRjaGVzIGVudGl0aWVzIGluIGEgcGFydGljdWxhciBpbmRleCBzaGFyZCBpbiBhIHN0YWJsZSBtYW5uZXJcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSVN0b3JlZEZpbHRlcikpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgU3RvcmVkRmlsdGVyIDogU2VhcmNoRW50aXR5LCBDb2RleC5JU3RvcmVkRmlsdGVyIHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5EYXRlVGltZSBtX0RhdGVVcGRhdGVkO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fSW5kZXhOYW1lO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgaW50IG1fU2hhcmQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PGxvbmc+IG1fU3RhYmxlSWRzID0gbmV3IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8bG9uZz4oKTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8c3RyaW5nPiBtX0Jhc2VVaWRzID0gbmV3IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8c3RyaW5nPigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxieXRlW10+IG1fVW5pb25GaWx0ZXJzID0gbmV3IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8Ynl0ZVtdPigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgYnl0ZVtdIG1fRmlsdGVyO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fRmlsdGVySGFzaDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIGludCBtX0ZpbHRlckNvdW50O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBTdG9yZWRGaWx0ZXIoKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBTdG9yZWRGaWx0ZXIoQ29kZXguSVN0b3JlZEZpbHRlciB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFN0b3JlZEZpbHRlcj4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgU3RvcmVkRmlsdGVyKENvZGV4LklTZWFyY2hFbnRpdHkgdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHRpbWUgb2YgdGhlIGxhc3QgdXBkYXRlIHRvIHRoZSBzdG9yZWQgZmlsdGVyXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBTeXN0ZW0uRGF0ZVRpbWUgRGF0ZVVwZGF0ZWQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9EYXRlVXBkYXRlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0RhdGVVcGRhdGVkID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgbmFtZSBvZiB0aGUgaW5kZXggdG8gd2hpY2ggdGhlIHN0b3JlZCBmaWx0ZXIgYXBwbGllc1xyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIEluZGV4TmFtZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0luZGV4TmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0luZGV4TmFtZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHNoYXJkIHRvIHdoaWNoIHRoZSBzdG9yZWQgZmlsdGVyIGFwcGxpZXNcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGludCBTaGFyZCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1NoYXJkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fU2hhcmQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIExpc3Qgb2Ygc3RhYmxlIGlkcyB0byBpbmNsdWRlIGluIHRoZSBzdG9yZWQgZmlsdGVyLlxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSVJlYWRPbmx5TGlzdDxsb25nPiBDb2RleC5JU3RvcmVkRmlsdGVyLlN0YWJsZUlkcyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5TdGFibGVJZHM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBMaXN0IG9mIHN0YWJsZSBpZHMgdG8gaW5jbHVkZSBpbiB0aGUgc3RvcmVkIGZpbHRlci5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8bG9uZz4gU3RhYmxlSWRzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fU3RhYmxlSWRzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fU3RhYmxlSWRzID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBMaXN0IG9mIHVpZHMgdG8gZm9yIHN0b3JlZCBmaWx0ZXJzIHdoaWNoIHdpbGwgYmUgdW5pb25lZCB3aXRoIHRoZSBnaXZlbiBzdG9yZWQgZmlsdGVyXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JUmVhZE9ubHlMaXN0PHN0cmluZz4gQ29kZXguSVN0b3JlZEZpbHRlci5CYXNlVWlkcyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5CYXNlVWlkcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIExpc3Qgb2YgdWlkcyB0byBmb3Igc3RvcmVkIGZpbHRlcnMgd2hpY2ggd2lsbCBiZSB1bmlvbmVkIHdpdGggdGhlIGdpdmVuIHN0b3JlZCBmaWx0ZXJcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8c3RyaW5nPiBCYXNlVWlkcyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0Jhc2VVaWRzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fQmFzZVVpZHMgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIExpc3Qgb2Ygc3RvcmVkIGZpbHRlcnMgd2hpY2ggd2lsbCBiZSB1bmlvbmVkIHdpdGggdGhlIGdpdmVuIHN0b3JlZCBmaWx0ZXJcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklSZWFkT25seUxpc3Q8Ynl0ZVtdPiBDb2RleC5JU3RvcmVkRmlsdGVyLlVuaW9uRmlsdGVycyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5VbmlvbkZpbHRlcnM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBMaXN0IG9mIHN0b3JlZCBmaWx0ZXJzIHdoaWNoIHdpbGwgYmUgdW5pb25lZCB3aXRoIHRoZSBnaXZlbiBzdG9yZWQgZmlsdGVyXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PGJ5dGVbXT4gVW5pb25GaWx0ZXJzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fVW5pb25GaWx0ZXJzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fVW5pb25GaWx0ZXJzID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgc3RvcmVkIGZpbHRlciBiaXQgc2V0IHdoaWNoIG1hdGNoZXMgdGhlIHN0b3JlZCBmaWx0ZXIgZG9jdW1lbnRzXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBieXRlW10gRmlsdGVyIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fRmlsdGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fRmlsdGVyID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgaGFzaCBvZiA8c2VlIGNyZWY9XCJQOkNvZGV4LklTdG9yZWRGaWx0ZXIuRmlsdGVyXCIgLz5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBGaWx0ZXJIYXNoIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fRmlsdGVySGFzaDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0ZpbHRlckhhc2ggPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBjb3VudCBvZiBlbGVtZW50cyBtYXRjaGVkIGJ5IDxzZWUgY3JlZj1cIlA6Q29kZXguSVN0b3JlZEZpbHRlci5GaWx0ZXJcIiAvPlxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgaW50IEZpbHRlckNvdW50IHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fRmlsdGVyQ291bnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9GaWx0ZXJDb3VudCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVN0b3JlZEZpbHRlciB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IFN0b3JlZEZpbHRlciB7XHJcbiAgICAgICAgICAgIHRoaXMubV9EYXRlVXBkYXRlZCA9ICgoQ29kZXguSVN0b3JlZEZpbHRlcikodmFsdWUpKS5EYXRlVXBkYXRlZDtcclxuICAgICAgICAgICAgdGhpcy5tX0luZGV4TmFtZSA9ICgoQ29kZXguSVN0b3JlZEZpbHRlcikodmFsdWUpKS5JbmRleE5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMubV9TaGFyZCA9ICgoQ29kZXguSVN0b3JlZEZpbHRlcikodmFsdWUpKS5TaGFyZDtcclxuICAgICAgICAgICAgdGhpcy5tX1N0YWJsZUlkcyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PGxvbmc+KCgoQ29kZXguSVN0b3JlZEZpbHRlcikodmFsdWUpKS5TdGFibGVJZHMpO1xyXG4gICAgICAgICAgICB0aGlzLm1fQmFzZVVpZHMgPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxzdHJpbmc+KCgoQ29kZXguSVN0b3JlZEZpbHRlcikodmFsdWUpKS5CYXNlVWlkcyk7XHJcbiAgICAgICAgICAgIHRoaXMubV9VbmlvbkZpbHRlcnMgPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxieXRlW10+KCgoQ29kZXguSVN0b3JlZEZpbHRlcikodmFsdWUpKS5VbmlvbkZpbHRlcnMpO1xyXG4gICAgICAgICAgICB0aGlzLm1fRmlsdGVyID0gKChDb2RleC5JU3RvcmVkRmlsdGVyKSh2YWx1ZSkpLkZpbHRlcjtcclxuICAgICAgICAgICAgdGhpcy5tX0ZpbHRlckhhc2ggPSAoKENvZGV4LklTdG9yZWRGaWx0ZXIpKHZhbHVlKSkuRmlsdGVySGFzaDtcclxuICAgICAgICAgICAgdGhpcy5tX0ZpbHRlckNvdW50ID0gKChDb2RleC5JU3RvcmVkRmlsdGVyKSh2YWx1ZSkpLkZpbHRlckNvdW50O1xyXG4gICAgICAgICAgICBiYXNlLkNvcHlGcm9tPFNlYXJjaEVudGl0eT4oKChDb2RleC5JU2VhcmNoRW50aXR5KSh2YWx1ZSkpKTtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklEZWZpbml0aW9uU2VhcmNoTW9kZWwpKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIERlZmluaXRpb25TZWFyY2hNb2RlbCA6IFNlYXJjaEVudGl0eSwgQ29kZXguSURlZmluaXRpb25TZWFyY2hNb2RlbCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBEZWZpbml0aW9uU3ltYm9sIG1fRGVmaW5pdGlvbjtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8c3RyaW5nPiBtX0tleXdvcmRzID0gbmV3IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8c3RyaW5nPigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBEZWZpbml0aW9uU2VhcmNoTW9kZWwoKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBEZWZpbml0aW9uU2VhcmNoTW9kZWwoQ29kZXguSURlZmluaXRpb25TZWFyY2hNb2RlbCB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPERlZmluaXRpb25TZWFyY2hNb2RlbD4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgRGVmaW5pdGlvblNlYXJjaE1vZGVsKENvZGV4LklTZWFyY2hFbnRpdHkgdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIENvZGV4LklEZWZpbml0aW9uU3ltYm9sIENvZGV4LklEZWZpbml0aW9uU2VhcmNoTW9kZWwuRGVmaW5pdGlvbiB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5EZWZpbml0aW9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIERlZmluaXRpb25TeW1ib2wgRGVmaW5pdGlvbiB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0RlZmluaXRpb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9EZWZpbml0aW9uID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBLZXl3b3JkcyBhcmUgYWRkaXRpb25hbCB0ZXJtcyB3aGljaCBjYW4gYmUgdXNlZCB0byBmaW5kIGEgZ2l2ZW4gc3ltYm9sLlxyXG4gICAgICAgIC8vLyBOT1RFOiBLZXl3b3JkcyBjYW4gb25seSBiZSB1c2VkIHRvIHNlbGVjdCBmcm9tIHN5bWJvbHMgd2hpY2ggaGF2ZVxyXG4gICAgICAgIC8vLyBhIHByaW1hcnkgdGVybSBtYXRjaFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSVJlYWRPbmx5TGlzdDxzdHJpbmc+IENvZGV4LklEZWZpbml0aW9uU2VhcmNoTW9kZWwuS2V5d29yZHMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuS2V5d29yZHM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBLZXl3b3JkcyBhcmUgYWRkaXRpb25hbCB0ZXJtcyB3aGljaCBjYW4gYmUgdXNlZCB0byBmaW5kIGEgZ2l2ZW4gc3ltYm9sLlxyXG4gICAgICAgIC8vLyBOT1RFOiBLZXl3b3JkcyBjYW4gb25seSBiZSB1c2VkIHRvIHNlbGVjdCBmcm9tIHN5bWJvbHMgd2hpY2ggaGF2ZVxyXG4gICAgICAgIC8vLyBhIHByaW1hcnkgdGVybSBtYXRjaFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxzdHJpbmc+IEtleXdvcmRzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fS2V5d29yZHM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9LZXl3b3JkcyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSURlZmluaXRpb25TZWFyY2hNb2RlbCB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IERlZmluaXRpb25TZWFyY2hNb2RlbCB7XHJcbiAgICAgICAgICAgIHRoaXMubV9EZWZpbml0aW9uID0gRW50aXR5VXRpbGl0aWVzLk51bGxPckNvcHk8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5EZWZpbml0aW9uU3ltYm9sLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuRGVmaW5pdGlvblN5bWJvbD4oRGVmaW5pdGlvbiwgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5EZWZpbml0aW9uU3ltYm9sLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkRlZmluaXRpb25TeW1ib2w+KSh2ID0+IG5ldyBEZWZpbml0aW9uU3ltYm9sKCkuQ29weUZyb208RGVmaW5pdGlvblN5bWJvbD4odikpKTs7XHJcbiAgICAgICAgICAgIHRoaXMubV9LZXl3b3JkcyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PHN0cmluZz4oKChDb2RleC5JRGVmaW5pdGlvblNlYXJjaE1vZGVsKSh2YWx1ZSkpLktleXdvcmRzKTtcclxuICAgICAgICAgICAgYmFzZS5Db3B5RnJvbTxTZWFyY2hFbnRpdHk+KCgoQ29kZXguSVNlYXJjaEVudGl0eSkodmFsdWUpKSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JTGFuZ3VhZ2VTZWFyY2hNb2RlbCkpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgTGFuZ3VhZ2VTZWFyY2hNb2RlbCA6IFNlYXJjaEVudGl0eSwgQ29kZXguSUxhbmd1YWdlU2VhcmNoTW9kZWwge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgTGFuZ3VhZ2VJbmZvIG1fTGFuZ3VhZ2U7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIExhbmd1YWdlU2VhcmNoTW9kZWwoKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBMYW5ndWFnZVNlYXJjaE1vZGVsKENvZGV4LklMYW5ndWFnZVNlYXJjaE1vZGVsIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208TGFuZ3VhZ2VTZWFyY2hNb2RlbD4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgTGFuZ3VhZ2VTZWFyY2hNb2RlbChDb2RleC5JU2VhcmNoRW50aXR5IHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBDb2RleC5JTGFuZ3VhZ2VJbmZvIENvZGV4LklMYW5ndWFnZVNlYXJjaE1vZGVsLkxhbmd1YWdlIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkxhbmd1YWdlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIExhbmd1YWdlSW5mbyBMYW5ndWFnZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0xhbmd1YWdlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fTGFuZ3VhZ2UgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklMYW5ndWFnZVNlYXJjaE1vZGVsIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogTGFuZ3VhZ2VTZWFyY2hNb2RlbCB7XHJcbiAgICAgICAgICAgIHRoaXMubV9MYW5ndWFnZSA9IEVudGl0eVV0aWxpdGllcy5OdWxsT3JDb3B5PGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuTGFuZ3VhZ2VJbmZvLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuTGFuZ3VhZ2VJbmZvPihMYW5ndWFnZSwgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5MYW5ndWFnZUluZm8sIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuTGFuZ3VhZ2VJbmZvPikodiA9PiBuZXcgTGFuZ3VhZ2VJbmZvKCkuQ29weUZyb208TGFuZ3VhZ2VJbmZvPih2KSkpOztcclxuICAgICAgICAgICAgYmFzZS5Db3B5RnJvbTxTZWFyY2hFbnRpdHk+KCgoQ29kZXguSVNlYXJjaEVudGl0eSkodmFsdWUpKSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JUmVmZXJlbmNlU2VhcmNoTW9kZWwpKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIFJlZmVyZW5jZVNlYXJjaE1vZGVsIDogU2VhcmNoRW50aXR5LCBDb2RleC5JUmVmZXJlbmNlU2VhcmNoTW9kZWwge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgU3ltYm9sIG1fUmVmZXJlbmNlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSVJlYWRPbmx5TGlzdDxTeW1ib2xTcGFuPiBtX1NwYW5zID0gQ29kZXguVXRpbGl0aWVzLkNvbGxlY3Rpb25VdGlsaXRpZXMuRW1wdHk8U3ltYm9sU3Bhbj4uQXJyYXk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBDb2RleC5JU3ltYm9sTGluZVNwYW5MaXN0IG1fQ29tcHJlc3NlZFNwYW5zO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fUHJvamVjdFJlbGF0aXZlUGF0aDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX1JlcG9SZWxhdGl2ZVBhdGg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9SZXBvc2l0b3J5TmFtZTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX1Byb2plY3RJZDtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUmVmZXJlbmNlU2VhcmNoTW9kZWwoKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBSZWZlcmVuY2VTZWFyY2hNb2RlbChDb2RleC5JUmVmZXJlbmNlU2VhcmNoTW9kZWwgdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxSZWZlcmVuY2VTZWFyY2hNb2RlbD4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUmVmZXJlbmNlU2VhcmNoTW9kZWwoQ29kZXguSVNlYXJjaEVudGl0eSB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFJlZmVyZW5jZVNlYXJjaE1vZGVsKENvZGV4LklQcm9qZWN0RmlsZVNjb3BlRW50aXR5IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208UmVmZXJlbmNlU2VhcmNoTW9kZWw+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFJlZmVyZW5jZVNlYXJjaE1vZGVsKENvZGV4LklSZXBvRmlsZVNjb3BlRW50aXR5IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208UmVmZXJlbmNlU2VhcmNoTW9kZWw+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFJlZmVyZW5jZVNlYXJjaE1vZGVsKENvZGV4LklSZXBvU2NvcGVFbnRpdHkgdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxSZWZlcmVuY2VTZWFyY2hNb2RlbD4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUmVmZXJlbmNlU2VhcmNoTW9kZWwoQ29kZXguSVByb2plY3RTY29wZUVudGl0eSB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFJlZmVyZW5jZVNlYXJjaE1vZGVsPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHJlZmVyZW5jZSBzeW1ib2xcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIENvZGV4LklDb2RlU3ltYm9sIENvZGV4LklSZWZlcmVuY2VTZWFyY2hNb2RlbC5SZWZlcmVuY2Uge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuUmVmZXJlbmNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHJlZmVyZW5jZSBzeW1ib2xcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFN5bWJvbCBSZWZlcmVuY2Uge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9SZWZlcmVuY2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9SZWZlcmVuY2UgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JUmVhZE9ubHlMaXN0PENvZGV4LklTeW1ib2xTcGFuPiBDb2RleC5JUmVmZXJlbmNlU2VhcmNoTW9kZWwuU3BhbnMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuU3BhbnM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSVJlYWRPbmx5TGlzdDxTeW1ib2xTcGFuPiBTcGFucyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5Db2VyY2VTcGFucyh0aGlzLm1fU3BhbnMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fU3BhbnMgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIENvbXByZXNzZWQgbGlzdCBvZiBzcGFuc1xyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgQ29kZXguSVN5bWJvbExpbmVTcGFuTGlzdCBDb21wcmVzc2VkU3BhbnMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Db21wcmVzc2VkU3BhbnM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Db21wcmVzc2VkU3BhbnMgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBwcm9qZWN0IHJlbGF0aXZlIHBhdGggb2YgdGhlIGZpbGVcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBQcm9qZWN0UmVsYXRpdmVQYXRoIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUHJvamVjdFJlbGF0aXZlUGF0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1Byb2plY3RSZWxhdGl2ZVBhdGggPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSByZXBvIHJlbGF0aXZlIHBhdGggdG8gdGhlIGZpbGVcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBSZXBvUmVsYXRpdmVQYXRoIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUmVwb1JlbGF0aXZlUGF0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1JlcG9SZWxhdGl2ZVBhdGggPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBuYW1lIG9mIHRoZSByZXBvc2l0b3J5IGNvbnRhaW5pbmcgdGhlIGVudGl0eVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIFJlcG9zaXRvcnlOYW1lIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUmVwb3NpdG9yeU5hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9SZXBvc2l0b3J5TmFtZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGlkZW50aWZpZXIgb2YgdGhlIHByb2plY3QgY29udGFpbmluZyB0aGUgZW50aXR5XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgUHJvamVjdElkIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUHJvamVjdElkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUHJvamVjdElkID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JUmVwb1Njb3BlRW50aXR5IHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogUmVmZXJlbmNlU2VhcmNoTW9kZWwge1xyXG4gICAgICAgICAgICB0aGlzLm1fUmVwb3NpdG9yeU5hbWUgPSAoKENvZGV4LklSZXBvU2NvcGVFbnRpdHkpKHZhbHVlKSkuUmVwb3NpdG9yeU5hbWU7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JUmVwb0ZpbGVTY29wZUVudGl0eSB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IFJlZmVyZW5jZVNlYXJjaE1vZGVsIHtcclxuICAgICAgICAgICAgdGhpcy5tX1JlcG9SZWxhdGl2ZVBhdGggPSAoKENvZGV4LklSZXBvRmlsZVNjb3BlRW50aXR5KSh2YWx1ZSkpLlJlcG9SZWxhdGl2ZVBhdGg7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JUHJvamVjdFNjb3BlRW50aXR5IHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogUmVmZXJlbmNlU2VhcmNoTW9kZWwge1xyXG4gICAgICAgICAgICB0aGlzLm1fUHJvamVjdElkID0gKChDb2RleC5JUHJvamVjdFNjb3BlRW50aXR5KSh2YWx1ZSkpLlByb2plY3RJZDtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklQcm9qZWN0RmlsZVNjb3BlRW50aXR5IHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogUmVmZXJlbmNlU2VhcmNoTW9kZWwge1xyXG4gICAgICAgICAgICB0aGlzLm1fUHJvamVjdFJlbGF0aXZlUGF0aCA9ICgoQ29kZXguSVByb2plY3RGaWxlU2NvcGVFbnRpdHkpKHZhbHVlKSkuUHJvamVjdFJlbGF0aXZlUGF0aDtcclxuICAgICAgICAgICAgdGhpcy5tX1JlcG9SZWxhdGl2ZVBhdGggPSAoKENvZGV4LklSZXBvRmlsZVNjb3BlRW50aXR5KSh2YWx1ZSkpLlJlcG9SZWxhdGl2ZVBhdGg7XHJcbiAgICAgICAgICAgIHRoaXMubV9SZXBvc2l0b3J5TmFtZSA9ICgoQ29kZXguSVJlcG9TY29wZUVudGl0eSkodmFsdWUpKS5SZXBvc2l0b3J5TmFtZTtcclxuICAgICAgICAgICAgdGhpcy5tX1Byb2plY3RJZCA9ICgoQ29kZXguSVByb2plY3RTY29wZUVudGl0eSkodmFsdWUpKS5Qcm9qZWN0SWQ7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JUmVmZXJlbmNlU2VhcmNoTW9kZWwgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBSZWZlcmVuY2VTZWFyY2hNb2RlbCB7XHJcbiAgICAgICAgICAgIHRoaXMubV9SZWZlcmVuY2UgPSBFbnRpdHlVdGlsaXRpZXMuTnVsbE9yQ29weTxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlN5bWJvbCxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlN5bWJvbD4oUmVmZXJlbmNlLCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlN5bWJvbCwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5TeW1ib2w+KSh2ID0+IG5ldyBTeW1ib2woKS5Db3B5RnJvbTxTeW1ib2w+KHYpKSk7O1xyXG4gICAgICAgICAgICB0aGlzLm1fU3BhbnMgPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxTeW1ib2xTcGFuPihTeXN0ZW0uTGlucS5FbnVtZXJhYmxlLlNlbGVjdDxnbG9iYWw6OkNvZGV4LklTeW1ib2xTcGFuLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuU3ltYm9sU3Bhbj4oKChDb2RleC5JUmVmZXJlbmNlU2VhcmNoTW9kZWwpKHZhbHVlKSkuU3BhbnMsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguSVN5bWJvbFNwYW4sIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuU3ltYm9sU3Bhbj4pKHYgPT4gRW50aXR5VXRpbGl0aWVzLk51bGxPckNvcHk8Z2xvYmFsOjpDb2RleC5JU3ltYm9sU3BhbixnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlN5bWJvbFNwYW4+KHYsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguSVN5bWJvbFNwYW4sIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuU3ltYm9sU3Bhbj4pKF92ID0+IG5ldyBTeW1ib2xTcGFuKCkuQ29weUZyb208U3ltYm9sU3Bhbj4oX3YpKSkpKSk7XHJcbiAgICAgICAgICAgIHRoaXMubV9Db21wcmVzc2VkU3BhbnMgPSAoKENvZGV4LklSZWZlcmVuY2VTZWFyY2hNb2RlbCkodmFsdWUpKS5Db21wcmVzc2VkU3BhbnM7XHJcbiAgICAgICAgICAgIGJhc2UuQ29weUZyb208U2VhcmNoRW50aXR5PigoKENvZGV4LklTZWFyY2hFbnRpdHkpKHZhbHVlKSkpO1xyXG4gICAgICAgICAgICB0aGlzLm1fUHJvamVjdFJlbGF0aXZlUGF0aCA9ICgoQ29kZXguSVByb2plY3RGaWxlU2NvcGVFbnRpdHkpKHZhbHVlKSkuUHJvamVjdFJlbGF0aXZlUGF0aDtcclxuICAgICAgICAgICAgdGhpcy5tX1JlcG9SZWxhdGl2ZVBhdGggPSAoKENvZGV4LklSZXBvRmlsZVNjb3BlRW50aXR5KSh2YWx1ZSkpLlJlcG9SZWxhdGl2ZVBhdGg7XHJcbiAgICAgICAgICAgIHRoaXMubV9SZXBvc2l0b3J5TmFtZSA9ICgoQ29kZXguSVJlcG9TY29wZUVudGl0eSkodmFsdWUpKS5SZXBvc2l0b3J5TmFtZTtcclxuICAgICAgICAgICAgdGhpcy5tX1Byb2plY3RJZCA9ICgoQ29kZXguSVByb2plY3RTY29wZUVudGl0eSkodmFsdWUpKS5Qcm9qZWN0SWQ7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JU291cmNlU2VhcmNoTW9kZWxCYXNlKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBTb3VyY2VTZWFyY2hNb2RlbEJhc2UgOiBTZWFyY2hFbnRpdHksIENvZGV4LklTb3VyY2VTZWFyY2hNb2RlbEJhc2Uge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgU291cmNlQ29udHJvbEZpbGVJbmZvIG1fU291cmNlQ29udHJvbEluZm87XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFNvdXJjZVNlYXJjaE1vZGVsQmFzZSgpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFNvdXJjZVNlYXJjaE1vZGVsQmFzZShDb2RleC5JU291cmNlU2VhcmNoTW9kZWxCYXNlIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208U291cmNlU2VhcmNoTW9kZWxCYXNlPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBTb3VyY2VTZWFyY2hNb2RlbEJhc2UoQ29kZXguSVNlYXJjaEVudGl0eSB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBJbmZvcm1hdGlvbiBhYm91dCB0aGUgc291cmNlIGZpbGUgZnJvbSBzb3VyY2UgY29udHJvbCBwcm92aWRlciAobWF5IGJlIG51bGwpXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBDb2RleC5JU291cmNlQ29udHJvbEZpbGVJbmZvIENvZGV4LklTb3VyY2VTZWFyY2hNb2RlbEJhc2UuU291cmNlQ29udHJvbEluZm8ge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuU291cmNlQ29udHJvbEluZm87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBJbmZvcm1hdGlvbiBhYm91dCB0aGUgc291cmNlIGZpbGUgZnJvbSBzb3VyY2UgY29udHJvbCBwcm92aWRlciAobWF5IGJlIG51bGwpXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBTb3VyY2VDb250cm9sRmlsZUluZm8gU291cmNlQ29udHJvbEluZm8ge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Tb3VyY2VDb250cm9sSW5mbztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1NvdXJjZUNvbnRyb2xJbmZvID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JU291cmNlU2VhcmNoTW9kZWxCYXNlIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogU291cmNlU2VhcmNoTW9kZWxCYXNlIHtcclxuICAgICAgICAgICAgdGhpcy5tX1NvdXJjZUNvbnRyb2xJbmZvID0gRW50aXR5VXRpbGl0aWVzLk51bGxPckNvcHk8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Tb3VyY2VDb250cm9sRmlsZUluZm8sZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Tb3VyY2VDb250cm9sRmlsZUluZm8+KFNvdXJjZUNvbnRyb2xJbmZvLCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlNvdXJjZUNvbnRyb2xGaWxlSW5mbywgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Tb3VyY2VDb250cm9sRmlsZUluZm8+KSh2ID0+IG5ldyBTb3VyY2VDb250cm9sRmlsZUluZm8oKS5Db3B5RnJvbTxTb3VyY2VDb250cm9sRmlsZUluZm8+KHYpKSk7O1xyXG4gICAgICAgICAgICBiYXNlLkNvcHlGcm9tPFNlYXJjaEVudGl0eT4oKChDb2RleC5JU2VhcmNoRW50aXR5KSh2YWx1ZSkpKTtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklCb3VuZFNvdXJjZVNlYXJjaE1vZGVsKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBCb3VuZFNvdXJjZVNlYXJjaE1vZGVsIDogU2VhcmNoRW50aXR5LCBDb2RleC5JQm91bmRTb3VyY2VTZWFyY2hNb2RlbCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9UZXh0VWlkO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgU291cmNlRmlsZUluZm8gbV9Tb3VyY2VJbmZvO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgQm91bmRTb3VyY2VJbmZvIG1fQmluZGluZ0luZm87XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBDb2RleC5JQ2xhc3NpZmljYXRpb25MaXN0IG1fQ29tcHJlc3NlZENsYXNzaWZpY2F0aW9ucztcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIENvZGV4LklSZWZlcmVuY2VMaXN0IG1fQ29tcHJlc3NlZFJlZmVyZW5jZXM7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTb3VyY2VDb250cm9sRmlsZUluZm8gbV9Tb3VyY2VDb250cm9sSW5mbztcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQm91bmRTb3VyY2VTZWFyY2hNb2RlbCgpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIEJvdW5kU291cmNlU2VhcmNoTW9kZWwoQ29kZXguSUJvdW5kU291cmNlU2VhcmNoTW9kZWwgdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxCb3VuZFNvdXJjZVNlYXJjaE1vZGVsPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBCb3VuZFNvdXJjZVNlYXJjaE1vZGVsKENvZGV4LklTZWFyY2hFbnRpdHkgdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBCb3VuZFNvdXJjZVNlYXJjaE1vZGVsKENvZGV4LklTb3VyY2VTZWFyY2hNb2RlbEJhc2UgdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxCb3VuZFNvdXJjZVNlYXJjaE1vZGVsPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHVuaXF1ZSBpZGVudGlmaWVyIG9mIHRoZSBhc3NvY2lhdGVkIDxzZWUgY3JlZj1cIlQ6Q29kZXguSVNvdXJjZUZpbGVcIiAvPlxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIFRleHRVaWQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9UZXh0VWlkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fVGV4dFVpZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gSW5mb3JtYXRpb24gYWJvdXQgdGhlIHNvdXJjZSBmaWxlXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBDb2RleC5JU291cmNlRmlsZUluZm8gQ29kZXguSUJvdW5kU291cmNlU2VhcmNoTW9kZWwuU291cmNlSW5mbyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5Tb3VyY2VJbmZvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gSW5mb3JtYXRpb24gYWJvdXQgdGhlIHNvdXJjZSBmaWxlXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBTb3VyY2VGaWxlSW5mbyBTb3VyY2VJbmZvIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fU291cmNlSW5mbztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1NvdXJjZUluZm8gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBiaW5kaW5nIGluZm9cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIENvZGV4LklCb3VuZFNvdXJjZUluZm8gQ29kZXguSUJvdW5kU291cmNlU2VhcmNoTW9kZWwuQmluZGluZ0luZm8ge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuQmluZGluZ0luZm87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgYmluZGluZyBpbmZvXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBCb3VuZFNvdXJjZUluZm8gQmluZGluZ0luZm8ge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9CaW5kaW5nSW5mbztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0JpbmRpbmdJbmZvID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBDb21wcmVzc2VkIGxpc3Qgb2YgY2xhc3NpZmljYXRpb24gc3BhbnNcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIENvZGV4LklDbGFzc2lmaWNhdGlvbkxpc3QgQ29tcHJlc3NlZENsYXNzaWZpY2F0aW9ucyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0NvbXByZXNzZWRDbGFzc2lmaWNhdGlvbnM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Db21wcmVzc2VkQ2xhc3NpZmljYXRpb25zID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBDb21wcmVzc2VkIGxpc3Qgb2YgcmVmZXJlbmNlIHNwYW5zXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBDb2RleC5JUmVmZXJlbmNlTGlzdCBDb21wcmVzc2VkUmVmZXJlbmNlcyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0NvbXByZXNzZWRSZWZlcmVuY2VzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fQ29tcHJlc3NlZFJlZmVyZW5jZXMgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIEluZm9ybWF0aW9uIGFib3V0IHRoZSBzb3VyY2UgZmlsZSBmcm9tIHNvdXJjZSBjb250cm9sIHByb3ZpZGVyIChtYXkgYmUgbnVsbClcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIENvZGV4LklTb3VyY2VDb250cm9sRmlsZUluZm8gQ29kZXguSVNvdXJjZVNlYXJjaE1vZGVsQmFzZS5Tb3VyY2VDb250cm9sSW5mbyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5Tb3VyY2VDb250cm9sSW5mbztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIEluZm9ybWF0aW9uIGFib3V0IHRoZSBzb3VyY2UgZmlsZSBmcm9tIHNvdXJjZSBjb250cm9sIHByb3ZpZGVyIChtYXkgYmUgbnVsbClcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFNvdXJjZUNvbnRyb2xGaWxlSW5mbyBTb3VyY2VDb250cm9sSW5mbyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1NvdXJjZUNvbnRyb2xJbmZvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fU291cmNlQ29udHJvbEluZm8gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklTb3VyY2VTZWFyY2hNb2RlbEJhc2UgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBCb3VuZFNvdXJjZVNlYXJjaE1vZGVsIHtcclxuICAgICAgICAgICAgdGhpcy5tX1NvdXJjZUNvbnRyb2xJbmZvID0gRW50aXR5VXRpbGl0aWVzLk51bGxPckNvcHk8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Tb3VyY2VDb250cm9sRmlsZUluZm8sZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Tb3VyY2VDb250cm9sRmlsZUluZm8+KFNvdXJjZUNvbnRyb2xJbmZvLCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlNvdXJjZUNvbnRyb2xGaWxlSW5mbywgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Tb3VyY2VDb250cm9sRmlsZUluZm8+KSh2ID0+IG5ldyBTb3VyY2VDb250cm9sRmlsZUluZm8oKS5Db3B5RnJvbTxTb3VyY2VDb250cm9sRmlsZUluZm8+KHYpKSk7O1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSUJvdW5kU291cmNlU2VhcmNoTW9kZWwgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBCb3VuZFNvdXJjZVNlYXJjaE1vZGVsIHtcclxuICAgICAgICAgICAgdGhpcy5tX1RleHRVaWQgPSAoKENvZGV4LklCb3VuZFNvdXJjZVNlYXJjaE1vZGVsKSh2YWx1ZSkpLlRleHRVaWQ7XHJcbiAgICAgICAgICAgIHRoaXMubV9Tb3VyY2VJbmZvID0gRW50aXR5VXRpbGl0aWVzLk51bGxPckNvcHk8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Tb3VyY2VGaWxlSW5mbyxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlNvdXJjZUZpbGVJbmZvPihTb3VyY2VJbmZvLCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlNvdXJjZUZpbGVJbmZvLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlNvdXJjZUZpbGVJbmZvPikodiA9PiBuZXcgU291cmNlRmlsZUluZm8oKS5Db3B5RnJvbTxTb3VyY2VGaWxlSW5mbz4odikpKTs7XHJcbiAgICAgICAgICAgIHRoaXMubV9CaW5kaW5nSW5mbyA9IEVudGl0eVV0aWxpdGllcy5OdWxsT3JDb3B5PGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuQm91bmRTb3VyY2VJbmZvLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuQm91bmRTb3VyY2VJbmZvPihCaW5kaW5nSW5mbywgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Cb3VuZFNvdXJjZUluZm8sIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuQm91bmRTb3VyY2VJbmZvPikodiA9PiBuZXcgQm91bmRTb3VyY2VJbmZvKCkuQ29weUZyb208Qm91bmRTb3VyY2VJbmZvPih2KSkpOztcclxuICAgICAgICAgICAgdGhpcy5tX0NvbXByZXNzZWRDbGFzc2lmaWNhdGlvbnMgPSAoKENvZGV4LklCb3VuZFNvdXJjZVNlYXJjaE1vZGVsKSh2YWx1ZSkpLkNvbXByZXNzZWRDbGFzc2lmaWNhdGlvbnM7XHJcbiAgICAgICAgICAgIHRoaXMubV9Db21wcmVzc2VkUmVmZXJlbmNlcyA9ICgoQ29kZXguSUJvdW5kU291cmNlU2VhcmNoTW9kZWwpKHZhbHVlKSkuQ29tcHJlc3NlZFJlZmVyZW5jZXM7XHJcbiAgICAgICAgICAgIGJhc2UuQ29weUZyb208U2VhcmNoRW50aXR5PigoKENvZGV4LklTZWFyY2hFbnRpdHkpKHZhbHVlKSkpO1xyXG4gICAgICAgICAgICB0aGlzLm1fU291cmNlQ29udHJvbEluZm8gPSBFbnRpdHlVdGlsaXRpZXMuTnVsbE9yQ29weTxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlNvdXJjZUNvbnRyb2xGaWxlSW5mbyxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlNvdXJjZUNvbnRyb2xGaWxlSW5mbz4oU291cmNlQ29udHJvbEluZm8sIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuU291cmNlQ29udHJvbEZpbGVJbmZvLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlNvdXJjZUNvbnRyb2xGaWxlSW5mbz4pKHYgPT4gbmV3IFNvdXJjZUNvbnRyb2xGaWxlSW5mbygpLkNvcHlGcm9tPFNvdXJjZUNvbnRyb2xGaWxlSW5mbz4odikpKTs7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JVGV4dFNvdXJjZVNlYXJjaE1vZGVsKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBUZXh0U291cmNlU2VhcmNoTW9kZWwgOiBTZWFyY2hFbnRpdHksIENvZGV4LklUZXh0U291cmNlU2VhcmNoTW9kZWwge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgU291cmNlRmlsZSBtX0ZpbGU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTb3VyY2VDb250cm9sRmlsZUluZm8gbV9Tb3VyY2VDb250cm9sSW5mbztcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgVGV4dFNvdXJjZVNlYXJjaE1vZGVsKCkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgVGV4dFNvdXJjZVNlYXJjaE1vZGVsKENvZGV4LklUZXh0U291cmNlU2VhcmNoTW9kZWwgdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxUZXh0U291cmNlU2VhcmNoTW9kZWw+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFRleHRTb3VyY2VTZWFyY2hNb2RlbChDb2RleC5JU2VhcmNoRW50aXR5IHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgVGV4dFNvdXJjZVNlYXJjaE1vZGVsKENvZGV4LklTb3VyY2VTZWFyY2hNb2RlbEJhc2UgdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxUZXh0U291cmNlU2VhcmNoTW9kZWw+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgQ29kZXguSVNvdXJjZUZpbGUgQ29kZXguSVRleHRTb3VyY2VTZWFyY2hNb2RlbC5GaWxlIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkZpbGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgU291cmNlRmlsZSBGaWxlIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fRmlsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0ZpbGUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIEluZm9ybWF0aW9uIGFib3V0IHRoZSBzb3VyY2UgZmlsZSBmcm9tIHNvdXJjZSBjb250cm9sIHByb3ZpZGVyIChtYXkgYmUgbnVsbClcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIENvZGV4LklTb3VyY2VDb250cm9sRmlsZUluZm8gQ29kZXguSVNvdXJjZVNlYXJjaE1vZGVsQmFzZS5Tb3VyY2VDb250cm9sSW5mbyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5Tb3VyY2VDb250cm9sSW5mbztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIEluZm9ybWF0aW9uIGFib3V0IHRoZSBzb3VyY2UgZmlsZSBmcm9tIHNvdXJjZSBjb250cm9sIHByb3ZpZGVyIChtYXkgYmUgbnVsbClcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFNvdXJjZUNvbnRyb2xGaWxlSW5mbyBTb3VyY2VDb250cm9sSW5mbyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1NvdXJjZUNvbnRyb2xJbmZvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fU291cmNlQ29udHJvbEluZm8gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklTb3VyY2VTZWFyY2hNb2RlbEJhc2UgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBUZXh0U291cmNlU2VhcmNoTW9kZWwge1xyXG4gICAgICAgICAgICB0aGlzLm1fU291cmNlQ29udHJvbEluZm8gPSBFbnRpdHlVdGlsaXRpZXMuTnVsbE9yQ29weTxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlNvdXJjZUNvbnRyb2xGaWxlSW5mbyxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlNvdXJjZUNvbnRyb2xGaWxlSW5mbz4oU291cmNlQ29udHJvbEluZm8sIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuU291cmNlQ29udHJvbEZpbGVJbmZvLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlNvdXJjZUNvbnRyb2xGaWxlSW5mbz4pKHYgPT4gbmV3IFNvdXJjZUNvbnRyb2xGaWxlSW5mbygpLkNvcHlGcm9tPFNvdXJjZUNvbnRyb2xGaWxlSW5mbz4odikpKTs7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JVGV4dFNvdXJjZVNlYXJjaE1vZGVsIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogVGV4dFNvdXJjZVNlYXJjaE1vZGVsIHtcclxuICAgICAgICAgICAgdGhpcy5tX0ZpbGUgPSBFbnRpdHlVdGlsaXRpZXMuTnVsbE9yQ29weTxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlNvdXJjZUZpbGUsZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Tb3VyY2VGaWxlPihGaWxlLCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlNvdXJjZUZpbGUsIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuU291cmNlRmlsZT4pKHYgPT4gbmV3IFNvdXJjZUZpbGUoKS5Db3B5RnJvbTxTb3VyY2VGaWxlPih2KSkpOztcclxuICAgICAgICAgICAgYmFzZS5Db3B5RnJvbTxTZWFyY2hFbnRpdHk+KCgoQ29kZXguSVNlYXJjaEVudGl0eSkodmFsdWUpKSk7XHJcbiAgICAgICAgICAgIHRoaXMubV9Tb3VyY2VDb250cm9sSW5mbyA9IEVudGl0eVV0aWxpdGllcy5OdWxsT3JDb3B5PGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuU291cmNlQ29udHJvbEZpbGVJbmZvLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuU291cmNlQ29udHJvbEZpbGVJbmZvPihTb3VyY2VDb250cm9sSW5mbywgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Tb3VyY2VDb250cm9sRmlsZUluZm8sIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuU291cmNlQ29udHJvbEZpbGVJbmZvPikodiA9PiBuZXcgU291cmNlQ29udHJvbEZpbGVJbmZvKCkuQ29weUZyb208U291cmNlQ29udHJvbEZpbGVJbmZvPih2KSkpOztcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklSZXBvc2l0b3J5U2VhcmNoTW9kZWwpKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIFJlcG9zaXRvcnlTZWFyY2hNb2RlbCA6IFNlYXJjaEVudGl0eSwgQ29kZXguSVJlcG9zaXRvcnlTZWFyY2hNb2RlbCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBSZXBvc2l0b3J5IG1fUmVwb3NpdG9yeTtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUmVwb3NpdG9yeVNlYXJjaE1vZGVsKCkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUmVwb3NpdG9yeVNlYXJjaE1vZGVsKENvZGV4LklSZXBvc2l0b3J5U2VhcmNoTW9kZWwgdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxSZXBvc2l0b3J5U2VhcmNoTW9kZWw+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFJlcG9zaXRvcnlTZWFyY2hNb2RlbChDb2RleC5JU2VhcmNoRW50aXR5IHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBDb2RleC5JUmVwb3NpdG9yeSBDb2RleC5JUmVwb3NpdG9yeVNlYXJjaE1vZGVsLlJlcG9zaXRvcnkge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuUmVwb3NpdG9yeTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBSZXBvc2l0b3J5IFJlcG9zaXRvcnkge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9SZXBvc2l0b3J5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUmVwb3NpdG9yeSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVJlcG9zaXRvcnlTZWFyY2hNb2RlbCB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IFJlcG9zaXRvcnlTZWFyY2hNb2RlbCB7XHJcbiAgICAgICAgICAgIHRoaXMubV9SZXBvc2l0b3J5ID0gRW50aXR5VXRpbGl0aWVzLk51bGxPckNvcHk8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5SZXBvc2l0b3J5LGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuUmVwb3NpdG9yeT4oUmVwb3NpdG9yeSwgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5SZXBvc2l0b3J5LCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlJlcG9zaXRvcnk+KSh2ID0+IG5ldyBSZXBvc2l0b3J5KCkuQ29weUZyb208UmVwb3NpdG9yeT4odikpKTs7XHJcbiAgICAgICAgICAgIGJhc2UuQ29weUZyb208U2VhcmNoRW50aXR5PigoKENvZGV4LklTZWFyY2hFbnRpdHkpKHZhbHVlKSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSVByb2plY3RTZWFyY2hNb2RlbCkpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgUHJvamVjdFNlYXJjaE1vZGVsIDogU2VhcmNoRW50aXR5LCBDb2RleC5JUHJvamVjdFNlYXJjaE1vZGVsIHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIEFuYWx5emVkUHJvamVjdCBtX1Byb2plY3Q7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFByb2plY3RTZWFyY2hNb2RlbCgpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFByb2plY3RTZWFyY2hNb2RlbChDb2RleC5JUHJvamVjdFNlYXJjaE1vZGVsIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208UHJvamVjdFNlYXJjaE1vZGVsPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBQcm9qZWN0U2VhcmNoTW9kZWwoQ29kZXguSVNlYXJjaEVudGl0eSB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgQ29kZXguSVByb2plY3QgQ29kZXguSVByb2plY3RTZWFyY2hNb2RlbC5Qcm9qZWN0IHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLlByb2plY3Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgQW5hbHl6ZWRQcm9qZWN0IFByb2plY3Qge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Qcm9qZWN0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUHJvamVjdCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVByb2plY3RTZWFyY2hNb2RlbCB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IFByb2plY3RTZWFyY2hNb2RlbCB7XHJcbiAgICAgICAgICAgIHRoaXMubV9Qcm9qZWN0ID0gRW50aXR5VXRpbGl0aWVzLk51bGxPckNvcHk8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5BbmFseXplZFByb2plY3QsZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5BbmFseXplZFByb2plY3Q+KFByb2plY3QsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuQW5hbHl6ZWRQcm9qZWN0LCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkFuYWx5emVkUHJvamVjdD4pKHYgPT4gbmV3IEFuYWx5emVkUHJvamVjdCgpLkNvcHlGcm9tPEFuYWx5emVkUHJvamVjdD4odikpKTs7XHJcbiAgICAgICAgICAgIGJhc2UuQ29weUZyb208U2VhcmNoRW50aXR5PigoKENvZGV4LklTZWFyY2hFbnRpdHkpKHZhbHVlKSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSVByb2plY3RSZWZlcmVuY2VTZWFyY2hNb2RlbCkpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgUHJvamVjdFJlZmVyZW5jZVNlYXJjaE1vZGVsIDogU2VhcmNoRW50aXR5LCBDb2RleC5JUHJvamVjdFJlZmVyZW5jZVNlYXJjaE1vZGVsIHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFJlZmVyZW5jZWRQcm9qZWN0IG1fUHJvamVjdFJlZmVyZW5jZTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX1Byb2plY3RJZDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX1JlcG9zaXRvcnlOYW1lO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBQcm9qZWN0UmVmZXJlbmNlU2VhcmNoTW9kZWwoKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBQcm9qZWN0UmVmZXJlbmNlU2VhcmNoTW9kZWwoQ29kZXguSVByb2plY3RSZWZlcmVuY2VTZWFyY2hNb2RlbCB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFByb2plY3RSZWZlcmVuY2VTZWFyY2hNb2RlbD4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUHJvamVjdFJlZmVyZW5jZVNlYXJjaE1vZGVsKENvZGV4LklTZWFyY2hFbnRpdHkgdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBQcm9qZWN0UmVmZXJlbmNlU2VhcmNoTW9kZWwoQ29kZXguSVByb2plY3RTY29wZUVudGl0eSB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFByb2plY3RSZWZlcmVuY2VTZWFyY2hNb2RlbD4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUHJvamVjdFJlZmVyZW5jZVNlYXJjaE1vZGVsKENvZGV4LklSZXBvU2NvcGVFbnRpdHkgdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxQcm9qZWN0UmVmZXJlbmNlU2VhcmNoTW9kZWw+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgQ29kZXguSVJlZmVyZW5jZWRQcm9qZWN0IENvZGV4LklQcm9qZWN0UmVmZXJlbmNlU2VhcmNoTW9kZWwuUHJvamVjdFJlZmVyZW5jZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5Qcm9qZWN0UmVmZXJlbmNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFJlZmVyZW5jZWRQcm9qZWN0IFByb2plY3RSZWZlcmVuY2Uge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Qcm9qZWN0UmVmZXJlbmNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUHJvamVjdFJlZmVyZW5jZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGlkZW50aWZpZXIgb2YgdGhlIHByb2plY3QgY29udGFpbmluZyB0aGUgZW50aXR5XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgUHJvamVjdElkIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUHJvamVjdElkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUHJvamVjdElkID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgbmFtZSBvZiB0aGUgcmVwb3NpdG9yeSBjb250YWluaW5nIHRoZSBlbnRpdHlcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBSZXBvc2l0b3J5TmFtZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1JlcG9zaXRvcnlOYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUmVwb3NpdG9yeU5hbWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklSZXBvU2NvcGVFbnRpdHkgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBQcm9qZWN0UmVmZXJlbmNlU2VhcmNoTW9kZWwge1xyXG4gICAgICAgICAgICB0aGlzLm1fUmVwb3NpdG9yeU5hbWUgPSAoKENvZGV4LklSZXBvU2NvcGVFbnRpdHkpKHZhbHVlKSkuUmVwb3NpdG9yeU5hbWU7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JUHJvamVjdFNjb3BlRW50aXR5IHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogUHJvamVjdFJlZmVyZW5jZVNlYXJjaE1vZGVsIHtcclxuICAgICAgICAgICAgdGhpcy5tX1Byb2plY3RJZCA9ICgoQ29kZXguSVByb2plY3RTY29wZUVudGl0eSkodmFsdWUpKS5Qcm9qZWN0SWQ7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JUHJvamVjdFJlZmVyZW5jZVNlYXJjaE1vZGVsIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogUHJvamVjdFJlZmVyZW5jZVNlYXJjaE1vZGVsIHtcclxuICAgICAgICAgICAgdGhpcy5tX1Byb2plY3RSZWZlcmVuY2UgPSBFbnRpdHlVdGlsaXRpZXMuTnVsbE9yQ29weTxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlJlZmVyZW5jZWRQcm9qZWN0LGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuUmVmZXJlbmNlZFByb2plY3Q+KFByb2plY3RSZWZlcmVuY2UsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuUmVmZXJlbmNlZFByb2plY3QsIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuUmVmZXJlbmNlZFByb2plY3Q+KSh2ID0+IG5ldyBSZWZlcmVuY2VkUHJvamVjdCgpLkNvcHlGcm9tPFJlZmVyZW5jZWRQcm9qZWN0Pih2KSkpOztcclxuICAgICAgICAgICAgYmFzZS5Db3B5RnJvbTxTZWFyY2hFbnRpdHk+KCgoQ29kZXguSVNlYXJjaEVudGl0eSkodmFsdWUpKSk7XHJcbiAgICAgICAgICAgIHRoaXMubV9Qcm9qZWN0SWQgPSAoKENvZGV4LklQcm9qZWN0U2NvcGVFbnRpdHkpKHZhbHVlKSkuUHJvamVjdElkO1xyXG4gICAgICAgICAgICB0aGlzLm1fUmVwb3NpdG9yeU5hbWUgPSAoKENvZGV4LklSZXBvU2NvcGVFbnRpdHkpKHZhbHVlKSkuUmVwb3NpdG9yeU5hbWU7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JQ29tbWl0U2VhcmNoTW9kZWwpKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIENvbW1pdFNlYXJjaE1vZGVsIDogU2VhcmNoRW50aXR5LCBDb2RleC5JQ29tbWl0U2VhcmNoTW9kZWwge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgQ29tbWl0IG1fQ29tbWl0O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBDb21taXRTZWFyY2hNb2RlbCgpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIENvbW1pdFNlYXJjaE1vZGVsKENvZGV4LklDb21taXRTZWFyY2hNb2RlbCB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPENvbW1pdFNlYXJjaE1vZGVsPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBDb21taXRTZWFyY2hNb2RlbChDb2RleC5JU2VhcmNoRW50aXR5IHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBDb2RleC5JQ29tbWl0IENvZGV4LklDb21taXRTZWFyY2hNb2RlbC5Db21taXQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuQ29tbWl0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIENvbW1pdCBDb21taXQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Db21taXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Db21taXQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklDb21taXRTZWFyY2hNb2RlbCB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IENvbW1pdFNlYXJjaE1vZGVsIHtcclxuICAgICAgICAgICAgdGhpcy5tX0NvbW1pdCA9IEVudGl0eVV0aWxpdGllcy5OdWxsT3JDb3B5PGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuQ29tbWl0LGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuQ29tbWl0PihDb21taXQsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuQ29tbWl0LCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkNvbW1pdD4pKHYgPT4gbmV3IENvbW1pdCgpLkNvcHlGcm9tPENvbW1pdD4odikpKTs7XHJcbiAgICAgICAgICAgIGJhc2UuQ29weUZyb208U2VhcmNoRW50aXR5PigoKENvZGV4LklTZWFyY2hFbnRpdHkpKHZhbHVlKSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8gVGhlIHNldCBvZiBmaWxlcyBwcmVzZW50IGluIHRoZSByZXBvc2l0b3J5IGF0IGEgZ2l2ZW4gY29tbWl0LlxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JQ29tbWl0RmlsZXNTZWFyY2hNb2RlbCkpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgQ29tbWl0RmlsZXNTZWFyY2hNb2RlbCA6IFNlYXJjaEVudGl0eSwgQ29kZXguSUNvbW1pdEZpbGVzU2VhcmNoTW9kZWwge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxDb21taXRGaWxlTGluaz4gbV9Db21taXRGaWxlcyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PENvbW1pdEZpbGVMaW5rPigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fQ29tbWl0SWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9SZXBvc2l0b3J5TmFtZTtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQ29tbWl0RmlsZXNTZWFyY2hNb2RlbCgpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIENvbW1pdEZpbGVzU2VhcmNoTW9kZWwoQ29kZXguSUNvbW1pdEZpbGVzU2VhcmNoTW9kZWwgdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxDb21taXRGaWxlc1NlYXJjaE1vZGVsPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBDb21taXRGaWxlc1NlYXJjaE1vZGVsKENvZGV4LklTZWFyY2hFbnRpdHkgdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBDb21taXRGaWxlc1NlYXJjaE1vZGVsKENvZGV4LklDb21taXRTY29wZUVudGl0eSB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPENvbW1pdEZpbGVzU2VhcmNoTW9kZWw+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIENvbW1pdEZpbGVzU2VhcmNoTW9kZWwoQ29kZXguSVJlcG9TY29wZUVudGl0eSB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPENvbW1pdEZpbGVzU2VhcmNoTW9kZWw+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSVJlYWRPbmx5TGlzdDxDb2RleC5JQ29tbWl0RmlsZUxpbms+IENvZGV4LklDb21taXRGaWxlc1NlYXJjaE1vZGVsLkNvbW1pdEZpbGVzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkNvbW1pdEZpbGVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8Q29tbWl0RmlsZUxpbms+IENvbW1pdEZpbGVzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fQ29tbWl0RmlsZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Db21taXRGaWxlcyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHVuaXF1ZSBpZGVudGlmaWVyIGZvciB0aGlzIGNvbW1pdC9jaGFuZ2VzZXQgaW4gdmVyc2lvbiBjb250cm9sXHJcbiAgICAgICAgLy8vIChpLmUuIGdpdCBjb21taXQgaGFzaCBvciBURlMgY2hhbmdlc2V0IG51bWJlcilcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBDb21taXRJZCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0NvbW1pdElkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fQ29tbWl0SWQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBuYW1lIG9mIHRoZSByZXBvc2l0b3J5IGNvbnRhaW5pbmcgdGhlIGVudGl0eVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIFJlcG9zaXRvcnlOYW1lIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUmVwb3NpdG9yeU5hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9SZXBvc2l0b3J5TmFtZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVJlcG9TY29wZUVudGl0eSB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IENvbW1pdEZpbGVzU2VhcmNoTW9kZWwge1xyXG4gICAgICAgICAgICB0aGlzLm1fUmVwb3NpdG9yeU5hbWUgPSAoKENvZGV4LklSZXBvU2NvcGVFbnRpdHkpKHZhbHVlKSkuUmVwb3NpdG9yeU5hbWU7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JQ29tbWl0U2NvcGVFbnRpdHkgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBDb21taXRGaWxlc1NlYXJjaE1vZGVsIHtcclxuICAgICAgICAgICAgdGhpcy5tX0NvbW1pdElkID0gKChDb2RleC5JQ29tbWl0U2NvcGVFbnRpdHkpKHZhbHVlKSkuQ29tbWl0SWQ7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JQ29tbWl0RmlsZXNTZWFyY2hNb2RlbCB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IENvbW1pdEZpbGVzU2VhcmNoTW9kZWwge1xyXG4gICAgICAgICAgICB0aGlzLm1fQ29tbWl0RmlsZXMgPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxDb21taXRGaWxlTGluaz4oU3lzdGVtLkxpbnEuRW51bWVyYWJsZS5TZWxlY3Q8Z2xvYmFsOjpDb2RleC5JQ29tbWl0RmlsZUxpbmssZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Db21taXRGaWxlTGluaz4oKChDb2RleC5JQ29tbWl0RmlsZXNTZWFyY2hNb2RlbCkodmFsdWUpKS5Db21taXRGaWxlcywgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5JQ29tbWl0RmlsZUxpbmssIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuQ29tbWl0RmlsZUxpbms+KSh2ID0+IEVudGl0eVV0aWxpdGllcy5OdWxsT3JDb3B5PGdsb2JhbDo6Q29kZXguSUNvbW1pdEZpbGVMaW5rLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuQ29tbWl0RmlsZUxpbms+KHYsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguSUNvbW1pdEZpbGVMaW5rLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkNvbW1pdEZpbGVMaW5rPikoX3YgPT4gbmV3IENvbW1pdEZpbGVMaW5rKCkuQ29weUZyb208Q29tbWl0RmlsZUxpbms+KF92KSkpKSkpO1xyXG4gICAgICAgICAgICBiYXNlLkNvcHlGcm9tPFNlYXJjaEVudGl0eT4oKChDb2RleC5JU2VhcmNoRW50aXR5KSh2YWx1ZSkpKTtcclxuICAgICAgICAgICAgdGhpcy5tX0NvbW1pdElkID0gKChDb2RleC5JQ29tbWl0U2NvcGVFbnRpdHkpKHZhbHVlKSkuQ29tbWl0SWQ7XHJcbiAgICAgICAgICAgIHRoaXMubV9SZXBvc2l0b3J5TmFtZSA9ICgoQ29kZXguSVJlcG9TY29wZUVudGl0eSkodmFsdWUpKS5SZXBvc2l0b3J5TmFtZTtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklGaWxlU3RhdGlzdGljcykpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgRmlsZVN0YXRpc3RpY3MgOiBDb2RleC5FbnRpdHlCYXNlLCBDb2RleC5JRmlsZVN0YXRpc3RpY3Mge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBGaWxlU3RhdGlzdGljcygpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgRmlsZVN0YXRpc3RpY3MoQ29kZXguSUZpbGVTdGF0aXN0aWNzIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxGaWxlU3RhdGlzdGljcz4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklGaWxlU3RhdGlzdGljcyB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IEZpbGVTdGF0aXN0aWNzIHtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIEluZm9ybWF0aW9uIGZvciBjcmVhdGluZyBhbiBJQ29kZXhSZXBvc2l0b3J5U3RvcmVcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSVJlcG9zaXRvcnlTdG9yZUluZm8pKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIFJlcG9zaXRvcnlTdG9yZUluZm8gOiBDb2RleC5FbnRpdHlCYXNlLCBDb2RleC5JUmVwb3NpdG9yeVN0b3JlSW5mbyB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBSZXBvc2l0b3J5IG1fUmVwb3NpdG9yeTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIEJyYW5jaCBtX0JyYW5jaDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIENvbW1pdCBtX0NvbW1pdDtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUmVwb3NpdG9yeVN0b3JlSW5mbygpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUmVwb3NpdG9yeVN0b3JlSW5mbyhDb2RleC5JUmVwb3NpdG9yeVN0b3JlSW5mbyB2YWx1ZSkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208UmVwb3NpdG9yeVN0b3JlSW5mbz4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSByZXBvc2l0b3J5IGJlaW5nIHN0b3JlZFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgQ29kZXguSVJlcG9zaXRvcnkgQ29kZXguSVJlcG9zaXRvcnlTdG9yZUluZm8uUmVwb3NpdG9yeSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5SZXBvc2l0b3J5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHJlcG9zaXRvcnkgYmVpbmcgc3RvcmVkXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBSZXBvc2l0b3J5IFJlcG9zaXRvcnkge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9SZXBvc2l0b3J5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUmVwb3NpdG9yeSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGJyYW5jaCBiZWluZyBzdG9yZWRcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIENvZGV4LklCcmFuY2ggQ29kZXguSVJlcG9zaXRvcnlTdG9yZUluZm8uQnJhbmNoIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkJyYW5jaDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBicmFuY2ggYmVpbmcgc3RvcmVkXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBCcmFuY2ggQnJhbmNoIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fQnJhbmNoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fQnJhbmNoID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgY29tbWl0IGJlaW5nIHN0b3JlZFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgQ29kZXguSUNvbW1pdCBDb2RleC5JUmVwb3NpdG9yeVN0b3JlSW5mby5Db21taXQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuQ29tbWl0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGNvbW1pdCBiZWluZyBzdG9yZWRcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIENvbW1pdCBDb21taXQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Db21taXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Db21taXQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklSZXBvc2l0b3J5U3RvcmVJbmZvIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogUmVwb3NpdG9yeVN0b3JlSW5mbyB7XHJcbiAgICAgICAgICAgIHRoaXMubV9SZXBvc2l0b3J5ID0gRW50aXR5VXRpbGl0aWVzLk51bGxPckNvcHk8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5SZXBvc2l0b3J5LGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuUmVwb3NpdG9yeT4oUmVwb3NpdG9yeSwgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5SZXBvc2l0b3J5LCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlJlcG9zaXRvcnk+KSh2ID0+IG5ldyBSZXBvc2l0b3J5KCkuQ29weUZyb208UmVwb3NpdG9yeT4odikpKTs7XHJcbiAgICAgICAgICAgIHRoaXMubV9CcmFuY2ggPSBFbnRpdHlVdGlsaXRpZXMuTnVsbE9yQ29weTxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkJyYW5jaCxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkJyYW5jaD4oQnJhbmNoLCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkJyYW5jaCwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5CcmFuY2g+KSh2ID0+IG5ldyBCcmFuY2goKS5Db3B5RnJvbTxCcmFuY2g+KHYpKSk7O1xyXG4gICAgICAgICAgICB0aGlzLm1fQ29tbWl0ID0gRW50aXR5VXRpbGl0aWVzLk51bGxPckNvcHk8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Db21taXQsZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Db21taXQ+KENvbW1pdCwgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Db21taXQsIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuQ29tbWl0PikodiA9PiBuZXcgQ29tbWl0KCkuQ29weUZyb208Q29tbWl0Pih2KSkpOztcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIFJlcHJlc2VudHMgYSBkaXJlY3RvcnkgaW4gc291cmNlIGNvbnRyb2xcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSUNvbW1pdEZpbGVzRGlyZWN0b3J5KSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBDb21taXRGaWxlc0RpcmVjdG9yeSA6IFJlcG9GaWxlU2NvcGVFbnRpdHksIENvZGV4LklDb21taXRGaWxlc0RpcmVjdG9yeSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PENvbW1pdEZpbGVMaW5rPiBtX0ZpbGVzID0gbmV3IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8Q29tbWl0RmlsZUxpbms+KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIENvbW1pdEZpbGVzRGlyZWN0b3J5KCkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQ29tbWl0RmlsZXNEaXJlY3RvcnkoQ29kZXguSUNvbW1pdEZpbGVzRGlyZWN0b3J5IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208Q29tbWl0RmlsZXNEaXJlY3Rvcnk+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIENvbW1pdEZpbGVzRGlyZWN0b3J5KENvZGV4LklSZXBvRmlsZVNjb3BlRW50aXR5IHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQ29tbWl0RmlsZXNEaXJlY3RvcnkoQ29kZXguSVJlcG9TY29wZUVudGl0eSB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgZmlsZXMgaW4gdGhlIGRpcmVjdG9yeVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSVJlYWRPbmx5TGlzdDxDb2RleC5JQ29tbWl0RmlsZUxpbms+IENvZGV4LklDb21taXRGaWxlc0RpcmVjdG9yeS5GaWxlcyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5GaWxlcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBmaWxlcyBpbiB0aGUgZGlyZWN0b3J5XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PENvbW1pdEZpbGVMaW5rPiBGaWxlcyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0ZpbGVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fRmlsZXMgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklDb21taXRGaWxlc0RpcmVjdG9yeSB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IENvbW1pdEZpbGVzRGlyZWN0b3J5IHtcclxuICAgICAgICAgICAgdGhpcy5tX0ZpbGVzID0gbmV3IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8Q29tbWl0RmlsZUxpbms+KFN5c3RlbS5MaW5xLkVudW1lcmFibGUuU2VsZWN0PGdsb2JhbDo6Q29kZXguSUNvbW1pdEZpbGVMaW5rLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuQ29tbWl0RmlsZUxpbms+KCgoQ29kZXguSUNvbW1pdEZpbGVzRGlyZWN0b3J5KSh2YWx1ZSkpLkZpbGVzLCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4LklDb21taXRGaWxlTGluaywgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Db21taXRGaWxlTGluaz4pKHYgPT4gRW50aXR5VXRpbGl0aWVzLk51bGxPckNvcHk8Z2xvYmFsOjpDb2RleC5JQ29tbWl0RmlsZUxpbmssZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Db21taXRGaWxlTGluaz4odiwgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5JQ29tbWl0RmlsZUxpbmssIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuQ29tbWl0RmlsZUxpbms+KShfdiA9PiBuZXcgQ29tbWl0RmlsZUxpbmsoKS5Db3B5RnJvbTxDb21taXRGaWxlTGluaz4oX3YpKSkpKSk7XHJcbiAgICAgICAgICAgIGJhc2UuQ29weUZyb208UmVwb0ZpbGVTY29wZUVudGl0eT4oKChDb2RleC5JUmVwb0ZpbGVTY29wZUVudGl0eSkodmFsdWUpKSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JU3RvcmVkQm91bmRTb3VyY2VGaWxlKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBTdG9yZWRCb3VuZFNvdXJjZUZpbGUgOiBDb2RleC5FbnRpdHlCYXNlLCBDb2RleC5JU3RvcmVkQm91bmRTb3VyY2VGaWxlIHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIEJvdW5kU291cmNlRmlsZSBtX0JvdW5kU291cmNlRmlsZTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIENvZGV4LklDbGFzc2lmaWNhdGlvbkxpc3QgbV9Db21wcmVzc2VkQ2xhc3NpZmljYXRpb25zO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgQ29kZXguSVJlZmVyZW5jZUxpc3QgbV9Db21wcmVzc2VkUmVmZXJlbmNlcztcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgU3RvcmVkQm91bmRTb3VyY2VGaWxlKCkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBTdG9yZWRCb3VuZFNvdXJjZUZpbGUoQ29kZXguSVN0b3JlZEJvdW5kU291cmNlRmlsZSB2YWx1ZSkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208U3RvcmVkQm91bmRTb3VyY2VGaWxlPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIENvZGV4LklCb3VuZFNvdXJjZUZpbGUgQ29kZXguSVN0b3JlZEJvdW5kU291cmNlRmlsZS5Cb3VuZFNvdXJjZUZpbGUge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuQm91bmRTb3VyY2VGaWxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIEJvdW5kU291cmNlRmlsZSBCb3VuZFNvdXJjZUZpbGUge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Cb3VuZFNvdXJjZUZpbGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Cb3VuZFNvdXJjZUZpbGUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIENvbXByZXNzZWQgbGlzdCBvZiBjbGFzc2lmaWNhdGlvbiBzcGFuc1xyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgQ29kZXguSUNsYXNzaWZpY2F0aW9uTGlzdCBDb21wcmVzc2VkQ2xhc3NpZmljYXRpb25zIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fQ29tcHJlc3NlZENsYXNzaWZpY2F0aW9ucztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0NvbXByZXNzZWRDbGFzc2lmaWNhdGlvbnMgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIENvbXByZXNzZWQgbGlzdCBvZiByZWZlcmVuY2Ugc3BhbnNcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIENvZGV4LklSZWZlcmVuY2VMaXN0IENvbXByZXNzZWRSZWZlcmVuY2VzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fQ29tcHJlc3NlZFJlZmVyZW5jZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Db21wcmVzc2VkUmVmZXJlbmNlcyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVN0b3JlZEJvdW5kU291cmNlRmlsZSB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IFN0b3JlZEJvdW5kU291cmNlRmlsZSB7XHJcbiAgICAgICAgICAgIHRoaXMubV9Cb3VuZFNvdXJjZUZpbGUgPSBFbnRpdHlVdGlsaXRpZXMuTnVsbE9yQ29weTxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkJvdW5kU291cmNlRmlsZSxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkJvdW5kU291cmNlRmlsZT4oQm91bmRTb3VyY2VGaWxlLCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkJvdW5kU291cmNlRmlsZSwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Cb3VuZFNvdXJjZUZpbGU+KSh2ID0+IG5ldyBCb3VuZFNvdXJjZUZpbGUoKS5Db3B5RnJvbTxCb3VuZFNvdXJjZUZpbGU+KHYpKSk7O1xyXG4gICAgICAgICAgICB0aGlzLm1fQ29tcHJlc3NlZENsYXNzaWZpY2F0aW9ucyA9ICgoQ29kZXguSVN0b3JlZEJvdW5kU291cmNlRmlsZSkodmFsdWUpKS5Db21wcmVzc2VkQ2xhc3NpZmljYXRpb25zO1xyXG4gICAgICAgICAgICB0aGlzLm1fQ29tcHJlc3NlZFJlZmVyZW5jZXMgPSAoKENvZGV4LklTdG9yZWRCb3VuZFNvdXJjZUZpbGUpKHZhbHVlKSkuQ29tcHJlc3NlZFJlZmVyZW5jZXM7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JRGVmaW5pdGlvblN5bWJvbCkpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgRGVmaW5pdGlvblN5bWJvbCA6IFJlZmVyZW5jZVN5bWJvbCwgQ29kZXguSURlZmluaXRpb25TeW1ib2wge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fVWlkO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fRGlzcGxheU5hbWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9TaG9ydE5hbWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9Db250YWluZXJRdWFsaWZpZWROYW1lO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nW10gbV9Nb2RpZmllcnM7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBDb2RleC5PYmplY3RNb2RlbC5HbHlwaCBtX0dseXBoO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgaW50IG1fU3ltYm9sRGVwdGg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBEb2N1bWVudGF0aW9uSW5mbyBtX0RvY3VtZW50YXRpb25JbmZvO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fVHlwZU5hbWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9EZWNsYXJhdGlvbk5hbWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9Db21tZW50O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBEZWZpbml0aW9uU3ltYm9sKCkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgRGVmaW5pdGlvblN5bWJvbChDb2RleC5JRGVmaW5pdGlvblN5bWJvbCB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPERlZmluaXRpb25TeW1ib2w+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIERlZmluaXRpb25TeW1ib2woQ29kZXguSVJlZmVyZW5jZVN5bWJvbCB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIERlZmluaXRpb25TeW1ib2woQ29kZXguSUNvZGVTeW1ib2wgdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHVuaXF1ZSBpZGVudGlmaWVyIGZvciB0aGUgc3ltYm9sXHJcbiAgICAgICAgLy8vIE5PVEU6IFRoaXMgaXMgbm90IGFwcGxpY2FibGUgdG8gbW9zdCBzeW1ib2xzLiBPbmx5IHNldCBmb3Igc3ltYm9sc1xyXG4gICAgICAgIC8vLyB3aGljaCBhcmUgYWRkZWQgaW4gYSBzaGFyZWQgY29udGV4dCBhbmQgbmVlZCB0aGlzIGZvciBkZWR1cGxpY2F0aW9uKVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIFVpZCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1VpZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1VpZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGRpc3BsYXkgbmFtZSBvZiB0aGUgc3ltYm9sXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgRGlzcGxheU5hbWUge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9EaXNwbGF5TmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0Rpc3BsYXlOYW1lID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgc2hvcnQgbmFtZSBvZiB0aGUgc3ltYm9sIChpLmUuIFRhc2spLlxyXG4gICAgICAgIC8vLyBUaGlzIGlzIHVzZWQgdG8gZmluZCB0aGUgc3ltYm9sIHdoZW4gc2VhcmNoIHRlcm0gZG9lcyBub3QgY29udGFpbiAnLidcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBTaG9ydE5hbWUge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuQ29lcmNlU2hvcnROYW1lKHRoaXMubV9TaG9ydE5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fU2hvcnROYW1lID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgcXVhbGlmaWVkIG5hbWUgb2YgdGhlIHN5bWJvbCAoaS5lLiBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzLlRhc2spLlxyXG4gICAgICAgIC8vLyBUaGlzIGlzIHVzZWQgdG8gZmluZCB0aGUgc3ltYm9sIHdoZW4gdGhlIHNlYXJjaCB0ZXJtIGNvbnRhaW5zICcuJ1xyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIENvbnRhaW5lclF1YWxpZmllZE5hbWUge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Db250YWluZXJRdWFsaWZpZWROYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fQ29udGFpbmVyUXVhbGlmaWVkTmFtZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gTW9kaWZpZXJzIGZvciB0aGUgc3ltYm9sIHN1Y2ggYXMgcHVibGljXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmdbXSBNb2RpZmllcnMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Nb2RpZmllcnM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Nb2RpZmllcnMgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBnbHlwaFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgQ29kZXguT2JqZWN0TW9kZWwuR2x5cGggR2x5cGgge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9HbHlwaDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0dseXBoID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgZGVwdGggb2YgdGhlIHN5bWJvbCBpbiBpdHMgc3ltYm9saWMgdHJlZVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgaW50IFN5bWJvbERlcHRoIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fU3ltYm9sRGVwdGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9TeW1ib2xEZXB0aCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gRG9jdW1lbnRhdGlvbiBmb3IgdGhlIHN5bWJvbCAoaWYgYW55KVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgQ29kZXguSURvY3VtZW50YXRpb25JbmZvIENvZGV4LklEZWZpbml0aW9uU3ltYm9sLkRvY3VtZW50YXRpb25JbmZvIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkRvY3VtZW50YXRpb25JbmZvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gRG9jdW1lbnRhdGlvbiBmb3IgdGhlIHN5bWJvbCAoaWYgYW55KVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgRG9jdW1lbnRhdGlvbkluZm8gRG9jdW1lbnRhdGlvbkluZm8ge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Eb2N1bWVudGF0aW9uSW5mbztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0RvY3VtZW50YXRpb25JbmZvID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgbmFtZSBvZiB0aGUgdHlwZSBmb3IgdGhlIHN5bWJvbFxyXG4gICAgICAgIC8vLyAoaS5lLiByZXR1cm4gdHlwZSBvZiBtZXRob2QpXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgVHlwZU5hbWUge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9UeXBlTmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1R5cGVOYW1lID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgZGVjbGFyYXRpb24gbmFtZSBmb3IgdGhlIHN5bWJvbFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIERlY2xhcmF0aW9uTmFtZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0RlY2xhcmF0aW9uTmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0RlY2xhcmF0aW9uTmFtZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGNvbW1lbnQgYXBwbGllZCB0byB0aGUgZGVmaW5pdGlvblxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIENvbW1lbnQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Db21tZW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fQ29tbWVudCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSURlZmluaXRpb25TeW1ib2wgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBEZWZpbml0aW9uU3ltYm9sIHtcclxuICAgICAgICAgICAgdGhpcy5tX1VpZCA9ICgoQ29kZXguSURlZmluaXRpb25TeW1ib2wpKHZhbHVlKSkuVWlkO1xyXG4gICAgICAgICAgICB0aGlzLm1fRGlzcGxheU5hbWUgPSAoKENvZGV4LklEZWZpbml0aW9uU3ltYm9sKSh2YWx1ZSkpLkRpc3BsYXlOYW1lO1xyXG4gICAgICAgICAgICB0aGlzLm1fU2hvcnROYW1lID0gKChDb2RleC5JRGVmaW5pdGlvblN5bWJvbCkodmFsdWUpKS5TaG9ydE5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMubV9Db250YWluZXJRdWFsaWZpZWROYW1lID0gKChDb2RleC5JRGVmaW5pdGlvblN5bWJvbCkodmFsdWUpKS5Db250YWluZXJRdWFsaWZpZWROYW1lO1xyXG4gICAgICAgICAgICB0aGlzLm1fTW9kaWZpZXJzID0gKChDb2RleC5JRGVmaW5pdGlvblN5bWJvbCkodmFsdWUpKS5Nb2RpZmllcnM7XHJcbiAgICAgICAgICAgIHRoaXMubV9HbHlwaCA9ICgoQ29kZXguSURlZmluaXRpb25TeW1ib2wpKHZhbHVlKSkuR2x5cGg7XHJcbiAgICAgICAgICAgIHRoaXMubV9TeW1ib2xEZXB0aCA9ICgoQ29kZXguSURlZmluaXRpb25TeW1ib2wpKHZhbHVlKSkuU3ltYm9sRGVwdGg7XHJcbiAgICAgICAgICAgIHRoaXMubV9Eb2N1bWVudGF0aW9uSW5mbyA9IEVudGl0eVV0aWxpdGllcy5OdWxsT3JDb3B5PGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuRG9jdW1lbnRhdGlvbkluZm8sZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Eb2N1bWVudGF0aW9uSW5mbz4oRG9jdW1lbnRhdGlvbkluZm8sIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuRG9jdW1lbnRhdGlvbkluZm8sIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuRG9jdW1lbnRhdGlvbkluZm8+KSh2ID0+IG5ldyBEb2N1bWVudGF0aW9uSW5mbygpLkNvcHlGcm9tPERvY3VtZW50YXRpb25JbmZvPih2KSkpOztcclxuICAgICAgICAgICAgdGhpcy5tX1R5cGVOYW1lID0gKChDb2RleC5JRGVmaW5pdGlvblN5bWJvbCkodmFsdWUpKS5UeXBlTmFtZTtcclxuICAgICAgICAgICAgdGhpcy5tX0RlY2xhcmF0aW9uTmFtZSA9ICgoQ29kZXguSURlZmluaXRpb25TeW1ib2wpKHZhbHVlKSkuRGVjbGFyYXRpb25OYW1lO1xyXG4gICAgICAgICAgICB0aGlzLm1fQ29tbWVudCA9ICgoQ29kZXguSURlZmluaXRpb25TeW1ib2wpKHZhbHVlKSkuQ29tbWVudDtcclxuICAgICAgICAgICAgYmFzZS5Db3B5RnJvbTxSZWZlcmVuY2VTeW1ib2w+KCgoQ29kZXguSVJlZmVyZW5jZVN5bWJvbCkodmFsdWUpKSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JUmVmZXJlbmNlU3ltYm9sKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBSZWZlcmVuY2VTeW1ib2wgOiBTeW1ib2wsIENvZGV4LklSZWZlcmVuY2VTeW1ib2wge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fUmVmZXJlbmNlS2luZDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIGJvb2wgbV9Jc0ltcGxpY2l0bHlEZWNsYXJlZDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIGJvb2wgbV9FeGNsdWRlRnJvbURlZmF1bHRTZWFyY2g7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBib29sIG1fRXhjbHVkZUZyb21TZWFyY2g7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFJlZmVyZW5jZVN5bWJvbCgpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFJlZmVyZW5jZVN5bWJvbChDb2RleC5JUmVmZXJlbmNlU3ltYm9sIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208UmVmZXJlbmNlU3ltYm9sPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBSZWZlcmVuY2VTeW1ib2woQ29kZXguSUNvZGVTeW1ib2wgdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGtpbmQgb2YgcmVmZXJlbmNlLiBUaGlzIGlzIHVzZWQgdG8gZ3JvdXAgcmVmZXJlbmNlcy5cclxuICAgICAgICAvLy8gKGkuZS4gZm9yIEMjKGFrYSAuTkVUKSBNZXRob2RPdmVycmlkZSwgSW50ZXJmYWNlTWVtYmVySW1wbGVtZW50YXRpb24sIEludGVyZmFjZUltcGxlbWVudGF0aW9uLCBldGMuKVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIFJlZmVyZW5jZUtpbmQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9SZWZlcmVuY2VLaW5kO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUmVmZXJlbmNlS2luZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gSW5kaWNhdGVzIHRoZSBjb3JyZXNwb25kaW5nIGRlZmluaXRpb24gaXMgaW1wbGljaXRseSBkZWNsYXJlZCBhbmQgdGhlcmVmb3JlIHRoaXMgc2hvdWxkIG5vdCBiZVxyXG4gICAgICAgIC8vLyB1c2VkIGZvciBmaW5kIGFsbCByZWZlcmVuY2VzIHNlYXJjaFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgYm9vbCBJc0ltcGxpY2l0bHlEZWNsYXJlZCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0lzSW1wbGljaXRseURlY2xhcmVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fSXNJbXBsaWNpdGx5RGVjbGFyZWQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIEluZGljYXRlcyBpZiB0aGUgc3ltYm9sIHNob3VsZCBiZSBleGNsdWRlZCBmcm9tIHRoZSBkZWZpbml0aW9uL2ZpbmQgYWxsIHJlZmVyZW5jZXMgc2VhcmNoIChieSBkZWZhdWx0KS5cclxuICAgICAgICAvLy8gU3ltYm9sIHdpbGwgb25seSBiZSBpbmNsdWRlZCBpZiBraW5kIGlzIGV4cGxpY2l0bHkgc3BlY2lmaWVkXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBib29sIEV4Y2x1ZGVGcm9tRGVmYXVsdFNlYXJjaCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0V4Y2x1ZGVGcm9tRGVmYXVsdFNlYXJjaDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0V4Y2x1ZGVGcm9tRGVmYXVsdFNlYXJjaCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gSW5kaWNhdGVzIGlmIHRoZSBzeW1ib2wgc2hvdWxkIE5FVkVSIGJlIGluY2x1ZGVkIGluIHRoZSBkZWZpbml0aW9uL2ZpbmQgYWxsIHJlZmVyZW5jZXMgc2VhcmNoLlxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgYm9vbCBFeGNsdWRlRnJvbVNlYXJjaCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0V4Y2x1ZGVGcm9tU2VhcmNoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fRXhjbHVkZUZyb21TZWFyY2ggPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklSZWZlcmVuY2VTeW1ib2wgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBSZWZlcmVuY2VTeW1ib2wge1xyXG4gICAgICAgICAgICB0aGlzLm1fUmVmZXJlbmNlS2luZCA9ICgoQ29kZXguSVJlZmVyZW5jZVN5bWJvbCkodmFsdWUpKS5SZWZlcmVuY2VLaW5kO1xyXG4gICAgICAgICAgICB0aGlzLm1fSXNJbXBsaWNpdGx5RGVjbGFyZWQgPSAoKENvZGV4LklSZWZlcmVuY2VTeW1ib2wpKHZhbHVlKSkuSXNJbXBsaWNpdGx5RGVjbGFyZWQ7XHJcbiAgICAgICAgICAgIHRoaXMubV9FeGNsdWRlRnJvbURlZmF1bHRTZWFyY2ggPSAoKENvZGV4LklSZWZlcmVuY2VTeW1ib2wpKHZhbHVlKSkuRXhjbHVkZUZyb21EZWZhdWx0U2VhcmNoO1xyXG4gICAgICAgICAgICB0aGlzLm1fRXhjbHVkZUZyb21TZWFyY2ggPSAoKENvZGV4LklSZWZlcmVuY2VTeW1ib2wpKHZhbHVlKSkuRXhjbHVkZUZyb21TZWFyY2g7XHJcbiAgICAgICAgICAgIGJhc2UuQ29weUZyb208U3ltYm9sPigoKENvZGV4LklDb2RlU3ltYm9sKSh2YWx1ZSkpKTtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklDb2RlU3ltYm9sKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBTeW1ib2wgOiBDb2RleC5FbnRpdHlCYXNlLCBDb2RleC5JQ29kZVN5bWJvbCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9Qcm9qZWN0SWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBDb2RleC5PYmplY3RNb2RlbC5TeW1ib2xJZCBtX0lkO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fS2luZDtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgU3ltYm9sKCkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBTeW1ib2woQ29kZXguSUNvZGVTeW1ib2wgdmFsdWUpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFN5bWJvbD4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBpZGVudGlmaWVyIG9mIHRoZSBwcm9qZWN0IGluIHdoaWNoIHRoZSBzeW1ib2wgYXBwZWFyc1xyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIFByb2plY3RJZCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1Byb2plY3RJZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1Byb2plY3RJZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGlkZW50aWZpZXIgZm9yIHRoZSBzeW1ib2xcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIENvZGV4Lk9iamVjdE1vZGVsLlN5bWJvbElkIElkIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fSWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9JZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHN5bWJvbCBraW5kLiAoaS5lLiBpbnRlcmZhY2UsIG1ldGhvZCwgZmllbGQpXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgS2luZCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0tpbmQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9LaW5kID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JQ29kZVN5bWJvbCB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IFN5bWJvbCB7XHJcbiAgICAgICAgICAgIHRoaXMubV9Qcm9qZWN0SWQgPSAoKENvZGV4LklDb2RlU3ltYm9sKSh2YWx1ZSkpLlByb2plY3RJZDtcclxuICAgICAgICAgICAgdGhpcy5tX0lkID0gKChDb2RleC5JQ29kZVN5bWJvbCkodmFsdWUpKS5JZDtcclxuICAgICAgICAgICAgdGhpcy5tX0tpbmQgPSAoKENvZGV4LklDb2RlU3ltYm9sKSh2YWx1ZSkpLktpbmQ7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5TZGsuU2VhcmNoLklUZXh0TGluZVNwYW5SZXN1bHQpKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIFRleHRMaW5lU3BhblJlc3VsdCA6IFByb2plY3RGaWxlU2NvcGVFbnRpdHksIENvZGV4LlNkay5TZWFyY2guSVRleHRMaW5lU3BhblJlc3VsdCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBUZXh0TGluZVNwYW4gbV9UZXh0U3BhbjtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgVGV4dExpbmVTcGFuUmVzdWx0KCkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgVGV4dExpbmVTcGFuUmVzdWx0KENvZGV4LlNkay5TZWFyY2guSVRleHRMaW5lU3BhblJlc3VsdCB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFRleHRMaW5lU3BhblJlc3VsdD4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgVGV4dExpbmVTcGFuUmVzdWx0KENvZGV4LklQcm9qZWN0RmlsZVNjb3BlRW50aXR5IHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBDb2RleC5JVGV4dExpbmVTcGFuIENvZGV4LlNkay5TZWFyY2guSVRleHRMaW5lU3BhblJlc3VsdC5UZXh0U3BhbiB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5UZXh0U3BhbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUZXh0TGluZVNwYW4gVGV4dFNwYW4ge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9UZXh0U3BhbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1RleHRTcGFuID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5TZGsuU2VhcmNoLklUZXh0TGluZVNwYW5SZXN1bHQgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBUZXh0TGluZVNwYW5SZXN1bHQge1xyXG4gICAgICAgICAgICB0aGlzLm1fVGV4dFNwYW4gPSBFbnRpdHlVdGlsaXRpZXMuTnVsbE9yQ29weTxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlRleHRMaW5lU3BhbixnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlRleHRMaW5lU3Bhbj4oVGV4dFNwYW4sIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuVGV4dExpbmVTcGFuLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlRleHRMaW5lU3Bhbj4pKHYgPT4gbmV3IFRleHRMaW5lU3BhbigpLkNvcHlGcm9tPFRleHRMaW5lU3Bhbj4odikpKTs7XHJcbiAgICAgICAgICAgIGJhc2UuQ29weUZyb208UHJvamVjdEZpbGVTY29wZUVudGl0eT4oKChDb2RleC5JUHJvamVjdEZpbGVTY29wZUVudGl0eSkodmFsdWUpKSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5TZGsuU2VhcmNoLklTZWFyY2hSZXN1bHQpKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIFNlYXJjaFJlc3VsdCA6IENvZGV4LkVudGl0eUJhc2UsIENvZGV4LlNkay5TZWFyY2guSVNlYXJjaFJlc3VsdCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBUZXh0TGluZVNwYW5SZXN1bHQgbV9UZXh0TGluZTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIERlZmluaXRpb25TeW1ib2wgbV9EZWZpbml0aW9uO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBTZWFyY2hSZXN1bHQoKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFNlYXJjaFJlc3VsdChDb2RleC5TZGsuU2VhcmNoLklTZWFyY2hSZXN1bHQgdmFsdWUpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFNlYXJjaFJlc3VsdD4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSB0ZXh0IHNwYW4gZm9yIGEgdGV4dCByZXN1bHRcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIENvZGV4LlNkay5TZWFyY2guSVRleHRMaW5lU3BhblJlc3VsdCBDb2RleC5TZGsuU2VhcmNoLklTZWFyY2hSZXN1bHQuVGV4dExpbmUge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuVGV4dExpbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgdGV4dCBzcGFuIGZvciBhIHRleHQgcmVzdWx0XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUZXh0TGluZVNwYW5SZXN1bHQgVGV4dExpbmUge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9UZXh0TGluZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1RleHRMaW5lID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgZGVmaW5pdGlvbiBvZiB0aGUgc2VhcmNoIHJlc3VsdFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgQ29kZXguSURlZmluaXRpb25TeW1ib2wgQ29kZXguU2RrLlNlYXJjaC5JU2VhcmNoUmVzdWx0LkRlZmluaXRpb24ge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuRGVmaW5pdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBkZWZpbml0aW9uIG9mIHRoZSBzZWFyY2ggcmVzdWx0XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBEZWZpbml0aW9uU3ltYm9sIERlZmluaXRpb24ge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9EZWZpbml0aW9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fRGVmaW5pdGlvbiA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguU2RrLlNlYXJjaC5JU2VhcmNoUmVzdWx0IHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogU2VhcmNoUmVzdWx0IHtcclxuICAgICAgICAgICAgdGhpcy5tX1RleHRMaW5lID0gRW50aXR5VXRpbGl0aWVzLk51bGxPckNvcHk8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5UZXh0TGluZVNwYW5SZXN1bHQsZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5UZXh0TGluZVNwYW5SZXN1bHQ+KFRleHRMaW5lLCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlRleHRMaW5lU3BhblJlc3VsdCwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5UZXh0TGluZVNwYW5SZXN1bHQ+KSh2ID0+IG5ldyBUZXh0TGluZVNwYW5SZXN1bHQoKS5Db3B5RnJvbTxUZXh0TGluZVNwYW5SZXN1bHQ+KHYpKSk7O1xyXG4gICAgICAgICAgICB0aGlzLm1fRGVmaW5pdGlvbiA9IEVudGl0eVV0aWxpdGllcy5OdWxsT3JDb3B5PGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuRGVmaW5pdGlvblN5bWJvbCxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkRlZmluaXRpb25TeW1ib2w+KERlZmluaXRpb24sIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuRGVmaW5pdGlvblN5bWJvbCwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5EZWZpbml0aW9uU3ltYm9sPikodiA9PiBuZXcgRGVmaW5pdGlvblN5bWJvbCgpLkNvcHlGcm9tPERlZmluaXRpb25TeW1ib2w+KHYpKSk7O1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguU2RrLlNlYXJjaC5JSW5kZXgpKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIEluZGV4IDogQ29kZXguRW50aXR5QmFzZSwgQ29kZXguU2RrLlNlYXJjaC5JSW5kZXgge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBJbmRleCgpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgSW5kZXgoQ29kZXguU2RrLlNlYXJjaC5JSW5kZXggdmFsdWUpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPEluZGV4Pih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguU2RrLlNlYXJjaC5JSW5kZXggdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBJbmRleCB7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxubmFtZXNwYWNlIENvZGV4LkZyYW1ld29yay5UeXBlcyB7XHJcbiAgICB1c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG4gICAgdXNpbmcgQ29tbWl0ID0gQ29kZXguT2JqZWN0TW9kZWwuQ29tbWl0O1xyXG4gICAgdXNpbmcgQ29tbWl0Q2hhbmdlZEZpbGUgPSBDb2RleC5PYmplY3RNb2RlbC5Db21taXRDaGFuZ2VkRmlsZTtcclxuICAgIHVzaW5nIENvbW1pdEZpbGVMaW5rID0gQ29kZXguT2JqZWN0TW9kZWwuQ29tbWl0RmlsZUxpbms7XHJcbiAgICB1c2luZyBCcmFuY2ggPSBDb2RleC5PYmplY3RNb2RlbC5CcmFuY2g7XHJcbiAgICB1c2luZyBCb3VuZFNvdXJjZUZpbGUgPSBDb2RleC5PYmplY3RNb2RlbC5Cb3VuZFNvdXJjZUZpbGU7XHJcbiAgICB1c2luZyBCb3VuZFNvdXJjZUluZm8gPSBDb2RleC5PYmplY3RNb2RlbC5Cb3VuZFNvdXJjZUluZm87XHJcbiAgICB1c2luZyBTb3VyY2VDb250cm9sRmlsZUluZm8gPSBDb2RleC5PYmplY3RNb2RlbC5Tb3VyY2VDb250cm9sRmlsZUluZm87XHJcbiAgICB1c2luZyBTb3VyY2VGaWxlSW5mbyA9IENvZGV4Lk9iamVjdE1vZGVsLlNvdXJjZUZpbGVJbmZvO1xyXG4gICAgdXNpbmcgRW5jb2RpbmdEZXNjcmlwdGlvbiA9IENvZGV4Lk9iamVjdE1vZGVsLkVuY29kaW5nRGVzY3JpcHRpb247XHJcbiAgICB1c2luZyBTb3VyY2VGaWxlID0gQ29kZXguT2JqZWN0TW9kZWwuU291cmNlRmlsZTtcclxuICAgIHVzaW5nIE91dGxpbmluZ1JlZ2lvbiA9IENvZGV4Lk9iamVjdE1vZGVsLk91dGxpbmluZ1JlZ2lvbjtcclxuICAgIHVzaW5nIERlZmluaXRpb25TcGFuID0gQ29kZXguT2JqZWN0TW9kZWwuRGVmaW5pdGlvblNwYW47XHJcbiAgICB1c2luZyBQYXJhbWV0ZXJEZWZpbml0aW9uU3BhbiA9IENvZGV4Lk9iamVjdE1vZGVsLlBhcmFtZXRlckRlZmluaXRpb25TcGFuO1xyXG4gICAgdXNpbmcgUmVmZXJlbmNlU3BhbiA9IENvZGV4Lk9iamVjdE1vZGVsLlJlZmVyZW5jZVNwYW47XHJcbiAgICB1c2luZyBQYXJhbWV0ZXJSZWZlcmVuY2VTcGFuID0gQ29kZXguT2JqZWN0TW9kZWwuUGFyYW1ldGVyUmVmZXJlbmNlU3BhbjtcclxuICAgIHVzaW5nIENsYXNzaWZpY2F0aW9uU3BhbiA9IENvZGV4Lk9iamVjdE1vZGVsLkNsYXNzaWZpY2F0aW9uU3BhbjtcclxuICAgIHVzaW5nIFN5bWJvbFNwYW4gPSBDb2RleC5PYmplY3RNb2RlbC5TeW1ib2xTcGFuO1xyXG4gICAgdXNpbmcgVGV4dExpbmVTcGFuID0gQ29kZXguT2JqZWN0TW9kZWwuVGV4dExpbmVTcGFuO1xyXG4gICAgdXNpbmcgTGluZVNwYW4gPSBDb2RleC5PYmplY3RNb2RlbC5MaW5lU3BhbjtcclxuICAgIHVzaW5nIFNwYW4gPSBDb2RleC5PYmplY3RNb2RlbC5TcGFuO1xyXG4gICAgdXNpbmcgQ29kZVJldmlldyA9IENvZGV4Lk9iamVjdE1vZGVsLkNvZGVSZXZpZXc7XHJcbiAgICB1c2luZyBDb2RlUmV2aWV3SXRlcmF0aW9uID0gQ29kZXguT2JqZWN0TW9kZWwuQ29kZVJldmlld0l0ZXJhdGlvbjtcclxuICAgIHVzaW5nIENvZGVSZXZpZXdlckluZm8gPSBDb2RleC5PYmplY3RNb2RlbC5Db2RlUmV2aWV3ZXJJbmZvO1xyXG4gICAgdXNpbmcgQ29kZVJldmlld0ZpbGUgPSBDb2RleC5PYmplY3RNb2RlbC5Db2RlUmV2aWV3RmlsZTtcclxuICAgIHVzaW5nIENvZGVSZXZpZXdDb21tZW50VGhyZWFkID0gQ29kZXguT2JqZWN0TW9kZWwuQ29kZVJldmlld0NvbW1lbnRUaHJlYWQ7XHJcbiAgICB1c2luZyBDb2RlUmV2aWV3Q29tbWVudCA9IENvZGV4Lk9iamVjdE1vZGVsLkNvZGVSZXZpZXdDb21tZW50O1xyXG4gICAgdXNpbmcgTGFuZ3VhZ2VJbmZvID0gQ29kZXguT2JqZWN0TW9kZWwuTGFuZ3VhZ2VJbmZvO1xyXG4gICAgdXNpbmcgQ2xhc3NpZmljYXRpb25TdHlsZSA9IENvZGV4Lk9iamVjdE1vZGVsLkNsYXNzaWZpY2F0aW9uU3R5bGU7XHJcbiAgICB1c2luZyBBbmFseXplZFByb2plY3QgPSBDb2RleC5PYmplY3RNb2RlbC5BbmFseXplZFByb2plY3Q7XHJcbiAgICB1c2luZyBSZWZlcmVuY2VkUHJvamVjdCA9IENvZGV4Lk9iamVjdE1vZGVsLlJlZmVyZW5jZWRQcm9qZWN0O1xyXG4gICAgdXNpbmcgUHJvamVjdEZpbGVMaW5rID0gQ29kZXguT2JqZWN0TW9kZWwuUHJvamVjdEZpbGVMaW5rO1xyXG4gICAgdXNpbmcgRG9jdW1lbnRhdGlvbkluZm8gPSBDb2RleC5PYmplY3RNb2RlbC5Eb2N1bWVudGF0aW9uSW5mbztcclxuICAgIHVzaW5nIFBhcmFtZXRlckRvY3VtZW50YXRpb24gPSBDb2RleC5PYmplY3RNb2RlbC5QYXJhbWV0ZXJEb2N1bWVudGF0aW9uO1xyXG4gICAgdXNpbmcgVHlwZWRQYXJhbWV0ZXJEb2N1bWVudGF0aW9uID0gQ29kZXguT2JqZWN0TW9kZWwuVHlwZWRQYXJhbWV0ZXJEb2N1bWVudGF0aW9uO1xyXG4gICAgdXNpbmcgRG9jdW1lbnRhdGlvblJlZmVyZW5jZVN5bWJvbCA9IENvZGV4Lk9iamVjdE1vZGVsLkRvY3VtZW50YXRpb25SZWZlcmVuY2VTeW1ib2w7XHJcbiAgICB1c2luZyBQcm9wZXJ0eVNlYXJjaE1vZGVsID0gQ29kZXguT2JqZWN0TW9kZWwuUHJvcGVydHlTZWFyY2hNb2RlbDtcclxuICAgIHVzaW5nIFByb3BlcnR5TWFwID0gQ29kZXguT2JqZWN0TW9kZWwuUHJvcGVydHlNYXA7XHJcbiAgICB1c2luZyBSZXBvc2l0b3J5ID0gQ29kZXguT2JqZWN0TW9kZWwuUmVwb3NpdG9yeTtcclxuICAgIHVzaW5nIFJlcG9zaXRvcnlSZWZlcmVuY2UgPSBDb2RleC5PYmplY3RNb2RlbC5SZXBvc2l0b3J5UmVmZXJlbmNlO1xyXG4gICAgdXNpbmcgU2VhcmNoRW50aXR5ID0gQ29kZXguT2JqZWN0TW9kZWwuU2VhcmNoRW50aXR5O1xyXG4gICAgdXNpbmcgUmVwb1Njb3BlRW50aXR5ID0gQ29kZXguT2JqZWN0TW9kZWwuUmVwb1Njb3BlRW50aXR5O1xyXG4gICAgdXNpbmcgQ29tbWl0U2NvcGVFbnRpdHkgPSBDb2RleC5PYmplY3RNb2RlbC5Db21taXRTY29wZUVudGl0eTtcclxuICAgIHVzaW5nIFByb2plY3RTY29wZUVudGl0eSA9IENvZGV4Lk9iamVjdE1vZGVsLlByb2plY3RTY29wZUVudGl0eTtcclxuICAgIHVzaW5nIFJlcG9GaWxlU2NvcGVFbnRpdHkgPSBDb2RleC5PYmplY3RNb2RlbC5SZXBvRmlsZVNjb3BlRW50aXR5O1xyXG4gICAgdXNpbmcgUHJvamVjdEZpbGVTY29wZUVudGl0eSA9IENvZGV4Lk9iamVjdE1vZGVsLlByb2plY3RGaWxlU2NvcGVFbnRpdHk7XHJcbiAgICB1c2luZyBSZWdpc3RlcmVkRW50aXR5ID0gQ29kZXguT2JqZWN0TW9kZWwuUmVnaXN0ZXJlZEVudGl0eTtcclxuICAgIHVzaW5nIFN0b3JlZEZpbHRlciA9IENvZGV4Lk9iamVjdE1vZGVsLlN0b3JlZEZpbHRlcjtcclxuICAgIHVzaW5nIERlZmluaXRpb25TZWFyY2hNb2RlbCA9IENvZGV4Lk9iamVjdE1vZGVsLkRlZmluaXRpb25TZWFyY2hNb2RlbDtcclxuICAgIHVzaW5nIExhbmd1YWdlU2VhcmNoTW9kZWwgPSBDb2RleC5PYmplY3RNb2RlbC5MYW5ndWFnZVNlYXJjaE1vZGVsO1xyXG4gICAgdXNpbmcgUmVmZXJlbmNlU2VhcmNoTW9kZWwgPSBDb2RleC5PYmplY3RNb2RlbC5SZWZlcmVuY2VTZWFyY2hNb2RlbDtcclxuICAgIHVzaW5nIFNvdXJjZVNlYXJjaE1vZGVsQmFzZSA9IENvZGV4Lk9iamVjdE1vZGVsLlNvdXJjZVNlYXJjaE1vZGVsQmFzZTtcclxuICAgIHVzaW5nIEJvdW5kU291cmNlU2VhcmNoTW9kZWwgPSBDb2RleC5PYmplY3RNb2RlbC5Cb3VuZFNvdXJjZVNlYXJjaE1vZGVsO1xyXG4gICAgdXNpbmcgVGV4dFNvdXJjZVNlYXJjaE1vZGVsID0gQ29kZXguT2JqZWN0TW9kZWwuVGV4dFNvdXJjZVNlYXJjaE1vZGVsO1xyXG4gICAgdXNpbmcgUmVwb3NpdG9yeVNlYXJjaE1vZGVsID0gQ29kZXguT2JqZWN0TW9kZWwuUmVwb3NpdG9yeVNlYXJjaE1vZGVsO1xyXG4gICAgdXNpbmcgUHJvamVjdFNlYXJjaE1vZGVsID0gQ29kZXguT2JqZWN0TW9kZWwuUHJvamVjdFNlYXJjaE1vZGVsO1xyXG4gICAgdXNpbmcgUHJvamVjdFJlZmVyZW5jZVNlYXJjaE1vZGVsID0gQ29kZXguT2JqZWN0TW9kZWwuUHJvamVjdFJlZmVyZW5jZVNlYXJjaE1vZGVsO1xyXG4gICAgdXNpbmcgQ29tbWl0U2VhcmNoTW9kZWwgPSBDb2RleC5PYmplY3RNb2RlbC5Db21taXRTZWFyY2hNb2RlbDtcclxuICAgIHVzaW5nIENvbW1pdEZpbGVzU2VhcmNoTW9kZWwgPSBDb2RleC5PYmplY3RNb2RlbC5Db21taXRGaWxlc1NlYXJjaE1vZGVsO1xyXG4gICAgdXNpbmcgRmlsZVN0YXRpc3RpY3MgPSBDb2RleC5PYmplY3RNb2RlbC5GaWxlU3RhdGlzdGljcztcclxuICAgIHVzaW5nIFJlcG9zaXRvcnlTdG9yZUluZm8gPSBDb2RleC5PYmplY3RNb2RlbC5SZXBvc2l0b3J5U3RvcmVJbmZvO1xyXG4gICAgdXNpbmcgQ29tbWl0RmlsZXNEaXJlY3RvcnkgPSBDb2RleC5PYmplY3RNb2RlbC5Db21taXRGaWxlc0RpcmVjdG9yeTtcclxuICAgIHVzaW5nIFN0b3JlZEJvdW5kU291cmNlRmlsZSA9IENvZGV4Lk9iamVjdE1vZGVsLlN0b3JlZEJvdW5kU291cmNlRmlsZTtcclxuICAgIHVzaW5nIERlZmluaXRpb25TeW1ib2wgPSBDb2RleC5PYmplY3RNb2RlbC5EZWZpbml0aW9uU3ltYm9sO1xyXG4gICAgdXNpbmcgUmVmZXJlbmNlU3ltYm9sID0gQ29kZXguT2JqZWN0TW9kZWwuUmVmZXJlbmNlU3ltYm9sO1xyXG4gICAgdXNpbmcgU3ltYm9sID0gQ29kZXguT2JqZWN0TW9kZWwuU3ltYm9sO1xyXG4gICAgdXNpbmcgVGV4dExpbmVTcGFuUmVzdWx0ID0gQ29kZXguT2JqZWN0TW9kZWwuVGV4dExpbmVTcGFuUmVzdWx0O1xyXG4gICAgdXNpbmcgU2VhcmNoUmVzdWx0ID0gQ29kZXguT2JqZWN0TW9kZWwuU2VhcmNoUmVzdWx0O1xyXG4gICAgdXNpbmcgSW5kZXggPSBDb2RleC5PYmplY3RNb2RlbC5JbmRleDtcclxuICAgIFxyXG4gICAgXHJcbiAgICBwdWJsaWMgcGFydGlhbCBpbnRlcmZhY2UgSVN0b3JlIHtcclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcblxyXG5uYW1lc3BhY2UgQ29kZXguT2JqZWN0TW9kZWxcclxue1xyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIERlZmluZXMgQ29kZXggZ2x5cGhzXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHVibGljIGVudW0gR2x5cGhcclxuICAgIHtcclxuICAgICAgICBVbmtub3duID0gLTEsXHJcbiAgICAgICAgQXNzZW1ibHksXHJcblxyXG4gICAgICAgIEJhc2ljRmlsZSxcclxuICAgICAgICBCYXNpY1Byb2plY3QsXHJcblxyXG4gICAgICAgIENsYXNzUHVibGljLFxyXG4gICAgICAgIENsYXNzUHJvdGVjdGVkLFxyXG4gICAgICAgIENsYXNzUHJpdmF0ZSxcclxuICAgICAgICBDbGFzc0ludGVybmFsLFxyXG5cclxuICAgICAgICBDU2hhcnBGaWxlLFxyXG4gICAgICAgIENTaGFycFByb2plY3QsXHJcblxyXG4gICAgICAgIENvbnN0YW50UHVibGljLFxyXG4gICAgICAgIENvbnN0YW50UHJvdGVjdGVkLFxyXG4gICAgICAgIENvbnN0YW50UHJpdmF0ZSxcclxuICAgICAgICBDb25zdGFudEludGVybmFsLFxyXG5cclxuICAgICAgICBEZWxlZ2F0ZVB1YmxpYyxcclxuICAgICAgICBEZWxlZ2F0ZVByb3RlY3RlZCxcclxuICAgICAgICBEZWxlZ2F0ZVByaXZhdGUsXHJcbiAgICAgICAgRGVsZWdhdGVJbnRlcm5hbCxcclxuXHJcbiAgICAgICAgRW51bVB1YmxpYyxcclxuICAgICAgICBFbnVtUHJvdGVjdGVkLFxyXG4gICAgICAgIEVudW1Qcml2YXRlLFxyXG4gICAgICAgIEVudW1JbnRlcm5hbCxcclxuXHJcbiAgICAgICAgRW51bU1lbWJlcixcclxuXHJcbiAgICAgICAgRXJyb3IsXHJcblxyXG4gICAgICAgIEV2ZW50UHVibGljLFxyXG4gICAgICAgIEV2ZW50UHJvdGVjdGVkLFxyXG4gICAgICAgIEV2ZW50UHJpdmF0ZSxcclxuICAgICAgICBFdmVudEludGVybmFsLFxyXG5cclxuICAgICAgICBFeHRlbnNpb25NZXRob2RQdWJsaWMsXHJcbiAgICAgICAgRXh0ZW5zaW9uTWV0aG9kUHJvdGVjdGVkLFxyXG4gICAgICAgIEV4dGVuc2lvbk1ldGhvZFByaXZhdGUsXHJcbiAgICAgICAgRXh0ZW5zaW9uTWV0aG9kSW50ZXJuYWwsXHJcblxyXG4gICAgICAgIEZpZWxkUHVibGljLFxyXG4gICAgICAgIEZpZWxkUHJvdGVjdGVkLFxyXG4gICAgICAgIEZpZWxkUHJpdmF0ZSxcclxuICAgICAgICBGaWVsZEludGVybmFsLFxyXG5cclxuICAgICAgICBJbnRlcmZhY2VQdWJsaWMsXHJcbiAgICAgICAgSW50ZXJmYWNlUHJvdGVjdGVkLFxyXG4gICAgICAgIEludGVyZmFjZVByaXZhdGUsXHJcbiAgICAgICAgSW50ZXJmYWNlSW50ZXJuYWwsXHJcblxyXG4gICAgICAgIEludHJpbnNpYyxcclxuXHJcbiAgICAgICAgS2V5d29yZCxcclxuXHJcbiAgICAgICAgTGFiZWwsXHJcblxyXG4gICAgICAgIExvY2FsLFxyXG5cclxuICAgICAgICBOYW1lc3BhY2UsXHJcblxyXG4gICAgICAgIE1ldGhvZFB1YmxpYyxcclxuICAgICAgICBNZXRob2RQcm90ZWN0ZWQsXHJcbiAgICAgICAgTWV0aG9kUHJpdmF0ZSxcclxuICAgICAgICBNZXRob2RJbnRlcm5hbCxcclxuXHJcbiAgICAgICAgTW9kdWxlUHVibGljLFxyXG4gICAgICAgIE1vZHVsZVByb3RlY3RlZCxcclxuICAgICAgICBNb2R1bGVQcml2YXRlLFxyXG4gICAgICAgIE1vZHVsZUludGVybmFsLFxyXG5cclxuICAgICAgICBPcGVuRm9sZGVyLFxyXG5cclxuICAgICAgICBPcGVyYXRvcixcclxuXHJcbiAgICAgICAgUGFyYW1ldGVyLFxyXG5cclxuICAgICAgICBQcm9wZXJ0eVB1YmxpYyxcclxuICAgICAgICBQcm9wZXJ0eVByb3RlY3RlZCxcclxuICAgICAgICBQcm9wZXJ0eVByaXZhdGUsXHJcbiAgICAgICAgUHJvcGVydHlJbnRlcm5hbCxcclxuXHJcbiAgICAgICAgUmFuZ2VWYXJpYWJsZSxcclxuXHJcbiAgICAgICAgUmVmZXJlbmNlLFxyXG5cclxuICAgICAgICBTdHJ1Y3R1cmVQdWJsaWMsXHJcbiAgICAgICAgU3RydWN0dXJlUHJvdGVjdGVkLFxyXG4gICAgICAgIFN0cnVjdHVyZVByaXZhdGUsXHJcbiAgICAgICAgU3RydWN0dXJlSW50ZXJuYWwsXHJcblxyXG4gICAgICAgIFR5cGVQYXJhbWV0ZXIsXHJcblxyXG4gICAgICAgIFVwLFxyXG4gICAgICAgIERvd24sXHJcbiAgICAgICAgTGVmdCxcclxuICAgICAgICBSaWdodCxcclxuICAgICAgICBEb3QsXHJcblxyXG4gICAgICAgIFNuaXBwZXRcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGNsYXNzIEdseXBoVXRpbGl0aWVzXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyB1c2hvcnQgR2V0R2x5cGhOdW1iZXIodGhpcyBHbHlwaCBnbHlwaClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHVzaG9ydCByZXN1bHQgPSAodXNob3J0KSgodXNob3J0KUdldFN0YW5kYXJkR2x5cGhHcm91cChnbHlwaCkgKyAodXNob3J0KUdldFN0YW5kYXJkR2x5cGhJdGVtKGdseXBoKSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBTdGFuZGFyZEdseXBoR3JvdXAgR2V0U3RhbmRhcmRHbHlwaEdyb3VwKEdseXBoIGdseXBoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3dpdGNoIChnbHlwaClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5Bc3NlbWJseTpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RhbmRhcmRHbHlwaEdyb3VwLkdseXBoQXNzZW1ibHk7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5DbGFzc1B1YmxpYzpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguQ2xhc3NQcm90ZWN0ZWQ6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkNsYXNzUHJpdmF0ZTpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguQ2xhc3NJbnRlcm5hbDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RhbmRhcmRHbHlwaEdyb3VwLkdseXBoR3JvdXBDbGFzcztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkNvbnN0YW50UHVibGljOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5Db25zdGFudFByb3RlY3RlZDpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguQ29uc3RhbnRQcml2YXRlOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5Db25zdGFudEludGVybmFsOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdGFuZGFyZEdseXBoR3JvdXAuR2x5cGhHcm91cENvbnN0YW50O1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguQ1NoYXJwRmlsZTpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RhbmRhcmRHbHlwaEdyb3VwLkdseXBoQ1NoYXJwRmlsZTtcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkRlbGVnYXRlUHVibGljOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5EZWxlZ2F0ZVByb3RlY3RlZDpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguRGVsZWdhdGVQcml2YXRlOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5EZWxlZ2F0ZUludGVybmFsOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdGFuZGFyZEdseXBoR3JvdXAuR2x5cGhHcm91cERlbGVnYXRlO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguRW51bVB1YmxpYzpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguRW51bVByb3RlY3RlZDpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguRW51bVByaXZhdGU6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkVudW1JbnRlcm5hbDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RhbmRhcmRHbHlwaEdyb3VwLkdseXBoR3JvdXBFbnVtO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguRW51bU1lbWJlcjpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RhbmRhcmRHbHlwaEdyb3VwLkdseXBoR3JvdXBFbnVtTWVtYmVyO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguRXJyb3I6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0YW5kYXJkR2x5cGhHcm91cC5HbHlwaEdyb3VwRXJyb3I7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5FeHRlbnNpb25NZXRob2RQdWJsaWM6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0YW5kYXJkR2x5cGhHcm91cC5HbHlwaEV4dGVuc2lvbk1ldGhvZDtcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkV4dGVuc2lvbk1ldGhvZFByb3RlY3RlZDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RhbmRhcmRHbHlwaEdyb3VwLkdseXBoRXh0ZW5zaW9uTWV0aG9kUHJvdGVjdGVkO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguRXh0ZW5zaW9uTWV0aG9kUHJpdmF0ZTpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RhbmRhcmRHbHlwaEdyb3VwLkdseXBoRXh0ZW5zaW9uTWV0aG9kUHJpdmF0ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkV4dGVuc2lvbk1ldGhvZEludGVybmFsOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdGFuZGFyZEdseXBoR3JvdXAuR2x5cGhFeHRlbnNpb25NZXRob2RJbnRlcm5hbDtcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkV2ZW50UHVibGljOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5FdmVudFByb3RlY3RlZDpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguRXZlbnRQcml2YXRlOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5FdmVudEludGVybmFsOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdGFuZGFyZEdseXBoR3JvdXAuR2x5cGhHcm91cEV2ZW50O1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguRmllbGRQdWJsaWM6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkZpZWxkUHJvdGVjdGVkOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5GaWVsZFByaXZhdGU6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkZpZWxkSW50ZXJuYWw6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0YW5kYXJkR2x5cGhHcm91cC5HbHlwaEdyb3VwRmllbGQ7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5JbnRlcmZhY2VQdWJsaWM6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkludGVyZmFjZVByb3RlY3RlZDpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguSW50ZXJmYWNlUHJpdmF0ZTpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguSW50ZXJmYWNlSW50ZXJuYWw6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0YW5kYXJkR2x5cGhHcm91cC5HbHlwaEdyb3VwSW50ZXJmYWNlO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguSW50cmluc2ljOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdGFuZGFyZEdseXBoR3JvdXAuR2x5cGhHcm91cEludHJpbnNpYztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLktleXdvcmQ6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0YW5kYXJkR2x5cGhHcm91cC5HbHlwaEtleXdvcmQ7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5MYWJlbDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RhbmRhcmRHbHlwaEdyb3VwLkdseXBoR3JvdXBJbnRyaW5zaWM7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5Mb2NhbDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RhbmRhcmRHbHlwaEdyb3VwLkdseXBoR3JvdXBWYXJpYWJsZTtcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLk5hbWVzcGFjZTpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RhbmRhcmRHbHlwaEdyb3VwLkdseXBoR3JvdXBOYW1lc3BhY2U7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5NZXRob2RQdWJsaWM6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLk1ldGhvZFByb3RlY3RlZDpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguTWV0aG9kUHJpdmF0ZTpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguTWV0aG9kSW50ZXJuYWw6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0YW5kYXJkR2x5cGhHcm91cC5HbHlwaEdyb3VwTWV0aG9kO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguTW9kdWxlUHVibGljOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5Nb2R1bGVQcm90ZWN0ZWQ6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLk1vZHVsZVByaXZhdGU6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLk1vZHVsZUludGVybmFsOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdGFuZGFyZEdseXBoR3JvdXAuR2x5cGhHcm91cE1vZHVsZTtcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLk9wZW5Gb2xkZXI6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0YW5kYXJkR2x5cGhHcm91cC5HbHlwaE9wZW5Gb2xkZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5PcGVyYXRvcjpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RhbmRhcmRHbHlwaEdyb3VwLkdseXBoR3JvdXBPcGVyYXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLlBhcmFtZXRlcjpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RhbmRhcmRHbHlwaEdyb3VwLkdseXBoR3JvdXBWYXJpYWJsZTtcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLlByb3BlcnR5UHVibGljOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5Qcm9wZXJ0eVByb3RlY3RlZDpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguUHJvcGVydHlQcml2YXRlOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5Qcm9wZXJ0eUludGVybmFsOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdGFuZGFyZEdseXBoR3JvdXAuR2x5cGhHcm91cFByb3BlcnR5O1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguUmFuZ2VWYXJpYWJsZTpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RhbmRhcmRHbHlwaEdyb3VwLkdseXBoR3JvdXBWYXJpYWJsZTtcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLlJlZmVyZW5jZTpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RhbmRhcmRHbHlwaEdyb3VwLkdseXBoUmVmZXJlbmNlO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguU3RydWN0dXJlUHVibGljOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5TdHJ1Y3R1cmVQcm90ZWN0ZWQ6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLlN0cnVjdHVyZVByaXZhdGU6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLlN0cnVjdHVyZUludGVybmFsOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdGFuZGFyZEdseXBoR3JvdXAuR2x5cGhHcm91cFN0cnVjdDtcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLlR5cGVQYXJhbWV0ZXI6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0YW5kYXJkR2x5cGhHcm91cC5HbHlwaEdyb3VwVHlwZTtcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLlVwOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5Eb3duOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5MZWZ0OlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5SaWdodDpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguRG90OlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdGFuZGFyZEdseXBoR3JvdXAuR2x5cGhBcnJvdztcclxuXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBBcmd1bWVudEV4Y2VwdGlvbihcImdseXBoXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBTdGFuZGFyZEdseXBoSXRlbSBHZXRTdGFuZGFyZEdseXBoSXRlbShHbHlwaCBpY29uKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3dpdGNoIChpY29uKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkNsYXNzUHJvdGVjdGVkOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5Db25zdGFudFByb3RlY3RlZDpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguRGVsZWdhdGVQcm90ZWN0ZWQ6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkVudW1Qcm90ZWN0ZWQ6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkV2ZW50UHJvdGVjdGVkOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5GaWVsZFByb3RlY3RlZDpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguSW50ZXJmYWNlUHJvdGVjdGVkOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5NZXRob2RQcm90ZWN0ZWQ6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLk1vZHVsZVByb3RlY3RlZDpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguUHJvcGVydHlQcm90ZWN0ZWQ6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLlN0cnVjdHVyZVByb3RlY3RlZDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RhbmRhcmRHbHlwaEl0ZW0uR2x5cGhJdGVtUHJvdGVjdGVkO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguQ2xhc3NQcml2YXRlOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5Db25zdGFudFByaXZhdGU6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkRlbGVnYXRlUHJpdmF0ZTpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguRW51bVByaXZhdGU6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkV2ZW50UHJpdmF0ZTpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguRmllbGRQcml2YXRlOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5JbnRlcmZhY2VQcml2YXRlOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5NZXRob2RQcml2YXRlOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5Nb2R1bGVQcml2YXRlOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5Qcm9wZXJ0eVByaXZhdGU6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLlN0cnVjdHVyZVByaXZhdGU6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0YW5kYXJkR2x5cGhJdGVtLkdseXBoSXRlbVByaXZhdGU7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5DbGFzc0ludGVybmFsOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5Db25zdGFudEludGVybmFsOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5EZWxlZ2F0ZUludGVybmFsOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5FbnVtSW50ZXJuYWw6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkV2ZW50SW50ZXJuYWw6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkZpZWxkSW50ZXJuYWw6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkludGVyZmFjZUludGVybmFsOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5NZXRob2RJbnRlcm5hbDpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguTW9kdWxlSW50ZXJuYWw6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLlByb3BlcnR5SW50ZXJuYWw6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLlN0cnVjdHVyZUludGVybmFsOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdGFuZGFyZEdseXBoSXRlbS5HbHlwaEl0ZW1GcmllbmQ7XHJcblxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAvLyBXZSBkb24ndCB3YW50IGFueSBvdmVybGF5c1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdGFuZGFyZEdseXBoSXRlbS5HbHlwaEl0ZW1QdWJsaWM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHRoZSBkaWZmZXJlbnQgdHlwZXMgb2YgZ2x5cGhzIHRoYXQgY2FuIGJlIGRpc3BsYXllZCBpbiB0aGUgZGVmYXVsdFxyXG4gICAgICAgIC8vICAgICBjb21wbGV0aW9uIHRvb2wgaW1wbGVtZW50YXRpb24uXHJcbiAgICAgICAgcHVibGljIGVudW0gU3RhbmRhcmRHbHlwaEdyb3VwXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIGNsYXNzZXMuXHJcbiAgICAgICAgICAgIEdseXBoR3JvdXBDbGFzcyA9IDAsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgY29uc3RhbnRzLlxyXG4gICAgICAgICAgICBHbHlwaEdyb3VwQ29uc3RhbnQgPSA2LFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIGRlbGVnYXRlcy5cclxuICAgICAgICAgICAgR2x5cGhHcm91cERlbGVnYXRlID0gMTIsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgZW51bWVyYXRpb25zLlxyXG4gICAgICAgICAgICBHbHlwaEdyb3VwRW51bSA9IDE4LFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIGVudW1lcmF0aW9uIG1lbWJlcnMuXHJcbiAgICAgICAgICAgIEdseXBoR3JvdXBFbnVtTWVtYmVyID0gMjQsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgZXZlbnRzLlxyXG4gICAgICAgICAgICBHbHlwaEdyb3VwRXZlbnQgPSAzMCxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBleGNlcHRpb25zLlxyXG4gICAgICAgICAgICBHbHlwaEdyb3VwRXhjZXB0aW9uID0gMzYsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgZmllbGRzLlxyXG4gICAgICAgICAgICBHbHlwaEdyb3VwRmllbGQgPSA0MixcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBpbnRlcmZhY2VzLlxyXG4gICAgICAgICAgICBHbHlwaEdyb3VwSW50ZXJmYWNlID0gNDgsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgbWFjcm9zLlxyXG4gICAgICAgICAgICBHbHlwaEdyb3VwTWFjcm8gPSA1NCxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBtYXBzLlxyXG4gICAgICAgICAgICBHbHlwaEdyb3VwTWFwID0gNjAsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgbWFwIGl0ZW1zLlxyXG4gICAgICAgICAgICBHbHlwaEdyb3VwTWFwSXRlbSA9IDY2LFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIG1ldGhvZHMuXHJcbiAgICAgICAgICAgIEdseXBoR3JvdXBNZXRob2QgPSA3MixcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBvdmVybG9hZHMuXHJcbiAgICAgICAgICAgIEdseXBoR3JvdXBPdmVybG9hZCA9IDc4LFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIG1vZHVsZXMuXHJcbiAgICAgICAgICAgIEdseXBoR3JvdXBNb2R1bGUgPSA4NCxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBuYW1lc3BhY2VzLlxyXG4gICAgICAgICAgICBHbHlwaEdyb3VwTmFtZXNwYWNlID0gOTAsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3Igb3BlcmF0b3JzLlxyXG4gICAgICAgICAgICBHbHlwaEdyb3VwT3BlcmF0b3IgPSA5NixcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBwcm9wZXJ0aWVzLlxyXG4gICAgICAgICAgICBHbHlwaEdyb3VwUHJvcGVydHkgPSAxMDIsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3Igc3RydWN0dXJlcy5cclxuICAgICAgICAgICAgR2x5cGhHcm91cFN0cnVjdCA9IDEwOCxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciB0ZW1wbGF0ZXMuXHJcbiAgICAgICAgICAgIEdseXBoR3JvdXBUZW1wbGF0ZSA9IDExNCxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciB0eXBlZGVmcy5cclxuICAgICAgICAgICAgR2x5cGhHcm91cFR5cGVkZWYgPSAxMjAsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgdHlwZXMuXHJcbiAgICAgICAgICAgIEdseXBoR3JvdXBUeXBlID0gMTI2LFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIHVuaW9ucy5cclxuICAgICAgICAgICAgR2x5cGhHcm91cFVuaW9uID0gMTMyLFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIHZhcmlhYmxlcy5cclxuICAgICAgICAgICAgR2x5cGhHcm91cFZhcmlhYmxlID0gMTM4LFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIHZhbHVlIHR5cGVzLlxyXG4gICAgICAgICAgICBHbHlwaEdyb3VwVmFsdWVUeXBlID0gMTQ0LFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIGludHJpbnNpYyBzeW1ib2xzLlxyXG4gICAgICAgICAgICBHbHlwaEdyb3VwSW50cmluc2ljID0gMTUwLFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIEojIG1ldGhvZHMuXHJcbiAgICAgICAgICAgIEdseXBoR3JvdXBKU2hhcnBNZXRob2QgPSAxNTYsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgSiMgZmllbGRzLlxyXG4gICAgICAgICAgICBHbHlwaEdyb3VwSlNoYXJwRmllbGQgPSAxNjIsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgSiMgY2xhc3Nlcy5cclxuICAgICAgICAgICAgR2x5cGhHcm91cEpTaGFycENsYXNzID0gMTY4LFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIEojIG5hbWVzcGFjZXMuXHJcbiAgICAgICAgICAgIEdseXBoR3JvdXBKU2hhcnBOYW1lc3BhY2UgPSAxNzQsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgSiMgaW50ZXJmYWNlcy5cclxuICAgICAgICAgICAgR2x5cGhHcm91cEpTaGFycEludGVyZmFjZSA9IDE4MCxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBlcnJvcnMuXHJcbiAgICAgICAgICAgIEdseXBoR3JvdXBFcnJvciA9IDE4NixcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBCU0MgZmlsZXMuXHJcbiAgICAgICAgICAgIEdseXBoQnNjRmlsZSA9IDE5MSxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBhc3NlbWJsaWVzLlxyXG4gICAgICAgICAgICBHbHlwaEFzc2VtYmx5ID0gMTkyLFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIGxpYnJhcmllcy5cclxuICAgICAgICAgICAgR2x5cGhMaWJyYXJ5ID0gMTkzLFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIFZCIHByb2plY3RzLlxyXG4gICAgICAgICAgICBHbHlwaFZCUHJvamVjdCA9IDE5NCxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBDIyBwcm9qZWN0cy5cclxuICAgICAgICAgICAgR2x5cGhDb29sUHJvamVjdCA9IDE5NixcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBDKysgcHJvamVjdHMuXHJcbiAgICAgICAgICAgIEdseXBoQ3BwUHJvamVjdCA9IDE5OSxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBkaWFsb2cgaWRlbnRpZmllcnMuXHJcbiAgICAgICAgICAgIEdseXBoRGlhbG9nSWQgPSAyMDAsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3Igb3BlbiBmb2xkZXJzLlxyXG4gICAgICAgICAgICBHbHlwaE9wZW5Gb2xkZXIgPSAyMDEsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgY2xvc2VkIGZvbGRlcnMuXHJcbiAgICAgICAgICAgIEdseXBoQ2xvc2VkRm9sZGVyID0gMjAyLFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIGFycm93IHN5bWJvbHMuXHJcbiAgICAgICAgICAgIEdseXBoQXJyb3cgPSAyMDMsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgQyMgZmlsZXMuXHJcbiAgICAgICAgICAgIEdseXBoQ1NoYXJwRmlsZSA9IDIwNCxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBDIyBleHBhbnNpb25zLlxyXG4gICAgICAgICAgICBHbHlwaENTaGFycEV4cGFuc2lvbiA9IDIwNSxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBrZXl3b3Jkcy5cclxuICAgICAgICAgICAgR2x5cGhLZXl3b3JkID0gMjA2LFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIGluZm9ybWF0aW9uLlxyXG4gICAgICAgICAgICBHbHlwaEluZm9ybWF0aW9uID0gMjA3LFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIHJlZmVyZW5jZXMuXHJcbiAgICAgICAgICAgIEdseXBoUmVmZXJlbmNlID0gMjA4LFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIHJlY3Vyc2lvbi5cclxuICAgICAgICAgICAgR2x5cGhSZWN1cnNpb24gPSAyMDksXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgWE1MIGl0ZW1zLlxyXG4gICAgICAgICAgICBHbHlwaFhtbEl0ZW0gPSAyMTAsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgSiMgcHJvamVjdHMuXHJcbiAgICAgICAgICAgIEdseXBoSlNoYXJwUHJvamVjdCA9IDIxMSxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBKIyBkb2N1bWVudHMuXHJcbiAgICAgICAgICAgIEdseXBoSlNoYXJwRG9jdW1lbnQgPSAyMTIsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgZm9yd2FyZGVkIHR5cGVzLlxyXG4gICAgICAgICAgICBHbHlwaEZvcndhcmRUeXBlID0gMjEzLFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIGNhbGxlcnMgZ3JhcGhzLlxyXG4gICAgICAgICAgICBHbHlwaENhbGxlcnNHcmFwaCA9IDIxNCxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBjYWxsIGdyYXBocy5cclxuICAgICAgICAgICAgR2x5cGhDYWxsR3JhcGggPSAyMTUsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgYnVpbGQgd2FybmluZ3MuXHJcbiAgICAgICAgICAgIEdseXBoV2FybmluZyA9IDIxNixcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBzb21ldGhpbmcgdGhhdCBtYXkgYmUgYSByZWZlcmVuY2UuXHJcbiAgICAgICAgICAgIEdseXBoTWF5YmVSZWZlcmVuY2UgPSAyMTcsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3Igc29tZXRoaW5nIHRoYXQgbWF5IGJlIGEgY2FsbGVyLlxyXG4gICAgICAgICAgICBHbHlwaE1heWJlQ2FsbGVyID0gMjE4LFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIHNvbWV0aGluZyB0aGF0IG1heSBiZSBhIGNhbGwuXHJcbiAgICAgICAgICAgIEdseXBoTWF5YmVDYWxsID0gMjE5LFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIGV4dGVuc2lvbiBtZXRob2RzLlxyXG4gICAgICAgICAgICBHbHlwaEV4dGVuc2lvbk1ldGhvZCA9IDIyMCxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBpbnRlcm5hbCBleHRlbnNpb24gbWV0aG9kcy5cclxuICAgICAgICAgICAgR2x5cGhFeHRlbnNpb25NZXRob2RJbnRlcm5hbCA9IDIyMSxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBmcmllbmQgZXh0ZW5zaW9uIG1ldGhvZHMuXHJcbiAgICAgICAgICAgIEdseXBoRXh0ZW5zaW9uTWV0aG9kRnJpZW5kID0gMjIyLFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIHByb3RlY3RlZCBleHRlbnNpb24gbWV0aG9kcy5cclxuICAgICAgICAgICAgR2x5cGhFeHRlbnNpb25NZXRob2RQcm90ZWN0ZWQgPSAyMjMsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgcHJpdmF0ZSBleHRlbnNpb24gbWV0aG9kcy5cclxuICAgICAgICAgICAgR2x5cGhFeHRlbnNpb25NZXRob2RQcml2YXRlID0gMjI0LFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIGV4dGVuc2lvbiBtZXRob2Qgc2hvcnRjdXRzLlxyXG4gICAgICAgICAgICBHbHlwaEV4dGVuc2lvbk1ldGhvZFNob3J0Y3V0ID0gMjI1LFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIFhNTCBhdHRyaWJ1dGVzLlxyXG4gICAgICAgICAgICBHbHlwaFhtbEF0dHJpYnV0ZSA9IDIyNixcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBjaGlsZCBYTUwgZWxlbWVudHMuXHJcbiAgICAgICAgICAgIEdseXBoWG1sQ2hpbGQgPSAyMjcsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgZGVzY2VuZGFudCBYTUwgZWxlbWVudHMuXHJcbiAgICAgICAgICAgIEdseXBoWG1sRGVzY2VuZGFudCA9IDIyOCxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBYTUwgbmFtZXNwYWNlcy5cclxuICAgICAgICAgICAgR2x5cGhYbWxOYW1lc3BhY2UgPSAyMjksXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyB3aXRoIGEgcXVlc3Rpb24gbWFyayBmb3IgWE1MIGF0dHJpYnV0ZXMuXHJcbiAgICAgICAgICAgIEdseXBoWG1sQXR0cmlidXRlUXVlc3Rpb24gPSAyMzAsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyB3aXRoIGEgY2hlY2sgbWFyayBmb3IgWE1MIGF0dHJpYnV0ZXMuXHJcbiAgICAgICAgICAgIEdseXBoWG1sQXR0cmlidXRlQ2hlY2sgPSAyMzEsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyB3aXRoIGEgcXVlc3Rpb24gbWFyayBmb3IgWE1MIGNoaWxkIGVsZW1lbnRzLlxyXG4gICAgICAgICAgICBHbHlwaFhtbENoaWxkUXVlc3Rpb24gPSAyMzIsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyB3aXRoIGEgY2hlY2sgbWFyayBmb3IgWE1MIGNoaWxkIGVsZW1lbnRzLlxyXG4gICAgICAgICAgICBHbHlwaFhtbENoaWxkQ2hlY2sgPSAyMzMsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyB3aXRoIGEgcXVlc3Rpb24gbWFyayBmb3IgWE1MIGRlc2NlbmRhbnQgZWxlbWVudHMuXHJcbiAgICAgICAgICAgIEdseXBoWG1sRGVzY2VuZGFudFF1ZXN0aW9uID0gMjM0LFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgd2l0aCBhIGNoZWNrIG1hcmsgZm9yIFhNTCBkZXNjZW5kYW50IGVsZW1lbnRzLlxyXG4gICAgICAgICAgICBHbHlwaFhtbERlc2NlbmRhbnRDaGVjayA9IDIzNSxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBjb21wbGV0aW9uIHdhcm5pbmdzXHJcbiAgICAgICAgICAgIEdseXBoQ29tcGxldGlvbldhcm5pbmcgPSAyMzYsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgdW5rbm93biB0eXBlcy5cclxuICAgICAgICAgICAgR2x5cGhHcm91cFVua25vd24gPSAyMzdcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAvLyAgICAgRGVzY3JpYmVzIGljb25zIG9yIGdseXBocyB0aGF0IGFyZSB1c2VkIGluIHN0YXRlbWVudCBjb21wbGV0aW9uLlxyXG4gICAgICAgIHB1YmxpYyBlbnVtIFN0YW5kYXJkR2x5cGhJdGVtXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIGEgcHVibGljIHN5bWJvbC5cclxuICAgICAgICAgICAgR2x5cGhJdGVtUHVibGljID0gMCxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBhbiBpbnRlcm5hbCBzeW1ib2wuXHJcbiAgICAgICAgICAgIEdseXBoSXRlbUludGVybmFsID0gMSxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBhIGZyaWVuZCBzeW1ib2wuXHJcbiAgICAgICAgICAgIEdseXBoSXRlbUZyaWVuZCA9IDIsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgYSBwcm90ZWN0ZWQgc3ltYm9sLlxyXG4gICAgICAgICAgICBHbHlwaEl0ZW1Qcm90ZWN0ZWQgPSAzLFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIGEgcHJpdmF0ZSBzeW1ib2wuXHJcbiAgICAgICAgICAgIEdseXBoSXRlbVByaXZhdGUgPSA0LFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIGEgc2hvcnRjdXQgc3ltYm9sLlxyXG4gICAgICAgICAgICBHbHlwaEl0ZW1TaG9ydGN1dCA9IDUsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgYSBzeW1ib2wgdGhhdCBoYXMgYWxsIChvciBub25lKSBvZiB0aGUgc3RhbmRhcmQgYXR0cmlidXRlcy5cclxuICAgICAgICAgICAgVG90YWxHbHlwaEl0ZW1zID0gNlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBOZXd0b25zb2Z0Lkpzb247XHJcbnVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxuXHJcbm5hbWVzcGFjZSBTeXN0ZW1cclxue1xyXG4gICAgcHVibGljIHN0YXRpYyBjbGFzcyBDb21wYXRpYmlsaXR5RXh0ZW5zaW9uc1xyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgc3RyaW5nIFRvTG93ZXJJbnZhcmlhbnQodGhpcyBzdHJpbmcgdmFsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWUuVG9Mb3dlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxubmFtZXNwYWNlIENvZGV4Lk9iamVjdE1vZGVsXHJcbntcclxuICAgIHBhcnRpYWwgc3RydWN0IFN5bWJvbElkXHJcbiAgICB7XHJcbiAgICAgICAgW0pzb25Db25zdHJ1Y3Rvcl1cclxuICAgICAgICBwdWJsaWMgU3ltYm9sSWQoc3RyaW5nIHZhbHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgVmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIENvZGV4LlNkay5TZWFyY2hcclxue1xyXG4gICAgcHVibGljIHBhcnRpYWwgaW50ZXJmYWNlIElJbmRleFxyXG4gICAge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8gSGlnaCBsZXZlbCBxdWVyeSBvcGVyYXRpb25zIGZvciBpbmRleGVkIGNvZGVcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgcGFydGlhbCBjbGFzcyBJbmRleDxUPlxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBJbmRleFF1ZXJ5PFQ+IENyZWF0ZVF1ZXJ5KCk7XHJcblxyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBJUHJlZml4UHJvcGVydHk8VD4gQ3JlYXRlUHJlZml4UHJvcGVydHkoKTtcclxuXHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IElUZXJtUHJvcGVydHk8VD4gQ3JlYXRlVGVybVByb3BlcnR5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFic3RyYWN0IGNsYXNzIEluZGV4UXVlcnk8VD5cclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgSW5kZXhGaWx0ZXI8VD4gRmlsdGVyIHsgZ2V0OyBzZXQ7IH1cclxuXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgbWF4aW11bSBudW1iZXIgb2YgcmVzdWx0cyB0byByZXR1cm5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyBpbnQgTWF4UmVzdWx0cyB7IGdldDsgc2V0OyB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBUYXNrPEluZGV4UXVlcnlIaXRzUmVzcG9uc2U8VD4+IEV4ZWN1dGVBc3luYygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBjbGFzcyBQcmVmaXhGdWxsTmFtZUluZGV4UHJvcGVydHk8VD4gOiBUZXJtSW5kZXhQcm9wZXJ0eTxUPlxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBJbmRleEZpbHRlcjxUPiBQcmVmaXhGdWxsTmFtZShzdHJpbmcgcHJlZml4KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgY2xhc3MgUHJlZml4SW5kZXhQcm9wZXJ0eTxUPiA6IFRlcm1JbmRleFByb3BlcnR5PFQ+XHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IEluZGV4RmlsdGVyPFQ+IFByZWZpeChzdHJpbmcgcHJlZml4KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgY2xhc3MgTm9ybWFsaXplZEtleXdvcmRJbmRleFByb3BlcnR5PFQ+IDogVGVybUluZGV4UHJvcGVydHk8VD5cclxuICAgIHtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgY2xhc3MgRnVsbFRleHRJbmRleFByb3BlcnR5PFQ+IDogVGVybUluZGV4UHJvcGVydHk8VD5cclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgSW5kZXhGaWx0ZXI8VD4gQ29udGFpbnMoc3RyaW5nIHBocmFzZSk7XHJcblxyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBJbmRleEZpbHRlcjxUPiBDb250YWluc0FsbChzdHJpbmdbXSB0ZXJtcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVE9ETzogU29ydHdvcmQgaXMgbm9ybWFsbHkgYWxzbyBhIG5vcm1hbGl6ZWQga2V5d29yZC4gSXMgdGhpcyBhbHdheXMgdGhlIGNhc2U/XHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgY2xhc3MgU29ydHdvcmRJbmRleFByb3BlcnR5PFQ+IDogVGVybUluZGV4UHJvcGVydHk8VD5cclxuICAgIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFic3RyYWN0IGNsYXNzIFRlcm1JbmRleFByb3BlcnR5PFQ+XHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IEluZGV4RmlsdGVyPFQ+IE1hdGNoPFRWYWx1ZT4oVFZhbHVlIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW50ZXJmYWNlIElQcmVmaXhQcm9wZXJ0eTxUPiA6IElUZXJtUHJvcGVydHk8VD5cclxuICAgIHtcclxuICAgICAgICBJbmRleEZpbHRlcjxUPiBQcmVmaXgoc3RyaW5nIHByZWZpeCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGludGVyZmFjZSBJVGVybVByb3BlcnR5PFQ+XHJcbiAgICB7XHJcbiAgICAgICAgSW5kZXhGaWx0ZXI8VD4gTWF0Y2g8VFZhbHVlPihUVmFsdWUgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlbnVtIEJpbmFyeU9wZXJhdG9yXHJcbiAgICB7XHJcbiAgICAgICAgQW5kLFxyXG4gICAgICAgIE9yLFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBCaW5hcnlGaWx0ZXI8VD4gOiBJbmRleEZpbHRlcjxUPlxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyByZWFkb25seSBCaW5hcnlPcGVyYXRvciBPcGVyYXRvcjtcclxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgSW5kZXhGaWx0ZXI8VD4gTGVmdDtcclxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgSW5kZXhGaWx0ZXI8VD4gUmlnaHQ7XHJcblxyXG4gICAgICAgIHB1YmxpYyBCaW5hcnlGaWx0ZXIoQmluYXJ5T3BlcmF0b3Igb3AsIEluZGV4RmlsdGVyPFQ+IGxlZnQsIEluZGV4RmlsdGVyPFQ+IHJpZ2h0KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgT3BlcmF0b3IgPSBvcDtcclxuICAgICAgICAgICAgTGVmdCA9IGxlZnQ7XHJcbiAgICAgICAgICAgIFJpZ2h0ID0gcmlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBJbmRleEZpbHRlcjxUPlxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgSW5kZXhGaWx0ZXI8VD4gb3BlcmF0b3IgJihJbmRleEZpbHRlcjxUPiBsZWZ0LCBJbmRleEZpbHRlcjxUPiByaWdodClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQmluYXJ5RmlsdGVyPFQ+KEJpbmFyeU9wZXJhdG9yLkFuZCwgbGVmdCwgcmlnaHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBJbmRleEZpbHRlcjxUPiBvcGVyYXRvciB8KEluZGV4RmlsdGVyPFQ+IGxlZnQsIEluZGV4RmlsdGVyPFQ+IHJpZ2h0KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBCaW5hcnlGaWx0ZXI8VD4oQmluYXJ5T3BlcmF0b3IuT3IsIGxlZnQsIHJpZ2h0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGludGVyZmFjZSBJSW5kZXhRdWVyeTxUPlxyXG4gICAge1xyXG4gICAgICAgIElJbmRleFF1ZXJ5RmlsdGVyPFQ+IEZpbHRlciB7IGdldDsgc2V0OyB9XHJcblxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIG1heGltdW0gbnVtYmVyIG9mIHJlc3VsdHMgdG8gcmV0dXJuXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBpbnQgTWF4UmVzdWx0cyB7IGdldDsgc2V0OyB9XHJcblxyXG4gICAgICAgIFRhc2s8SW5kZXhRdWVyeVJlc3BvbnNlPFQ+PiBFeGVjdXRlQXN5bmMoKTtcclxuXHJcbiAgICAgICAgdm9pZCBFeGNsdWRlKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbnRlcmZhY2UgSUluZGV4UXVlcnlGaWx0ZXI8VD5cclxuICAgIHtcclxuICAgICAgICB2b2lkIEV4Y2x1ZGUoKTtcclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG5uYW1lc3BhY2UgQ29kZXguU2RrLlNlYXJjaFxyXG57XHJcbiAgICAvLyArVE9ETzogR2VuZXJhdGUgQVNQLk5ldCBlbmRwb2ludCB3aGljaCBoYW5kbGVzIGFsbCB0aGVzZSBjYWxscy4gUG90ZW50aWFsbHkgYWxzbyBpbXBsZW1lbnRcclxuICAgIC8vIGNhbGxlciAoaS5lLiBXZWJBcGlDb2RleCA6IElDb2RleClcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyBIaWdoIGxldmVsIG9wZXJhdGlvbnMgZm9yIGNvZGV4IFxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBpbnRlcmZhY2UgSUNvZGV4XHJcbiAgICB7XHJcbiAgICAgICAgVGFzazxJbmRleFF1ZXJ5SGl0c1Jlc3BvbnNlPElTZWFyY2hSZXN1bHQ+PiBTZWFyY2hBc3luYyhTZWFyY2hBcmd1bWVudHMgYXJndW1lbnRzKTtcclxuXHJcbiAgICAgICAgVGFzazxJbmRleFF1ZXJ5SGl0c1Jlc3BvbnNlPElSZWZlcmVuY2VTZWFyY2hNb2RlbD4+IEZpbmRBbGxSZWZlcmVuY2VzQXN5bmMoRmluZEFsbFJlZmVyZW5jZXNBcmd1bWVudHMgYXJndW1lbnRzKTtcclxuXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBGaW5kIGRlZmluaXRpb24gZm9yIGEgc3ltYm9sXHJcbiAgICAgICAgLy8vIFVzYWdlOiBEb2N1bWVudGF0aW9uIGhvdmVyIHRvb2x0aXBcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIFRhc2s8SW5kZXhRdWVyeUhpdHNSZXNwb25zZTxJRGVmaW5pdGlvblNlYXJjaE1vZGVsPj4gRmluZERlZmluaXRpb25Bc3luYyhGaW5kRGVmaW5pdGlvbkFyZ3VtZW50cyBhcmd1bWVudHMpO1xyXG5cclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIEZpbmQgZGVmaW5pdGlvbiBsb2NhdGlvbiBmb3IgYSBzeW1ib2xcclxuICAgICAgICAvLy8gVXNhZ2U6IEdvIFRvIERlZmluaXRpb25cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIFRhc2s8SW5kZXhRdWVyeUhpdHNSZXNwb25zZTxJUmVmZXJlbmNlU2VhcmNoTW9kZWw+PiBGaW5kRGVmaW5pdGlvbkxvY2F0aW9uQXN5bmMoRmluZERlZmluaXRpb25Mb2NhdGlvbkFyZ3VtZW50cyBhcmd1bWVudHMpO1xyXG5cclxuICAgICAgICBUYXNrPEluZGV4UXVlcnlSZXNwb25zZTxJQm91bmRTb3VyY2VTZWFyY2hNb2RlbD4+IEdldFNvdXJjZUFzeW5jKEdldFNvdXJjZUFyZ3VtZW50cyBhcmd1bWVudHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlbnVtIENvZGV4U2VydmljZU1ldGhvZFxyXG4gICAge1xyXG4gICAgICAgIFNlYXJjaCxcclxuICAgICAgICBGaW5kQWxsUmVmcyxcclxuICAgICAgICBGaW5kRGVmLFxyXG4gICAgICAgIEZpbmREZWZMb2NhdGlvbixcclxuICAgICAgICBHZXRTb3VyY2VcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgQ29kZXhBcmd1bWVudHNCYXNlXHJcbiAgICB7XHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgbWF4aW11bSBudW1iZXIgb2YgcmVzdWx0cyB0byByZXR1cm5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyBpbnQgTWF4UmVzdWx0cyA9IDEwMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgQ29udGV4dENvZGV4QXJndW1lbnRzQmFzZSA6IENvZGV4QXJndW1lbnRzQmFzZVxyXG4gICAge1xyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGlkIG9mIHRoZSByZXBvc2l0b3J5IHJlZmVyZW5jaW5nIHRoZSBzeW1ib2wuXHJcbiAgICAgICAgLy8vIE5PVEU6IFRoaXMgaXMgdXNlZCB0byBwcmlvcml0eSBpbnRlci1yZXBvc2l0b3J5IG1hdGNoZXMgb3ZlclxyXG4gICAgICAgIC8vLyBtYXRjaGVzIGZyb20gb3V0c2lkZSB0aGUgcmVwb3NpdG9yeVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHN0cmluZyBSZWZlcmVuY2luZ1JlcG9zaXRvcnlJZDtcclxuXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgaWQgb2YgdGhlIHByb2plY3QgcmVmZXJlbmNpbmcgdGhlIHN5bWJvbC5cclxuICAgICAgICAvLy8gTk9URTogVGhpcyBpcyB1c2VkIHRvIHByaW9yaXR5IGludGVyLXJlcG9zaXRvcnkgbWF0Y2hlcyBvdmVyXHJcbiAgICAgICAgLy8vIG1hdGNoZXMgZnJvbSBvdXRzaWRlIHRoZSByZXBvc2l0b3J5XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIFJlZmVyZW5jaW5nUHJvamVjdElkO1xyXG5cclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBpZCBvZiB0aGUgZmlsZSByZWZlcmVuY2luZyB0aGUgc3ltYm9sLlxyXG4gICAgICAgIC8vLyBOT1RFOiBUaGlzIGlzIHVzZWQgdG8gcHJpb3JpdHkgaW50ZXItcmVwb3NpdG9yeSBtYXRjaGVzIG92ZXJcclxuICAgICAgICAvLy8gbWF0Y2hlcyBmcm9tIG91dHNpZGUgdGhlIHJlcG9zaXRvcnlcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgUmVmZXJlbmNpbmdGaWxlSWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsYXNzIEZpbmRTeW1ib2xBcmd1bWVudHNCYXNlIDogQ29udGV4dENvZGV4QXJndW1lbnRzQmFzZVxyXG4gICAge1xyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHN5bWJvbCBpZCBvZiB0aGUgc3ltYm9sXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIFN5bWJvbElkO1xyXG5cclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBwcm9qZWN0IGlkIG9mIHRoZSBzeW1ib2xcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgUHJvamVjdElkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBGaW5kRGVmaW5pdGlvbkFyZ3VtZW50cyA6IEZpbmRTeW1ib2xBcmd1bWVudHNCYXNlXHJcbiAgICB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBGaW5kQWxsUmVmZXJlbmNlc0FyZ3VtZW50cyA6IEZpbmRTeW1ib2xBcmd1bWVudHNCYXNlXHJcbiAgICB7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsYXNzIEZpbmREZWZpbml0aW9uTG9jYXRpb25Bcmd1bWVudHMgOiBGaW5kU3ltYm9sQXJndW1lbnRzQmFzZVxyXG4gICAge1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBTZWFyY2hBcmd1bWVudHMgOiBDb250ZXh0Q29kZXhBcmd1bWVudHNCYXNlXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIHN0cmluZyBTZWFyY2hTdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsYXNzIEdldFNvdXJjZUFyZ3VtZW50cyA6IENvbnRleHRDb2RleEFyZ3VtZW50c0Jhc2VcclxuICAgIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGludGVyZmFjZSBJVGV4dExpbmVTcGFuUmVzdWx0IDogSVByb2plY3RGaWxlU2NvcGVFbnRpdHlcclxuICAgIHtcclxuICAgICAgICBJVGV4dExpbmVTcGFuIFRleHRTcGFuIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbnRlcmZhY2UgSVNlYXJjaFJlc3VsdFxyXG4gICAge1xyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHRleHQgc3BhbiBmb3IgYSB0ZXh0IHJlc3VsdFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgSVRleHRMaW5lU3BhblJlc3VsdCBUZXh0TGluZSB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgZGVmaW5pdGlvbiBvZiB0aGUgc2VhcmNoIHJlc3VsdFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgSURlZmluaXRpb25TeW1ib2wgRGVmaW5pdGlvbiB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RydWN0IFNlcmlhbGl6YWJsZVRpbWVTcGFuXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIGxvbmcgVGlja3MgeyBnZXQ7IHNldDsgfVxyXG5cclxuICAgICAgICBwdWJsaWMgU2VyaWFsaXphYmxlVGltZVNwYW4oVGltZVNwYW4gdGltZXNwYW4pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBUaWNrcyA9IHRpbWVzcGFuLlRpY2tzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIFRpbWVTcGFuIEFzVGltZVNwYW4oKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIFRpbWVTcGFuLkZyb21UaWNrcyhUaWNrcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGltcGxpY2l0IG9wZXJhdG9yIFRpbWVTcGFuKFNlcmlhbGl6YWJsZVRpbWVTcGFuIHZhbHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLkFzVGltZVNwYW4oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgaW1wbGljaXQgb3BlcmF0b3IgU2VyaWFsaXphYmxlVGltZVNwYW4oVGltZVNwYW4gdmFsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFNlcmlhbGl6YWJsZVRpbWVTcGFuKHZhbHVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSBzdHJpbmcgVG9TdHJpbmcoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIEFzVGltZVNwYW4oKS5Ub1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgSW5kZXhRdWVyeVJlc3BvbnNlXHJcbiAgICB7XHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBJZiB0aGUgcXVlcnkgZmFpbGVkLCB0aGlzIHdpbGwgY29udGFpbiB0aGUgZXJyb3IgbWVzc2FnZVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHN0cmluZyBFcnJvciB7IGdldDsgc2V0OyB9XHJcblxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHJhdyBxdWVyeSBzZW50IHRvIHRoZSBpbmRleCBzZXJ2ZXJcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyBMaXN0PHN0cmluZz4gUmF3UXVlcmllcyB7IGdldDsgc2V0OyB9XHJcblxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHNwZW50IGV4ZWN1dGluZyB0aGUgcXVlcnlcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyBTZXJpYWxpemFibGVUaW1lU3BhbiBEdXJhdGlvbiB7IGdldDsgc2V0OyB9XHJcblxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHNwZW50IGV4ZWN1dGluZyB0aGUgcXVlcnlcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyBTZXJpYWxpemFibGVUaW1lU3BhbiBTZXJ2ZXJUaW1lIHsgZ2V0OyBzZXQ7IH1cclxuXHJcbiAgICAgICAgcHVibGljIG92ZXJyaWRlIHN0cmluZyBUb1N0cmluZygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gc3RyaW5nLkZvcm1hdChcIkVycm9yOiB7MH0sIER1cmF0aW9uOiB7MX1cIixFcnJvcixEdXJhdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBJbmRleFF1ZXJ5UmVzcG9uc2U8VD4gOiBJbmRleFF1ZXJ5UmVzcG9uc2VcclxuICAgIHtcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSByZXN1bHRzIG9mIHRoZSBxdWVyeVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIFQgUmVzdWx0IHsgZ2V0OyBzZXQ7IH1cclxuXHJcbiAgICAgICAgcHVibGljIG92ZXJyaWRlIHN0cmluZyBUb1N0cmluZygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gc3RyaW5nLkZvcm1hdChcIlJlc3VsdDogezB9LCB7MX1cIixSZXN1bHQsYmFzZS5Ub1N0cmluZygpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsYXNzIEluZGV4UXVlcnlIaXRzPFQ+XHJcbiAgICB7XHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgdG90YWwgbnVtYmVyIG9mIHJlc3VsdHMgbWF0Y2hpbmcgdGhlIHF1ZXJ5LiBcclxuICAgICAgICAvLy8gTk9URTogVGhpcyBtYXkgYmUgZ3JlYXRlciB0aGFuIHRoZSBudW1iZXIgb2YgaGl0cyByZXR1cm5lZC5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyBsb25nIFRvdGFsIHsgZ2V0OyBzZXQ7IH1cclxuXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgcmVzdWx0cyBvZiB0aGUgcXVlcnlcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyBMaXN0PFQ+IEhpdHMgeyBnZXQ7IHNldDsgfVxyXG5cclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgc3RyaW5nIFRvU3RyaW5nKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmcuRm9ybWF0KFwiVG90YWw6IHswfSwgezF9XCIsVG90YWwsYmFzZS5Ub1N0cmluZygpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsYXNzIEluZGV4UXVlcnlIaXRzUmVzcG9uc2U8VD4gOiBJbmRleFF1ZXJ5UmVzcG9uc2U8SW5kZXhRdWVyeUhpdHM8VD4+XHJcbiAgICB7XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5MaW5xLkV4cHJlc3Npb25zO1xyXG51c2luZyBTeXN0ZW0uUnVudGltZS5Db21waWxlclNlcnZpY2VzO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxuXHJcbm5hbWVzcGFjZSBDb2RleFxyXG57XHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgY2xhc3MgU2VhcmNoVHlwZVxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgTmFtZSB7IGdldDsgcHJvdGVjdGVkIHNldDsgfVxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgSW5kZXhOYW1lIHsgZ2V0OyBwcm90ZWN0ZWQgc2V0OyB9XHJcbiAgICAgICAgcHVibGljIGludCBJZCB7IGdldDsgcHJvdGVjdGVkIHNldDsgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIFNlYXJjaFR5cGU8VD4gQ3JlYXRlPFQ+KExpc3Q8U2VhcmNoVHlwZT4gcmVnaXN0ZXJlZFNlYXJjaFR5cGVzLCBbQ2FsbGVyTWVtYmVyTmFtZV1zdHJpbmcgbmFtZSA9IG51bGwpXHJcbiAgICAgICAgICAgIHdoZXJlIFQgOiBjbGFzcywgSVNlYXJjaEVudGl0eVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIHNlYXJjaFR5cGUgPSBuZXcgU2VhcmNoVHlwZTxUPihuYW1lKTtcclxuICAgICAgICAgICAgc2VhcmNoVHlwZS5JZCA9IHJlZ2lzdGVyZWRTZWFyY2hUeXBlcy5Db3VudDtcclxuICAgICAgICAgICAgcmVnaXN0ZXJlZFNlYXJjaFR5cGVzLkFkZChzZWFyY2hUeXBlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHNlYXJjaFR5cGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgVHlwZSBUeXBlIHsgZ2V0OyB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsYXNzIFNlYXJjaFR5cGU8VFNlYXJjaFR5cGU+IDogU2VhcmNoVHlwZVxyXG4gICAgICAgIHdoZXJlIFRTZWFyY2hUeXBlIDogY2xhc3MsIElTZWFyY2hFbnRpdHlcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgVHlwZSBUeXBlIHtnZXR7cmV0dXJuIHR5cGVvZihUU2VhcmNoVHlwZSk7fX1cclxuXHJcbiAgICAgICAgcHVibGljIExpc3Q8VHVwbGU8RXhwcmVzc2lvbjxGdW5jPFRTZWFyY2hUeXBlLCBvYmplY3Q+PiwgRXhwcmVzc2lvbjxGdW5jPFRTZWFyY2hUeXBlLCBvYmplY3Q+Pj4+IENvcHlUb0ZpZWxkcyA9IG5ldyBMaXN0PFR1cGxlPEV4cHJlc3Npb248RnVuYzxUU2VhcmNoVHlwZSwgb2JqZWN0Pj4sIEV4cHJlc3Npb248RnVuYzxUU2VhcmNoVHlwZSwgb2JqZWN0Pj4+PigpO1xyXG5cclxuICAgICAgICBwdWJsaWMgTGlzdDxUdXBsZTxFeHByZXNzaW9uPEZ1bmM8VFNlYXJjaFR5cGUsIG9iamVjdD4+LCBFeHByZXNzaW9uPEZ1bmM8VFNlYXJjaFR5cGUsIG9iamVjdD4+Pj4gSW5oZXJpdEZpZWxkcyA9IG5ldyBMaXN0PFR1cGxlPEV4cHJlc3Npb248RnVuYzxUU2VhcmNoVHlwZSwgb2JqZWN0Pj4sIEV4cHJlc3Npb248RnVuYzxUU2VhcmNoVHlwZSwgb2JqZWN0Pj4+PigpO1xyXG5cclxuICAgICAgICBwdWJsaWMgU2VhcmNoVHlwZShzdHJpbmcgbmFtZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIE5hbWUgPSBuYW1lO1xyXG4gICAgICAgICAgICBJbmRleE5hbWUgPSBOYW1lLlRvTG93ZXJJbnZhcmlhbnQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBTZWFyY2hUeXBlPFRTZWFyY2hUeXBlPiBJbmhlcml0PFQ+KFxyXG4gICAgICAgICAgICBFeHByZXNzaW9uPEZ1bmM8VFNlYXJjaFR5cGUsIFQ+PiBwcm92aWRlckZpZWxkLFxyXG4gICAgICAgICAgICBFeHByZXNzaW9uPEZ1bmM8VFNlYXJjaFR5cGUsIFQ+PiBzZWFyY2hGaWVsZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIFNlYXJjaFR5cGU8VFNlYXJjaFR5cGU+IENvcHlUbyhcclxuICAgICAgICAgICAgRXhwcmVzc2lvbjxGdW5jPFRTZWFyY2hUeXBlLCBvYmplY3Q+PiBzb3VyY2VGaWVsZCxcclxuICAgICAgICAgICAgRXhwcmVzc2lvbjxGdW5jPFRTZWFyY2hUeXBlLCBvYmplY3Q+PiB0YXJnZXRGaWVsZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIFNlYXJjaFR5cGU8VFNlYXJjaFR5cGU+IEV4Y2x1ZGUoXHJcbiAgICAgICAgICAgIEV4cHJlc3Npb248RnVuYzxUU2VhcmNoVHlwZSwgb2JqZWN0Pj4gc2VhcmNoRmllbGQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBTZWFyY2hUeXBlPFRTZWFyY2hUeXBlPiBTZWFyY2hBczxUPihcclxuICAgICAgICAgICAgRXhwcmVzc2lvbjxGdW5jPFRTZWFyY2hUeXBlLCBUPj4gc2VhcmNoRmllbGQsXHJcbiAgICAgICAgICAgIFNlYXJjaEJlaGF2aW9yIGJlaGF2aW9yKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLkxpbnEuRXhwcmVzc2lvbnM7XHJcbnVzaW5nIFN5c3RlbS5SdW50aW1lLkNvbXBpbGVyU2VydmljZXM7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIENvZGV4XHJcbntcclxuICAgIC8qXHJcbiAgICAgKiBUeXBlcyBpbiB0aGlzIGZpbGUgZGVmaW5lIHNlYXJjaCBiZWhhdmlvcnMuIENoYW5nZXMgc2hvdWxkIGJlIG1hZGUgd2l0aCBjYXV0aW9uIGFzIHRoZXkgY2FuIGFmZmVjdFxyXG4gICAgICogdGhlIG1hcHBpbmcgc2NoZW1hIGZvciBpbmRpY2VzIGFuZCB3aWxsIGdlbmVyYWxseSBuZWVkIHRvIGJlIGJhY2t3YXJkIGNvbXBhdGlibGUuXHJcbiAgICAgKiBBZGRpdGlvbnMgc2hvdWxkIGJlIGdlbmVyYWxseSBzYWZlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY2xhc3MgU2VhcmNoVHlwZXNcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IExpc3Q8U2VhcmNoVHlwZT4gUmVnaXN0ZXJlZFNlYXJjaFR5cGVzID0gbmV3IExpc3Q8U2VhcmNoVHlwZT4oKTtcclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBTZWFyY2hUeXBlIERlZmluaXRpb24gPSBTZWFyY2hUeXBlLkNyZWF0ZTxJRGVmaW5pdGlvblNlYXJjaE1vZGVsPihSZWdpc3RlcmVkU2VhcmNoVHlwZXMpO1xyXG4gICAgICAgIC8vLkNvcHlUbyhkcyA9PiBkcy5EZWZpbml0aW9uLk1vZGlmaWVycywgZHMgPT4gZHMuS2V5d29yZHMpXHJcbiAgICAgICAgLy8uQ29weVRvKGRzID0+IGRzLkRlZmluaXRpb24uS2luZCwgZHMgPT4gZHMuS2luZClcclxuICAgICAgICAvLy5Db3B5VG8oZHMgPT4gZHMuRGVmaW5pdGlvbi5FeGNsdWRlRnJvbURlZmF1bHRTZWFyY2gsIGRzID0+IGRzLkV4Y2x1ZGVGcm9tRGVmYXVsdFNlYXJjaClcclxuICAgICAgICAvLy5Db3B5VG8oZHMgPT4gZHMuRGVmaW5pdGlvbi5LaW5kLCBkcyA9PiBkcy5LZXl3b3JkcylcclxuICAgICAgICAvLy5Db3B5VG8oZHMgPT4gZHMuRGVmaW5pdGlvbi5TaG9ydE5hbWUsIGRzID0+IGRzLlNob3J0TmFtZSlcclxuICAgICAgICAvLy8vLkNvcHlUbyhkcyA9PiBkcy5MYW5ndWFnZSwgZHMgPT4gZHMuS2V5d29yZHMpXHJcbiAgICAgICAgLy8uQ29weVRvKGRzID0+IGRzLkRlZmluaXRpb24uUHJvamVjdElkLCBkcyA9PiBkcy5Qcm9qZWN0SWQpXHJcbiAgICAgICAgLy8uQ29weVRvKGRzID0+IGRzLkRlZmluaXRpb24uUHJvamVjdElkLCBkcyA9PiBkcy5LZXl3b3Jkcyk7XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgU2VhcmNoVHlwZSBSZWZlcmVuY2UgPSBTZWFyY2hUeXBlLkNyZWF0ZTxJUmVmZXJlbmNlU2VhcmNoTW9kZWw+KFJlZ2lzdGVyZWRTZWFyY2hUeXBlcyk7XHJcbiAgICAgICAgLy8uQ29weVRvKHJzID0+IHJzLlNwYW5zLkZpcnN0KCkuUmVmZXJlbmNlLCBycyA9PiBycy5SZWZlcmVuY2UpO1xyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIFNlYXJjaFR5cGUgVGV4dFNvdXJjZSA9IFNlYXJjaFR5cGUuQ3JlYXRlPElUZXh0U291cmNlU2VhcmNoTW9kZWw+KFJlZ2lzdGVyZWRTZWFyY2hUeXBlcyk7XHJcbiAgICAgICAgLy8uQ29weVRvKHNzID0+IHNzLkZpbGUuU291cmNlRmlsZS5Db250ZW50LCBzcyA9PiBzcy5Db250ZW50KVxyXG4gICAgICAgIC8vLkNvcHlUbyhzcyA9PiBzcy5GaWxlLlNvdXJjZUZpbGUuSW5mby5SZXBvUmVsYXRpdmVQYXRoLCBzcyA9PiBzcy5SZXBvUmVsYXRpdmVQYXRoKVxyXG4gICAgICAgIC8vLkNvcHlUbyhzcyA9PiBzcy5GaWxlLlByb2plY3RJZCwgc3MgPT4gc3MuUHJvamVjdElkKVxyXG4gICAgICAgIC8vLkNvcHlUbyhzcyA9PiBzcy5GaWxlLkluZm8uUGF0aCwgc3MgPT4gc3MuRmlsZVBhdGgpO1xyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIFNlYXJjaFR5cGUgQm91bmRTb3VyY2UgPSBTZWFyY2hUeXBlLkNyZWF0ZTxJQm91bmRTb3VyY2VTZWFyY2hNb2RlbD4oUmVnaXN0ZXJlZFNlYXJjaFR5cGVzKTtcclxuICAgICAgICAgICAgLy8uQ29weVRvKHNzID0+IHNzLkZpbGUuU291cmNlRmlsZS5Db250ZW50LCBzcyA9PiBzcy5Db250ZW50KVxyXG4gICAgICAgICAgICAvLy5Db3B5VG8oc3MgPT4gc3MuRmlsZS5Tb3VyY2VGaWxlLkluZm8uUmVwb1JlbGF0aXZlUGF0aCwgc3MgPT4gc3MuUmVwb1JlbGF0aXZlUGF0aClcclxuICAgICAgICAgICAgLy8uQ29weVRvKHNzID0+IHNzLkJpbmRpbmdJbmZvLlByb2plY3RJZCwgc3MgPT4gc3MuUHJvamVjdElkKVxyXG4gICAgICAgICAgICAvLy5Db3B5VG8oc3MgPT4gc3MuRmlsZVBhdGgsIHNzID0+IHNzLkZpbGVQYXRoKTtcclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBTZWFyY2hUeXBlIExhbmd1YWdlID0gU2VhcmNoVHlwZS5DcmVhdGU8SUxhbmd1YWdlU2VhcmNoTW9kZWw+KFJlZ2lzdGVyZWRTZWFyY2hUeXBlcyk7XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgU2VhcmNoVHlwZSBSZXBvc2l0b3J5ID0gU2VhcmNoVHlwZS5DcmVhdGU8SVJlcG9zaXRvcnlTZWFyY2hNb2RlbD4oUmVnaXN0ZXJlZFNlYXJjaFR5cGVzKTtcclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBTZWFyY2hUeXBlIFByb2plY3QgPSBTZWFyY2hUeXBlLkNyZWF0ZTxJUHJvamVjdFNlYXJjaE1vZGVsPihSZWdpc3RlcmVkU2VhcmNoVHlwZXMpXHJcbiAgICAgICAgICAgIC5FeGNsdWRlKHNtID0+IFN5c3RlbS5MaW5xLkVudW1lcmFibGUuRmlyc3Q8Z2xvYmFsOjpDb2RleC5JUmVmZXJlbmNlZFByb2plY3Q+KHNtLlByb2plY3QuUHJvamVjdFJlZmVyZW5jZXMpLkRlZmluaXRpb25zKTtcclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBTZWFyY2hUeXBlIENvbW1pdCA9IFNlYXJjaFR5cGUuQ3JlYXRlPElDb21taXRTZWFyY2hNb2RlbD4oUmVnaXN0ZXJlZFNlYXJjaFR5cGVzKTtcclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBTZWFyY2hUeXBlIENvbW1pdEZpbGVzID0gU2VhcmNoVHlwZS5DcmVhdGU8SUNvbW1pdEZpbGVzU2VhcmNoTW9kZWw+KFJlZ2lzdGVyZWRTZWFyY2hUeXBlcyk7XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgU2VhcmNoVHlwZSBQcm9qZWN0UmVmZXJlbmNlID0gU2VhcmNoVHlwZS5DcmVhdGU8SVByb2plY3RSZWZlcmVuY2VTZWFyY2hNb2RlbD4oUmVnaXN0ZXJlZFNlYXJjaFR5cGVzKTtcclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBTZWFyY2hUeXBlIFByb3BlcnR5ID0gU2VhcmNoVHlwZS5DcmVhdGU8SVByb3BlcnR5U2VhcmNoTW9kZWw+KFJlZ2lzdGVyZWRTZWFyY2hUeXBlcyk7XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgU2VhcmNoVHlwZSBTdG9yZWRGaWx0ZXIgPSBTZWFyY2hUeXBlLkNyZWF0ZTxJU3RvcmVkRmlsdGVyPihSZWdpc3RlcmVkU2VhcmNoVHlwZXMpO1xyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIFNlYXJjaFR5cGUgUmVnaXN0ZXJlZEVudGl0eSA9IFNlYXJjaFR5cGUuQ3JlYXRlPElSZWdpc3RlcmVkRW50aXR5PihSZWdpc3RlcmVkU2VhcmNoVHlwZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyBJbiBvcmRlciB0byBjb21wdXRlIGEgc3RhYmxlIGludGVncmFsIGlkIGZvciBlYWNoIGVudGl0eS4gVGhpcyB0eXBlIGlzIHVzZWQgdG8gc3RvcmUgaW50byBhICdmb2xsb3cnIGluZGV4IHdoaWNoXHJcbiAgICAvLy8gc3RvcmVzIGVudGl0aWVzIG9mIHRoaXMgdHlwZSB1c2luZyB0aGUgPHNlZSBjcmVmPVwiSVNlYXJjaEVudGl0eS5VaWRcIi8+IG9mIHRoZSBjb3JyZXNwb25kaW5nIHNlYXJjaCBlbnRpdHkuIFRoZW4gdGhlXHJcbiAgICAvLy8gc2VxdWVuY2UgbnVtYmVyIGFzc2lnbmVkIGJ5IEVsYXN0aWNTZWFyY2ggaXMgdXNlZCBhcyB0aGUgc2hhcmQgc3RhYmxlIGlkICg8c2VlIGNyZWY9XCJJU2VhcmNoRW50aXR5LlNoYXJkU3RhYmxlSWRcIi8+KVxyXG4gICAgLy8vIGZvciB0aGUgZW50aXR5LiBUaGlzIGFwcHJvYWNoIGlzIHVzZWQgaW4gb3JkZXIgdG8gZW5zdXJlIHRoYXQgdGhlIHN0YWJsZSBpZCBhcHBlYXJzIGFzIGFuIGV4cGxpY2l0IGZpZWxkIGluIHRoZSBkb2N1bWVudCByYXRoZXJcclxuICAgIC8vLyB3aGljaCBhbGxvd3MgY29uZmlndXJhdGlvbiBvZiBob3cgdGhlIGZpZWxkIGlzIGluZGV4ZWQgKG5vdCB0cnVlIGZvciBzZXF1ZW5jZSBudW1iZXIgZmllbGQgd2l0aG91dCBjb2RlIGNoYW5nZXMgdG8gRVMpLlxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBpbnRlcmZhY2UgSVJlZ2lzdGVyZWRFbnRpdHkgOiBJU2VhcmNoRW50aXR5XHJcbiAgICB7XHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgZGF0ZSBpbiB3aGljaCB0aGUgZW50aXR5IHdhcyByZWdpc3RlcmVkIChpLmUuIGFkZGVkIHRvIHRoZSBzdG9yZSlcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIERhdGVUaW1lIERhdGVBZGRlZCB7IGdldDsgc2V0OyB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIERlZmluZXMgYSBzdG9yZWQgZmlsdGVyIHdoaWNoIG1hdGNoZXMgZW50aXRpZXMgaW4gYSBwYXJ0aWN1bGFyIGluZGV4IHNoYXJkIGluIGEgc3RhYmxlIG1hbm5lclxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBpbnRlcmZhY2UgSVN0b3JlZEZpbHRlciA6IElTZWFyY2hFbnRpdHlcclxuICAgIHtcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSB0aW1lIG9mIHRoZSBsYXN0IHVwZGF0ZSB0byB0aGUgc3RvcmVkIGZpbHRlclxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgRGF0ZVRpbWUgRGF0ZVVwZGF0ZWQgeyBnZXQ7IHNldDsgfVxyXG5cclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBuYW1lIG9mIHRoZSBpbmRleCB0byB3aGljaCB0aGUgc3RvcmVkIGZpbHRlciBhcHBsaWVzXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBzdHJpbmcgSW5kZXhOYW1lIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG5cclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBzaGFyZCB0byB3aGljaCB0aGUgc3RvcmVkIGZpbHRlciBhcHBsaWVzXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBpbnQgU2hhcmQgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcblxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gTGlzdCBvZiBzdGFibGUgaWRzIHRvIGluY2x1ZGUgaW4gdGhlIHN0b3JlZCBmaWx0ZXIuXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBJUmVhZE9ubHlMaXN0PGxvbmc+IFN0YWJsZUlkcyB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBMaXN0IG9mIHVpZHMgdG8gZm9yIHN0b3JlZCBmaWx0ZXJzIHdoaWNoIHdpbGwgYmUgdW5pb25lZCB3aXRoIHRoZSBnaXZlbiBzdG9yZWQgZmlsdGVyXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBJUmVhZE9ubHlMaXN0PHN0cmluZz4gQmFzZVVpZHMgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcblxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gTGlzdCBvZiBzdG9yZWQgZmlsdGVycyB3aGljaCB3aWxsIGJlIHVuaW9uZWQgd2l0aCB0aGUgZ2l2ZW4gc3RvcmVkIGZpbHRlclxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgSVJlYWRPbmx5TGlzdDxieXRlW10+IFVuaW9uRmlsdGVycyB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgc3RvcmVkIGZpbHRlciBiaXQgc2V0IHdoaWNoIG1hdGNoZXMgdGhlIHN0b3JlZCBmaWx0ZXIgZG9jdW1lbnRzXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBieXRlW10gRmlsdGVyIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG5cclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBoYXNoIG9mIDxzZWUgY3JlZj1cIkZpbHRlclwiLz5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHN0cmluZyBGaWx0ZXJIYXNoIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG5cclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBjb3VudCBvZiBlbGVtZW50cyBtYXRjaGVkIGJ5IDxzZWUgY3JlZj1cIkZpbHRlclwiLz5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIGludCBGaWx0ZXJDb3VudCB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW50ZXJmYWNlIElEZWZpbml0aW9uU2VhcmNoTW9kZWwgOiBJU2VhcmNoRW50aXR5XHJcbiAgICB7XHJcbiAgICAgICAgSURlZmluaXRpb25TeW1ib2wgRGVmaW5pdGlvbiB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuXHJcbiAgICAgICAgLy8gVE9ETzogTm90IHN1cmUgdGhhdCB0aGlzIGlzIGFjdHVhbGx5IG5lZWRlZFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gS2V5d29yZHMgYXJlIGFkZGl0aW9uYWwgdGVybXMgd2hpY2ggY2FuIGJlIHVzZWQgdG8gZmluZCBhIGdpdmVuIHN5bWJvbC5cclxuICAgICAgICAvLy8gTk9URTogS2V5d29yZHMgY2FuIG9ubHkgYmUgdXNlZCB0byBzZWxlY3QgZnJvbSBzeW1ib2xzIHdoaWNoIGhhdmVcclxuICAgICAgICAvLy8gYSBwcmltYXJ5IHRlcm0gbWF0Y2hcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIFtTZWFyY2hCZWhhdmlvcihTZWFyY2hCZWhhdmlvci5Ob3JtYWxpemVkS2V5d29yZCldXHJcbiAgICAgICAgSVJlYWRPbmx5TGlzdDxzdHJpbmc+IEtleXdvcmRzIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbnRlcmZhY2UgSUxhbmd1YWdlU2VhcmNoTW9kZWwgOiBJU2VhcmNoRW50aXR5XHJcbiAgICB7XHJcbiAgICAgICAgSUxhbmd1YWdlSW5mbyBMYW5ndWFnZSB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW50ZXJmYWNlIElSZWZlcmVuY2VTZWFyY2hNb2RlbCA6IElQcm9qZWN0RmlsZVNjb3BlRW50aXR5LCBJU2VhcmNoRW50aXR5XHJcbiAgICB7XHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgcmVmZXJlbmNlIHN5bWJvbFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgSUNvZGVTeW1ib2wgUmVmZXJlbmNlIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG5cclxuICAgICAgICAvLyBUT0RPOiBOZWVkIHNvbWUgc29ydCBvZiBvdmVycmlkZSBmb3Igc2VhcmNoaW5nIFJlbGF0ZWREZWZpbml0aW9uIG9mIHRoZVxyXG4gICAgICAgIC8vIFJlZmVyZW5jZVNwYW5cclxuICAgICAgICBbU2VhcmNoQmVoYXZpb3IoU2VhcmNoQmVoYXZpb3IuTm9uZSldXHJcbiAgICAgICAgW1JlYWRPbmx5TGlzdF1cclxuICAgICAgICBbQ29lcmNlR2V0XVxyXG4gICAgICAgIElSZWFkT25seUxpc3Q8SVN5bWJvbFNwYW4+IFNwYW5zIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG5cclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIENvbXByZXNzZWQgbGlzdCBvZiBzcGFuc1xyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgW1NlYXJjaEJlaGF2aW9yKFNlYXJjaEJlaGF2aW9yLk5vbmUpXVxyXG4gICAgICAgIElTeW1ib2xMaW5lU3Bhbkxpc3QgQ29tcHJlc3NlZFNwYW5zIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbnRlcmZhY2UgSVNvdXJjZVNlYXJjaE1vZGVsQmFzZSA6IElTZWFyY2hFbnRpdHlcclxuICAgIHtcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIEluZm9ybWF0aW9uIGFib3V0IHRoZSBzb3VyY2UgZmlsZSBmcm9tIHNvdXJjZSBjb250cm9sIHByb3ZpZGVyIChtYXkgYmUgbnVsbClcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIElTb3VyY2VDb250cm9sRmlsZUluZm8gU291cmNlQ29udHJvbEluZm8geyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGludGVyZmFjZSBJQm91bmRTb3VyY2VTZWFyY2hNb2RlbCA6IElTb3VyY2VTZWFyY2hNb2RlbEJhc2VcclxuICAgIHtcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSB1bmlxdWUgaWRlbnRpZmllciBvZiB0aGUgYXNzb2NpYXRlZCA8c2VlIGNyZWY9XCJJU291cmNlRmlsZVwiLz5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHN0cmluZyBUZXh0VWlkIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG5cclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIEluZm9ybWF0aW9uIGFib3V0IHRoZSBzb3VyY2UgZmlsZVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgSVNvdXJjZUZpbGVJbmZvIFNvdXJjZUluZm8geyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcblxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGJpbmRpbmcgaW5mb1xyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgSUJvdW5kU291cmNlSW5mbyBCaW5kaW5nSW5mbyB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBDb21wcmVzc2VkIGxpc3Qgb2YgY2xhc3NpZmljYXRpb24gc3BhbnNcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIFtTZWFyY2hCZWhhdmlvcihTZWFyY2hCZWhhdmlvci5Ob25lKV1cclxuICAgICAgICBJQ2xhc3NpZmljYXRpb25MaXN0IENvbXByZXNzZWRDbGFzc2lmaWNhdGlvbnMgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcblxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gQ29tcHJlc3NlZCBsaXN0IG9mIHJlZmVyZW5jZSBzcGFuc1xyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgW1NlYXJjaEJlaGF2aW9yKFNlYXJjaEJlaGF2aW9yLk5vbmUpXVxyXG4gICAgICAgIElSZWZlcmVuY2VMaXN0IENvbXByZXNzZWRSZWZlcmVuY2VzIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbnRlcmZhY2UgSVRleHRTb3VyY2VTZWFyY2hNb2RlbCA6IElTb3VyY2VTZWFyY2hNb2RlbEJhc2VcclxuICAgIHtcclxuICAgICAgICBJU291cmNlRmlsZSBGaWxlIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbnRlcmZhY2UgSVJlcG9zaXRvcnlTZWFyY2hNb2RlbCA6IElTZWFyY2hFbnRpdHlcclxuICAgIHtcclxuICAgICAgICBJUmVwb3NpdG9yeSBSZXBvc2l0b3J5IHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbnRlcmZhY2UgSVByb2plY3RTZWFyY2hNb2RlbCA6IElTZWFyY2hFbnRpdHlcclxuICAgIHtcclxuICAgICAgICBJUHJvamVjdCBQcm9qZWN0IHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbnRlcmZhY2UgSVByb2plY3RSZWZlcmVuY2VTZWFyY2hNb2RlbCA6IElQcm9qZWN0U2NvcGVFbnRpdHksIElTZWFyY2hFbnRpdHlcclxuICAgIHtcclxuICAgICAgICBJUmVmZXJlbmNlZFByb2plY3QgUHJvamVjdFJlZmVyZW5jZSB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW50ZXJmYWNlIElDb21taXRTZWFyY2hNb2RlbCA6IElTZWFyY2hFbnRpdHlcclxuICAgIHtcclxuICAgICAgICBJQ29tbWl0IENvbW1pdCB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuICAgIH1cclxuXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8gVGhlIHNldCBvZiBmaWxlcyBwcmVzZW50IGluIHRoZSByZXBvc2l0b3J5IGF0IGEgZ2l2ZW4gY29tbWl0LlxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBpbnRlcmZhY2UgSUNvbW1pdEZpbGVzU2VhcmNoTW9kZWwgOiBJQ29tbWl0U2NvcGVFbnRpdHksIElSZXBvU2NvcGVFbnRpdHksIElTZWFyY2hFbnRpdHlcclxuICAgIHtcclxuICAgICAgICBJUmVhZE9ubHlMaXN0PElDb21taXRGaWxlTGluaz4gQ29tbWl0RmlsZXMgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxudXNpbmcgQ29kZXguT2JqZWN0TW9kZWw7XHJcblxyXG5uYW1lc3BhY2UgQ29kZXguVXRpbGl0aWVzXHJcbntcclxuICAgIHB1YmxpYyBzdGF0aWMgcGFydGlhbCBjbGFzcyBDb2xsZWN0aW9uVXRpbGl0aWVzXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIGNsYXNzIEVtcHR5PFQ+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IExpc3Q8VD4gTGlzdCA9IG5ldyBMaXN0PFQ+KDApO1xyXG5cclxuICAgICAgICAgICAgcHVibGljIHN0YXRpYyByZWFkb25seSBUW10gQXJyYXkgPSBuZXcgVFswXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIENvZGV4LlV0aWxpdGllc1xyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIGNsYXNzIFNlcmlhbGl6YXRpb25VdGlsaXRpZXNcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIFQgQXNzaWduRHVwbGljYXRlPFQ+KFQgdmFsdWUsIHJlZiBUIGxhc3RWYWx1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChFcXVhbGl0eUNvbXBhcmVyPFQ+LkRlZmF1bHQuRXF1YWxzKHZhbHVlLCBkZWZhdWx0KFQpKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxhc3RWYWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxhc3RWYWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIFQgUmVtb3ZlRHVwbGljYXRlPFQ+KFQgdmFsdWUsIHJlZiBUIGxhc3RWYWx1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChFcXVhbGl0eUNvbXBhcmVyPFQ+LkRlZmF1bHQuRXF1YWxzKHZhbHVlLCBkZWZhdWx0KFQpKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHQoVCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsYXN0VmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmc7XHJcbnVzaW5nIFN5c3RlbS5XaW5kb3dzLlRocmVhZGluZztcclxuI2lmIEJSSURHRVxyXG51c2luZyBDb2RleC5WaWV3LldlYjtcclxuI2Vsc2VcclxudXNpbmcgQ29kZXguRWxhc3RpY1NlYXJjaC5TZWFyY2g7XHJcbiNlbmRpZlxyXG5uYW1lc3BhY2UgQ29kZXguVmlld1xyXG57XHJcbiAgICBwYXJ0aWFsIGNsYXNzIEFwcFxyXG4gICAge1xyXG5cclxuICAgICAgICBwdWJsaWMgQXBwKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFN0eWxlcy5Jbml0aWFsaXplKCk7XHJcbiNpZiBCUklER0VcclxuICAgICAgICAgICAgLy8gVE9ETzogVGhpcyBzaG91bGQgYmUgY29uZmlndXJhYmxlIHRocm91Z2ggYnVpbGQgcHJvcGVydGllcyBzb21laG93XHJcbiAgICAgICAgICAgIENvZGV4UHJvdmlkZXIuSW5zdGFuY2UgPSBuZXcgV2ViQXBpQ29kZXgoXCJodHRwOi8vbG9jYWxob3N0Ojk0OTEvYXBpL2NvZGV4L1wiKTtcclxuI2Vsc2VcclxuICAgICAgICAgICAgLy8gVE9ETzogVGhpcyBzaG91bGQgYmUgY29uZmlndXJhYmxlIHRocm91Z2ggYnVpbGQgcHJvcGVydGllcyBzb21laG93XHJcbiAgICAgICAgICAgIENvZGV4UHJvdmlkZXIuSW5zdGFuY2UgPSBuZXcgRWxhc3RpY1NlYXJjaENvZGV4KG5ldyBFbGFzdGljU2VhcmNoLkVsYXN0aWNTZWFyY2hTdG9yZUNvbmZpZ3VyYXRpb24oKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBQcmVmaXggPSBcImFwcHRlc3RcIlxyXG4gICAgICAgICAgICB9LCBuZXcgRWxhc3RpY1NlYXJjaC5FbGFzdGljU2VhcmNoU2VydmljZShuZXcgRWxhc3RpY1NlYXJjaC5FbGFzdGljU2VhcmNoU2VydmljZUNvbmZpZ3VyYXRpb24oXCJodHRwOi8vbG9jYWxob3N0OjkyMDBcIikpKTtcclxuI2VuZGlmXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIENvZGV4LlNkay5TZWFyY2g7XHJcbnVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5PYmplY3RNb2RlbDtcclxudXNpbmcgU3lzdGVtLkNvbXBvbmVudE1vZGVsO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlJ1bnRpbWUuQ29tcGlsZXJTZXJ2aWNlcztcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5XaW5kb3dzO1xyXG5cclxubmFtZXNwYWNlIENvZGV4LlZpZXdcclxue1xyXG4gICAgcHVibGljIGNsYXNzIFRleHRTcGFuU2VhcmNoUmVzdWx0Vmlld01vZGVsIDogRmlsZUl0ZW1SZXN1bHRWaWV3TW9kZWxcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgSVRleHRMaW5lU3BhblJlc3VsdCBTZWFyY2hSZXN1bHQgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBpbnQgTGluZU51bWJlciB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIFByZWZpeFRleHQgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcbiAgICAgICAgcHVibGljIHN0cmluZyBDb250ZW50VGV4dCB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIFN1ZmZpeFRleHQgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBUZXh0U3BhblNlYXJjaFJlc3VsdFZpZXdNb2RlbChJVGV4dExpbmVTcGFuUmVzdWx0IHJlc3VsdClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFNlYXJjaFJlc3VsdCA9IHJlc3VsdDtcclxuICAgICAgICAgICAgdmFyIHJlZmVycmluZ1NwYW4gPSByZXN1bHQuVGV4dFNwYW47XHJcbiAgICAgICAgICAgIExpbmVOdW1iZXIgPSByZWZlcnJpbmdTcGFuLkxpbmVOdW1iZXI7XHJcbiAgICAgICAgICAgIHN0cmluZyBsaW5lU3BhblRleHQgPSByZWZlcnJpbmdTcGFuLkxpbmVTcGFuVGV4dDtcclxuICAgICAgICAgICAgaWYgKGxpbmVTcGFuVGV4dCAhPSBudWxsKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBQcmVmaXhUZXh0ID0gbGluZVNwYW5UZXh0LlN1YnN0cmluZygwLCByZWZlcnJpbmdTcGFuLkxpbmVTcGFuU3RhcnQpO1xyXG4gICAgICAgICAgICAgICAgQ29udGVudFRleHQgPSBsaW5lU3BhblRleHQuU3Vic3RyaW5nKHJlZmVycmluZ1NwYW4uTGluZVNwYW5TdGFydCwgcmVmZXJyaW5nU3Bhbi5MZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgU3VmZml4VGV4dCA9IGxpbmVTcGFuVGV4dC5TdWJzdHJpbmcocmVmZXJyaW5nU3Bhbi5MaW5lU3BhblN0YXJ0ICsgcmVmZXJyaW5nU3Bhbi5MZW5ndGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBQcm9qZWN0SXRlbVJlc3VsdFZpZXdNb2RlbFxyXG4gICAge1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBGaWxlSXRlbVJlc3VsdFZpZXdNb2RlbFxyXG4gICAge1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBGaWxlUmVzdWx0c1ZpZXdNb2RlbCA6IFByb2plY3RJdGVtUmVzdWx0Vmlld01vZGVsXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIHN0cmluZyBQYXRoIHsgZ2V0OyBzZXQ7IH1cclxuICAgICAgICBwdWJsaWMgSVJlYWRPbmx5TGlzdDxGaWxlSXRlbVJlc3VsdFZpZXdNb2RlbD4gSXRlbXMgeyBnZXQ7IHNldDsgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBTeW1ib2xSZXN1bHRWaWV3TW9kZWwgOiBQcm9qZWN0SXRlbVJlc3VsdFZpZXdNb2RlbFxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgU2hvcnROYW1lIHsgZ2V0OyBzZXQ7IH1cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIERpc3BsYXlOYW1lIHsgZ2V0OyBzZXQ7IH1cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIFN5bWJvbEtpbmQgeyBnZXQ7IHNldDsgfVxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgUHJvamVjdElkIHsgZ2V0OyBzZXQ7IH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0cmluZyBJbWFnZU1vbmlrZXIgeyBnZXQ7IHNldDsgfVxyXG4gICAgICAgIHB1YmxpYyBpbnQgU29ydE9yZGVyIHsgZ2V0OyBzZXQ7IH1cclxuICAgICAgICBwdWJsaWMgaW50IElkZW50aWZpZXJMZW5ndGgge2dldHtyZXR1cm4gU2hvcnROYW1lLkxlbmd0aDt9fVxyXG5cclxuICAgICAgICBwdWJsaWMgU3ltYm9sUmVzdWx0Vmlld01vZGVsKElEZWZpbml0aW9uU3ltYm9sIGVudHJ5KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgU2hvcnROYW1lID0gZW50cnkuU2hvcnROYW1lO1xyXG4gICAgICAgICAgICBEaXNwbGF5TmFtZSA9IGVudHJ5LkRpc3BsYXlOYW1lO1xyXG4gICAgICAgICAgICBQcm9qZWN0SWQgPSBlbnRyeS5Qcm9qZWN0SWQ7XHJcbiAgICAgICAgICAgIFN5bWJvbEtpbmQgPSBnbG9iYWw6OkJyaWRnZS5TY3JpcHQuVG9UZW1wKFwia2V5MVwiLGVudHJ5LktpbmQpIT1udWxsP2dsb2JhbDo6QnJpZGdlLlNjcmlwdC5Gcm9tVGVtcDxzdHJpbmc+KFwia2V5MVwiKS5Ub0xvd2VySW52YXJpYW50KCk6KHN0cmluZyludWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgUHJvamVjdEdyb3VwUmVzdWx0c1ZpZXdNb2RlbFxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgUHJvamVjdE5hbWUgeyBnZXQ7IHNldDsgfVxyXG4gICAgICAgIHB1YmxpYyBJUmVhZE9ubHlMaXN0PFByb2plY3RJdGVtUmVzdWx0Vmlld01vZGVsPiBJdGVtcyB7IGdldDsgc2V0OyB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsYXNzIFByb2plY3RSZXN1bHRzVmlld01vZGVsIDogTGVmdFBhbmVDb250ZW50XHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIExpc3Q8UHJvamVjdEdyb3VwUmVzdWx0c1ZpZXdNb2RlbD4gUHJvamVjdEdyb3VwcyB7IGdldDsgc2V0OyB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBQcm9qZWN0UmVzdWx0c1ZpZXdNb2RlbCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIFByb2plY3RSZXN1bHRzVmlld01vZGVsKHN0cmluZyBzZWFyY2hTdHJpbmcsIEluZGV4UXVlcnlIaXRzUmVzcG9uc2U8SVNlYXJjaFJlc3VsdD4gcmVzcG9uc2UpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBQcm9qZWN0R3JvdXBzID0gU3lzdGVtLkxpbnEuRW51bWVyYWJsZS5TZWxlY3Q8Z2xvYmFsOjpDb2RleC5TZGsuU2VhcmNoLklTZWFyY2hSZXN1bHQsZ2xvYmFsOjpDb2RleC5JRGVmaW5pdGlvblN5bWJvbD4ocmVzcG9uc2UuUmVzdWx0LkhpdHMsKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5TZGsuU2VhcmNoLklTZWFyY2hSZXN1bHQsIGdsb2JhbDo6Q29kZXguSURlZmluaXRpb25TeW1ib2w+KShzciA9PiBzci5EZWZpbml0aW9uKSkuR3JvdXBCeTxzdHJpbmc+KChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguSURlZmluaXRpb25TeW1ib2wsIHN0cmluZz4pKHNyID0+IHNyLlByb2plY3RJZCkpLlNlbGVjdDxnbG9iYWw6OkNvZGV4LlZpZXcuUHJvamVjdEdyb3VwUmVzdWx0c1ZpZXdNb2RlbD4oKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpTeXN0ZW0uTGlucS5Hcm91cGluZzxzdHJpbmcsIGdsb2JhbDo6Q29kZXguSURlZmluaXRpb25TeW1ib2w+LCBnbG9iYWw6OkNvZGV4LlZpZXcuUHJvamVjdEdyb3VwUmVzdWx0c1ZpZXdNb2RlbD4pKHByb2plY3RHcm91cCA9PiBuZXcgUHJvamVjdEdyb3VwUmVzdWx0c1ZpZXdNb2RlbCgpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFByb2plY3ROYW1lID0gcHJvamVjdEdyb3VwLktleSxcclxuICAgICAgICAgICAgICAgIEl0ZW1zID0gcHJvamVjdEdyb3VwLlNlbGVjdDxnbG9iYWw6OkNvZGV4LlZpZXcuU3ltYm9sUmVzdWx0Vmlld01vZGVsPigoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4LklEZWZpbml0aW9uU3ltYm9sLCBnbG9iYWw6OkNvZGV4LlZpZXcuU3ltYm9sUmVzdWx0Vmlld01vZGVsPikoc3ltYm9sID0+IG5ldyBTeW1ib2xSZXN1bHRWaWV3TW9kZWwoc3ltYm9sKSkpLlRvTGlzdCgpXHJcbiAgICAgICAgICAgIH0pKS5Ub0xpc3QoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsYXNzIENhdGVnb3J5R3JvdXBTZWFyY2hSZXN1bHRzVmlld01vZGVsXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIFZpc2liaWxpdHkgSGVhZGVyVmlzaWJpbGl0eSB7Z2V0e3JldHVybiBzdHJpbmcuSXNOdWxsT3JFbXB0eShIZWFkZXIpID8gVmlzaWJpbGl0eS5Db2xsYXBzZWQgOiBWaXNpYmlsaXR5LlZpc2libGU7fX1cclxuXHJcbiAgICAgICAgcHVibGljIHN0cmluZyBIZWFkZXIgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBQcm9qZWN0UmVzdWx0c1ZpZXdNb2RlbCBQcm9qZWN0UmVzdWx0cyB7IGdldDsgc2V0OyB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBDYXRlZ29yeUdyb3VwU2VhcmNoUmVzdWx0c1ZpZXdNb2RlbChzdHJpbmcgc2VhcmNoU3RyaW5nLCBJbmRleFF1ZXJ5SGl0c1Jlc3BvbnNlPElTZWFyY2hSZXN1bHQ+IHJlc3BvbnNlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHJlc3BvbnNlLlJlc3VsdDtcclxuXHJcbiAgICAgICAgICAgIFByb2plY3RSZXN1bHRzLlByb2plY3RHcm91cHMgPSBTeXN0ZW0uTGlucS5FbnVtZXJhYmxlLlNlbGVjdDxnbG9iYWw6OkNvZGV4LlNkay5TZWFyY2guSVNlYXJjaFJlc3VsdCxnbG9iYWw6OkNvZGV4LlNkay5TZWFyY2guSVRleHRMaW5lU3BhblJlc3VsdD4ocmVzdWx0LkhpdHMsKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5TZGsuU2VhcmNoLklTZWFyY2hSZXN1bHQsIGdsb2JhbDo6Q29kZXguU2RrLlNlYXJjaC5JVGV4dExpbmVTcGFuUmVzdWx0Pikoc3IgPT4gc3IuVGV4dExpbmUpKS5Hcm91cEJ5PHN0cmluZz4oKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5TZGsuU2VhcmNoLklUZXh0TGluZVNwYW5SZXN1bHQsIHN0cmluZz4pKHNyID0+IHNyLlByb2plY3RJZCkpLlNlbGVjdDxnbG9iYWw6OkNvZGV4LlZpZXcuUHJvamVjdEdyb3VwUmVzdWx0c1ZpZXdNb2RlbD4oKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpTeXN0ZW0uTGlucS5Hcm91cGluZzxzdHJpbmcsIGdsb2JhbDo6Q29kZXguU2RrLlNlYXJjaC5JVGV4dExpbmVTcGFuUmVzdWx0PiwgZ2xvYmFsOjpDb2RleC5WaWV3LlByb2plY3RHcm91cFJlc3VsdHNWaWV3TW9kZWw+KShwcm9qZWN0R3JvdXAgPT4gbmV3IFByb2plY3RHcm91cFJlc3VsdHNWaWV3TW9kZWwoKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBQcm9qZWN0TmFtZSA9IHByb2plY3RHcm91cC5LZXksXHJcbiAgICAgICAgICAgICAgICBJdGVtcyA9IHByb2plY3RHcm91cC5Hcm91cEJ5PHN0cmluZz4oKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5TZGsuU2VhcmNoLklUZXh0TGluZVNwYW5SZXN1bHQsIHN0cmluZz4pKHNyID0+IHNyLlByb2plY3RSZWxhdGl2ZVBhdGgpKS5TZWxlY3Q8Z2xvYmFsOjpDb2RleC5WaWV3LkZpbGVSZXN1bHRzVmlld01vZGVsPigoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OlN5c3RlbS5MaW5xLkdyb3VwaW5nPHN0cmluZywgZ2xvYmFsOjpDb2RleC5TZGsuU2VhcmNoLklUZXh0TGluZVNwYW5SZXN1bHQ+LCBnbG9iYWw6OkNvZGV4LlZpZXcuRmlsZVJlc3VsdHNWaWV3TW9kZWw+KShmaWxlR3JvdXAgPT4gbmV3IEZpbGVSZXN1bHRzVmlld01vZGVsKClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBQYXRoID0gZmlsZUdyb3VwLktleSxcclxuICAgICAgICAgICAgICAgICAgICBJdGVtcyA9IGZpbGVHcm91cC5TZWxlY3Q8Z2xvYmFsOjpDb2RleC5WaWV3LlRleHRTcGFuU2VhcmNoUmVzdWx0Vmlld01vZGVsPigoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4LlNkay5TZWFyY2guSVRleHRMaW5lU3BhblJlc3VsdCwgZ2xvYmFsOjpDb2RleC5WaWV3LlRleHRTcGFuU2VhcmNoUmVzdWx0Vmlld01vZGVsPikoc3IgPT4gbmV3IFRleHRTcGFuU2VhcmNoUmVzdWx0Vmlld01vZGVsKHNyKSkpLlRvTGlzdCgpXHJcbiAgICAgICAgICAgICAgICB9KSkuVG9MaXN0KClcclxuICAgICAgICAgICAgfSkpLlRvTGlzdCgpO1xyXG5cclxuICAgICAgICAgICAgSGVhZGVyID0gc3RyaW5nLkZvcm1hdChcInswfSB0ZXh0IHNlYXJjaCBoaXRzIGZvciAnezF9J1wiLHJlc3VsdC5IaXRzLkNvdW50LHNlYXJjaFN0cmluZyk7XHJcbiAgICAgICAgfVxyXG5cbiAgICBcbnByaXZhdGUgUHJvamVjdFJlc3VsdHNWaWV3TW9kZWwgX19Qcm9wZXJ0eV9fSW5pdGlhbGl6ZXJfX1Byb2plY3RSZXN1bHRzPW5ldyBQcm9qZWN0UmVzdWx0c1ZpZXdNb2RlbCgpO31cclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgQ2F0ZWdvcml6ZWRTZWFyY2hSZXN1bHRzVmlld01vZGVsIDogTGVmdFBhbmVDb250ZW50XHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIExpc3Q8Q2F0ZWdvcnlHcm91cFNlYXJjaFJlc3VsdHNWaWV3TW9kZWw+IENhdGVnb3JpZXMgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBDYXRlZ29yaXplZFNlYXJjaFJlc3VsdHNWaWV3TW9kZWwoc3RyaW5nIHNlYXJjaFN0cmluZywgSW5kZXhRdWVyeUhpdHNSZXNwb25zZTxJU2VhcmNoUmVzdWx0PiByZXNwb25zZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIENhdGVnb3JpZXMgPSBnbG9iYWw6OkJyaWRnZS5TY3JpcHQuQ2FsbEZvcihuZXcgTGlzdDxDYXRlZ29yeUdyb3VwU2VhcmNoUmVzdWx0c1ZpZXdNb2RlbD4oKSwoX28xKT0+e19vMS5BZGQobmV3IENhdGVnb3J5R3JvdXBTZWFyY2hSZXN1bHRzVmlld01vZGVsKHNlYXJjaFN0cmluZywgcmVzcG9uc2UpKTtyZXR1cm4gX28xO30pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW50ZXJmYWNlIExlZnRQYW5lQ29udGVudFxyXG4gICAge1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBMZWZ0UGFuZVZpZXdNb2RlbCA6IE5vdGlmeVByb3BlcnR5Q2hhbmdlZEJhc2VcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgVmlzaWJpbGl0eSBTZWFyY2hJbmZvVmlzaWJpbGl0eSB7Z2V0e3JldHVybiAhc3RyaW5nLklzTnVsbE9yRW1wdHkoU2VhcmNoSW5mbykgPyBWaXNpYmlsaXR5LlZpc2libGUgOiBWaXNpYmlsaXR5LkNvbGxhcHNlZDt9fVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIFNlYXJjaEluZm8geyBnZXQ7IHNldDsgfVxyXG5cclxuICAgICAgICBwdWJsaWMgVmlzaWJpbGl0eSBDb250ZW50VmlzaWJpbGl0eSB7Z2V0e3JldHVybiBDb250ZW50ICE9IG51bGwgPyBWaXNpYmlsaXR5LlZpc2libGUgOiBWaXNpYmlsaXR5LkNvbGxhcHNlZDt9fVxyXG5cclxuICAgICAgICBwdWJsaWMgTGVmdFBhbmVDb250ZW50IENvbnRlbnQgeyBnZXQ7IHNldDsgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IExlZnRQYW5lVmlld01vZGVsIEluaXRpYWwgPSBuZXcgTGVmdFBhbmVWaWV3TW9kZWwoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgU2VhcmNoSW5mbyA9IFwiRW50ZXIgYSBzZWFyY2ggc3RyaW5nLiBTdGFydCB3aXRoIGAgZm9yIGZ1bGwgdGV4dCBzZWFyY2ggcmVzdWx0cyBvbmx5LlwiXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBMZWZ0UGFuZVZpZXdNb2RlbCBGcm9tU2VhcmNoUmVzcG9uc2Uoc3RyaW5nIHNlYXJjaFN0cmluZywgSW5kZXhRdWVyeUhpdHNSZXNwb25zZTxJU2VhcmNoUmVzdWx0PiByZXNwb25zZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5FcnJvciAhPSBudWxsKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IExlZnRQYW5lVmlld01vZGVsKClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBTZWFyY2hJbmZvID0gcmVzcG9uc2UuRXJyb3JcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoKGdsb2JhbDo6QnJpZGdlLlNjcmlwdC5Ub1RlbXAoXCJrZXkyXCIscmVzcG9uc2UuUmVzdWx0KSE9bnVsbD9nbG9iYWw6OkJyaWRnZS5TY3JpcHQuRnJvbVRlbXA8SW5kZXhRdWVyeUhpdHM8SVNlYXJjaFJlc3VsdD4+KFwia2V5MlwiKS5IaXRzOihMaXN0PElTZWFyY2hSZXN1bHQ+KW51bGwpID09IG51bGwgfHwgcmVzcG9uc2UuUmVzdWx0LkhpdHMuQ291bnQgPT0gMClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBMZWZ0UGFuZVZpZXdNb2RlbCgpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgU2VhcmNoSW5mbyA9IHN0cmluZy5Gb3JtYXQoXCJObyByZXN1bHRzIGZvdW5kLlwiKSAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gcmVzcG9uc2UuUmVzdWx0O1xyXG4gICAgICAgICAgICBib29sIGlzRGVmaW5pdGlvbnNSZXN1bHQgPSByZXN1bHQuSGl0c1swXS5EZWZpbml0aW9uICE9IG51bGw7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTGVmdFBhbmVWaWV3TW9kZWwoKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBDb250ZW50ID0gaXNEZWZpbml0aW9uc1Jlc3VsdCA/XHJcbiAgICAgICAgICAgICAgICAgICAgKExlZnRQYW5lQ29udGVudCluZXcgUHJvamVjdFJlc3VsdHNWaWV3TW9kZWwoc2VhcmNoU3RyaW5nLCByZXNwb25zZSkgOlxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBDYXRlZ29yaXplZFNlYXJjaFJlc3VsdHNWaWV3TW9kZWwoc2VhcmNoU3RyaW5nLCByZXNwb25zZSksXHJcbiAgICAgICAgICAgICAgICBTZWFyY2hJbmZvID0gaXNEZWZpbml0aW9uc1Jlc3VsdCA/XHJcbiAgICAgICAgICAgICAgICAgICAgKHJlc3VsdC5IaXRzLkNvdW50IDwgcmVzdWx0LlRvdGFsID9cclxuc3RyaW5nLkZvcm1hdChcIkRpc3BsYXlpbmcgdG9wIHswfSByZXN1bHRzIG91dCBvZiB7MX06XCIscmVzdWx0LkhpdHMuQ291bnQscmVzdWx0LlRvdGFsKTpcclxuc3RyaW5nLkZvcm1hdChcInswfSByZXN1bHRzIGZvdW5kOlwiLHJlc3VsdC5IaXRzLkNvdW50KSlcclxuICAgICAgICAgICAgICAgICAgICA6IHN0cmluZy5FbXB0eVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXG4gICAgXG5wcml2YXRlIHN0cmluZyBfX1Byb3BlcnR5X19Jbml0aWFsaXplcl9fU2VhcmNoSW5mbz1udWxsO31cclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgQmluZGFibGVWYWx1ZTxUPiA6IE5vdGlmeVByb3BlcnR5Q2hhbmdlZEJhc2VcclxuICAgIHtcclxuICAgICAgICBwcml2YXRlIFQgdmFsdWU7XHJcblxyXG4gICAgICAgIHB1YmxpYyBUIFZhbHVlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgT25Qcm9wZXJ0eUNoYW5nZWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGFic3RyYWN0IGNsYXNzIE5vdGlmeVByb3BlcnR5Q2hhbmdlZEJhc2UgOiBJTm90aWZ5UHJvcGVydHlDaGFuZ2VkXHJcbiAgICB7XHJcbiAgICAgICAgcHJvdGVjdGVkIHZvaWQgT25Qcm9wZXJ0eUNoYW5nZWQoW0NhbGxlck1lbWJlck5hbWVdIHN0cmluZyBtZW1iZXJOYW1lID0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHByb3BlcnR5Q2hhbmdlZCE9bnVsbD9nbG9iYWw6OkJyaWRnZS5TY3JpcHQuRnJvbUxhbWJkYSgoKT0+cHJvcGVydHlDaGFuZ2VkLkludm9rZSh0aGlzLCBuZXcgUHJvcGVydHlDaGFuZ2VkRXZlbnRBcmdzKG1lbWJlck5hbWUpKSk6bnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZXZlbnQgUHJvcGVydHlDaGFuZ2VkRXZlbnRIYW5kbGVyIHByb3BlcnR5Q2hhbmdlZDtcclxuICAgICAgICBwdWJsaWMgZXZlbnQgUHJvcGVydHlDaGFuZ2VkRXZlbnRIYW5kbGVyIFByb3BlcnR5Q2hhbmdlZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYWRkXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5Q2hhbmdlZCArPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmVtb3ZlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5Q2hhbmdlZCAtPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgVmlld01vZGVsRGF0YUNvbnRleHQgOiBOb3RpZnlQcm9wZXJ0eUNoYW5nZWRCYXNlXHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSBMZWZ0UGFuZVZpZXdNb2RlbCBsZWZ0UGFuZTtcclxuXHJcbiAgICAgICAgcHVibGljIExlZnRQYW5lVmlld01vZGVsIExlZnRQYW5lXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxlZnRQYW5lO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8gSEFDSyB0byBmb3JjZSBmdWxsIHJlZnJlc2ggb2YgbGVmdCBwYW5lXHJcbiAgICAgICAgICAgICAgICAvL2lmICh2YWx1ZSAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgLy97XHJcbiAgICAgICAgICAgICAgICAvLyAgICBsZWZ0UGFuZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAvLyAgICBPblByb3BlcnR5Q2hhbmdlZCgpO1xyXG4gICAgICAgICAgICAgICAgLy99XHJcblxyXG4gICAgICAgICAgICAgICAgbGVmdFBhbmUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIE9uUHJvcGVydHlDaGFuZ2VkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIEluaXRpYWxpemUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgTGVmdFBhbmUgPSBMZWZ0UGFuZVZpZXdNb2RlbC5Jbml0aWFsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW0uV2luZG93cztcclxudXNpbmcgQnJpZGdlO1xyXG51c2luZyBCcmlkZ2UuSHRtbDU7XHJcbnVzaW5nIEdyYW51bGFyLlByZXNlbnRhdGlvbi5XZWI7XHJcblxyXG5uYW1lc3BhY2UgQ29kZXguVmlld1xyXG57XHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBFZGl0b3JIb3N0Q29udHJvbCA6IEZyYW1ld29ya0VsZW1lbnQsIElIdG1sRWxlbWVudEhvc3RcclxuICAgIHtcclxuICAgICAgICBwcml2YXRlIEhUTUxFbGVtZW50IG1faHRtbEVsZW1lbnQ7XHJcbiAgICAgICAgLy9wcml2YXRlIExpc3Q8SFRNTEVsZW1lbnQ+IG1fYXJyYW5nZWRFbGVtZW50cyA9IG5ldyBMaXN0PEhUTUxFbGVtZW50PigpO1xyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBTZXRSZW5kZXJFbGVtZW50KEhUTUxFbGVtZW50IGh0bWxFbGVtZW50KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbV9odG1sRWxlbWVudCA9IGh0bWxFbGVtZW50O1xyXG4gICAgICAgICAgICBtX2h0bWxFbGVtZW50LlRleHRDb250ZW50ID0gXCJIZWxsbyBXb3JsZFwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcbnVzaW5nIFN5c3RlbS5XaW5kb3dzO1xyXG51c2luZyBTeXN0ZW0uV2luZG93cy5NYXJrdXA7XHJcbiNpZiBHUkFOVUxBUlxyXG51c2luZyBJU2VydmljZVByb3ZpZGVyID0gU3lzdGVtLldpbmRvd3MuTWFya3VwLkluaXRpYWxpemVDb250ZXh0O1xyXG4jZW5kaWZcclxuXHJcbm5hbWVzcGFjZSBDb2RleC5WaWV3XHJcbntcclxuICAgIHB1YmxpYyBzdGF0aWMgY2xhc3MgR3JhbnVsYXJFeHRlbnNpb25zXHJcbiAgICB7XHJcbiNpZiBHUkFOVUxBUlxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgSVByb3BlcnR5UGF0aEVsZW1lbnQgQXNUcmlnZ2VyUHJvcGVydHkodGhpcyBEZXBlbmRlbmN5UHJvcGVydHkgZGVwZW5kZW5jeVByb3BlcnR5KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBEZXBlbmRlbmN5UHJvcGVydHlQYXRoRWxlbWVudChkZXBlbmRlbmN5UHJvcGVydHkpO1xyXG4gICAgICAgIH1cclxuI2Vsc2VcclxuICAgICAgICBwdWJsaWMgc3RhdGljIERlcGVuZGVuY3lQcm9wZXJ0eSBBc1RyaWdnZXJQcm9wZXJ0eSh0aGlzIERlcGVuZGVuY3lQcm9wZXJ0eSBkZXBlbmRlbmN5UHJvcGVydHkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gZGVwZW5kZW5jeVByb3BlcnR5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvL3B1YmxpYyBzdGF0aWMgVHlwZSBHZXRNYXJrdXBUYXJnZXRUeXBlKHRoaXMgSVNlcnZpY2VQcm92aWRlciBwcm92aWRlcilcclxuICAgICAgICAvL3tcclxuICAgICAgICAvLyAgICB2YXIgdGFyZ2V0UHJvdmlkZXIgPSAoSVByb3ZpZGVWYWx1ZVRhcmdldClwcm92aWRlci5HZXRTZXJ2aWNlKHR5cGVvZigpKVxyXG4gICAgICAgIC8vfVxyXG4jZW5kaWZcclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBUcmlnZ2VyIFdpdGhTZXR0ZXJzKHRoaXMgVHJpZ2dlciB0cmlnZ2VyLCBwYXJhbXMgU2V0dGVyW10gc2V0dGVycylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvcmVhY2ggKHZhciBzZXR0ZXIgaW4gc2V0dGVycylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdHJpZ2dlci5TZXR0ZXJzLkFkZChzZXR0ZXIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJpZ2dlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG51c2luZyBTeXN0ZW0uV2luZG93cztcclxudXNpbmcgU3lzdGVtLldpbmRvd3MuQ29udHJvbHM7XHJcbnVzaW5nIFN5c3RlbS5XaW5kb3dzLkRhdGE7XHJcbnVzaW5nIFN5c3RlbS5XaW5kb3dzLkRvY3VtZW50cztcclxudXNpbmcgU3lzdGVtLldpbmRvd3MuSW5wdXQ7XHJcbnVzaW5nIFN5c3RlbS5XaW5kb3dzLk1lZGlhO1xyXG51c2luZyBTeXN0ZW0uV2luZG93cy5NZWRpYS5JbWFnaW5nO1xyXG51c2luZyBTeXN0ZW0uV2luZG93cy5OYXZpZ2F0aW9uO1xyXG51c2luZyBTeXN0ZW0uV2luZG93cy5TaGFwZXM7XHJcblxyXG5uYW1lc3BhY2UgQ29kZXguVmlld1xyXG57XHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8gSW50ZXJhY3Rpb24gbG9naWMgZm9yIExlZnRQYW5lLnhhbWxcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBMZWZ0UGFuZVZpZXcgOiBVc2VyQ29udHJvbFxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBMZWZ0UGFuZVZpZXcoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZUNvbXBvbmVudCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBDb2RleC5TZGsuU2VhcmNoO1xyXG51c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmc7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcbnVzaW5nIFN5c3RlbS5XaW5kb3dzO1xyXG51c2luZyBTeXN0ZW0uV2luZG93cy5Db250cm9scztcclxudXNpbmcgU3lzdGVtLldpbmRvd3MuRGF0YTtcclxudXNpbmcgU3lzdGVtLldpbmRvd3MuRG9jdW1lbnRzO1xyXG51c2luZyBTeXN0ZW0uV2luZG93cy5JbnB1dDtcclxudXNpbmcgU3lzdGVtLldpbmRvd3MuTWVkaWE7XHJcbnVzaW5nIFN5c3RlbS5XaW5kb3dzLk1lZGlhLkltYWdpbmc7XHJcbnVzaW5nIFN5c3RlbS5XaW5kb3dzLk5hdmlnYXRpb247XHJcbnVzaW5nIFN5c3RlbS5XaW5kb3dzLlNoYXBlcztcclxuXHJcbm5hbWVzcGFjZSBDb2RleC5WaWV3XHJcbntcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyBJbnRlcmFjdGlvbiBsb2dpYyBmb3IgTWFpbldpbmRvdy54YW1sXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgTWFpbldpbmRvdyA6IFdpbmRvd1xyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBJQ29kZXggQ29kZXhTZXJ2aWNlIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG5cclxuICAgICAgICBwcml2YXRlIFZpZXdNb2RlbERhdGFDb250ZXh0IFZpZXdNb2RlbCA9IG5ldyBWaWV3TW9kZWxEYXRhQ29udGV4dCgpO1xyXG5cclxuICAgICAgICBwdWJsaWMgTWFpbldpbmRvdygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplQ29tcG9uZW50KCk7XHJcbiAgICAgICAgICAgIHRoaXMuRGF0YUNvbnRleHQgPSBWaWV3TW9kZWw7XHJcbiAgICAgICAgICAgIFZpZXdNb2RlbC5Jbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgIFNlYXJjaEJveC5UZXh0ID0gXCJpeGVkb2NcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdm9pZCBCdXR0b25fQ2xpY2sob2JqZWN0IHNlbmRlciwgUm91dGVkRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIEdyaWRfTG9hZGVkKG9iamVjdCBzZW5kZXIsIFJvdXRlZEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQ29uc29sZS5Xcml0ZUxpbmUoXCJHcmlkX0xvYWRlZFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBhc3luYyB2b2lkIFNlYXJjaFRleHRDaGFuZ2VkKG9iamVjdCBzZW5kZXIsIFRleHRDaGFuZ2VkRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgc2VhcmNoU3RyaW5nID0gU2VhcmNoQm94LlRleHQ7XHJcbiAgICAgICAgICAgIHNlYXJjaFN0cmluZyA9IHNlYXJjaFN0cmluZy5UcmltKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoc2VhcmNoU3RyaW5nLkxlbmd0aCA8IDMpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFZpZXdNb2RlbC5MZWZ0UGFuZSA9IG5ldyBMZWZ0UGFuZVZpZXdNb2RlbCgpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgU2VhcmNoSW5mbyA9IFwiRW50ZXIgYXQgbGVhc3QgMyBjaGFyYWN0ZXJzLlwiXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSBhd2FpdCBDb2RleFNlcnZpY2UuU2VhcmNoQXN5bmMobmV3IFNlYXJjaEFyZ3VtZW50cygpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFNlYXJjaFN0cmluZyA9IHNlYXJjaFN0cmluZ1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIFZpZXdNb2RlbC5MZWZ0UGFuZSA9IExlZnRQYW5lVmlld01vZGVsLkZyb21TZWFyY2hSZXNwb25zZShzZWFyY2hTdHJpbmcsIHJlc3BvbnNlKTtcclxuICAgICAgICB9XHJcblxuICAgIFxucHJpdmF0ZSBJQ29kZXggX19Qcm9wZXJ0eV9fSW5pdGlhbGl6ZXJfX0NvZGV4U2VydmljZT1Db2RleFByb3ZpZGVyLkluc3RhbmNlO31cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLldpbmRvd3M7XHJcbnVzaW5nIFN5c3RlbS5XaW5kb3dzLkNvbnRyb2xzO1xyXG51c2luZyBTeXN0ZW0uV2luZG93cy5NZWRpYTtcclxuXHJcbm5hbWVzcGFjZSBDb2RleC5WaWV3XHJcbntcclxuICAgIHB1YmxpYyBzdGF0aWMgY2xhc3MgU3R5bGVzXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBCcnVzaCBHZXRNb3VzZU92ZXJCYWNrZ3JvdW5kKERlcGVuZGVuY3lPYmplY3Qgb2JqKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIChCcnVzaClvYmouR2V0VmFsdWUoTW91c2VPdmVyQmFja2dyb3VuZFByb3BlcnR5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBTZXRNb3VzZU92ZXJCYWNrZ3JvdW5kKERlcGVuZGVuY3lPYmplY3Qgb2JqLCBCcnVzaCB2YWx1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG9iai5TZXRWYWx1ZShNb3VzZU92ZXJCYWNrZ3JvdW5kUHJvcGVydHksIHZhbHVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFVzaW5nIGEgRGVwZW5kZW5jeVByb3BlcnR5IGFzIHRoZSBiYWNraW5nIHN0b3JlIGZvciBNb3VzZU92ZXJCYWNrZ3JvdW5kLiAgVGhpcyBlbmFibGVzIGFuaW1hdGlvbiwgc3R5bGluZywgYmluZGluZywgZXRjLi4uXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyByZWFkb25seSBEZXBlbmRlbmN5UHJvcGVydHkgTW91c2VPdmVyQmFja2dyb3VuZFByb3BlcnR5ID1cclxuICAgICAgICAgICAgRGVwZW5kZW5jeVByb3BlcnR5LlJlZ2lzdGVyQXR0YWNoZWQoXCJNb3VzZU92ZXJCYWNrZ3JvdW5kXCIsIHR5cGVvZihCcnVzaCksIHR5cGVvZihTdHlsZXMpLCBuZXcgUHJvcGVydHlNZXRhZGF0YShCcnVzaGVzLlRyYW5zcGFyZW50KSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBib29sIEdldElzTW91c2VPdmVySGVhZGVyKERlcGVuZGVuY3lPYmplY3Qgb2JqKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIChib29sKW9iai5HZXRWYWx1ZShJc01vdXNlT3ZlckhlYWRlclByb3BlcnR5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBTZXRJc01vdXNlT3ZlckhlYWRlcihEZXBlbmRlbmN5T2JqZWN0IG9iaiwgYm9vbCB2YWx1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG9iai5TZXRWYWx1ZShJc01vdXNlT3ZlckhlYWRlclByb3BlcnR5LCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBVc2luZyBhIERlcGVuZGVuY3lQcm9wZXJ0eSBhcyB0aGUgYmFja2luZyBzdG9yZSBmb3IgSXNNb3VzZU92ZXJIZWFkZXIuICBUaGlzIGVuYWJsZXMgYW5pbWF0aW9uLCBzdHlsaW5nLCBiaW5kaW5nLCBldGMuLi5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IERlcGVuZGVuY3lQcm9wZXJ0eSBJc01vdXNlT3ZlckhlYWRlclByb3BlcnR5ID1cclxuICAgICAgICAgICAgRGVwZW5kZW5jeVByb3BlcnR5LlJlZ2lzdGVyQXR0YWNoZWQoXCJJc01vdXNlT3ZlckhlYWRlclwiLCB0eXBlb2YoYm9vbCksIHR5cGVvZihTdHlsZXMpLCBuZXcgUHJvcGVydHlNZXRhZGF0YShmYWxzZSkpO1xyXG5cclxuXHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBJbml0aWFsaXplKClcclxuICAgICAgICB7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG5cclxubmFtZXNwYWNlIENvZGV4XHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBFbnRpdHlCYXNlIDogSVNlcmlhbGl6YWJsZUVudGl0eVxyXG4gICAge1xyXG4gICAgICAgIHByb3RlY3RlZCB2aXJ0dWFsIHZvaWQgSW5pdGlhbGl6ZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHZpcnR1YWwgdm9pZCBPblNlcmlhbGl6aW5nQ29yZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHZpcnR1YWwgdm9pZCBPbkRlc2VyaWFsaXplZENvcmUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZvaWQgSVNlcmlhbGl6YWJsZUVudGl0eS5PblNlcmlhbGl6aW5nKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIE9uU2VyaWFsaXppbmdDb3JlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2b2lkIElTZXJpYWxpemFibGVFbnRpdHkuT25EZXNlcmlhbGl6ZWQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgT25EZXNlcmlhbGl6ZWRDb3JlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbnRlcmZhY2UgSVNlcmlhbGl6YWJsZUVudGl0eVxyXG4gICAge1xyXG4gICAgICAgIHZvaWQgT25EZXNlcmlhbGl6ZWQoKTtcclxuXHJcbiAgICAgICAgdm9pZCBPblNlcmlhbGl6aW5nKCk7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsInVzaW5nIEJyaWRnZS5IdG1sNTtcclxudXNpbmcgQ29kZXguT2JqZWN0TW9kZWw7XHJcbnVzaW5nIENvZGV4LlNkay5TZWFyY2g7XHJcbnVzaW5nIE5ld3RvbnNvZnQuSnNvbjtcclxudXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIENvZGV4LlZpZXcuV2ViXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBXZWJBcGlDb2RleCA6IElDb2RleFxyXG4gICAge1xyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgc3RyaW5nIGJhc2VVcmw7XHJcblxyXG4gICAgICAgIHB1YmxpYyBXZWJBcGlDb2RleChzdHJpbmcgYmFzZVVybClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFzZVVybCA9IGJhc2VVcmwuRW5kc1dpdGgoXCIvXCIpID8gYmFzZVVybCA6IGJhc2VVcmwgKyAnLyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgVGFzazxJbmRleFF1ZXJ5SGl0c1Jlc3BvbnNlPElSZWZlcmVuY2VTZWFyY2hNb2RlbD4+IEZpbmRBbGxSZWZlcmVuY2VzQXN5bmMoRmluZEFsbFJlZmVyZW5jZXNBcmd1bWVudHMgYXJndW1lbnRzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIFBvc3RBc3luYzxJbmRleFF1ZXJ5SGl0c1Jlc3BvbnNlPFJlZmVyZW5jZVNlYXJjaE1vZGVsPiwgSW5kZXhRdWVyeUhpdHNSZXNwb25zZTxJUmVmZXJlbmNlU2VhcmNoTW9kZWw+PihDb2RleFNlcnZpY2VNZXRob2QuRmluZEFsbFJlZnMsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgVGFzazxJbmRleFF1ZXJ5SGl0c1Jlc3BvbnNlPElEZWZpbml0aW9uU2VhcmNoTW9kZWw+PiBGaW5kRGVmaW5pdGlvbkFzeW5jKEZpbmREZWZpbml0aW9uQXJndW1lbnRzIGFyZ3VtZW50cylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBQb3N0QXN5bmM8SW5kZXhRdWVyeUhpdHNSZXNwb25zZTxEZWZpbml0aW9uU2VhcmNoTW9kZWw+LCBJbmRleFF1ZXJ5SGl0c1Jlc3BvbnNlPElEZWZpbml0aW9uU2VhcmNoTW9kZWw+PihDb2RleFNlcnZpY2VNZXRob2QuRmluZERlZiwgYXJndW1lbnRzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBUYXNrPEluZGV4UXVlcnlIaXRzUmVzcG9uc2U8SVJlZmVyZW5jZVNlYXJjaE1vZGVsPj4gRmluZERlZmluaXRpb25Mb2NhdGlvbkFzeW5jKEZpbmREZWZpbml0aW9uTG9jYXRpb25Bcmd1bWVudHMgYXJndW1lbnRzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIFBvc3RBc3luYzxJbmRleFF1ZXJ5SGl0c1Jlc3BvbnNlPFJlZmVyZW5jZVNlYXJjaE1vZGVsPiwgSW5kZXhRdWVyeUhpdHNSZXNwb25zZTxJUmVmZXJlbmNlU2VhcmNoTW9kZWw+PihDb2RleFNlcnZpY2VNZXRob2QuRmluZERlZkxvY2F0aW9uLCBhcmd1bWVudHMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIFRhc2s8SW5kZXhRdWVyeVJlc3BvbnNlPElCb3VuZFNvdXJjZVNlYXJjaE1vZGVsPj4gR2V0U291cmNlQXN5bmMoR2V0U291cmNlQXJndW1lbnRzIGFyZ3VtZW50cylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBQb3N0QXN5bmM8SW5kZXhRdWVyeVJlc3BvbnNlPEJvdW5kU291cmNlU2VhcmNoTW9kZWw+LCBJbmRleFF1ZXJ5UmVzcG9uc2U8SUJvdW5kU291cmNlU2VhcmNoTW9kZWw+PihDb2RleFNlcnZpY2VNZXRob2QuR2V0U291cmNlLCBhcmd1bWVudHMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIFRhc2s8SW5kZXhRdWVyeUhpdHNSZXNwb25zZTxJU2VhcmNoUmVzdWx0Pj4gU2VhcmNoQXN5bmMoU2VhcmNoQXJndW1lbnRzIGFyZ3VtZW50cylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBQb3N0QXN5bmM8SW5kZXhRdWVyeUhpdHNSZXNwb25zZTxTZWFyY2hSZXN1bHQ+LCBJbmRleFF1ZXJ5SGl0c1Jlc3BvbnNlPElTZWFyY2hSZXN1bHQ+PihDb2RleFNlcnZpY2VNZXRob2QuU2VhcmNoLCBhcmd1bWVudHMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBUYXNrPFRSZXN1bHQ+IFBvc3RBc3luYzxUU2VyaWFsaXplZFJlc3VsdCwgVFJlc3VsdD4oXHJcbiAgICAgICAgICAgIENvZGV4U2VydmljZU1ldGhvZCBzZWFyY2hNZXRob2QsXHJcbiAgICAgICAgICAgIG9iamVjdCBhcmd1bWVudHMpXHJcbiAgICAgICAgICAgIHdoZXJlIFRSZXN1bHQgOiBJbmRleFF1ZXJ5UmVzcG9uc2UsIG5ldygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBUYXNrQ29tcGxldGlvblNvdXJjZTxUUmVzdWx0PiB0Y3MgPSBuZXcgVGFza0NvbXBsZXRpb25Tb3VyY2U8VFJlc3VsdD4oKTtcclxuXHJcbiAgICAgICAgICAgIHZhciB1cmwgPSBiYXNlVXJsICsgc2VhcmNoTWV0aG9kLlRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIENvbnNvbGUuV3JpdGVMaW5lKHVybCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgYXJndW1lbnRzRGF0YSA9IEpzb25Db252ZXJ0LlNlcmlhbGl6ZU9iamVjdChhcmd1bWVudHMpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGNvbmZpZyA9IG5ldyBSZXR5cGVkLmpxdWVyeS5KUXVlcnlBamF4U2V0dGluZ3NcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXJsID0gdXJsLFxyXG4gICAgICAgICAgICAgICAgdHlwZSA9IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YSA9IGFyZ3VtZW50c0RhdGEsXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gU2V0IHRoZSBjb250ZW50VHlwZSBvZiB0aGUgcmVxdWVzdFxyXG4gICAgICAgICAgICAgICAgY29udGVudFR5cGUgPSBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzID0gKGRhdGEsIHRleHRTdGF0dXMsIHN1Y2Nlc3NSZXF1ZXN0KSA9PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRjcy5TZXRSZXN1bHQoSnNvbkNvbnZlcnQuRGVzZXJpYWxpemVPYmplY3Q8VFNlcmlhbGl6ZWRSZXN1bHQ+KHN1Y2Nlc3NSZXF1ZXN0LnJlc3BvbnNlVGV4dCkuQXM8VFJlc3VsdD4oKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgIGVycm9yID0gKGVycm9yUmVxdWVzdCwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pID0+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGNzLlNldFJlc3VsdChuZXcgVFJlc3VsdCgpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBFcnJvciA9IHN0cmluZy5Gb3JtYXQoXCJFcnJvcjogezB9XCIsZXJyb3JUaHJvd24pICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBSZXR5cGVkLmpxdWVyeS5qUXVlcnkuYWpheChjb25maWcpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRjcy5UYXNrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXQp9Cg==
